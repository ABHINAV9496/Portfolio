export const profile = {
  name: "Abhinav A",
  title: "Python Full-Stack Developer",
  location: "Kozhikode, India",
  email: "abhinavramesh74@gmail.com",
  phone: "+91-9496247873",
  phoneHref: "tel:+919496247873",
  linkedin: "https://www.linkedin.com/in/abhinav-a-934696202",
  github: "https://github.com/ABHINAV9496",
  availability: "Open to full-time roles and freelance opportunities.",
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

export type Skill = {
  name: string;
  slug?: string;
  fallback?: string;
};

export type SkillGroup = { title: string; icon: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: "Code2",
    skills: [
      { name: "Python", slug: "python" },
      { name: "TypeScript", slug: "typescript" },
      { name: "JavaScript", slug: "javascript" },
      { name: "SQL", fallback: "Database" },
    ],
  },
  {
    title: "Frontend",
    icon: "Layout",
    skills: [
      { name: "React.js", slug: "react" },
      { name: "Next.js", slug: "nextjs" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Vite", slug: "vite" },
      { name: "Leaflet", slug: "leaflet" },
      { name: "Axios", slug: "axios" },
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: [
      { name: "Django", slug: "django" },
      { name: "Django REST Framework", slug: "django" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "SQLAlchemy", fallback: "Database" },
      { name: "Celery", slug: "celery" },
      { name: "Django Channels", fallback: "Zap" },
      { name: "Microservices", fallback: "Server" },
      { name: "WebSockets", fallback: "Waypoints" },
      { name: "REST API Design", fallback: "Braces" },
    ],
  },
  {
    title: "Database",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "PostGIS", slug: "postgresql" },
      { name: "pgvector", slug: "postgresql" },
      { name: "Redis", slug: "redis" },
    ],
  },
  {
    title: "Security & Auth",
    icon: "Lock",
    skills: [
      { name: "JWT / OAuth2", fallback: "Lock" },
      { name: "RBAC", fallback: "Shield" },
      { name: "MFA", fallback: "KeyRound" },
      { name: "Google Auth", slug: "google" },
    ],
  },
  {
    title: "AI & ML",
    icon: "BrainCircuit",
    skills: [
      { name: "Groq / Llama 3.3", fallback: "Sparkles" },
      { name: "RAG (pgvector)", slug: "postgresql" },
      { name: "LLM Agents", fallback: "Network" },
      { name: "LangGraph", fallback: "GitBranch" },
      { name: "Prompt Engineering", fallback: "Terminal" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "CloudCog",
    skills: [
      { name: "Docker", slug: "docker" },
      { name: "AWS EC2", fallback: "Cloud" },
      { name: "AWS RDS", fallback: "Database" },
      { name: "GitHub Actions", slug: "githubactions" },
      { name: "CI/CD", fallback: "Rocket" },
      { name: "Nginx", slug: "nginx" },
      { name: "Git", slug: "git" },
    ],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Swagger (drf-spectacular)", slug: "swagger" },
      { name: "Razorpay", slug: "razorpay" },
      { name: "Postman", slug: "postman" },
    ],
  },
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
      "Engineer RESTful APIs with Django and DRF for live production modules, enforcing JWT auth, role-based access, and input validation.",
      "Eliminate N+1 query patterns with select_related / prefetch_related, cutting API response times.",
      "Verify API flows end-to-end in Postman before release and run background jobs, caching, and containerization with Celery, Redis, and Docker.",
    ],
  },
  {
    role: "Diploma Trainee Engineer",
    company: "Bajaj Auto Pvt Ltd",
    location: "Pune, India",
    period: "Dec 2021 — Dec 2022",
    kind: "pre-software",
    highlights: [
      "Tracked production-line metrics and diagnosed mechanical faults in a high-volume manufacturing environment.",
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
      "AI-native, multi-tenant ERP platform — identity, operations, finance, and an AI agent core in one event-driven monorepo, built by a 4-person team.",
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
