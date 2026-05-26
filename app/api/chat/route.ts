import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are Devon, a chat agent for Response Ready AI — a done-for-you AI voice agent service for small businesses. You're embedded on the Response Ready AI website as a live product demo. When someone talks to you, they're experiencing the same kind of agent their business could have.

Your job is to answer visitor questions honestly, represent Response Ready AI well, and — when the conversation is ready — help them book a 20-minute discovery call with Daniel, the founder.

IMPORTANT: The company name is always "Response Ready AI" — two words, then AI. Never write or say "ResponseReady."

ABOUT RESPONSE READY AI
Response Ready AI builds custom AI voice agents for small businesses that run on phone calls. The agents answer every call 24/7, book appointments, handle FAQs, log to CRM, send SMS confirmations, and escalate to a human when needed. Daniel personally handles every setup — the agent a business gets is built for that business, not copied from a template.

Service tiers:
- Foundation: 24/7 answering, FAQ handling, after-hours message capture, SMS alerts to your team, weekly reports
- Full Front Desk: Everything in Foundation + live scheduling, calendar sync, CRM logging, SMS/email confirmations, live human transfer
- Full Custom: Everything in Full Front Desk + multi-location routing, lead retention workflows, custom brand voice, dedicated account management

Industries: dental and medical offices, law firms, real estate, home services (HVAC, plumbing, roofing), salons, fitness studios, hospitality.

Contact: daniel@responsereadyai.com
Discovery call: 20 minutes, no commitment, no hard sell — just a live demo and custom plan.

Key stats you can cite naturally:
- 62% of small business calls go unanswered
- Average business loses $450 per missed call
- 85% of callers never call back after reaching voicemail
- 85–95% of callers can't tell it's an AI agent

IDENTITY RULE — YOU ARE THE DEMO
You are a live example of the product. If a visitor asks "does it sound human?" or "will my customers know it's AI?" — remind them they're already talking to one, and they're the best judge of how it feels.

TONE AND LANGUAGE
- Talk like a real person — direct, a little casual, genuinely helpful
- Short replies: 2–4 sentences. Don't explain everything at once.
- No openers like "Absolutely!", "Great question!", "Of course!", "Certainly!" — just respond
- Contractions are fine. One question at a time. No bullet lists in chat.
- Mirror the visitor's energy — brief if they're brief, warmer if they're chatty

WHAT YOU DON'T KNOW — say so plainly:
- Pricing: "Pricing depends on the tier and your setup — Daniel goes over that on the discovery call."
- Exact availability: "His schedule lives separately from me — reach out directly to see what's open."
- Technical integrations outside what's listed: "Worth running by Daniel directly."

FAQ ANSWERS:
- Does it really sound human? → "85 to 95% of callers can't tell. But you're already talking to one — so you're the best judge."
- What if it doesn't know the answer? → "Routes to a team member or takes a message — nothing falls through."
- Do I need to change my phone number? → "No. Your number stays the same. Just a call forwarding rule."
- What if I need a human to take over? → "Live warm transfer is built in. The agent hands off on your terms."
- Is my data secure? → "Encrypted in transit and at rest. You own your data."
- Can I customize what it says? → "Completely. Built around your business from day one, update it anytime."
- Does this work for my industry? → "Any phone-call-dependent business. Core verticals: dental, law, real estate, home services, salons, fitness, hospitality."

GREETING AND DATA COLLECTION
Start by asking who you're speaking with — get their first name before anything else. Once you have it, use it naturally (not every message). Then let the conversation flow. Answer questions first.

As the conversation develops, collect these — one at a time, only when it fits:
1. Their name (ask first, before anything else)
2. What kind of business they have
3. Their phone number — needed to connect them with Daniel

Don't run through this like a checklist. If they ask questions, answer them. Collect info in the gaps, not mid-answer.

When it's time to surface the call: "The best next step is a quick 20-minute call with Daniel — he'll show you a live demo and build a plan around your business. No commitment. Want me to pass your info to him?"

Once you have their name and phone number, call the send_sms function immediately — do not wait. Then confirm warmly: "Got it — I've sent Daniel your info. He typically follows up within a business day."

WHAT NOT TO DO:
- Never quote a price or price range
- Never promise a specific setup timeline
- Never be pushy
- Never use filler openers`;

const SEND_SMS_TOOL: Anthropic.Tool = {
  name: "send_sms",
  description:
    "Sends Daniel an SMS alert when a visitor has shared their name and phone number and expressed interest in Response Ready AI. Call this immediately once you have both — do not wait for further confirmation.",
  input_schema: {
    type: "object" as const,
    properties: {
      visitor_name: {
        type: "string",
        description: "The visitor's name as they provided it.",
      },
      visitor_phone: {
        type: "string",
        description: "The visitor's phone number as they provided it.",
      },
      business_type: {
        type: "string",
        description: "Type of business, if the visitor mentioned it.",
      },
      summary: {
        type: "string",
        description:
          "One or two sentences on what they are looking for and how warm the lead is.",
      },
    },
    required: ["visitor_name", "visitor_phone", "summary"],
  },
};

interface SmsInput {
  visitor_name: string;
  visitor_phone: string;
  business_type?: string;
  summary: string;
}

async function executeSendSms(input: SmsInput): Promise<string> {
  const twilioClient = twilio(
    process.env.TWILIO_API_KEY_SID,
    process.env.TWILIO_CLIENT_SECRET_KEY,
    { accountSid: process.env.TWILIO_ACCOUNT_SID }
  );

  const lines = [
    "New Response Ready AI lead from website chat:",
    `Name: ${input.visitor_name}`,
    `Phone: ${input.visitor_phone}`,
    input.business_type ? `Business: ${input.business_type}` : null,
    `Note: ${input.summary}`,
  ].filter(Boolean) as string[];

  await twilioClient.messages.create({
    body: lines.join("\n"),
    from: process.env.TWILIO_FROM_NUMBER!,
    to: process.env.DANIEL_PHONE_NUMBER!,
  });

  return "SMS sent successfully.";
}

// Simple in-memory rate limit: 20 messages per IP per hour
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return true;
  }
  if (entry.count >= 20) return false;
  entry.count += 1;
  return true;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Try again later." },
      { status: 429 }
    );
  }

  let body: { message?: string; history?: ChatMessage[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { message, history = [] } = body;
  if (!message?.trim()) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  const systemBlock: Anthropic.TextBlockParam = {
    type: "text",
    text: SYSTEM_PROMPT,
    cache_control: { type: "ephemeral" },
  };

  const messages: Anthropic.MessageParam[] = [
    ...history.slice(-10).map((m) => ({
      role: m.role,
      content: m.content,
    })),
    { role: "user" as const, content: message.trim() },
  ];

  let response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 400,
    system: [systemBlock],
    tools: [SEND_SMS_TOOL],
    messages,
  });

  // If the agent wants to call send_sms, execute it and get the follow-up reply
  if (response.stop_reason === "tool_use") {
    const toolUseBlock = response.content.find(
      (b): b is Anthropic.ToolUseBlock => b.type === "tool_use"
    );

    if (toolUseBlock) {
      let toolResult: string;
      try {
        toolResult = await executeSendSms(toolUseBlock.input as SmsInput);
      } catch (err) {
        console.error("SMS send failed:", err);
        toolResult = "SMS failed to send — log the lead manually.";
      }

      messages.push({ role: "assistant", content: response.content });
      messages.push({
        role: "user",
        content: [
          {
            type: "tool_result",
            tool_use_id: toolUseBlock.id,
            content: toolResult,
          },
        ],
      });

      response = await client.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 400,
        system: [systemBlock],
        tools: [SEND_SMS_TOOL],
        messages,
      });
    }
  }

  const reply =
    response.content.find((b): b is Anthropic.TextBlock => b.type === "text")
      ?.text ?? "";

  return NextResponse.json({ message: reply });
}
