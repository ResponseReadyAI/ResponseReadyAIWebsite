import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Receptionist for Med Spas | Response Ready AI",
  description:
    "Never miss a booking again. Response Ready AI answers every call 24/7 — during treatments, after hours, whenever you're unavailable. Built specifically for med spas.",
  openGraph: {
    title: "AI Receptionist for Med Spas | Response Ready AI",
    description:
      "Never miss a booking again. Your AI receptionist answers every call 24/7, books consultations, and sends confirmations automatically.",
    url: "https://medspa.responsereadyai.com",
    siteName: "Response Ready AI",
    type: "website",
  },
  alternates: {
    canonical: "https://medspa.responsereadyai.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MedspaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
