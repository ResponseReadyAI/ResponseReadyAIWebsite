import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Agent for Insurance Agencies | Response Ready AI",
  description:
    "The first agent to respond wins the policy. Response Ready AI answers every inquiry 24/7, qualifies leads instantly, and routes hot prospects to your producers.",
  openGraph: {
    title: "AI Voice Agent for Insurance Agencies | Response Ready AI",
    description:
      "Speed-to-lead wins policies. Your AI agent answers every call 24/7, qualifies prospects, and routes them to the right producer automatically.",
    url: "https://insurance.responsereadyai.com",
    siteName: "Response Ready AI",
    type: "website",
  },
  alternates: {
    canonical: "https://insurance.responsereadyai.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function InsuranceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
