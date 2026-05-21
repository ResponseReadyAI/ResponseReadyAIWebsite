import { NextRequest, NextResponse } from "next/server";
import { isValidUSPhone, formatE164 } from "@/lib/phone";

// Simple in-memory rate limiting: max 3 requests per IP per hour
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return true;
  }

  if (entry.count >= 3) {
    return false;
  }

  entry.count += 1;
  return true;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { success: false, error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: { name?: string; phone?: string; website?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, phone, website } = body;

  // Honeypot check
  if (website) {
    return NextResponse.json({ success: true });
  }

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return NextResponse.json(
      { success: false, error: "Name is required." },
      { status: 400 }
    );
  }

  if (!phone || !isValidUSPhone(phone)) {
    return NextResponse.json(
      {
        success: false,
        error: "Please enter a valid 10-digit US phone number.",
      },
      { status: 400 }
    );
  }

  const e164Phone = formatE164(phone);

  const retellRes = await fetch("https://api.retellai.com/v2/create-phone-call", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.RETELL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      agent_id: process.env.RETELL_AGENT_ID,
      from_number: process.env.RETELL_FROM_NUMBER,
      to_number: e164Phone,
      metadata: {
        visitor_name: name.trim(),
        source: "website_voice_demo",
      },
    }),
  });

  if (!retellRes.ok) {
    const err = await retellRes.text();
    console.error("Retell API error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to initiate call. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
