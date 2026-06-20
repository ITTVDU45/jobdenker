"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type ChatMessage = {
  id: number;
  role: "bot" | "user";
  text: string;
  link?: { href: string; label: string };
};

const quickReplies = [
  { label: "Demo buchen", value: "Ich möchte eine Demo buchen." },
  { label: "Was kostet das?", value: "Was kostet Jobdenker?" },
  { label: "Funktionen", value: "Welche Funktionen habt ihr?" },
  { label: "Kontakt", value: "Wie erreiche ich euch?" },
];

const welcomeMessage: ChatMessage = {
  id: 0,
  role: "bot",
  text: "Hi! 👋 Ich bin der Jobdenker-Assistent. Wie kann ich dir helfen?",
};

function buildReply(input: string, idBase: number): ChatMessage {
  const text = input.toLowerCase();
  if (/(demo|termin|vorführ|live)/.test(text)) {
    return { id: idBase, role: "bot", text: "Super! In einer kostenlosen Demo zeigen wir dir Matching, CV-Generator und Automatisierung live.", link: { href: "/demo", label: "Demo buchen" } };
  }
  if (/(kost|preis|teuer|euro|€|abo|plan)/.test(text)) {
    return { id: idBase, role: "bot", text: "Unsere Pläne starten bei 99 €/Monat (Starter). Professional ist am beliebtesten, Enterprise auf Anfrage.", link: { href: "/preise", label: "Preise ansehen" } };
  }
  if (/(funktion|feature|matching|cv|akquise|whatsapp|dokument)/.test(text)) {
    return { id: idBase, role: "bot", text: "Jobdenker bündelt KI-Dokumentenanalyse, Matching, CV-Generator, Akquise-Agent und WhatsApp-Kommunikation in einer Plattform.", link: { href: "/loesungen", label: "Funktionen entdecken" } };
  }
  if (/(kontakt|erreich|mail|telefon|anruf|sprechen)/.test(text)) {
    return { id: idBase, role: "bot", text: "Schreib uns gern an hello@jobdenker.de oder über das Kontaktformular – wir melden uns schnell.", link: { href: "/kontakt", label: "Kontakt aufnehmen" } };
  }
  return { id: idBase, role: "bot", text: "Danke für deine Nachricht! Am schnellsten zeigen wir dir alles live in einer kurzen Demo.", link: { href: "/demo", label: "Demo buchen" } };
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);

  // Beim ersten Seitenaufruf automatisch aufploppen (einmal pro Session)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("jd-chat-opened");
    if (seen) return;
    const timer = window.setTimeout(() => {
      setShowTeaser(true);
      const openTimer = window.setTimeout(() => {
        setOpen(true);
        setShowTeaser(false);
        sessionStorage.setItem("jd-chat-opened", "1");
      }, 1600);
      return () => window.clearTimeout(openTimer);
    }, 1200);
    return () => window.clearTimeout(timer);
  }, []);

  // Automatisch nach unten scrollen
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  function sendMessage(value: string) {
    const trimmed = value.trim();
    if (!trimmed) return;
    const userMsg: ChatMessage = { id: nextId.current++, role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);
    window.setTimeout(() => {
      setMessages((prev) => [...prev, buildReply(trimmed, nextId.current++)]);
      setTyping(false);
    }, 900);
  }

  function openChat() {
    setOpen(true);
    setShowTeaser(false);
    sessionStorage.setItem("jd-chat-opened", "1");
  }

  return (
    <div className="fixed right-5 z-[60] flex flex-col items-end bottom-[calc(1.25rem+env(safe-area-inset-bottom))] md:right-6">
      {/* Chat-Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.92 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 flex h-[70vh] max-h-[560px] w-[calc(100vw-2.5rem)] max-w-[380px] flex-col overflow-hidden rounded-3xl border border-brand-border bg-white shadow-2xl shadow-brand-blue/20"
            role="dialog"
            aria-label="Chat mit dem Jobdenker-Assistent"
          >
            {/* Header */}
            <div className="relative flex items-center gap-3 bg-card px-5 py-4 text-white">
              <span className="bg-lime-gradient flex size-10 items-center justify-center rounded-full text-brand-blue shadow-lg shadow-brand-green/20">
                <Sparkles className="size-5" />
              </span>
              <div className="flex-1">
                <p className="font-heading font-semibold leading-tight">Jobdenker-Assistent</p>
                <p className="flex items-center gap-1.5 text-xs text-slate-300">
                  <span className="size-2 rounded-full bg-brand-green" /> Normalerweise in Minuten zurück
                </p>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Chat schließen" className="rounded-lg p-1.5 text-slate-300 transition hover:bg-white/10 hover:text-white">
                <X className="size-5" />
              </button>
            </div>

            {/* Nachrichten */}
            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto bg-brand-bgLight px-4 py-5">
              {messages.map((msg) => (
                <div key={msg.id} className={msg.role === "user" ? "flex justify-end" : "flex justify-start"}>
                  <div
                    className={
                      msg.role === "user"
                        ? "max-w-[80%] rounded-2xl rounded-br-md bg-card px-4 py-2.5 text-sm leading-6 text-white"
                        : "max-w-[85%] rounded-2xl rounded-bl-md border border-brand-border bg-white px-4 py-2.5 text-sm leading-6 text-brand-blue shadow-sm"
                    }
                  >
                    {msg.text}
                    {msg.link && (
                      <Link
                        href={msg.link.href}
                        onClick={() => setOpen(false)}
                        className="bg-lime-gradient mt-3 inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-semibold text-brand-blue shadow-sm transition hover:-translate-y-0.5"
                      >
                        {msg.link.label}
                      </Link>
                    )}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-brand-border bg-white px-4 py-3 shadow-sm">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="size-2 rounded-full bg-brand-muted/60"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Schnellantworten nur am Anfang */}
              {messages.length === 1 && !typing && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {quickReplies.map((q) => (
                    <button
                      key={q.label}
                      onClick={() => sendMessage(q.value)}
                      className="rounded-full border border-brand-green/40 bg-white px-3 py-1.5 text-xs font-semibold text-brand-greenDark transition hover:bg-lime-gradient hover:text-brand-blue"
                    >
                      {q.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Eingabe */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2 border-t border-brand-border bg-white px-3 py-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Schreib eine Nachricht …"
                aria-label="Nachricht eingeben"
                className="flex-1 rounded-xl border border-brand-border bg-brand-bgLight px-4 py-2.5 text-sm text-brand-blue outline-none transition focus:border-brand-green"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Nachricht senden"
                className="bg-lime-gradient flex size-10 shrink-0 items-center justify-center rounded-xl text-brand-blue shadow-lg shadow-brand-green/20 transition hover:-translate-y-0.5 disabled:opacity-40 disabled:hover:translate-y-0"
              >
                <Send className="size-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Teaser-Bubble */}
      <AnimatePresence>
        {showTeaser && !open && (
          <motion.button
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={openChat}
            className="mb-3 max-w-[240px] rounded-2xl rounded-br-md border border-brand-border bg-white px-4 py-3 text-left text-sm font-medium text-brand-blue shadow-xl"
          >
            👋 Fragen zu Jobdenker? Schreib uns einfach!
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => (open ? setOpen(false) : openChat())}
        whileTap={{ scale: 0.92 }}
        aria-label={open ? "Chat schließen" : "Chat öffnen"}
        className="bg-lime-gradient relative flex size-14 items-center justify-center rounded-full text-brand-blue shadow-xl shadow-brand-green/30 transition hover:scale-105"
      >
        {!open && <span className="absolute inset-0 -z-10 rounded-full bg-brand-green/40 [animation:ping-ring_2.6s_ease-out_infinite]" />}
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="size-6" />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle className="size-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
