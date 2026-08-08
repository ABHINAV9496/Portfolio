import { existsSync } from "fs";
import { join } from "path";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/data/content";

export const metadata: Metadata = {
  title: "EcoCharge — Case Study",
  description:
    "How EcoCharge solves EV trip planning: a concurrent-safe reservation engine, a geospatial data pipeline across 400+ cities, and an AI copilot served from a FastAPI microservice.",
};

const project = projects[0];

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
  const screenshotExists = existsSync(
    join(process.cwd(), "public", "projects", "ecocharge.png")
  );

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-secondary transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} />
          Back to projects
        </Link>

        <header className="mt-10">
          <p className="font-mono text-sm text-accent">case study · 01</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-secondary">
            {project.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-navy shadow-glow-sm transition-transform hover:scale-105 active:scale-95"
            >
              Live demo
              <ArrowUpRight size={16} />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-accent/60 hover:text-accent"
            >
              <GithubIcon size={16} />
              Source code
            </a>
          </div>
        </header>

        <section className="mt-20">
          <p className="font-mono text-xs text-accent">01 · problem</p>
          <h2 className="mt-2 text-2xl font-semibold">EV drivers can&apos;t plan trips around charging</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-secondary">
            Charging is the bottleneck of any EV road trip. Drivers need to know
            where chargers exist, whether a slot is free, and whether the route
            ahead — given their vehicle&apos;s charging curve and the weather —
            is actually feasible. That demands trustworthy station data and a
            planner that reasons about energy, not just distance.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-secondary">
            EcoCharge tackles this with a concurrent-safe reservation engine, a
            geospatial pipeline that unifies charger data across{" "}
            {metrics[0].value.toLowerCase()} cities and {metrics[1].value.toLowerCase()}{" "}
            highway corridors, and an AI copilot that answers trip questions in
            plain language.
          </p>
        </section>

        <section className="mt-16">
          <p className="font-mono text-xs text-accent">02 · architecture</p>
          <h2 className="mt-2 text-2xl font-semibold">
            {metrics[2].value} services, one compose file
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-accent">
                Django — core platform
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">
                RESTful APIs, JWT auth, the reservation engine with Razorpay
                payment flows, and PostgreSQL (PostGIS for spatial queries,
                pgvector for RAG embeddings).
              </p>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-accent">
                FastAPI — AI copilot
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">
                A separate microservice running the multi-tool LLM agent, RAG
                retrieval, and SSE streaming — isolated from the main request
                path.
              </p>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-accent">
                React (Vite + Tailwind) — frontend
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">
                Leaflet maps for routes and stations, Recharts dashboards,
                Google OAuth login, and real-time slot updates over WebSockets.
              </p>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-accent">
                Infra &amp; CI/CD
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">
                Redis for caching, queues, and session memory; Celery for async
                work; Django Channels (Daphne) for WebSockets; Docker Compose
                shipping to AWS EC2 via GHCR with GitHub Actions and Let&apos;s
                Encrypt SSL.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border/70 bg-card/50 px-3 py-1 font-mono text-[11px] text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <p className="font-mono text-xs text-accent">03 · key decisions</p>
          <h2 className="mt-2 text-2xl font-semibold">The calls that shaped it</h2>
          <ul className="mt-6 space-y-4">
            {decisions.map((item) => (
              <li key={item.title} className="flex gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-secondary">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <p className="font-mono text-xs text-accent">04 · challenges</p>
          <h2 className="mt-2 text-2xl font-semibold">
            Where it could have broken
          </h2>
          <ul className="mt-6 space-y-4">
            {challenges.map((item) => (
              <li key={item.title} className="flex gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-secondary">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <p className="font-mono text-xs text-accent">05 · screenshots</p>
          <h2 className="mt-2 text-2xl font-semibold">In action</h2>
          {screenshotExists ? (
            <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border/60">
              <Image
                src="/projects/ecocharge.png"
                alt="EcoCharge screenshot"
                fill
                sizes="(max-width: 1152px) 100vw, 1152px"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="mt-6 flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-card/40 text-subtle">
              <span className="font-mono text-xs uppercase tracking-widest">
                screenshot coming soon
              </span>
              <span className="text-xs">
                drop it at /public/projects/ecocharge.png
              </span>
            </div>
          )}
        </section>

        <section className="mt-16">
          <p className="font-mono text-xs text-accent">06 · impact</p>
          <h2 className="mt-2 text-2xl font-semibold">The numbers</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="card-glow rounded-2xl p-6 text-center">
                <p className="text-4xl font-bold text-accent">{metric.value}</p>
                <p className="mt-2 text-xs text-secondary">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-border/70 pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs text-secondary transition-colors hover:text-accent"
          >
            <ArrowLeft size={14} />
            Back to projects
          </Link>
          <p className="font-mono text-[11px] text-subtle">
            abhinav_a · case study
          </p>
        </footer>
      </div>
    </main>
  );
}
