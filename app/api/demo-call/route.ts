import { NextRequest, NextResponse } from "next/server";
import { isValidUSPhone, formatE164 } from "@/lib/phone";

const AGENT_MAP: Record<string, string> = {
  medspa:         "agent_16bb56ccf9805c2ad97f12ecfd",
  roofing:        "agent_ad86e84bd7d52f336187157014",
  plumber:        "agent_9d4dbf88e4b2f296ca94283e31",
  auto_detailing: "agent_66b4bdccb18f0c5ac87821b104",
  auto_dealer:    "agent_fc07f8a7a4253e8ac19005d2e3",
  hvac:           "agent_40f8738f158e2cf2c80e4998c6",
  dentist:        "agent_eb66b3d421be151198b9a402aa",
  town_offices:   "agent_bf691bce50ad2fd121ece77034",
  boutique:       "agent_4aff35aed2f0c994cd3a34fb41",
  contractor:     "agent_19fd27320014bded2e20033da1",
};

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

  let body: { name?: string; phone?: string; website?: string; industry?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, phone, website, industry } = body;

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

  const normalizedIndustry = (industry ?? "").toLowerCase().trim();
  const agentId = AGENT_MAP[normalizedIndustry];

  if (!agentId) {
    return NextResponse.json(
      { success: false, error: "Please select a valid industry." },
      { status: 422 }
    );
  }

  const retellRes = await fetch("https://api.retellai.com/v2/create-phone-call", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.RETELL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from_number: process.env.RETELL_FROM_NUMBER,
      to_number: e164Phone,
      override_agent_id: agentId,
      retell_llm_dynamic_variables: {
        prospect_name: name.trim(),
      },
    }),
  });

  if (!retellRes.ok) {
    const err = await retellRes.text();
    console.error("Retell API error:", retellRes.status, err);
    return NextResponse.json(
      { success: false, error: `Retell error ${retellRes.status}: ${err}` },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
