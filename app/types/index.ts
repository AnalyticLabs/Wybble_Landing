// types/index.ts

export interface ChatOption {
  label: string;
  value: string;
  nextNode: string;
  icon?: string;
}

export interface FeatureItem {
  text: string;
  icon?: string;
}

export interface Message {
  id: string;
  role: "user" | "assistant";
  content?: string;
  intro?: string;
  body?: string;
  followUp?: string;
  timestamp: Date;
  options?: ChatOption[];
  features?: FeatureItem[];
}

export interface ChatContextType {
  messages: Message[];
  isLoading: boolean;
  currentNodeId: string;
  sendMessage: (value: string, label?: string) => Promise<void>;
}
