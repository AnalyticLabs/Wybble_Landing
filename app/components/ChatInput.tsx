"use client";

import React, { useState, useRef } from "react";
import type { KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { Loader2, SendHorizontal } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
  placeholder?: string;
}

export default function ChatInput({
  onSend,
  isLoading,
  placeholder = "Type your message...",
}: ChatInputProps) {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (message.trim() && !isLoading) {
      onSend(message);
      setMessage("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = Math.min(e.target.scrollHeight, 200) + "px";
  };

  return (
    <div className="bg-white/70 backdrop-blur-xl">
      <div className="px-6 py-2">
        <div className="relative flex items-end gap-3">
          {/* Textarea */}
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              value={message}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              rows={1}
              disabled={isLoading}
              className="w-full px-5 py-3 pr-14 rounded-2xl border border-secondary/20 focus:border-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 outline-none resize-none bg-white text-secondary disabled:bg-secondary/5 disabled:cursor-not-allowed"
              style={{ minHeight: "52px", maxHeight: "200px" }}
            />

            {/* Character counter for long messages */}
            {message.length > 500 && (
              <div className="absolute bottom-2 right-14 text-xs text-slate-400">
                {message.length}
              </div>
            )}
          </div>

          {/* Send Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSend}
            disabled={!message.trim() || isLoading}
            className={`flex-shrink-0 mb-2.5 p-3.5 rounded-2xl font-semibold shadow-md transition-all duration-300 ${
              message.trim() && !isLoading
                ? "bg-gradient-to-r from-primary to-secondary text-white shadow-glow hover:shadow-xl"
                : "bg-secondary/10 text-secondary/40 cursor-not-allowed"
            }`}
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <SendHorizontal className="w-5 h-5" />
            )}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
