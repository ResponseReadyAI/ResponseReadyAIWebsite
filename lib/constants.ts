export const SITE_NAME = "Response Ready AI";
export const FOUNDER_EMAIL = "daniel@responsereadyai.com";
export const BOOKING_HREF = `mailto:${FOUNDER_EMAIL}?subject=I'd like to book a discovery call`;

export const NAV_LINKS = [
  { label: "How it Works", href: "#process" },
  { label: "Demo", href: "#demo" },
  { label: "Plans", href: "#tiers" },
];

export const FOUNDING_SPOTS_TOTAL = 10;
// Update NEXT_PUBLIC_FOUNDING_SPOTS_TAKEN in Netlify env vars, then redeploy.
export const FOUNDING_SPOTS_TAKEN = Math.min(
  parseInt(process.env.NEXT_PUBLIC_FOUNDING_SPOTS_TAKEN ?? "0", 10),
  FOUNDING_SPOTS_TOTAL
);
export const FOUNDING_SPOTS_REMAINING = FOUNDING_SPOTS_TOTAL - FOUNDING_SPOTS_TAKEN;
