export const profile = {
  name: "Abhinav A",
  title: "Python Full-Stack Developer",
  location: "Kozhikode, India",
  email: "abhinavramesh74@gmail.com",
  phone: "+91-9496247873",
  phoneHref: "tel:+919496247873",
  linkedin: "https://www.linkedin.com/in/abhinav-a-934696202",
  github: "https://github.com/ABHINAV9496",
  availability: "Open To Full-time Roles And Freelance Opportunities.",
  heroLead:
    "I'm Abhinav — a Python full-stack developer. I design clean REST APIs with Django & FastAPI, optimize Postgres and Redis performance, and ship real-time & AI-powered features from database schema to deployment.",
  summary:
    "Python Full-Stack Developer with expertise in building scalable, production-ready web applications using Django, FastAPI, PostgreSQL, Redis, Docker, AWS, and React.js. Experienced in designing high-performance REST APIs, geospatial services, real-time systems with WebSockets, secure authentication, AI-powered features, and cloud-native architectures.",
  roles: [
    "Python Full-Stack Developer",
    "Django & FastAPI Engineer",
    "Real-Time Systems Builder",
    "AI-Powered Web Architect",
  ],
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import { Boxes, Network, Radio, FileSearch, MessageSquareCode, type LucideIcon } from "lucide-react";
import {
  SiCelery,
  SiDjango,
  SiDocker,
  SiFastapi,
  SiGithub,
  SiGithubactions,
  SiGit,
  SiJavascript,
  SiJsonwebtokens,
  SiLangchain,
  SiLanggraph,
  SiNextdotjs,
  SiNginx,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedis,
  SiSqlalchemy,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const SKILL_CATEGORIES = [
  "Languages",
  "Frontend",
  "Backend",
  "Database",
  "AI & ML",
  "Cloud & DevOps",
  "Tools",
] as const;

export type SkillCategory = (typeof SKILL_CATEGORIES)[number];

export type Skill = {
  name: string;
  category: SkillCategory;
  Icon: IconType | LucideIcon;
  color: string;
  scale?: number;
};

export const skills: Skill[] = [
  { name: "Python", category: "Languages", Icon: SiPython, color: "#3776AB" },
  { name: "TypeScript", category: "Languages", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", category: "Languages", Icon: SiJavascript, color: "#F7DF1E" },

  { name: "React.js", category: "Frontend", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", category: "Frontend", Icon: SiNextdotjs, color: "currentColor" },
  { name: "Tailwind CSS", category: "Frontend", Icon: SiTailwindcss, color: "#06B6D4", scale: 1.25 },

  { name: "Django", category: "Backend", Icon: SiDjango, color: "currentColor", scale: 1.1 },
  { name: "FastAPI", category: "Backend", Icon: SiFastapi, color: "#009688" },
  { name: "Celery", category: "Backend", Icon: SiCelery, color: "#37814A" },
  { name: "JWT", category: "Backend", Icon: SiJsonwebtokens, color: "currentColor" },
  { name: "Microservices", category: "Backend", Icon: Boxes, color: "currentColor" },
  { name: "REST APIs", category: "Backend", Icon: Network, color: "currentColor" },
  { name: "WebSockets", category: "Backend", Icon: Radio, color: "currentColor" },

  { name: "PostgreSQL", category: "Database", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Redis", category: "Database", Icon: SiRedis, color: "#FF4438" },
  { name: "SQLAlchemy", category: "Database", Icon: SiSqlalchemy, color: "#D71F00", scale: 1.5 },

  { name: "RAG", category: "AI & ML", Icon: FileSearch, color: "currentColor" },
  { name: "LangChain", category: "AI & ML", Icon: SiLangchain, color: "currentColor", scale: 1.15 },
  { name: "LangGraph", category: "AI & ML", Icon: SiLanggraph, color: "currentColor", scale: 1.15 },
  { name: "Prompt Engineering", category: "AI & ML", Icon: MessageSquareCode, color: "currentColor" },

  { name: "Docker", category: "Cloud & DevOps", Icon: SiDocker, color: "#2496ED", scale: 1.15 },
  { name: "AWS", category: "Cloud & DevOps", Icon: FaAws, color: "#FF9900", scale: 1.25 },
  { name: "CI/CD", category: "Cloud & DevOps", Icon: SiGithubactions, color: "#2088FF" },
  { name: "Nginx", category: "Cloud & DevOps", Icon: SiNginx, color: "#009639" },

  { name: "Git", category: "Tools", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", category: "Tools", Icon: SiGithub, color: "currentColor" },
  { name: "Postman", category: "Tools", Icon: SiPostman, color: "#FF6C37" },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  kind?: "pre-software";
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: "Full-Stack Developer Intern",
    company: "Bridgeon Solutions",
    location: "Kozhikode, India",
    period: "Sep 2025 — Present",
    current: true,
    highlights: [
      "Ship production REST APIs end-to-end with Django REST Framework — Models, Serializers, Permissions, and Postman-verified releases; services containerized with Docker.",
      "Architect secure access with JWT authentication, role-based permissions, and strict input validation across live production modules.",
      "Eliminate N+1 query patterns with select_related / prefetch_related to cut API response times; offload background work to Celery and cache hot reads in Redis.",
      "Deliver in a structured Agile/Scrum workflow — Sprint Planning, Daily standups, and PR-based code reviews.",
    ],
  },
  {
    role: "Diploma Trainee Engineer",
    company: "Bajaj Auto Pvt Ltd",
    location: "Pune, India",
    period: "Dec 2021 — Dec 2022",
    highlights: [
      "Built vehicles on a high-volume assembly line, executing fitment and assembly to exact SOP, torque, and spec requirements to hit daily build targets.",
      "Ran in-line quality inspections and root-cause diagnosis, catching defects before they reached the next station to protect throughput and product quality.",
      "Worked to tight takt times with disciplined shift handovers, 5S, and safety standards in a zero-tolerance manufacturing environment.",
    ],
  },
];

export type Project = {
  title: string;
  slug: string;
  tagline: string;
  live?: string;
  github: string;
  badge?: string;
  stack: string[];
  highlights: string[];
  image?: string;
  caseStudy?: string;
};

export const projects: Project[] = [
  {
    title: "Skyrict",
    slug: "skyrict",
    tagline:
      "An AI-native, multi-tenant ERP — identity, operations, finance, and an AI agent core in one event-driven monorepo that treats each company as a node in a live market.",
    github: "https://github.com/nkswalih/skyrict",
    live: "https://skyrict.in/",
    badge: "Group Project",
    image: "/projects/skyrict.png",
    caseStudy: "/projects/skyrict",
    stack: [
      "FastAPI",
      "SQLAlchemy 2.0",
      "PostgreSQL 16",
      "RLS",
      "Redis",
      "Celery",
      "Next.js 15",
      "React 19",
      "shadcn/ui",
      "Docker",
      "GitHub Actions",
    ],
    highlights: [
      "Multi-tenant ERP where every query is scoped to the current tenant via PostgreSQL Row-Level Security (SET app.current_tenant_id) and cross-checked against the JWT tenant_id claim — no bypass path.",
      "Monorepo of three FastAPI services (identity with JWT, MFA/TOTP and audit; core ERP covering inventory, CRM, sales, finance, HR and payroll; provider-agnostic AI agent) behind a Next.js 15 BFF with 3+ services and shared packages.",
      "AI-powered operations: natural-language inventory queries, restock suggestions, and stock anomaly detection against any OpenAI-compatible endpoint (OpenRouter, Groq, Ollama), egressed through core so permissions are enforced before the BFF forwards.",
      "Event-driven by contract (identity.user.created, finance.journal_entry.posted) with the Kafka bus deliberately deferred until 3+ services actually need decoupled async events.",
      "Team engineering process: PR-based workflow with CODEOWNERS review routing, path-filtered GitHub Actions CI, pre-commit hooks, gitleaks secret scanning, and Playwright E2E suites covering tenant isolation and token reuse.",
      "Built the Inventory & Warehouse module for a multi-tenant SaaS ERP, with per-company isolation via PostgreSQL Row-Level Security, composite tenant keys, and middleware-resolved tenant context.",
      "Designed an immutable stock-movement ledger (counts derived from movements, never set) with atomic warehouse transfers, no-negative-stock constraints, and one-time low-stock alerts.",
      "Added AI features that suggest, never execute: restock suggestions with human approval, stock-anomaly detection, and semantic search via pgvector.",
      "Cut a key dashboard report's p95 latency from 42 ms to 16.6 ms (CI-benchmarked) and maintained 3,300+ automated tests and 80+ migrations on a Docker + GitHub Actions stack.",
    ],
  },
  {
    title: "EcoCharge",
    slug: "ecocharge",
    tagline:
      "Smart EV charging & trip planning platform with a concurrent-safe reservation engine and an AI copilot.",
    live: "https://ecocharge-nine.vercel.app",
    github: "https://github.com/ABHINAV9496/Ecocharge",
    image: "/projects/ecocharge.png",
    caseStudy: "/projects/ecocharge",
    stack: [
      "Django",
      "FastAPI",
      "PostgreSQL",
      "PostGIS",
      "pgvector",
      "Redis",
      "Celery",
      "Django Channels",
      "Daphne",
      "WebSockets",
      "Docker",
      "React",
      "Vite",
      "Tailwind CSS",
      "Leaflet",
      "Recharts",
    ],
    highlights: [
      "Concurrent-safe slot reservation engine using select_for_update() inside atomic transactions with overlapping time-window detection; Razorpay integration for payments, refunds, and signature verification.",
      "FastAPI microservice with a multi-tool LLM agent (Groq/Llama 3.3): RAG via pgvector + SentenceTransformers, Redis-backed user memory, prompt-injection guards, PII/Aadhaar redaction, and SSE-streaming responses with a quality verification loop.",
      "Segment-by-segment energy-aware route planner using vehicle-specific charging curves, OSRM routing with Redis-cached distance matrices, and concurrent weather fetching via ThreadPoolExecutor.",
      "Data pipeline ingesting from 4 sources (Open Charge Map API, Kaggle, HuggingFace, synthetic highway generation via OSRM) with India boundary validation, PostGIS spatial indexing, and deduplication across 400+ cities and 55+ highway corridors.",
      "React (Vite + Tailwind) frontend with Leaflet route/station maps, Recharts dashboards, and Google OAuth; 6 containerized services with GitHub Actions CI/CD to AWS EC2 via GHCR, Let's Encrypt SSL, and real-time slot updates via Daphne-served Django Channels + WebSockets.",
    ],
  },
  {
    title: "CricGear",
    slug: "cricgear",
    tagline:
      "Production e-commerce platform — a complete storefront and API deployed on AWS EC2 with RDS.",
    live: "https://crick-gear-ecommerce.vercel.app",
    github: "https://github.com/ABHINAV9496/CrickGear-Ecommerce",
    image: "/projects/cricgear.png",
    caseStudy: "/projects/cricgear",
    stack: [
      "Django",
      "DRF",
      "PostgreSQL",
      "React.js",
      "AWS EC2",
      "AWS RDS",
      "JWT",
    ],
    highlights: [
      "Full e-commerce backend deployed on AWS EC2 with PostgreSQL on RDS, independently configuring all infrastructure (security groups, environment settings).",
      "15+ REST endpoints with JWT auth, role-based access control, and field-level validation, verified end-to-end via Postman.",
      "React.js frontend integrated with Django APIs for product listing, cart, and order placement (React Hooks + Axios).",
      "Handled the full deployment lifecycle: EC2 provisioning, RDS setup, and environment hardening.",
    ],
  },
];

export type Education = {
  degree: string;
  school: string;
  period: string;
  note?: string;
};

export const education: Education[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Manipal University Jaipur",
    period: "2024 — 2027",
  },
  {
    degree: "Diploma in Mechanical Engineering (Lateral Entry)",
    school: "Kerala Govt Polytechnic College",
    period: "2019 — 2021",
    note: "CGPA 8.57 / 10",
  },
];
