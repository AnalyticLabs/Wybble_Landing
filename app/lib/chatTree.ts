// lib/chatTree.ts

import type { ChatOption, FeatureItem } from "@/types";

export interface ChatNode {
  nodeId: string;
  intro?: string;
  body?: string;
  followUp?: string;
  features?: FeatureItem[];
  options?: ChatOption[];
  type: "message" | "end";
}

export const chatTree: Record<string, ChatNode> = {
  // ─── WELCOME ──────────────────────────────────────────────────────────────
  welcome: {
    nodeId: "welcome",
    intro:
      "👋 Hello! Welcome to **Wybble.AI** — Innovating the Future with AI Solutions.",
    body: "We revolutionize businesses with cutting-edge technology, advanced analytics, and transformative AI products.\n\nHow can I help you today?",
    type: "message",
    options: [
      {
        label: "Our Services",
        value: "services",
        nextNode: "services",
        icon: "Layers",
      },
      {
        label: "Our Products",
        value: "products",
        nextNode: "products",
        icon: "Package",
      },
      {
        label: "Strategic Investments",
        value: "investments",
        nextNode: "investments",
        icon: "TrendingUp",
      },
      {
        label: "Careers",
        value: "careers",
        nextNode: "careers",
        icon: "Briefcase",
      },
      { label: "Our Team", value: "team", nextNode: "team", icon: "Users" },
      {
        label: "Contact Us",
        value: "contact",
        nextNode: "contact",
        icon: "Mail",
      },
    ],
  },

  // ─── SERVICES ─────────────────────────────────────────────────────────────
  services: {
    nodeId: "services",
    intro:
      "🚀 We offer **6 comprehensive AI-driven service areas** tailored to your business needs:",
    features: [
      {
        text: "Business & Growth Strategy — expert management solutions to drive growth, efficiency & long-term success",
        icon: "BarChart3",
      },
      {
        text: "Advanced Analytics & AI — transform data into actionable insights with ML & AI-driven solutions",
        icon: "Brain",
      },
      {
        text: "Research & Product Innovation — pioneering R&D and breakthrough, industry-leading solutions",
        icon: "FlaskConical",
      },
      {
        text: "Embedded & IoT Solutions — smart connected systems leveraging IoT for real-world applications",
        icon: "Cpu",
      },
      {
        text: "Software Development & Services — end-to-end software solutions from concept to execution",
        icon: "Code2",
      },
      {
        text: "Cybersecurity & Compliance — robust security strategies to safeguard your digital assets",
        icon: "ShieldCheck",
      },
    ],
    followUp: "Which service area would you like to explore further?",
    type: "message",
    options: [
      {
        label: "Analytics & AI",
        value: "svc_ai",
        nextNode: "svc_ai",
        icon: "Brain",
      },
      {
        label: "Software Development",
        value: "svc_software",
        nextNode: "svc_software",
        icon: "Code2",
      },
      {
        label: "IoT & Embedded",
        value: "svc_iot",
        nextNode: "svc_iot",
        icon: "Cpu",
      },
      {
        label: "Cybersecurity",
        value: "svc_cyber",
        nextNode: "svc_cyber",
        icon: "ShieldCheck",
      },
      {
        label: "Back to Main Menu",
        value: "menu",
        nextNode: "welcome",
        icon: "Home",
      },
    ],
  },

  svc_ai: {
    nodeId: "svc_ai",
    intro: "🧠 **Advanced Analytics & AI**",
    body: "We help organisations harness the full power of data through machine learning, deep learning, NLP, and computer vision. From predictive modelling and demand forecasting to custom GenAI pipelines — we turn raw data into measurable business value.",
    features: [
      {
        text: "Machine Learning & Deep Learning model development",
        icon: "Brain",
      },
      {
        text: "NLP, Computer Vision & Generative AI solutions",
        icon: "Sparkles",
      },
      {
        text: "Data pipelines, dashboards & analytics reporting",
        icon: "BarChart3",
      },
      { text: "Cloud-hosted AI systems on AWS & Azure", icon: "Cloud" },
    ],
    followUp: "Interested in an AI solution for your business?",
    type: "message",
    options: [
      {
        label: "See AI Products",
        value: "products",
        nextNode: "products",
        icon: "Package",
      },
      {
        label: "Contact Us",
        value: "contact",
        nextNode: "contact",
        icon: "Mail",
      },
      {
        label: "Back to Services",
        value: "services",
        nextNode: "services",
        icon: "Layers",
      },
    ],
  },

  svc_software: {
    nodeId: "svc_software",
    intro: "💻 **Software Development & Services**",
    body: "We build scalable, production-grade software — full-stack web apps, REST APIs, mobile platforms, and cloud infrastructure. Our stack covers React, Node.js, Python, MongoDB, Docker, Kubernetes and more.",
    features: [
      {
        text: "Full-stack web & mobile application development",
        icon: "Monitor",
      },
      { text: "REST API design & backend engineering", icon: "Server" },
      {
        text: "DevOps: Docker, Kubernetes, CI/CD pipelines",
        icon: "GitBranch",
      },
      { text: "Cloud deployment & architecture on AWS / Azure", icon: "Cloud" },
    ],
    followUp: "Have a project in mind? Let's build it together!",
    type: "message",
    options: [
      {
        label: "See Our Products",
        value: "products",
        nextNode: "products",
        icon: "Package",
      },
      {
        label: "Get in Touch",
        value: "contact",
        nextNode: "contact",
        icon: "Mail",
      },
      {
        label: "Back to Services",
        value: "services",
        nextNode: "services",
        icon: "Layers",
      },
    ],
  },

  svc_iot: {
    nodeId: "svc_iot",
    intro: "🔌 **Embedded & IoT Solutions**",
    body: "We design smart connected systems — from embedded firmware to cloud-connected IoT networks. Our work powers smart agriculture, livestock monitoring, surveillance, traffic systems, and autonomous navigation.",
    features: [
      {
        text: "IoT system architecture & embedded firmware development",
        icon: "Cpu",
      },
      { text: "Edge computing & real-time data processing", icon: "Zap" },
      { text: "Smart farming, cattle monitoring & agri-IoT", icon: "Leaf" },
      { text: "Autonomous vehicle sensors & LIDAR integration", icon: "Radar" },
    ],
    followUp: "Want to build a smart connected solution?",
    type: "message",
    options: [
      {
        label: "See IoT Products",
        value: "prod_iot",
        nextNode: "prod_iot",
        icon: "Package",
      },
      {
        label: "Contact Us",
        value: "contact",
        nextNode: "contact",
        icon: "Mail",
      },
      {
        label: "Back to Services",
        value: "services",
        nextNode: "services",
        icon: "Layers",
      },
    ],
  },

  svc_cyber: {
    nodeId: "svc_cyber",
    intro: "🔒 **Cybersecurity & Compliance**",
    body: "We help you build a robust security posture with vulnerability assessments, penetration testing, compliance frameworks (ISO, SOC 2, GDPR), security audits, and incident response planning.",
    features: [
      {
        text: "Vulnerability assessments & penetration testing",
        icon: "ShieldCheck",
      },
      { text: "Compliance frameworks: ISO, SOC 2, GDPR", icon: "FileCheck" },
      { text: "AI-powered malware & ransomware defense", icon: "Lock" },
      {
        text: "Security audits & incident response planning",
        icon: "AlertTriangle",
      },
    ],
    followUp: "Want to strengthen your security posture?",
    type: "message",
    options: [
      {
        label: "Get a Security Audit",
        value: "contact",
        nextNode: "contact",
        icon: "ShieldCheck",
      },
      {
        label: "Back to Services",
        value: "services",
        nextNode: "services",
        icon: "Layers",
      },
      { label: "Main Menu", value: "menu", nextNode: "welcome", icon: "Home" },
    ],
  },

  // ─── PRODUCTS ─────────────────────────────────────────────────────────────
  products: {
    nodeId: "products",
    intro:
      "📦 We have **13 innovative AI-powered products** across industries. Which category interests you?",
    type: "message",
    options: [
      {
        label: "Enterprise & HR (MonNit)",
        value: "prod_monnit",
        nextNode: "prod_monnit",
        icon: "Users",
      },
      {
        label: "Security & Surveillance (HawKeye)",
        value: "prod_hawkeye",
        nextNode: "prod_hawkeye",
        icon: "Eye",
      },
      {
        label: "Communication (ChatIT)",
        value: "prod_chatit",
        nextNode: "prod_chatit",
        icon: "MessageSquare",
      },
      {
        label: "AI & Analytics Tools",
        value: "prod_ai_tools",
        nextNode: "prod_ai_tools",
        icon: "Brain",
      },
      {
        label: "Health & Agriculture",
        value: "prod_health_agri",
        nextNode: "prod_health_agri",
        icon: "Leaf",
      },
      {
        label: "Space & Drone Tech",
        value: "prod_space",
        nextNode: "prod_space",
        icon: "Rocket",
      },
      {
        label: "Back to Main Menu",
        value: "menu",
        nextNode: "welcome",
        icon: "Home",
      },
    ],
  },

  prod_monnit: {
    nodeId: "prod_monnit",
    intro: "👥 **MonNit — AI-Powered HRMS & Project Tracking**",
    features: [
      {
        text: "Track employees & projects in real-time with intelligent AI insights",
        icon: "Users",
      },
      {
        text: "Integrated chat, attendance, revenue tracking & analytics",
        icon: "BarChart3",
      },
      {
        text: "Smart GenAI querying — one unified platform eliminates multiple tools",
        icon: "Brain",
      },
      {
        text: "Secure, real-time, AI-powered ecosystem for modern teams",
        icon: "Lock",
      },
    ],
    followUp:
      "MonNit is built for modern teams who want everything in one place. Interested in a demo?",
    type: "message",
    options: [
      {
        label: "Request a Demo",
        value: "contact",
        nextNode: "contact",
        icon: "Calendar",
      },
      {
        label: "Other Products",
        value: "products",
        nextNode: "products",
        icon: "Package",
      },
      { label: "Main Menu", value: "menu", nextNode: "welcome", icon: "Home" },
    ],
  },

  prod_hawkeye: {
    nodeId: "prod_hawkeye",
    intro: "👁️ **HawKeye — Intelligent AI Surveillance**",
    features: [
      {
        text: "Computer vision & GenAI for real-time individual identification & threat detection",
        icon: "Eye",
      },
      {
        text: "Automated secondary locking & security response on threat detection",
        icon: "Lock",
      },
      {
        text: "Optimizes storage — saves only critical events, not continuous recordings",
        icon: "HardDrive",
      },
      {
        text: "Designed for enterprises, campuses & high-security facilities",
        icon: "Building2",
      },
    ],
    followUp: "Want to upgrade your surveillance with AI intelligence?",
    type: "message",
    options: [
      {
        label: "Get in Touch",
        value: "contact",
        nextNode: "contact",
        icon: "Mail",
      },
      {
        label: "Other Products",
        value: "products",
        nextNode: "products",
        icon: "Package",
      },
      { label: "Main Menu", value: "menu", nextNode: "welcome", icon: "Home" },
    ],
  },

  prod_chatit: {
    nodeId: "prod_chatit",
    intro: "💬 **ChatIT — Secure Next-Gen Messaging Platform**",
    features: [
      {
        text: "Local language translation & AI-powered call summarization & transcription",
        icon: "Languages",
      },
      {
        text: "Doctor appointment booking via NiroG integration",
        icon: "Stethoscope",
      },
      {
        text: "End-to-end encrypted with enhanced data privacy & server-safe content protection",
        icon: "Lock",
      },
      {
        text: "Game calling & seamless multi-feature smart communication",
        icon: "MessageSquare",
      },
    ],
    followUp:
      "ChatIT redefines how teams and communities communicate. Interested?",
    type: "message",
    options: [
      {
        label: "Learn About NiroG",
        value: "prod_nirog",
        nextNode: "prod_nirog",
        icon: "HeartPulse",
      },
      {
        label: "Contact Sales",
        value: "contact",
        nextNode: "contact",
        icon: "Mail",
      },
      {
        label: "Other Products",
        value: "products",
        nextNode: "products",
        icon: "Package",
      },
    ],
  },

  prod_ai_tools: {
    nodeId: "prod_ai_tools",
    intro: "🤖 **AI & Analytics Products**",
    features: [
      {
        text: "De-Fore — GenAI demand forecasting: analyzes historical data + market factors for accurate inventory & revenue predictions",
        icon: "TrendingUp",
      },
      {
        text: "SearchBot — Agentic RAG architecture: real-time multilingual search across docs, images, audio, video & hybrid datasets",
        icon: "Search",
      },
      {
        text: "PratimBimba — multi-modal AI companion: text chat, custom AI avatar generation & voice cloning",
        icon: "Sparkles",
      },
      {
        text: "Py-Transfer Learning — Python package for high-accuracy real-time image classification with minimal training data",
        icon: "Code2",
      },
    ],
    followUp: "Which of these tools interests you most?",
    type: "message",
    options: [
      {
        label: "De-Fore & SearchBot",
        value: "prod_defo_search",
        nextNode: "prod_defo_search",
        icon: "Search",
      },
      {
        label: "PratimBimba",
        value: "prod_pratim",
        nextNode: "prod_pratim",
        icon: "Sparkles",
      },
      {
        label: "Request a Demo",
        value: "contact",
        nextNode: "contact",
        icon: "Calendar",
      },
      {
        label: "Other Products",
        value: "products",
        nextNode: "products",
        icon: "Package",
      },
    ],
  },

  prod_defo_search: {
    nodeId: "prod_defo_search",
    intro: "📊 **De-Fore & SearchBot — Deep Dive**",
    features: [
      {
        text: "De-Fore: GenAI-powered demand forecasting — optimizes inventory, revenue & strategic decisions with actionable insights",
        icon: "TrendingUp",
      },
      {
        text: "SearchBot: Agentic RAG — secure, privacy-first, multilingual enterprise search across all data types",
        icon: "Search",
      },
      {
        text: "Both products are enterprise-ready with real-time analytics & intelligent reporting",
        icon: "BarChart3",
      },
    ],
    followUp: "Want to see a live demo or discuss enterprise integration?",
    type: "message",
    options: [
      {
        label: "Request Demo",
        value: "contact",
        nextNode: "contact",
        icon: "Calendar",
      },
      {
        label: "Other Products",
        value: "products",
        nextNode: "products",
        icon: "Package",
      },
      { label: "Main Menu", value: "menu", nextNode: "welcome", icon: "Home" },
    ],
  },

  prod_pratim: {
    nodeId: "prod_pratim",
    intro: "✨ **PratimBimba — Multi-Modal AI Companion**",
    features: [
      {
        text: "Chat in text mode with an intelligent conversational AI",
        icon: "MessageSquare",
      },
      {
        text: "Generate custom AI avatars tailored to your persona",
        icon: "User",
      },
      {
        text: "Interact using your own cloned voice for immersive experiences",
        icon: "Mic",
      },
      {
        text: "Seamlessly switch between conversation, image generation & voice modes",
        icon: "Sparkles",
      },
    ],
    followUp:
      "PratimBimba creates a truly personal AI experience. Want to try it?",
    type: "message",
    options: [
      {
        label: "Get in Touch",
        value: "contact",
        nextNode: "contact",
        icon: "Mail",
      },
      {
        label: "Other Products",
        value: "products",
        nextNode: "products",
        icon: "Package",
      },
      { label: "Main Menu", value: "menu", nextNode: "welcome", icon: "Home" },
    ],
  },

  prod_health_agri: {
    nodeId: "prod_health_agri",
    intro: "🌿 **Health & Agriculture Products**",
    features: [
      {
        text: "NiroG — AI health assistant: specialist chatbots (Neurology, Cardiology & more), appointment booking & doctor portal",
        icon: "HeartPulse",
      },
      {
        text: "AgriTech — AI-driven smart farming: IoT + predictive analytics for crop health, soil & resource management",
        icon: "Leaf",
      },
      {
        text: "Cattle Monitoring — real-time livestock health, movement & behavioral tracking via IoT & AI analytics",
        icon: "Activity",
      },
    ],
    followUp: "Which area would you like to explore?",
    type: "message",
    options: [
      {
        label: "NiroG — Health AI",
        value: "prod_nirog",
        nextNode: "prod_nirog",
        icon: "HeartPulse",
      },
      {
        label: "AgriTech & Cattle",
        value: "prod_agri",
        nextNode: "prod_agri",
        icon: "Leaf",
      },
      {
        label: "Back to Products",
        value: "products",
        nextNode: "products",
        icon: "Package",
      },
    ],
  },

  prod_nirog: {
    nodeId: "prod_nirog",
    intro: "🏥 **NiroG — AI-Powered Health Assistant**",
    features: [
      {
        text: "Specialist chatbots: Neurology, Cardiology, General Medicine & more departments",
        icon: "Brain",
      },
      {
        text: "Appointment booking, report uploads & AI-generated medical insights",
        icon: "Calendar",
      },
      {
        text: "Conversation summaries for every consultation",
        icon: "FileText",
      },
      {
        text: "Dedicated doctor portal for managing patients, consultations & diagnostics",
        icon: "Stethoscope",
      },
    ],
    followUp:
      "NiroG bridges patients and doctors intelligently. Want to partner with us?",
    type: "message",
    options: [
      {
        label: "Partner with NiroG",
        value: "contact",
        nextNode: "contact",
        icon: "Handshake",
      },
      {
        label: "Other Products",
        value: "products",
        nextNode: "products",
        icon: "Package",
      },
      { label: "Main Menu", value: "menu", nextNode: "welcome", icon: "Home" },
    ],
  },

  prod_agri: {
    nodeId: "prod_agri",
    intro: "🌾 **AgriTech & Cattle Monitoring**",
    features: [
      {
        text: "AgriTech: AI-driven crop health, soil & weather insights for smarter, sustainable farming decisions",
        icon: "Leaf",
      },
      {
        text: "Cattle Monitoring: real-time herd health, movement & early illness detection via IoT & AI",
        icon: "Activity",
      },
      {
        text: "Both products empower farmers with data-backed, productivity-improving decisions",
        icon: "BarChart3",
      },
    ],
    followUp:
      "Empowering farmers with technology. Interested in a demo or partnership?",
    type: "message",
    options: [
      {
        label: "Request a Demo",
        value: "contact",
        nextNode: "contact",
        icon: "Calendar",
      },
      {
        label: "Other Products",
        value: "products",
        nextNode: "products",
        icon: "Package",
      },
      { label: "Main Menu", value: "menu", nextNode: "welcome", icon: "Home" },
    ],
  },

  prod_space: {
    nodeId: "prod_space",
    intro: "🚀 **Space & Drone Technology Products**",
    features: [
      {
        text: "Space Analytics — AI satellite imagery analysis for debris detection & critical space event monitoring",
        icon: "Globe",
      },
      {
        text: "AstroLens — partial aperture telescopic imaging + AI reconstruction for compact, cost-efficient space imaging",
        icon: "Focus",
      },
      {
        text: "Drone & Robotics — AI-powered autonomous systems for defense surveillance & high-precision missions",
        icon: "Radar",
      },
    ],
    followUp:
      "These are advanced research-grade products. Interested in collaboration or procurement?",
    type: "message",
    options: [
      {
        label: "Get in Touch",
        value: "contact",
        nextNode: "contact",
        icon: "Mail",
      },
      {
        label: "Other Products",
        value: "products",
        nextNode: "products",
        icon: "Package",
      },
      { label: "Main Menu", value: "menu", nextNode: "welcome", icon: "Home" },
    ],
  },

  prod_iot: {
    nodeId: "prod_iot",
    intro: "🔌 **IoT & Embedded Products**",
    features: [
      {
        text: "AgriTech — smart farming with IoT sensors, predictive analytics & real-time crop monitoring",
        icon: "Leaf",
      },
      {
        text: "Cattle Monitoring — AI + IoT livestock health, movement & behavioral tracking",
        icon: "Activity",
      },
      {
        text: "Drone & Robotics — autonomous AI-powered systems for defense & surveillance",
        icon: "Radar",
      },
    ],
    followUp: "Want to explore an IoT solution for your industry?",
    type: "message",
    options: [
      {
        label: "AgriTech & Cattle",
        value: "prod_agri",
        nextNode: "prod_agri",
        icon: "Leaf",
      },
      {
        label: "Drone & Robotics",
        value: "prod_space",
        nextNode: "prod_space",
        icon: "Rocket",
      },
      {
        label: "Contact Us",
        value: "contact",
        nextNode: "contact",
        icon: "Mail",
      },
      {
        label: "Back to Products",
        value: "products",
        nextNode: "products",
        icon: "Package",
      },
    ],
  },

  // ─── INVESTMENTS ──────────────────────────────────────────────────────────
  investments: {
    nodeId: "investments",
    intro: "📈 **Strategic Investments by Wybble.AI**",
    body: "We invest in ventures that create a sustainable and impactful future across technology, mobility, and beyond:",
    features: [
      {
        text: "Fluxx.EV — leading innovation in electric mobility & sustainable transportation",
        icon: "Zap",
      },
      {
        text: "Nimai Nitai Enterprises — innovative solutions driving industry growth & operational efficiency",
        icon: "Building2",
      },
      {
        text: "Analytic Labs — revolutionizing the power of data with actionable business intelligence",
        icon: "BarChart3",
      },
      {
        text: "Shree Chaitanya Restaurants — fusing traditional cuisine with modern dining experiences",
        icon: "UtensilsCrossed",
      },
    ],
    followUp: "Interested in investment opportunities or partnerships?",
    type: "message",
    options: [
      {
        label: "Investment Enquiry",
        value: "contact",
        nextNode: "contact",
        icon: "TrendingUp",
      },
      {
        label: "Our Services",
        value: "services",
        nextNode: "services",
        icon: "Layers",
      },
      { label: "Main Menu", value: "menu", nextNode: "welcome", icon: "Home" },
    ],
  },

  // ─── CAREERS ──────────────────────────────────────────────────────────────
  careers: {
    nodeId: "careers",
    intro: "💼 **Join the Wybble.AI Team**",
    body: "We are building intelligent systems and real-world impactful technology. Our team spans AI research, full-stack engineering, embedded systems, data science, cybersecurity, and more.",
    features: [
      {
        text: "Current opening: Cloud & DevOps Engineer (Remote, Full-time, 2+ years experience)",
        icon: "Cloud",
      },
      {
        text: "Key stack: AWS, Docker, Kubernetes, Jenkins, GitLab CI, Terraform, Python, Bash",
        icon: "Code2",
      },
      {
        text: "Responsibilities: CI/CD pipelines, cloud infra, monitoring, containerization & DevOps automation",
        icon: "GitBranch",
      },
      {
        text: "Offices: Mumbai, Bangalore, Bhubaneswar, Delhi, Kolkata, Balasore, Trivandrum, Dublin & Parma",
        icon: "MapPin",
      },
    ],
    followUp: "Want to apply or learn more about life at Wybble.AI?",
    type: "message",
    options: [
      {
        label: "Apply on LinkedIn",
        value: "careers_apply",
        nextNode: "careers_apply",
        icon: "Linkedin",
      },
      {
        label: "Email Resume",
        value: "contact",
        nextNode: "contact",
        icon: "Mail",
      },
      { label: "Main Menu", value: "menu", nextNode: "welcome", icon: "Home" },
    ],
  },

  careers_apply: {
    nodeId: "careers_apply",
    intro: "🔗 **Apply for Cloud & DevOps Engineer**",
    body: "You can apply directly on LinkedIn:\nhttps://www.linkedin.com/jobs/view/4293847780/\n\nOr email your resume to **solutions.wybbleai@gmail.com** with the subject line: 'Cloud & DevOps Engineer Application'.",
    followUp: "We look forward to hearing from you! 🚀",
    type: "message",
    options: [
      {
        label: "Our Products",
        value: "products",
        nextNode: "products",
        icon: "Package",
      },
      { label: "Main Menu", value: "menu", nextNode: "welcome", icon: "Home" },
    ],
  },

  // ─── TEAM ─────────────────────────────────────────────────────────────────
  team: {
    nodeId: "team",
    intro: "👥 **The Minds Behind Wybble.AI**",
    body: "Our leadership and team bring together deep expertise across AI, engineering, research, and business:",
    features: [
      { text: "Arpana Alka — MD & CEO", icon: "User" },
      { text: "Mrs. Brajeswari Das Adhikari — Founder", icon: "User" },
      { text: "Jyoti Prakash Sahoo — Full Stack Engineer", icon: "Code2" },
      {
        text: "Subhra Jyoti Lahiri — Backend & Computer Science",
        icon: "Server",
      },
      { text: "Dr. Angika Bulbul — Mentor of Space Tech", icon: "Rocket" },
      { text: "Aritra Roy — AI, NLP & Computer Vision", icon: "Brain" },
      { text: "Dibyajyoti Sahoo — Full Stack Developer", icon: "Monitor" },
      {
        text: "Tanmay Dash — Research Analyst & Data Scientist",
        icon: "BarChart3",
      },
      { text: "Luqmaan Rasheed — Embedded Engineer", icon: "Cpu" },
      { text: "Pursharth Joshi — Full Stack Developer", icon: "Code2" },
    ],
    followUp: "Want to work with us or learn about our culture?",
    type: "message",
    options: [
      {
        label: "View Careers",
        value: "careers",
        nextNode: "careers",
        icon: "Briefcase",
      },
      {
        label: "Contact Us",
        value: "contact",
        nextNode: "contact",
        icon: "Mail",
      },
      { label: "Main Menu", value: "menu", nextNode: "welcome", icon: "Home" },
    ],
  },

  // ─── CONTACT ──────────────────────────────────────────────────────────────
  contact: {
    nodeId: "contact",
    intro: "📬 **Get in Touch with Wybble.AI**",
    body: "We'd love to hear from you! Reach out through any of the following:",
    features: [
      { text: "Email: solutions.wybbleai@gmail.com", icon: "Mail" },
      { text: "Email: solutions.analyticlabs@gmail.com", icon: "Mail" },
      { text: "Phone: +91 9591957282", icon: "Phone" },
      { text: "Phone: +91 8460578783", icon: "Phone" },
      { text: "WhatsApp: wa.me/+919591957282", icon: "MessageCircle" },
      { text: "LinkedIn: linkedin.com/company/wybbleai", icon: "Linkedin" },
      { text: "Instagram: @monnit_wybble.ai", icon: "Instagram" },
    ],
    followUp:
      "Our team typically responds within 1 business day. Is there anything else I can help you with?",
    type: "message",
    options: [
      {
        label: "Our Services",
        value: "services",
        nextNode: "services",
        icon: "Layers",
      },
      {
        label: "Our Products",
        value: "products",
        nextNode: "products",
        icon: "Package",
      },
      { label: "Main Menu", value: "menu", nextNode: "welcome", icon: "Home" },
    ],
  },
};

export function getNode(nodeId: string): ChatNode {
  return chatTree[nodeId] ?? chatTree["welcome"];
}
