import { FOUNDING_SPOTS_REMAINING } from "@/lib/constants";

export default function FoundingClientBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent-light)] px-4 py-1.5 text-sm font-medium text-[var(--color-accent)]">
      <span className="h-2 w-2 rounded-full bg-[var(--color-success)] shrink-0" aria-hidden="true" />
      {FOUNDING_SPOTS_REMAINING} Founding Client spots remaining
    </span>
  );
}
