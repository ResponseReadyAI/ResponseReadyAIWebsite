# Verbal Consent Script — Response Ready AI

**Purpose:** Script read by a human agent or AI voice agent during an inbound call before sending any SMS to the caller. Captures verbal opt-in for SMS messaging from +1 (833) 229-2529. Satisfies Twilio toll-free verification reason code 30511.

**Number:** +1 (833) 229-2529
**Brand:** Response Ready AI

---

## Full Script (read verbatim)

> "Before we wrap up, would it be okay if Response Ready AI sends you occasional text messages at this phone number? These would include things like follow-ups from today's call, appointment reminders and confirmations, account or service notifications, and replies if you text us back. Messages are only sent when there's something relevant — typically just a handful per month. Message and data rates may apply. You can reply STOP at any time to opt out, or HELP for assistance. Do I have your permission to text you at this number?"

**Capture a clear verbal "yes" before proceeding.** If the caller says no, do not send any SMS to that number.

---

## What to log after consent is given

For each opt-in, store the following (Twilio and carriers may request proof):

- Full phone number (E.164 format, e.g., +15551234567)
- Date and timestamp of consent (UTC)
- Method of consent: "verbal, inbound call"
- The exact script that was read
- Name of the agent (human or AI persona) who took the consent
- Call recording ID or transcript reference, if available

Retain for a minimum of 4 years.

---

## Shortened version (for follow-up or mid-call use)

> "Is it okay if we text you at this number with follow-ups and reminders? Reply STOP anytime to opt out, and message and data rates may apply."

---

## First SMS after consent (required compliance message)

The very first text sent after verbal opt-in should re-confirm the program and include opt-out language:

> "Response Ready AI: Thanks for opting in. You'll receive occasional follow-ups, reminders, and replies from us. Msg & data rates may apply. Reply HELP for help, STOP to cancel."

---

## STOP / HELP auto-responses (required)

**STOP reply:**
> "You have been unsubscribed from Response Ready AI messages and will not receive any more texts. Reply START to opt back in."

**HELP reply:**
> "Response Ready AI: For help, email support@responseready.ai or visit responseready.ai. Reply STOP to unsubscribe."

---

## Notes

- Do not pre-check or imply consent. The caller must affirmatively agree.
- Consent is specific to Response Ready AI. Do not share the opt-in with other brands or partners.
- If you ever use this number on behalf of your own clients' businesses (ISV / reseller model), each end-business needs its own consent capture and this verification would need to reflect that. The script above assumes the number is used by Response Ready AI directly.
