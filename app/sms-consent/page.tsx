import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SMS Consent & Messaging Policy — ResponseReady AI",
  description:
    "How Response Ready AI obtains consent before sending SMS, our verbal opt-in script, and how to stop messages.",
  alternates: { canonical: "https://responsereadyai.com/sms-consent" },
};

export default function SmsConsentPage() {
  return (
    <>
      <Nav />

      {/* Page header */}
      <div className="relative overflow-hidden bg-[var(--color-primary)] pt-[120px] pb-16">
        <div
          className="pointer-events-none absolute left-1/2 top-[-200px] h-[800px] w-[800px] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(236,149,19,0.1) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[760px] px-6">
          <span className="mb-5 inline-block rounded-full border border-[rgba(236,149,19,0.2)] bg-[rgba(236,149,19,0.1)] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            Compliance
          </span>
          <h1 className="mb-4 text-[clamp(28px,5vw,48px)] font-black leading-none tracking-[-2px] text-[var(--color-bg)]">
            SMS Consent &amp; Messaging Policy
          </h1>
          <p className="text-sm text-[rgba(255,255,255,0.4)]">Last updated: April 17, 2026</p>
        </div>
      </div>

      {/* Document body */}
      <main className="py-18 pb-24 mx-auto max-w-[760px] px-6">
        {/* Notice box */}
        <div className="mb-10 rounded-xl border border-[rgba(236,149,19,0.25)] bg-[var(--color-accent-light)] px-6 py-5 text-[15px] leading-[1.7] text-[var(--color-dark-3)]">
          This page documents how Response Ready AI obtains consent before sending SMS messages,
          the exact verbal script used during inbound calls, and how recipients can opt out. It is
          published for transparency and to satisfy carrier and CTIA compliance requirements.
        </div>

        <div className="text-[16px] leading-[1.8] text-[var(--color-dark-3)] [&_a]:text-[var(--color-accent)] [&_a:hover]:underline [&_strong]:font-semibold [&_strong]:text-[var(--color-dark-2)]">

          <section>
            <h2 className="mb-4 mt-12 border-b border-[var(--color-gray-mid)] pb-3 text-[22px] font-black leading-tight tracking-[-0.5px] text-[var(--color-dark-2)] first:mt-0">
              Purpose
            </h2>
            <p className="mb-4">
              Response Ready AI sends text messages only to individuals who have explicitly
              consented to receive them. This page describes our opt-in process, the types of
              messages we send, and how to stop receiving messages at any time. It is publicly
              accessible so that carriers, compliance reviewers, and recipients can verify our
              practices.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-12 border-b border-[var(--color-gray-mid)] pb-3 text-[22px] font-black leading-tight tracking-[-0.5px] text-[var(--color-dark-2)]">
              Brand and Number
            </h2>
            <p className="mb-4"><strong>Brand:</strong> Response Ready AI</p>
            <p className="mb-4"><strong>SMS number:</strong> +1 (833) 229-2529</p>
          </section>

          <section>
            <h2 className="mb-4 mt-12 border-b border-[var(--color-gray-mid)] pb-3 text-[22px] font-black leading-tight tracking-[-0.5px] text-[var(--color-dark-2)]">
              How We Obtain Consent
            </h2>
            <p className="mb-4">
              We obtain verbal opt-in consent during inbound phone calls. When a caller reaches our
              AI voice agent or a human representative, the agent reads a disclosure before any SMS
              is sent. The caller must give a clear verbal "yes" before we add their number to our
              messaging list. If the caller says no, no SMS is sent to that number.
            </p>
            <p className="mb-4">
              Consent may also be obtained through our website or by a caller replying "START" to
              our number. In all cases, consent is specific to Response Ready AI — it is never
              shared with other brands or partners.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-12 border-b border-[var(--color-gray-mid)] pb-3 text-[22px] font-black leading-tight tracking-[-0.5px] text-[var(--color-dark-2)]">
              Full Verbal Consent Script
            </h2>
            <p className="mb-4">
              The following script is read verbatim before any SMS is sent to a new contact:
            </p>
            <blockquote className="my-5 rounded-r-xl border-l-4 border-[var(--color-accent)] bg-[var(--color-gray-light)] px-7 py-6 text-[16px] italic leading-[1.8] text-[var(--color-dark-2)]">
              "Just to confirm, can Response Ready AI text you at this number? Message and data
              rates may apply. Reply STOP anytime to opt out."
            </blockquote>
            <p className="mb-4">
              A clear verbal "yes" is required before proceeding. If the caller declines, no SMS is
              sent to that number.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-12 border-b border-[var(--color-gray-mid)] pb-3 text-[22px] font-black leading-tight tracking-[-0.5px] text-[var(--color-dark-2)]">
              Message Categories
            </h2>
            <p className="mb-4">After consent is given, we may send the following types of messages:</p>
            <ul className="mb-4 ml-6 list-disc space-y-2">
              <li>Post-call follow-ups</li>
              <li>Appointment reminders and confirmations</li>
              <li>Account and service notifications</li>
              <li>Two-way conversational replies (in response to a text you send us)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 mt-12 border-b border-[var(--color-gray-mid)] pb-3 text-[22px] font-black leading-tight tracking-[-0.5px] text-[var(--color-dark-2)]">
              Message Frequency
            </h2>
            <p className="mb-4">Occasional; typically only when there is something relevant to share.</p>
          </section>

          <section>
            <h2 className="mb-4 mt-12 border-b border-[var(--color-gray-mid)] pb-3 text-[22px] font-black leading-tight tracking-[-0.5px] text-[var(--color-dark-2)]">
              Cost Disclosure
            </h2>
            <p className="mb-4">Message and data rates may apply.</p>
          </section>

          <section>
            <h2 className="mb-4 mt-12 border-b border-[var(--color-gray-mid)] pb-3 text-[22px] font-black leading-tight tracking-[-0.5px] text-[var(--color-dark-2)]">
              Opt-Out Instructions
            </h2>
            <p className="mb-4">
              You can stop receiving messages at any time by replying <strong>STOP</strong> to any
              message from +1 (833) 229-2529. You may also email{" "}
              <a href="mailto:daniel@responsereadyai.com">daniel@responsereadyai.com</a> to request
              removal.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-12 border-b border-[var(--color-gray-mid)] pb-3 text-[22px] font-black leading-tight tracking-[-0.5px] text-[var(--color-dark-2)]">
              Help Instructions
            </h2>
            <p className="mb-4">
              Reply <strong>HELP</strong> to any message for assistance, or contact us at{" "}
              <a href="mailto:daniel@responsereadyai.com">daniel@responsereadyai.com</a>.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-12 border-b border-[var(--color-gray-mid)] pb-3 text-[22px] font-black leading-tight tracking-[-0.5px] text-[var(--color-dark-2)]">
              First-Message Confirmation Text
            </h2>
            <p className="mb-4">
              The first text sent after verbal opt-in re-confirms the program and includes opt-out
              language:
            </p>
            <blockquote className="my-5 rounded-r-xl border-l-4 border-[var(--color-accent)] bg-[var(--color-gray-light)] px-7 py-6 text-[16px] italic leading-[1.8] text-[var(--color-dark-2)]">
              "Response Ready AI: Thanks for opting in. You'll receive occasional follow-ups,
              reminders, and replies from us. Msg &amp; data rates may apply. Reply HELP for help,
              STOP to cancel."
            </blockquote>
          </section>

          <section>
            <h2 className="mb-4 mt-12 border-b border-[var(--color-gray-mid)] pb-3 text-[22px] font-black leading-tight tracking-[-0.5px] text-[var(--color-dark-2)]">
              STOP and HELP Auto-Responses
            </h2>

            <div className="my-3 rounded-xl border border-[var(--color-gray-mid)] bg-[var(--color-bg)] px-6 py-5">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[var(--color-accent)]">
                STOP reply
              </p>
              <p className="text-[15px] italic text-[var(--color-dark-2)]">
                "You have been unsubscribed from Response Ready AI messages and will not receive any
                more texts. Reply START to opt back in."
              </p>
            </div>

            <div className="my-3 rounded-xl border border-[var(--color-gray-mid)] bg-[var(--color-bg)] px-6 py-5">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[var(--color-accent)]">
                HELP reply
              </p>
              <p className="text-[15px] italic text-[var(--color-dark-2)]">
                "Response Ready AI: For help, email daniel@responsereadyai.com or visit
                responsereadyai.com. Reply STOP to unsubscribe."
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 mt-12 border-b border-[var(--color-gray-mid)] pb-3 text-[22px] font-black leading-tight tracking-[-0.5px] text-[var(--color-dark-2)]">
              No Mobile Information Sharing
            </h2>
            <p className="mb-4">
              No mobile information (including your phone number and opt-in data) will be shared
              with third parties or affiliates for marketing or promotional purposes. Subprocessors
              (such as our messaging platform, Twilio) receive only what is necessary to deliver
              the service and are contractually prohibited from using your mobile information for
              their own marketing.
            </p>
          </section>

          {/* Contact box */}
          <div className="mt-12 rounded-2xl border border-[var(--color-gray-mid)] bg-[var(--color-gray-light)] p-8">
            <h2 className="mb-4 text-[22px] font-black leading-tight tracking-[-0.5px] text-[var(--color-dark-2)]">
              Full Privacy Policy
            </h2>
            <p className="mb-4 text-[15px]">
              For complete information on how we collect, use, and protect your data, see our{" "}
              <a href="/privacy">Privacy Policy</a>.
            </p>
            <p className="mb-2 text-[15px]">
              <strong>Contact:</strong>{" "}
              <a href="mailto:daniel@responsereadyai.com">daniel@responsereadyai.com</a>
            </p>
            <p className="text-[15px]">Phone/SMS: +1 (833) 229-2529</p>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
