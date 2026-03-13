// API Client for Prath Tech Chatbot Backend

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// ══════════════════════════════════════════════════════════════════
// TYPES
// ══════════════════════════════════════════════════════════════════

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

export interface ChatNode {
  nodeId: string;

  intro?: string;
  body?: string;
  message?: string;
  followUp?: string;

  options?: ChatOption[];
  features?: FeatureItem[];

  type: "message" | "form" | "slots" | "end" | "escalate";
  formType?: "lead" | "support" | "booking";
  metadata?: Record<string, unknown>;
}

export interface ChatSessionResponse {
  success: boolean;
  message: string;
  data: ChatNode;
}

export interface LeadData {
  companyName: string;
  industry?: string;
  numUsers?: string;
  productInterested?: string;
  email: string;
  mobile: string;
  notes?: string;
}

export interface BookingData {
  name: string;
  email: string;
  mobile?: string;
  companyName?: string;
  discussionType: string;
  bookingDate: string;
  timeSlot: string;
  notes?: string;
}

export interface SupportTicketData {
  customerName: string;
  customerEmail: string;
  customerMobile?: string;
  product?: string;
  issueType: string;
  description: string;
  priority?: "low" | "medium" | "high";
}

export interface TimeSlot {
  id: string;
  slot_time: string;
  slot_label: string;
  is_active: boolean;
}

export interface AvailableSlot {
  date: string;
  label: string;
  slots: TimeSlot[];
}

// ══════════════════════════════════════════════════════════════════
// API FUNCTIONS
// ══════════════════════════════════════════════════════════════════

/**
 * Start a new chat session
 **/

async function safeFetch(url: string, options?: RequestInit) {
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message || "Request failed");
  }

  return json.data;
}

export async function startChatSession(sessionId: string): Promise<ChatNode> {
  return safeFetch(`${API_URL}/api/chat/session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionId }),
  });
}

/**
 * Send a chat message or option selection
 */
export async function sendChatMessage(
  sessionId: string,
  nodeId: string,
  selectedOption?: string,
): Promise<ChatNode> {
  return safeFetch(`${API_URL}/api/chat/message`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionId, nodeId, selectedOption }),
  });
}

/**
 * Get a specific node directly
 */
export async function getNode(nodeId: string): Promise<ChatNode> {
  const res = await fetch(`${API_URL}/api/chat/node/${nodeId}`);
  const json: ChatSessionResponse = await res.json();

  if (!json.success) {
    throw new Error(json.message || "Node not found");
  }

  return json.data;
}

/**
 * Submit lead capture form
 */
export async function submitLead(data: LeadData): Promise<any> {
  const res = await fetch(`${API_URL}/api/leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message || "Failed to submit lead");
  }

  return json.data;
}

/**
 * Get available booking slots
 */
export async function getAvailableSlots(): Promise<AvailableSlot[]> {
  const res = await fetch(`${API_URL}/api/bookings/slots`);
  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message || "Failed to fetch slots");
  }

  return json.data;
}

/**
 * Create a booking
 */
export async function createBooking(data: BookingData): Promise<any> {
  const res = await fetch(`${API_URL}/api/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message || "Failed to create booking");
  }

  return json.data;
}

/**
 * Raise a support ticket
 */
export async function raiseTicket(data: SupportTicketData): Promise<any> {
  const res = await fetch(`${API_URL}/api/support/tickets`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message || "Failed to raise ticket");
  }

  return json.data;
}

/**
 * Health check
 */
export async function healthCheck(): Promise<boolean> {
  try {
    const res = await fetch(`${API_URL}/health`);
    const json = await res.json();
    return json.success;
  } catch {
    return false;
  }
}
