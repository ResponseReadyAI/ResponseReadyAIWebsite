import { PhoneOutgoing, MessageCircle, Globe } from "lucide-react";

const SERVICES = [
  {
    icon: PhoneOutgoing,
    title: "Outbound Voice Agents",
    body: "Your agent doesn't just answer calls — it makes them too. New leads get called back within minutes. Appointments get reminder calls the day before. Cold leads get re-engaged automatically.",
  },
  {
    icon: MessageCircle,
    title: "Chat Agents",
    body: "Same AI intelligence as the voice agents, built for text. Embedded on your website or delivered via SMS — your customers reach out however they want, and your agent is ready.",
  },
  {
    icon: Globe,
    title: "Websites",
    body: "Need a site that actually generates calls? We build those too. Clean, fast, conversion-focused sites designed for phone-call-dependent businesses — with chat agent integration included.",
  },
];

export default function AdditionalServicesSection() {
  return (
    <section className="py-24 px-6 bg-[var(--color-surface)]" id="services">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] text-[var(--color-primary)] mb-14">
          There&rsquo;s More We Can Build For You
        </h2>

        <div className="flex flex-col divide-y divide-[var(--color-gray-mid)]">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-12 py-10 items-center"
              >
                <Icon
                  className="h-6 w-6 text-[var(--color-accent)]"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-lg font-[family-name:var(--font-display)] text-[var(--color-primary)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-xl">
                    {service.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
