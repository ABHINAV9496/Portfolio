import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";
import { projects } from "@/data/content";

export const metadata: Metadata = {
  title: "CricGear — Case Study",
  description:
    "How CricGear ships a production e-commerce storefront and API — a Django + DRF backend on AWS EC2 with PostgreSQL on RDS, JWT auth and role-based access, served by a React.js frontend.",
};

const project = projects.find((p) => p.slug === "cricgear")!;

const problem = [
  "E-commerce is unforgiving about the boring parts: authentication, authorization, and validation. A storefront needs a catalog, a cart, and an order flow that customers can trust — and the API behind it has to be secure enough to stand on a real server, not just a localhost demo.",
  "CricGear is a complete production e-commerce platform: a Django + DRF API with JWT auth and role-based access, a PostgreSQL database on AWS RDS, and a React.js storefront consuming it — deployed end to end on AWS EC2.",
];

const architecture = [
  {
    title: "Django + DRF — backend API",
    body: "15+ REST endpoints with JWT authentication, role-based access control, and field-level validation, verified end-to-end via Postman.",
  },
  {
    title: "PostgreSQL on AWS RDS — database",
    body: "The product catalog, orders, and user data live in a managed RDS instance, configured alongside the EC2 environment.",
  },
  {
    title: "React.js — frontend",
    body: "Storefront UI built with React Hooks and Axios, wired to the Django APIs for product listing, cart, and order placement.",
  },
  {
    title: "AWS EC2 — deployment",
    body: "Full deployment lifecycle handled from scratch: EC2 provisioning, security groups, environment settings, and environment hardening.",
  },
];

const decisions = [
  {
    title: "JWT auth + role-based access",
    body: "Every protected endpoint requires a valid JWT, and permissions are enforced by role — so customer and admin actions are separated.",
  },
  {
    title: "Field-level validation everywhere",
    body: "All 15+ endpoints validate inputs at the field level, and the whole flow was exercised end to end through Postman before shipping.",
  },
  {
    title: "Frontend and API as separate layers",
    body: "The React storefront talks to the Django API over HTTP rather than embedding logic in the UI, keeping the contract clean and testable.",
  },
];

const challenges = [
  {
    title: "Infrastructure from a blank slate",
    body: "No pre-configured environment — EC2 provisioning, RDS setup, security groups, and environment settings were all configured independently and hardened for production.",
  },
  {
    title: "Verifying every endpoint",
    body: "With 15+ endpoints, correctness came from methodical Postman testing of auth, roles, and validation rather than trusting the happy path.",
  },
];

const metrics = [
  { value: "15+", label: "REST endpoints" },
  { value: "7", label: "Tools in the stack" },
  { value: "JWT", label: "Auth + RBAC" },
  { value: "EC2 · RDS", label: "Production infra" },
];

export default function CricGearCaseStudy() {
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
