import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";
import { projects } from "@/data/content";

export const metadata: Metadata = {
  title: "EcoCharge — Case Study",
  description:
    "How EcoCharge solves EV trip planning: a concurrent-safe reservation engine, a geospatial data pipeline across 400+ cities, and an AI copilot served from a FastAPI microservice.",
  alternates: { canonical: "/projects/ecocharge" },
};

const project = projects.find((p) => p.slug === "ecocharge")!;

const problem = [
  "Charging is the bottleneck of any EV road trip. Drivers need to know where chargers exist, whether a slot is free, and whether the route ahead — given their vehicle's charging curve and the weather — is actually feasible. That demands trustworthy station data and a planner that reasons about energy, not just distance.",
  "EcoCharge tackles this with a concurrent-safe reservation engine, a geospatial pipeline that unifies charger data across 400+ cities and 55+ highway corridors, and an AI copilot that answers trip questions in plain language.",
];

const architecture = [
  {
    title: "Django — core platform",
    body: "RESTful APIs, JWT auth, the reservation engine with Razorpay payment flows, and PostgreSQL (PostGIS for spatial queries, pgvector for RAG embeddings).",
  },
  {
    title: "FastAPI — AI copilot",
    body: "A separate microservice running the multi-tool LLM agent, RAG retrieval, and SSE streaming — isolated from the main request path.",
  },
  {
    title: "React (Vite + Tailwind) — frontend",
    body: "Leaflet maps for routes and stations, Recharts dashboards, Google OAuth login, and real-time slot updates over WebSockets.",
  },
  {
    title: "Infra & CI/CD",
    body: "Redis for caching, queues, and session memory; Celery for async work; Django Channels (Daphne) for WebSockets; Docker Compose shipping to AWS EC2 via GHCR with GitHub Actions and Let's Encrypt SSL.",
  },
];

const decisions = [
  {
    title: "Concurrent-safe reservations",
    body: "Slot reservations lock rows with select_for_update() inside atomic transactions and detect overlapping time windows, so two drivers can never claim the same slot.",
  },
  {
    title: "AI copilot as a separate FastAPI microservice",
    body: "Kept the LLM agent out of the request path of the main Django app. It runs a multi-tool agent (Groq/Llama 3.3) with RAG over pgvector + SentenceTransformers, Redis-backed user memory, prompt-injection guards, and PII/Aadhaar redaction.",
  },
  {
    title: "Energy-aware route planning",
    body: "Routes are computed segment by segment using vehicle-specific charging curves, with OSRM routing, Redis-cached distance matrices, and concurrent weather fetching via ThreadPoolExecutor.",
  },
  {
    title: "Payments with verified integrity",
    body: "Razorpay handles payments and refunds with server-side signature verification, so every transaction is confirmed before a reservation is committed.",
  },
];

const challenges = [
  {
    title: "Concurrency under load",
    body: "Naive slot checks race under concurrent bookings — fixed with row locking inside transactions and window-overlap detection.",
  },
  {
    title: "Messy multi-source geodata",
    body: "Data came from 4 sources (Open Charge Map API, Kaggle, HuggingFace, synthetic highway generation via OSRM). India boundary validation, PostGIS spatial indexing, and deduplication keep the map clean.",
  },
  {
    title: "LLM latency and injection risk",
    body: "Streaming SSE responses with a quality verification loop keep the copilot responsive, while prompt-injection guards and PII redaction keep it safe.",
  },
  {
    title: "Real-time slot updates",
    body: "Live availability is pushed over WebSockets via Django Channels (Daphne) instead of polling, keeping the frontend in sync without hammering the API.",
  },
];

const metrics = [
  { value: "400+", label: "Cities covered" },
  { value: "55+", label: "Highway corridors" },
  { value: "6", label: "Containerized services" },
  { value: "4", label: "Data sources unified" },
];

export default function EcoChargeCaseStudy() {
  return (
    <CaseStudy
      project={project}
      problem={problem}
      architecture={architecture}
      decisions={decisions}
      challenges={challenges}
      metrics={metrics}
    />
  );
}
