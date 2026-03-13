"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Message } from "@/types";
import { formatTimestamp, copyToClipboard } from "@/lib/utils";
import { Copy, Check, User, Bot } from "lucide-react";
import DynamicIcon from "./Dynamicicon";
import MessageContent from "./MessageContent";

interface ChatMessageProps {
  message: Message;
  avatarUrl?: string;
  onOptionClick?: (option: { label: string; value: string }) => void;
  showOptions?: boolean;
  options?: Array<{ label: string; value: string; icon?: string }>;
}

export default function ChatMessage({
  message,
  avatarUrl,
  onOptionClick,
  showOptions,
  options,
}: ChatMessageProps) {
  const [copied, setCopied] = React.useState(false);
  const isUser = message.role === "user";

  const handleCopy = async () => {
    const fullText = message.intro || message.content || "";

    await copyToClipboard(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-4 mb-6 ${isUser ? "flex-row-reverse" : "flex-row"}`}
    >
      {/* Avatar */}
      <div className="flex-shrink-0">
        {isUser ? (
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
            <User className="w-5 h-5 text-white" />
          </div>
        ) : (
          <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-lg ring-2 ring-primary/20">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt="AI Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Message Content */}
      <div
        className={`flex-1 max-w-[70%] ${isUser ? "items-end" : "items-start"}`}
      >
        <div className="group relative">
          <div
            className={`chat-bubble ${
              isUser ? "chat-bubble-user" : "chat-bubble-ai"
            }`}
          >
            <div className="prose prose-sm max-w-none">
              {/* Intro */}
              {message.intro && <MessageContent content={message.intro} />}

              {/* Fallback simple message */}
              {!message.intro && message.content && (
                <MessageContent content={message.content} />
              )}

              {/* Features */}
              {message.features && message.features.length > 0 && (
                <div className="mt-3 space-y-2">
                  {message.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      {feature.icon && (
                        <DynamicIcon
                          name={feature.icon}
                          className="w-4 h-4 text-primary"
                        />
                      )}
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Body (optional middle text) */}
              {message.body && (
                <div className="mt-3">
                  <MessageContent content={message.body} />
                </div>
              )}

              {/* Follow-up text */}
              {message.followUp && (
                <div className="mt-3">
                  <MessageContent content={message.followUp} />
                </div>
              )}
            </div>
          </div>

          {/* Button Options (for bot messages only) */}
          {!isUser && showOptions && options && options.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onOptionClick?.(option)}
                  className="px-4 py-2 bg-white border border-primary/30 hover:border-primary hover:bg-primary/5 rounded-lg text-sm font-medium text-secondary transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
                >
                  {option.icon && (
                    <DynamicIcon name={option.icon} className="w-4 h-4" />
                  )}
                  {option.label}
                </motion.button>
              ))}
            </div>
          )}

          {/* Message Actions */}
          <div
            className={`flex items-center gap-2 mt-2 text-xs text-highlight ${
              isUser ? "justify-end" : "justify-start"
            }`}
          >
            <span>{formatTimestamp(message.timestamp)}</span>
            {message.model && !isUser && (
              <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                {message.model}
              </span>
            )}
            <button
              onClick={handleCopy}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-secondary/5 rounded"
              title="Copy message"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-green-600" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
