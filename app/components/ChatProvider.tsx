"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

import type { ChatSession, Message, ChatContextType, Avatar } from "@/types";

import {
  generateId,
  createNewSession as createSession,
  getSessionTitle,
} from "@/lib/utils";

import { startChatSession, sendChatMessage } from "@/lib/api";

const ChatContext = createContext<ChatContextType | undefined>(undefined);

/* Default Bot Avatar */
const DEFAULT_AVATAR = {
  id: "bot",
  name: "WybbleAI",
  personality: "Helpful AI assistant",
  imageUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=WybbleAI",
  description: "Official chatbot assistant",
  color: "#4f46e5",
};

/* Default Model */
const DEFAULT_MODEL = "wybbleai-bot";

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [sessions, setSessions] = useState<ChatSession[]>([
    createSession(DEFAULT_AVATAR, DEFAULT_MODEL),
  ]);

  const [currentSessionId, setCurrentSessionId] = useState<string>(
    sessions[0]?.id,
  );

  const [isLoading, setIsLoading] = useState(false);
  const [chatbotSessionId, setChatbotSessionId] = useState<string | null>(null);

  const [isEscalated, setIsEscalated] = useState(false);
  const [isTawkOpen, setIsTawkOpen] = useState(false);

  const [currentNodeId, setCurrentNodeId] = useState<string>("welcome");

  const currentSession =
    sessions.find((s) => s.id === currentSessionId) || null;

  const messages = currentSession?.messages || [];

  /* Hide Tawk widget initially */
  // useEffect(() => {
  //   if (typeof window === "undefined") return;

  //   const checkTawkReady = () => {
  //     if ((window as any).Tawk_API) {
  //       (window as any).Tawk_API.hideWidget();
  //     } else {
  //       setTimeout(checkTawkReady, 500);
  //     }
  //   };

  //   checkTawkReady();
  // }, []);

  /* Listen to Tawk events */
  useEffect(() => {
    const onOpen = () => setIsEscalated(true);
    const onClose = () => setIsEscalated(false);

    window.addEventListener("tawk:open", onOpen);
    window.addEventListener("tawk:close", onClose);

    return () => {
      window.removeEventListener("tawk:open", onOpen);
      window.removeEventListener("tawk:close", onClose);
    };
  }, []);

  /* Create chatbot session id */
  useEffect(() => {
    let existing = localStorage.getItem("chatbot_session");

    if (!existing) {
      existing = `session-${Date.now()}`;
      localStorage.setItem("chatbot_session", existing);
    }

    setChatbotSessionId(existing);
  }, []);

  /* Initialize chatbot */
  useEffect(() => {
    const initSession = async () => {
      if (!chatbotSessionId) return;

      try {
        const welcomeNode = await startChatSession(chatbotSessionId);

        const welcomeMessage: Message = {
          id: generateId(),
          role: "assistant",
          content: welcomeNode.message,
          intro: welcomeNode.intro,
          body: welcomeNode.body,
          followUp: welcomeNode.followUp,
          timestamp: new Date(),
          model: "WybbleAI Bot",
          options: welcomeNode.options,
          features: welcomeNode.features,
        };

        setSessions((prev) =>
          prev.map((session) =>
            session.id === currentSessionId
              ? {
                  ...session,
                  messages: [welcomeMessage],
                  updatedAt: new Date(),
                }
              : session,
          ),
        );

        setCurrentNodeId(welcomeNode.nodeId);
      } catch (error) {
        console.error("Failed to initialize chatbot:", error);

        const fallbackMessage: Message = {
          id: generateId(),
          role: "assistant",
          content:
            "Welcome to WybbleAI! Our AI assistant is currently under development. Please try again shortly or contact our support team for assistance.",
          timestamp: new Date(),
          model: "WybbleAI Bot",
        };

        setSessions((prev) =>
          prev.map((session) =>
            session.id === currentSessionId
              ? {
                  ...session,
                  messages: [fallbackMessage],
                  updatedAt: new Date(),
                }
              : session,
          ),
        );
      }
    };

    initSession();
  }, [chatbotSessionId, currentSessionId]);

  const sendMessage = useCallback(
    async (content: string, displayLabel?: string) => {
      if (!currentSession || !content.trim() || !chatbotSessionId) return;

      const displayContent = displayLabel || content.trim();

      const userMessage: Message = {
        id: generateId(),
        role: "user",
        content: displayContent,
        timestamp: new Date(),
      };

      setSessions((prev) =>
        prev.map((session) =>
          session.id === currentSessionId
            ? {
                ...session,
                messages: [...session.messages, userMessage],
                updatedAt: new Date(),
                title: getSessionTitle([...session.messages, userMessage]),
              }
            : session,
        ),
      );

      setIsLoading(true);

      try {
        const response = await sendChatMessage(
          chatbotSessionId,
          currentNodeId,
          content,
        );

        const assistantMessage: Message = {
          id: generateId(),
          role: "assistant",
          content: response.message,
          intro: response.intro,
          body: response.body,
          followUp: response.followUp,
          timestamp: new Date(),
          model: "WybbleAI Bot",
          options: response.options,
          features: response.features,
        };

        setSessions((prev) =>
          prev.map((session) =>
            session.id === currentSessionId
              ? {
                  ...session,
                  messages: [...session.messages, assistantMessage],
                  updatedAt: new Date(),
                }
              : session,
          ),
        );

        setCurrentNodeId(response.nodeId);

        /* Escalate to Tawk */
        // if (response.type === "escalate") {
        //   setIsEscalated(true);

        //   setTimeout(() => {
        //     if (typeof window !== "undefined" && (window as any).Tawk_API) {
        //       (window as any).Tawk_API.setAttributes(
        //         {
        //           name: "Website User",
        //           source: "Chatbot Escalation",
        //         },
        //         function () {},
        //       );

        //       (window as any).Tawk_API.showWidget();
        //       (window as any).Tawk_API.maximize();
        //     }

        //     window.dispatchEvent(new Event("chatbot:close"));
        //   }, 1200);
        // }

        if (response.type === "escalate") {
          setIsEscalated(true);

          setTimeout(() => {
            if (typeof window !== "undefined" && (window as any).Tawk_API) {
              const tawk = (window as any).Tawk_API;

              tawk.showWidget();
              tawk.maximize();
            }

            // Close your custom chatbot UI
            window.dispatchEvent(new Event("chatbot:close"));
          }, 1200);
        }
      } catch (error) {
        console.error("Failed to send message:", error);

        const errorMessage: Message = {
          id: generateId(),
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
          timestamp: new Date(),
          model: "WybbleAI Bot",
        };

        setSessions((prev) =>
          prev.map((session) =>
            session.id === currentSessionId
              ? {
                  ...session,
                  messages: [...session.messages, errorMessage],
                }
              : session,
          ),
        );
      } finally {
        setIsLoading(false);
      }
    },
    [currentSession, currentSessionId, chatbotSessionId, currentNodeId],
  );

  const createNewSession = useCallback(() => {
    const newSession = createSession(DEFAULT_AVATAR, DEFAULT_MODEL);

    setSessions((prev) => [...prev, newSession]);
    setCurrentSessionId(newSession.id);
    setCurrentNodeId("welcome");
  }, []);

  const selectSession = useCallback((id: string) => {
    setCurrentSessionId(id);
  }, []);

  const deleteSession = useCallback(
    (id: string) => {
      setSessions((prev) => {
        const filtered = prev.filter((s) => s.id !== id);

        if (filtered.length === 0) {
          const newSession = createSession(DEFAULT_AVATAR, DEFAULT_MODEL);
          setCurrentSessionId(newSession.id);
          return [newSession];
        }

        if (id === currentSessionId) {
          setCurrentSessionId(filtered[0].id);
        }

        return filtered;
      });
    },
    [currentSessionId],
  );

  const value: ChatContextType = {
    sessions,
    currentSession,
    messages,
    isLoading,
    sendMessage,
    createNewSession,
    selectSession,
    deleteSession,
    isEscalated,
    setIsEscalated,
    isTawkOpen,
    changeModel: function (modelId: string): void {
      throw new Error("Function not implemented.");
    },
    changeAvatar: function (avatar: Avatar): void {
      throw new Error("Function not implemented.");
    },
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChat() {
  const context = useContext(ChatContext);

  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider");
  }

  return context;
}
