export default function ChatDemoPlaceholder() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#1e293b] overflow-hidden flex flex-col" style={{ minHeight: 380 }}>
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
        <div className="h-8 w-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
          <span className="text-white text-xs font-bold">R</span>
        </div>
        <div>
          <p className="text-white text-sm font-semibold leading-none">Response Ready AI Demo Agent</p>
          <p className="text-xs text-[var(--color-muted)] mt-0.5 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-success)]" aria-hidden="true" />
            Live
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-5 space-y-4 overflow-y-auto">
        {/* Bot message */}
        <div className="flex items-start gap-3 max-w-xs">
          <div className="h-6 w-6 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-white text-[10px] font-bold">R</span>
          </div>
          <div className="rounded-2xl rounded-tl-none bg-white/10 px-4 py-3">
            <p className="text-white text-sm leading-relaxed">
              Hi! I'm a live demo of the kind of AI agent your business could have. Ask me anything.
            </p>
          </div>
        </div>

        {/* User message */}
        <div className="flex justify-end">
          <div className="rounded-2xl rounded-tr-none bg-[var(--color-accent)] px-4 py-3 max-w-xs">
            <p className="text-white text-sm">Does it really sound human?</p>
          </div>
        </div>

        {/* Bot message */}
        <div className="flex items-start gap-3 max-w-sm">
          <div className="h-6 w-6 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-white text-[10px] font-bold">R</span>
          </div>
          <div className="rounded-2xl rounded-tl-none bg-white/10 px-4 py-3">
            <p className="text-white text-sm leading-relaxed">
              You're already talking to one — you tell me. That's what your customers would experience.
            </p>
          </div>
        </div>
      </div>

      {/* Input area */}
      <div className="px-4 py-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <input
            type="text"
            disabled
            placeholder="Chat widget coming soon — agent in configuration"
            className="flex-1 rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-[var(--color-muted)] placeholder:text-[var(--color-muted)] cursor-not-allowed"
            aria-label="Chat input — coming soon"
          />
          <button
            disabled
            className="rounded-lg bg-[var(--color-accent)] px-3 py-2.5 opacity-40 cursor-not-allowed"
            aria-label="Send message — coming soon"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
