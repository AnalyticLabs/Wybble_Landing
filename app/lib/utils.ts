import type { Message, ChatSession, Avatar } from '@/types';

export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export function formatTimestamp(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  if (minutes > 0) return `${minutes}m ago`;
  return 'Just now';
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

export function calculateCost(tokens: number, costPer1k: number): number {
  return (tokens / 1000) * costPer1k;
}

export function getAvatarGradient(color: string): string {
  return `linear-gradient(135deg, ${color}, ${adjustColor(color, 20)})`;
}

export function adjustColor(color: string, amount: number): string {
  const num = parseInt(color.replace('#', ''), 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + amount));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amount));
  const b = Math.min(255, Math.max(0, (num & 0x0000ff) + amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

export function createNewSession(avatar: Avatar, model: string): ChatSession {
  return {
    id: generateId(),
    title: 'New Conversation',
    messages: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    model,
    avatar,
  };
}

export function getSessionTitle(messages: Message[]): string {
  if (messages.length === 0) return 'New Conversation';
  const firstUserMessage = messages.find(m => m.role === 'user');
  return firstUserMessage 
    ? truncateText(firstUserMessage.content ?? '', 50)
    : 'New Conversation';
}

export async function streamResponse(
  prompt: string,
  onChunk: (chunk: string) => void,
  onComplete: () => void
): Promise<void> {
  // Simulated streaming for demo
  const response = `This is a simulated response to: "${prompt}". In a real implementation, this would connect to your backend API which would then stream responses from the selected LLM provider (OpenAI, Anthropic, Google, or Hugging Face). The streaming would happen in real-time, character by character, giving users immediate feedback.`;
  
  const words = response.split(' ');
  
  for (let i = 0; i < words.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 50));
    onChunk(words[i] + ' ');
  }
  
  onComplete();
}

export function exportChat(session: ChatSession): void {
  const chatText = session.messages
    .map(msg => `${msg.role.toUpperCase()}: ${msg.content}`)
    .join('\n\n');
  
  const blob = new Blob([chatText], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `chat-${session.id}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}
