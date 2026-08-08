export const profile = {
  name: "Abhinav A",
  title: "Python Full-Stack Developer",
  location: "Kozhikode, India",
  email: "abhinavramesh74@gmail.com",
  phone: "+91-9496247873",
  phoneHref: "tel:+919496247873",
  linkedin: "https://www.linkedin.com/in/abhinav-a-934696202",
  github: "https://github.com/ABHINAV9496",
  availability: "Open to remote · full-time roles",
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
      { name: "JavaScript", slug: "javascript" },
      { name: "SQL", fallback: "Database" },
      { name: "HTML", slug: "html5" },
      { name: "CSS", slug: "css" },
    ],
  },
  {
    title: "Frontend",
    icon: "Layout",
    skills: [
      { name: "React.js", slug: "react" },
      { name: "Vite", slug: "vite" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
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
      { name: "Celery", slug: "celery" },
      { name: "Django Channels", fallback: "Zap" },
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
    title: "AI & ML",
    icon: "BrainCircuit",
    skills: [
      { name: "Groq / Llama 3.3", fallback: "Sparkles" },
      { name: "pgvector (RAG)", slug: "postgresql" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "CloudCog",
    skills: [
      { name: "Docker", slug: "docker" },
      { name: "AWS EC2", fallback: "Cloud" },
      { name: "GitHub Actions", slug: "githubactions" },
      { name: "Nginx", slug: "nginx" },
      { name: "Git", slug: "git" },
    ],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Swagger (drf-spectacular)", slug: "swagger" },
      { name: "Google OAuth", slug: "google" },
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
      "Define and maintain API contracts between backend and frontend teams for smooth integration.",
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
  tagline: string;
  live: string;
  github: string;
  stack: string[];
  highlights: string[];
  image?: string;
  caseStudy?: string;
};

export const projects: Project[] = [
  {
    title: "EcoCharge",
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
    tagline:
      "Production e-commerce platform — a complete storefront and API deployed on AWS EC2 with RDS.",
    live: "https://crick-gear-ecommerce.vercel.app",
    github: "https://github.com/ABHINAV9496/CrickGear-Ecommerce",
    image: "/projects/cricgear.png",
    stack: ["Django", "DRF", "PostgreSQL", "React.js", "AWS EC2", "AWS RDS", "JWT"],
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
