import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ResponseReady AI — Never Miss a Call",
  description:
    "Done-for-you AI voice agents for small businesses. Answers every call 24/7, books appointments, captures leads. Set up in days by our founder personally.",
  openGraph: {
    title: "ResponseReady AI — Never Miss a Call",
    description:
      "Done-for-you AI voice agents for small businesses. Answers every call 24/7, books appointments, captures leads. Set up in days by our founder personally.",
    url: "https://responsereadyai.com",
    siteName: "ResponseReady AI",
    type: "website",
  },
  alternates: {
    canonical: "https://responsereadyai.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ResponseReady AI",
  description:
    "Done-for-you AI voice agents for small businesses. Answers every call 24/7, books appointments, captures leads.",
  url: "https://responsereadyai.com",
  email: "daniel@responsereadyai.com",
  founder: {
    "@type": "Person",
    name: "Daniel",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
