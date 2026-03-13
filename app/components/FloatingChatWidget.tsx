"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Bot } from "lucide-react";
import { useChat } from "@/components/ChatProvider";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import { exportChat } from "@/lib/utils";

/* Fixed Avatar */
const DEFAULT_AVATAR =
  "https://api.dicebear.com/7.x/bottts/svg?seed=WybbleAI&baseColor=159abb";

function ChatContent({ onClose }: { onClose: () => void }) {
  const { currentSession, messages, isLoading, sendMessage, isEscalated } =
    useChat();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  interface ChatOption {
    label: string;
    value: string;
    icon?: string;
  }

  const handleOptionClick = (option: ChatOption) => {
    if (isLoading) return;
    sendMessage(option.value, option.label);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 40, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200, duration: 0.25 }}
      className={`
        fixed right-3 sm:right-4 z-50
        ${isEscalated ? "bottom-[90px]" : "bottom-7"}
        w-[95%] sm:w-[380px]
        h-[80vh] sm:h-[600px]
        bg-white rounded-3xl
        shadow-2xl border border-slate-200
        flex flex-col overflow-hidden
      `}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-3 border-b bg-white">
        <div className="flex items-center gap-3">
          {/* Fixed Avatar */}
          <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200">
            <img
              src={DEFAULT_AVATAR}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Company Info */}
          <div>
            <h2 className="text-sm font-bold text-slate-800">WybbleAI</h2>
            <p className="text-xs text-slate-500">AI Assistant</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Export Chat */}
          <button
            onClick={() => currentSession && exportChat(currentSession)}
            disabled={messages.length === 0}
            className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-40"
          >
            <Download className="w-4 h-4 text-slate-600" />
          </button>

          {/* Close */}
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-100"
          >
            <X className="w-4 h-4 text-slate-600" />
          </button>
        </div>
      </div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {messages.map((message, index) => {
          const isLastMessage = index === messages.length - 1;
          const isLastBotMessage =
            isLastMessage && message.role === "assistant";

          return (
            <ChatMessage
              key={message.id}
              message={message}
              avatarUrl={DEFAULT_AVATAR}
              options={isLastBotMessage ? message.options : undefined}
              showOptions={isLastBotMessage && !isLoading}
              onOptionClick={handleOptionClick}
            />
          );
        })}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex gap-3 mt-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>

            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-primary rounded-full animate-bounce" />
              <span className="w-2 h-2 bg-primary rounded-full animate-bounce delay-150" />
              <span className="w-2 h-2 bg-primary rounded-full animate-bounce delay-300" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* INPUT */}
      <div className="border-t px-3 py-2 bg-white">
        <ChatInput onSend={sendMessage} isLoading={isLoading} />
      </div>
    </motion.div>
  );
}

export default function FloatingChatWidget({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <ChatContent onClose={onClose} />
    </AnimatePresence>
  );
}
