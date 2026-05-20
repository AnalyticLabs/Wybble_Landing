"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bot, User } from "lucide-react";
import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";
import { useChat } from "@/components/ChatProvider";
import type { Message } from "@/types";

// ─── Dynamic Icon ─────────────────────────────────────────────────────────────

function DynamicIcon({
  name,
  ...props
}: { name: string } & Omit<LucideProps, "ref">) {
  const Icon = (
    Icons as unknown as Record<string, React.ComponentType<LucideProps>>
  )[name];
  return Icon ? <Icon {...props} /> : <Icons.Circle {...props} />;
}

// ─── Bold renderer ────────────────────────────────────────────────────────────

function renderBold(text: string): React.ReactNode {
  const parts = text.split(/\*\*([^*]+)\*\*/g);
  return parts.map((p, i) => (i % 2 === 1 ? <strong key={i}>{p}</strong> : p));
}

// ─── Emoji → icon map ─────────────────────────────────────────────────────────

const EMOJI_ICONS: Record<string, string> = {
  "👋": "Hand",
  "🚀": "Rocket",
  "🧠": "Brain",
  "🔌": "Plug",
  "💻": "Monitor",
  "🔬": "FlaskConical",
  "🤖": "Bot",
  "🔒": "Lock",
  "🚗": "Car",
  "🏥": "Hospital",
  "☁️": "Cloud",
  "📬": "Mail",
  "👥": "Users",
  "🎓": "GraduationCap",
  "📦": "Package",
  "📈": "TrendingUp",
  "💼": "Briefcase",
  "💬": "MessageSquare",
  "🌿": "Leaf",
  "🌾": "Wheat",
  "👁️": "Eye",
  "✨": "Sparkles",
  "📊": "BarChart3",
  "🔗": "Link",
};

// ─── Message Content ──────────────────────────────────────────────────────────

function MessageContent({ content }: { content: string }) {
  const lines = content.split("\n");
  return (
    <div className="space-y-1.5">
      {lines.map((line, i) => {
        const emoji = Object.keys(EMOJI_ICONS).find((e) =>
          line.trimStart().startsWith(e),
        );
        if (emoji) {
          const iconName = EMOJI_ICONS[emoji];
          const rest = line.replace(emoji, "").trim();
          return (
            <p key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center mt-0.5">
                <DynamicIcon name={iconName} className="w-4 h-4 text-primary" />
              </span>
              <span className="leading-snug pt-1">{renderBold(rest)}</span>
            </p>
          );
        }
        if (line.trim()) return <p key={i}>{renderBold(line)}</p>;
        return <br key={i} />;
      })}
    </div>
  );
}

// ─── Chat Bubble ──────────────────────────────────────────────────────────────

function ChatBubble({
  message,
  showOptions,
  onOption,
  isLoading,
}: {
  message: Message;
  showOptions: boolean;
  onOption: (value: string, label: string) => void;
  isLoading: boolean;
}) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex gap-3 mb-5 ${isUser ? "flex-row-reverse" : "flex-row"}`}
    >
      {/* Avatar */}
      <div className="flex-shrink-0">
        {isUser ? (
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-sm">
            <User className="w-4 h-4 text-white" />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Bot className="w-4 h-4 text-primary" />
          </div>
        )}
      </div>

      <div
        className={`flex-1 max-w-[80%] flex flex-col ${
          isUser ? "items-end" : "items-start"
        }`}
      >
        {/* Bubble */}
        <div
          className={`rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
            isUser
              ? "bg-gradient-to-br from-primary to-secondary text-white rounded-tr-sm"
              : "bg-slate-50 border border-slate-100 text-slate-800 rounded-tl-sm"
          }`}
        >
          {message.intro && <MessageContent content={message.intro} />}
          {!message.intro && message.content && (
            <MessageContent content={message.content} />
          )}

          {/* Features */}
          {message.features && message.features.length > 0 && (
            <ul className="mt-3 space-y-2.5 list-none p-0 m-0">
              {message.features.map((f, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center mt-0.5">
                    {f.icon ? (
                      <DynamicIcon
                        name={f.icon}
                        className="w-4 h-4 text-primary"
                      />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                  </span>
                  <span className="text-sm text-slate-700 leading-snug pt-1">
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {message.body && (
            <div className="mt-2">
              <MessageContent content={message.body} />
            </div>
          )}

          {message.followUp && (
            <div className="mt-2 text-slate-500 italic text-xs">
              <MessageContent content={message.followUp} />
            </div>
          )}
        </div>

        {/* Option buttons */}
        {!isUser &&
          showOptions &&
          message.options &&
          message.options.length > 0 && (
            <div className="mt-2.5 flex flex-wrap gap-2">
              {message.options.map((opt, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => !isLoading && onOption(opt.value, opt.label)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-primary/25 hover:border-primary hover:bg-primary/5 rounded-lg text-xs font-medium text-slate-700 hover:text-primary transition-all duration-200 shadow-sm"
                >
                  {opt.icon && (
                    <DynamicIcon name={opt.icon} className="w-3.5 h-3.5" />
                  )}
                  {opt.label}
                </motion.button>
              ))}
            </div>
          )}

        {/* Timestamp */}
        <span className="text-[10px] text-slate-400 mt-1 px-1">
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </motion.div>
  );
}

// ─── Main Widget ──────────────────────────────────────────────────────────────

export default function FloatingChatWidget({
  onClose,
}: {
  onClose: () => void;
}) {
  const { messages, isLoading, sendMessage } = useChat();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200, duration: 0.25 }}
        className="fixed right-3 sm:right-4 bottom-7 z-50 w-[95%] sm:w-[380px] h-[80vh] sm:h-[600px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-primary to-secondary">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">
                WybbleAI Assistant
              </h2>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse" />
                <p className="text-xs text-white/80">Online</p>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-3 py-4">
          {messages.map((msg, i) => {
            const isLast = i === messages.length - 1;
            const isLastBot = isLast && msg.role === "assistant";
            return (
              <ChatBubble
                key={msg.id}
                message={msg}
                showOptions={isLastBot && !isLoading}
                onOption={(value, label) => sendMessage(value, label)}
                isLoading={isLoading}
              />
            );
          })}

          {/* Typing indicator */}
          {isLoading && (
            <div className="flex gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
                <span
                  className="w-2 h-2 bg-primary rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                />
                <span
                  className="w-2 h-2 bg-primary rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="w-2 h-2 bg-primary rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-slate-100 bg-slate-50 text-center">
          <p className="text-[10px] text-slate-400">
            Powered by Wybble.AI • Select an option above
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
