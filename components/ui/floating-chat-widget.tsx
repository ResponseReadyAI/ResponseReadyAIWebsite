"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { MessageSquare, Send, X, Zap } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

interface Message {
  role: "agent" | "user";
  content: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", damping: 25, stiffness: 300 },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

const messageVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 28 },
  },
};

const GREETING: Message = {
  role: "agent",
  content:
    "Hey — I'm Devon, the AI agent for Response Ready AI. Before anything else, who am I speaking with?",
};

export function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || isTyping) return;

    setInput("");
    const updatedMessages = [...messages, { role: "user" as const, content: text }];
    setMessages(updatedMessages);
    setIsTyping(true);

    try {
      const history = updatedMessages.slice(1).map((m) => ({
        role: m.role === "agent" ? "assistant" : "user",
        content: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history: history.slice(0, -1) }),
      });

      if (!res.ok) throw new Error("API error");

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "agent", content: data.message },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "agent",
          content:
            "Something went wrong on my end — try again in a moment.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-[360px] overflow-hidden rounded-2xl border border-[var(--color-gray-mid)] bg-[var(--color-bg)] shadow-2xl"
          >
            {/* Header */}
            <div className="relative border-b border-[var(--color-gray-mid)] bg-[var(--color-primary)] p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shadow-sm">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[var(--color-primary)] bg-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Devon</h3>
                    <p className="text-xs text-white/60">Response Ready AI Demo</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full text-white/70 hover:text-white hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex h-[320px] flex-col gap-3 overflow-y-auto p-4">
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    className={cn(
                      "flex gap-2.5",
                      msg.role === "user" && "flex-row-reverse"
                    )}
                  >
                    {msg.role === "agent" && (
                      <Avatar className="h-7 w-7 shrink-0 mt-0.5">
                        <AvatarFallback className="bg-[var(--color-accent)] text-white text-[10px]">
                          D
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={cn(
                        "max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                        msg.role === "agent"
                          ? "rounded-tl-none bg-[var(--color-gray-light)] text-[var(--color-primary)]"
                          : "rounded-tr-none bg-[var(--color-accent)] text-white"
                      )}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2.5"
                >
                  <Avatar className="h-7 w-7 shrink-0 mt-0.5">
                    <AvatarFallback className="bg-[var(--color-accent)] text-white text-[10px]">
                      D
                    </AvatarFallback>
                  </Avatar>
                  <div className="rounded-2xl rounded-tl-none bg-[var(--color-gray-light)] px-4 py-3 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-muted)] animate-bounce [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-muted)] animate-bounce [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-muted)] animate-bounce" />
                  </div>
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="border-t border-[var(--color-gray-mid)] bg-[var(--color-surface)] p-3">
              <form onSubmit={sendMessage} className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything…"
                  className="flex-1 rounded-full border border-[var(--color-gray-mid)] bg-[var(--color-bg)] px-4 py-2 text-sm text-[var(--color-primary)] placeholder:text-[var(--color-muted)] outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 transition-all"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!input.trim() || isTyping}
                  className="h-9 w-9 shrink-0 rounded-full shadow-md hover:scale-105 transition-transform disabled:opacity-40"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nudge label */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            key="nudge"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ delay: 1.2, duration: 0.3 }}
            className="pointer-events-none select-none rounded-full bg-[var(--color-primary)] px-3 py-1.5 text-xs font-medium text-white shadow-md"
          >
            Hi! 👋 Chat with Devon
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={toggleOpen}
        aria-label={isOpen ? "Close chat" : "Chat with Riley"}
        className={cn(
          "group relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full shadow-2xl transition-all duration-300",
          isOpen
            ? "bg-[var(--color-primary)] text-white rotate-90"
            : "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-dark)]"
        )}
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-[var(--color-accent)] opacity-20 blur-xl transition-opacity group-hover:opacity-40" />
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-6 w-6" />
        )}
      </motion.button>
    </div>
  );
}
