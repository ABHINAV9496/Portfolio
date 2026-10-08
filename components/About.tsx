"use client";

import { Briefcase, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "@/data/content";

const banner = {
  label: "THE ENGINEER BEHIND THE CODE",
  headline: "I BUILD BACKEND SYSTEMS THAT ARE",
  headlineAccent: "FAST, RELIABLE, AND BUILT TO SCALE.",
  subline:
    "Python, Django, FastAPI, and PostgreSQL — from API design to deployment, I build clean, scalable systems designed for real-world use.",
  signature: "— ABHINAV A",
};

const paragraphs = [
  "I started on the **production floor** as a Mechanical Engineering Trainee at Bajaj Auto in Pune, tracking line metrics and diagnosing faults under time-critical conditions. That taught me something software hasn't changed: systems break in predictable ways, and the fix is discipline, not heroics.",

  "That mindset carried into software. At Bridgeon Solutions, I build and maintain **production REST APIs** with Django and Django REST Framework, and I've improved response times by eliminating N+1 query patterns. At **Skyrict**, a four-person ERP team, I own the Inventory & Warehouse module: implementing per-tenant isolation through PostgreSQL Row-Level Security, maintaining an immutable stock-movement ledger, and building AI-assisted restock suggestions that require human approval before inventory actions are taken."
];

const pillFacts = [
  { icon: MapPin, value: profile.location },
  { icon: Briefcase, value: "Bridgeon Solutions" },
];

const proofCards = [
  {
    value: "42→16.6ms",
    label: "p95 report latency",
    text: "Benchmarked in CI, so every speed-up is proven.",
  },
  {
    value: "3,300+",
    label: "automated tests",
    text: "Plus 80+ migrations kept safe as the code moves fast.",
  },
  {
    value: "6",
    label: "services on AWS EC2",
    text: "Containerized and shipped through GitHub Actions.",
  },
  {
    value: "3",
    label: "products shipped",
    text: "Skyrict, EcoCharge and CricGear, schema to deploy.",
  },
];

function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split("**").map((chunk, index) =>
        index % 2 === 1 ? (
          <span key={index} className="font-medium text-primary">
            {chunk}
          </span>
        ) : (
          chunk
        ),
      )}
    </>
  );
}

export default function About() {
  return (
    <Section id="about">
      <Reveal>
        <p className="font-mono text-sm">
          <span className="text-subtle">01.</span>
          <span className="text-accent">{" // About"}</span>
        </p>
      </Reveal>

      <Reveal delay={1}>
        <div className="glass relative mt-6 overflow-hidden rounded-3xl px-6 py-12 text-center md:px-12 md:py-16">
          <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
          <span
            aria-hidden
            className="border-accent/60 pointer-events-none absolute left-5 top-5 h-4 w-4 border-l-2 border-t-2"
          />
          <span
            aria-hidden
            className="border-accent/60 pointer-events-none absolute bottom-5 right-5 h-4 w-4 border-b-2 border-r-2"
          />

          <div className="relative">
            <span className="border-accent/40 inline-block rounded-full border border-dashed px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              {banner.label}
            </span>

            <h2 className="mx-auto mt-6 max-w-4xl text-[clamp(26px,4.6vw,54px)] font-black uppercase leading-[1.05] tracking-tight">
              {banner.headline}{" "}
              <span className="text-accent">{banner.headlineAccent}</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-secondary">{banner.subline}</p>

            <p className="mt-7 font-mono text-xs uppercase tracking-[0.35em] text-accent">
              {banner.signature}
            </p>
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-10 min-[900px]:grid-cols-[1.05fr_1fr]">
        <Reveal delay={2}>
          {paragraphs.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 40)}
              className={cn(
                "leading-relaxed text-secondary",
                index > 0 && "mt-4",
              )}
            >
              <RichText text={paragraph} />
            </p>
          ))}

          <div className="mt-8 flex flex-wrap gap-2">
            {pillFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <span key={fact.value} className="pill">
                  <Icon size={12} className="mr-1.5 text-accent" />
                  {fact.value}
                </span>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={3}>
          <div className="grid grid-cols-2 gap-4 max-[519px]:grid-cols-1">
            {proofCards.map((card) => (
              <div
                key={card.label}
                className="card-glow rounded-2xl p-5 hover:-translate-y-[3px]"
              >
                <p className="font-mono text-2xl font-bold text-accent">
                  {card.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-subtle">
                  {card.label}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-secondary">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
