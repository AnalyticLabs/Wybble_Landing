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
  role: "user" | "assistant" | "system";

  type?: "message" | "form" | "slots" | "end" | "escalate";

  content?: string;
  intro?: string;
  body?: string;
  followUp?: string;

  timestamp: Date;
  model?: string;

  options?: ChatOption[];
  features?: FeatureItem[];
}
export interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
  model: string;
  avatar: Avatar;
}
export interface Avatar {
  id: string;
  name: string;
  personality: string;
  imageUrl: string;
  description: string;
  color: string;
}
export interface UserPreferences {
  defaultModel: string;
  selectedAvatar: Avatar;
  theme: "light" | "dark" | "system";
  streamResponses: boolean;
  soundEffects: boolean;
}

export interface ChatContextType {
  sessions: ChatSession[];
  currentSession: ChatSession | null;
  messages: Message[];
  isLoading: boolean;
  sendMessage: (content: string, displayLabel?: string) => Promise<void>;
  createNewSession: () => void;
  selectSession: (id: string) => void;
  deleteSession: (id: string) => void;
  changeModel: (modelId: string) => void;
  changeAvatar: (avatar: Avatar) => void;
  isEscalated: boolean;
  setIsEscalated: (v: boolean) => void;
  isTawkOpen: boolean;
}
