"use client";

import { useState, useEffect } from "react";
import { BotMessageSquare } from "lucide-react";
import FloatingChatWidget from "@/components/FloatingChatWidget";

export default function ChatbotButton({
  isMenuOpen = false,
}: {
  isMenuOpen?: boolean;
}) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleClose = () => setIsChatOpen(false);
    window.addEventListener("chatbot:close", handleClose);
    return () => window.removeEventListener("chatbot:close", handleClose);
  }, []);

  return (
    <>
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className={`
            fixed right-6 bottom-6 z-50
            transition-all duration-300
            w-16 h-16 rounded-full
            shadow-xl flex items-center justify-center
            hover:scale-110
            ${isMenuOpen ? "bg-white" : "bg-primary text-white"}
          `}
          aria-label="Open chat"
        >
          <span
            className={`
              absolute inset-0 rounded-full animate-ping opacity-20
              ${isMenuOpen ? "bg-white opacity-40" : "bg-primary opacity-20"}
            `}
          />
          <BotMessageSquare
            className={`w-8 h-8 ${isMenuOpen ? "text-primary" : "text-white"}`}
          />
        </button>
      )}

      {isChatOpen && (
        <FloatingChatWidget onClose={() => setIsChatOpen(false)} />
      )}
    </>
  );
}
