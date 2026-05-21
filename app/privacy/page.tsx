import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Response Ready AI",
  description:
    "Response Ready AI's privacy policy explains what information we collect, how we use it, and your choices — including our SMS messaging program.",
  alternates: { canonical: "https://responsereadyai.com/privacy" },
};

export default function PrivacyPage() {
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
            Legal
          </span>
          <h1 className="mb-4 text-[clamp(32px,5vw,52px)] font-black leading-none tracking-[-2px] text-[var(--color-bg)]">
            Privacy Policy
          </h1>
          <p className="text-sm text-[rgba(255,255,255,0.4)]">Last updated: April 17, 2026</p>
        </div>
      </div>

      {/* Document body */}
      <main className="py-18 pb-24 mx-auto max-w-[760px] px-6">
        {/* Notice box */}
        <div className="mb-10 rounded-xl border border-[rgba(236,149,19,0.25)] bg-[var(--color-accent-light)] px-6 py-5 text-[15px] leading-[1.7] text-[var(--color-dark-3)]">
          Response Ready AI ("Response Ready AI," "we," "us," or "our") builds AI phone and chat
          agents for use by our business clients. This Privacy Policy explains what information we
          collect, how we use it, and the choices you have. It covers our website at
          responsereadyai.com, our phone and SMS communications, and any related services we
          provide.
        </div>

        <div className="space-y-0 text-[16px] leading-[1.8] text-[var(--color-dark-3)] [&_a]:text-[var(--color-accent)] [&_a:hover]:underline [&_strong]:font-semibold [&_strong]:text-[var(--color-dark-2)]">

          <section>
            <h2 className="mb-4 mt-12 border-b border-[var(--color-gray-mid)] pb-3 text-[22px] font-black leading-tight tracking-[-0.5px] text-[var(--color-dark-2)] first:mt-0">
              1. Information We Collect
            </h2>
            <p className="mb-4">We collect information in the following ways:</p>
            <p className="mb-4">
              <strong>Information you provide directly.</strong> When you contact us, request a
              demo, sign up for our service, or speak with our AI agent, we may collect your name,
              business name, email address, phone number, and the content of your conversation with
              us (including call audio, transcripts, and text messages).
            </p>
            <p className="mb-4">
              <strong>Information collected automatically.</strong> When you use
              responsereadyai.com, we may collect standard log information such as IP address,
              browser type, pages visited, and referring URLs through cookies and similar
              technologies.
            </p>
            <p className="mb-4">
              <strong>Information from calls and texts.</strong> When you call or text +1 (833)
              229-2529, we collect your phone number, the date and time of the communication, the
              content of your messages, and (for calls) a recording and/or transcript of the call
              for quality, training, and service-delivery purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-12 border-b border-[var(--color-gray-mid)] pb-3 text-[22px] font-black leading-tight tracking-[-0.5px] text-[var(--color-dark-2)]">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="mb-4 ml-6 list-disc space-y-2">
              <li>Respond to your inquiries and provide the services you've requested.</li>
              <li>
                Send you follow-ups after a call, appointment reminders and confirmations, account
                and service notifications, and two-way conversational replies via SMS — only after
                you have opted in.
              </li>
              <li>Operate, maintain, and improve our AI phone and chat agent services.</li>
              <li>
                Train and improve our models using aggregated or de-identified data where
                permitted.
              </li>
              <li>
                Comply with legal obligations, enforce our terms, and protect the rights and safety
                of Response Ready AI, our clients, and the public.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 mt-12 border-b border-[var(--color-gray-mid)] pb-3 text-[22px] font-black leading-tight tracking-[-0.5px] text-[var(--color-dark-2)]">
              3. SMS / Text Messaging Program
            </h2>
            <p className="mb-4">
              When you verbally opt in during a phone call to +1 (833) 229-2529, or opt in through
              our website or a reply of "START," we may send you text messages from that number.
              Message types include follow-ups after a call, appointment reminders and
              confirmations, account or service notifications, and replies to your own texts.
              Message frequency varies and is typically occasional — only when there is something
              relevant to share. Message and data rates may apply. Reply <strong>HELP</strong> for
              help or <strong>STOP</strong> to unsubscribe at any time. You can also email{" "}
              <a href="mailto:daniel@responsereadyai.com">daniel@responsereadyai.com</a> to be
              removed.
            </p>
            <p className="mb-4">
              For details on how we obtain verbal consent before sending SMS, including the exact
              script read during inbound calls, see our{" "}
              <a href="/sms-consent">SMS Consent &amp; Messaging Policy</a>.
            </p>
            <p className="mb-4">
              <strong>No mobile information sharing.</strong> No mobile information (including your
              phone number and any associated opt-in data) will be shared with third parties or
              affiliates for marketing or promotional purposes. Information sharing with
              subprocessors described in Section 4 (such as our messaging platform) is limited to
              what is necessary to deliver the service you have requested, and those subprocessors
              are contractually prohibited from using your mobile information for their own
              marketing.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-12 border-b border-[var(--color-gray-mid)] pb-3 text-[22px] font-black leading-tight tracking-[-0.5px] text-[var(--color-dark-2)]">
              4. How We Share Information
            </h2>
            <p className="mb-4">We do not sell your personal information. We share information only as follows:</p>
            <p className="mb-4">
              <strong>Service providers (subprocessors).</strong> We use trusted vendors to operate
              our service, including Twilio (telephony and messaging), our hosting and analytics
              providers, and our email provider. These vendors access information only as needed to
              perform services for us and are bound by confidentiality and data-protection
              obligations.
            </p>
            <p className="mb-4">
              <strong>Our business clients.</strong> If you contacted or were contacted by an AI
              agent that Response Ready AI built and operates on behalf of one of our business
              clients, the content of that conversation may be shared with that client, who is the
              party you intended to communicate with.
            </p>
            <p className="mb-4">
              <strong>Legal and safety.</strong> We may disclose information when required by law,
              subpoena, or court order, or when we believe in good faith that disclosure is
              necessary to protect rights, property, or safety.
            </p>
            <p className="mb-4">
              <strong>Business transfers.</strong> If Response Ready AI is involved in a merger,
              acquisition, or asset sale, information may be transferred as part of that
              transaction, subject to this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-12 border-b border-[var(--color-gray-mid)] pb-3 text-[22px] font-black leading-tight tracking-[-0.5px] text-[var(--color-dark-2)]">
              5. Your Choices
            </h2>
            <p className="mb-4">You may:</p>
            <ul className="mb-4 ml-6 list-disc space-y-2">
              <li>
                Opt out of SMS messages at any time by replying <strong>STOP</strong> to any
                message from us, or by emailing{" "}
                <a href="mailto:daniel@responsereadyai.com">daniel@responsereadyai.com</a>.
              </li>
              <li>
                Request access to, correction of, or deletion of the personal information we hold
                about you by emailing{" "}
                <a href="mailto:daniel@responsereadyai.com">daniel@responsereadyai.com</a>.
              </li>
              <li>
                Disable cookies through your browser settings (some site features may not work as
                intended).
              </li>
            </ul>
            <p className="mb-4">
              Depending on where you live, you may have additional rights under laws such as the
              California Consumer Privacy Act (CCPA) or the EU/UK General Data Protection
              Regulation (GDPR), including the right to know, delete, correct, and not be
              discriminated against for exercising those rights. To make a request, contact us at
              the address below.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-12 border-b border-[var(--color-gray-mid)] pb-3 text-[22px] font-black leading-tight tracking-[-0.5px] text-[var(--color-dark-2)]">
              6. Data Retention
            </h2>
            <p className="mb-4">
              We retain personal information for as long as necessary to provide our services,
              comply with legal obligations, resolve disputes, and enforce agreements. SMS opt-in
              records are retained for a minimum of four years as required by messaging compliance
              rules.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-12 border-b border-[var(--color-gray-mid)] pb-3 text-[22px] font-black leading-tight tracking-[-0.5px] text-[var(--color-dark-2)]">
              7. Security
            </h2>
            <p className="mb-4">
              We use reasonable administrative, technical, and physical safeguards to protect the
              information we collect. No system is perfectly secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-12 border-b border-[var(--color-gray-mid)] pb-3 text-[22px] font-black leading-tight tracking-[-0.5px] text-[var(--color-dark-2)]">
              8. Children's Privacy
            </h2>
            <p className="mb-4">
              Our services are not directed to children under 18, and we do not knowingly collect
              personal information from children under 18. If you believe we have collected such
              information, please contact us and we will delete it.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-12 border-b border-[var(--color-gray-mid)] pb-3 text-[22px] font-black leading-tight tracking-[-0.5px] text-[var(--color-dark-2)]">
              9. Changes to This Policy
            </h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. Material changes will be posted
              on this page with an updated "Last updated" date. Continued use of our services after
              an update constitutes acceptance of the revised policy.
            </p>
          </section>

          {/* Contact box */}
          <div className="mt-12 rounded-2xl border border-[var(--color-gray-mid)] bg-[var(--color-gray-light)] p-8">
            <h2 className="mb-4 text-[22px] font-black leading-tight tracking-[-0.5px] text-[var(--color-dark-2)]">
              10. Contact Us
            </h2>
            <p className="mb-2 text-[15px]"><strong>Response Ready AI</strong></p>
            <p className="mb-2 text-[15px]">
              Email:{" "}
              <a href="mailto:daniel@responsereadyai.com">daniel@responsereadyai.com</a>
            </p>
            <p className="mb-2 text-[15px]">
              Website:{" "}
              <a href="https://responsereadyai.com">responsereadyai.com</a>
            </p>
            <p className="text-[15px]">Phone/SMS: +1 (833) 229-2529</p>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
