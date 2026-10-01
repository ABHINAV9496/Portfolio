import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";
import { projects } from "@/data/content";

export const metadata: Metadata = {
  title: "Skyrict — Case Study",
  description:
    "How Skyrict ships an AI-native, multi-tenant ERP platform: a FastAPI identity microservice, an event-driven ERP core, and a provider-agnostic AI agent service behind a Next.js 15 BFF — built by a 4-person team.",
};

const project = projects.find((p) => p.slug === "skyrict")!;

const problem = [
  "Traditional ERP treats a company as an isolated entity processing internal transactions: inventory in, orders out, ledgers balanced. It has no view of the market acting on it. Skyrict inverts that — it treats a company as a node in a live global market, ingesting external signals, correlating them with internal operations, and letting AI agents act on the synthesis.",
  "That ambition lands on a ground floor that has to be right first: identity, multi-tenancy, and an API contract every service shares. Skyrict is a group project of four developers working in one repo, so security boundaries, code-review gates, and CI quality bars were part of the product, not an afterthought.",
];

const architecture = [
  {
    title: "Identity microservice — FastAPI",
    body: "AuthN/AuthZ, MFA (TOTP), sessions, and audit logging. Strict layering (api → services → repositories → models) keeps business logic away from the database, with JWT verification in exactly one place and tenant context flowing through a ContextVar.",
  },
  {
    title: "Core ERP — FastAPI + SQLAlchemy 2.0",
    body: "The ERP monolith: inventory, CRM, sales, finance, HR, and payroll, plus the /api/v1/ai proxy that fronts the agent service. Async SQLAlchemy with Alembic migrations and PostgreSQL 16 with Row-Level Security.",
  },
  {
    title: "ai-agent service",
    body: "A provider-agnostic AI service — natural-language inventory queries, restock suggestions, and stock anomaly detection against any OpenAI-compatible endpoint (OpenRouter, Groq, Ollama). The BFF never calls it directly; Core enforces permissions and relays the JWT.",
  },
  {
    title: "Next.js 15 web + BFF",
    body: "React 19 / shadcn/ui frontend with a BFF that whitelists Core segments and proxies them, keeping frontend↔backend contracts clean. pnpm + Turborepo for the workspace.",
  },
  {
    title: "Infra & CI/CD",
    body: "Docker Compose for local dev with an nginx proxy that derives tenant slugs from subdomains (acme.localhost, globex.localhost) so multi-tenant routing behaves identically in dev and production. GitHub Actions with path-filtered CI, pre-commit hooks, gitleaks, and bundle-size baselines.",
  },
];

const decisions = [
  {
    title: "PostgreSQL RLS as the multi-tenancy boundary",
    body: "Every query is scoped to the current tenant via SET app.current_tenant_id — row-level security on the database, not just application logic. There is no bypass path: the tenant is resolved once per request in middleware and cross-checked against the JWT's tenant_id claim.",
  },
  {
    title: "Event-driven by contract, Kafka deferred",
    body: "Services communicate through structured events (identity.user.created, finance.journal_entry.posted) — but the bus is deferred until 3+ services actually need decoupled async events, keeping the MVP small and testable.",
  },
  {
    title: "Strict service layering",
    body: "api → services → repositories → models. Business logic never touches the DB directly; repositories do data access only. This made permissions, audit, and tenant scoping reviewable in one place.",
  },
  {
    title: "Approval engine driven by API verbs",
    body: "The core approval engine normalizes approve/reject to their participle statuses at the decide() boundary, and resolves permission-keyed steps against wildcard grant holders — so a queued journal entry always reaches an approver who can actually see it in the inbox.",
  },
];

const challenges = [
  {
    title: "MFA and session flakiness in E2E",
    body: "TOTP challenge forms mounted at different times under parallel load, and a spent refresh cookie could be re-presented — triggering a session family revoke that took down every authenticated call. Fixed with form-attach waits, clock-window retries, and always persisting the rotated cookie.",
  },
  {
    title: "BFF routing gaps",
    body: "The Next.js catch-all proxy only forwards whitelisted ERP segments; anything else falls through to Identity. The approval-workflow API was missing from the whitelist, silently returning 404 on the approvals inbox — a one-line contract fix mirrored in the route's contract test.",
  },
  {
    title: "Strict-mode locator collisions",
    body: "getByRole name matching is a case-insensitive substring, so 'Send message' also matched the 'Resend message' button and strict-mode failed every retry. Exact locators and composer-by-role targeting removed the ambiguity.",
  },
  {
    title: "Heritage-schema drift",
    body: "Migration files carried type drift (String(64) where the heritage shape was UUID) and Ruff B905 zip-without-strict warnings that failed both CI lint jobs — caught and corrected at migration time so nothing silently truncates.",
  },
];

const metrics = [
  { value: "243", label: "Commits by me" },
  { value: "4", label: "Team size" },
  { value: "3", label: "BFF + services" },
  { value: "RLS", label: "Multi-tenant Postgres" },
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