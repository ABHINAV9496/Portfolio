import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";
import { projects } from "@/data/content";

export const metadata: Metadata = {
  title: "Skyrict — Case Study",
  description:
    "How Skyrict ships an AI-native, multi-tenant ERP platform: a FastAPI identity microservice, an event-driven ERP core, and a provider-agnostic AI agent service behind a Next.js 15 BFF — built by a 4-person team.",
  alternates: { canonical: "/projects/skyrict" },
};

const project = projects.find((p) => p.slug === "skyrict")!;

const problem = [
  "Traditional ERP sees a company as a closed loop: inventory in, orders out, ledgers balanced — blind to the market moving around it. Skyrict inverts that. It treats a company as a node in a live global market, pulling in external signals, correlating them against internal operations, and letting AI agents act on the synthesis.",
  "That ambition sits on a ground floor that has to be right first: identity, multi-tenancy, and one API contract every service shares. Four developers, one repo — so security boundaries, code-review gates, and CI quality bars were part of the product, never an afterthought.",
];

const architecture = [
  {
    title: "Identity microservice — FastAPI",
    body: "Owns who you are: AuthN/AuthZ, TOTP-based MFA, sessions, and audit logging. Strict layering (api → services → repositories → models) keeps business logic out of the database, verifies JWTs in exactly one place, and carries tenant context through a ContextVar.",
  },
  {
    title: "Core ERP — FastAPI + SQLAlchemy 2.0",
    body: "The ERP itself: inventory, CRM, sales, finance, HR, and payroll — plus the /api/v1/ai proxy that fronts the agent service. Async SQLAlchemy, Alembic migrations, and PostgreSQL 16 with Row-Level Security underneath.",
  },
  {
    title: "ai-agent service",
    body: "Turns plain language into operations: inventory queries, restock suggestions, and stock-anomaly detection against any OpenAI-compatible endpoint (OpenRouter, Groq, Ollama). Nothing reaches it directly — Core enforces permissions and relays the JWT.",
  },
  {
    title: "Next.js 15 web + BFF",
    body: "A React 19 / shadcn/ui frontend backed by a BFF that whitelists Core segments and proxies them — so the frontend↔backend contract stays clean and nothing unapproved slips through. pnpm + Turborepo run the workspace.",
  },
  {
    title: "Infra & CI/CD",
    body: "Docker Compose for local dev, fronted by an nginx proxy that derives tenant slugs from subdomains (acme.localhost, globex.localhost) — so multi-tenant routing behaves the same in dev and production. GitHub Actions with path-filtered CI, pre-commit hooks, gitleaks, and bundle-size baselines.",
  },
];

const decisions = [
  {
    title: "PostgreSQL RLS as the multi-tenancy boundary",
    body: "Multi-tenancy lives in the database, not in application logic. Every query is scoped to the current tenant via SET app.current_tenant_id, with no bypass path: the tenant is resolved once per request in middleware and cross-checked against the JWT's tenant_id claim.",
  },
  {
    title: "Event-driven by contract, Kafka deferred",
    body: "Services already speak in structured events (identity.user.created, finance.journal_entry.posted) — but the bus stays out until 3+ services genuinely need decoupled async flow. The contract is ready; the MVP stays small and testable.",
  },
  {
    title: "Strict service layering",
    body: "api → services → repositories → models. Business logic never touches the database; repositories only do data access. The payoff: permissions, audit, and tenant scoping are reviewable in a single place.",
  },
  {
    title: "Approval engine driven by API verbs",
    body: "A queued journal entry should never dead-end. The approval engine normalizes approve/reject at the decide() boundary and resolves each permission-keyed step against wildcard grant holders, so every entry lands with an approver who can actually see it.",
  },
];

const challenges = [
  {
    title: "MFA and session flakiness in E2E",
    body: "Under parallel load, TOTP challenge forms mounted at different times — and a spent refresh cookie could be replayed, revoking a whole session family and taking down every authenticated call. Fixed with form-attach waits, clock-window retries, and always persisting the rotated cookie.",
  },
  {
    title: "BFF routing gaps",
    body: "The catch-all proxy forwards only whitelisted ERP segments; everything else falls through to Identity. The approval-workflow API wasn't on the whitelist, so the approvals inbox 404'd silently. A one-line contract fix — mirrored in the route's contract test so it can't regress.",
  },
  {
    title: "Strict-mode locator collisions",
    body: "getByRole matches names as case-insensitive substrings, so 'Send message' also hit 'Resend message' — and strict mode failed every retry. Exact locators and composer-by-role targeting killed the ambiguity.",
  },
  {
    title: "Heritage-schema drift",
    body: "Migrations carried type drift — String(64) where the inherited shape was UUID — plus Ruff B905 zip-without-strict warnings that failed both CI lint jobs. Caught and corrected at migration time, so nothing silently truncates.",
  },
];

const metrics = [
  { value: "16.6 ms", label: "p95, down from 42 ms" },
  { value: "3,300+", label: "automated tests" },
  { value: "RLS", label: "tenant isolation in Postgres" },
  { value: "3 + BFF", label: "FastAPI services" },
];

export default function SkyrictCaseStudy() {
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