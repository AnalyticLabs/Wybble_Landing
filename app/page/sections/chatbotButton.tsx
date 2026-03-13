import { BotMessageSquare } from "lucide-react";
import { useEffect, useState } from "react";
import FloatingChatWidget from "@/components/FloatingChatWidget";
import { useChat } from "@/components/ChatProvider";

export default function ChatbotButton({ isMenuOpen }: { isMenuOpen: boolean }) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { isEscalated, isTawkOpen } = useChat();
  const [hideButton, setHideButton] = useState(false);

  useEffect(() => {
    const handleClose = () => {
      setIsChatOpen(false);
    };

    window.addEventListener("chatbot:close", handleClose);

    return () => {
      window.removeEventListener("chatbot:close", handleClose);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const Tawk_API = (window as any).Tawk_API;

    if (!Tawk_API) return;

    Tawk_API.onChatMaximized = function () {
      setHideButton(true);
      setIsChatOpen(false);
    };

    Tawk_API.onChatMinimized = function () {
      setHideButton(false);
    };

    Tawk_API.onChatEnded = function () {
      setHideButton(false);
    };
  }, []);

  return (
    <>
      {!isChatOpen && !isEscalated && !isTawkOpen && !hideButton && (
        <button
          onClick={() => setIsChatOpen(true)}
          className={`
            fixed right-6 z-50
            transition-all duration-300 bottom-6
            w-16 h-16 rounded-full
            shadow-xl flex items-center justify-center
            hover:scale-110
            ${isMenuOpen ? "bg-white" : "bg-primary text-white"}
          `}
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
