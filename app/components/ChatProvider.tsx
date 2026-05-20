"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import type { Message, ChatContextType } from "@/types";
import { getNode } from "@/lib/chatTree";

const ChatContext = createContext<ChatContextType | undefined>(undefined);

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function nodeToMessage(nodeId: string): Message {
  const node = getNode(nodeId);
  return {
    id: generateId(),
    role: "assistant",
    content: node.intro ?? node.body ?? "",
    intro: node.intro,
    body: node.body,
    followUp: node.followUp,
    timestamp: new Date(),
    options: node.options,
    features: node.features,
  };
}

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([
    nodeToMessage("welcome"),
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentNodeId, setCurrentNodeId] = useState("welcome");

  const sendMessage = useCallback(
    async (value: string, label?: string) => {
      if (!value.trim() || isLoading) return;

      const userMsg: Message = {
        id: generateId(),
        role: "user",
        content: label || value,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMsg]);

      setIsLoading(true);
      await new Promise((r) => setTimeout(r, 400));

      const currentNode = getNode(currentNodeId);
      const matched = currentNode.options?.find(
        (o) => o.value === value || o.label === value,
      );
      const nextNodeId = matched?.nextNode ?? "welcome";

      setMessages((prev) => [...prev, nodeToMessage(nextNodeId)]);
      setCurrentNodeId(nextNodeId);
      setIsLoading(false);
    },
    [currentNodeId, isLoading],
  );

  return (
    <ChatContext.Provider
      value={{ messages, isLoading, currentNodeId, sendMessage }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat(): ChatContextType {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within ChatProvider");
  return ctx;
}
