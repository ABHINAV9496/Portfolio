"use client";

/* eslint-disable react/no-unescaped-entities */

import { Briefcase, MapPin } from "lucide-react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile } from "@/data/content";

const facts = [
  { icon: MapPin, label: "Based in", value: profile.location },
  { icon: Briefcase, label: "Currently", value: "Bridgeon Solutions" },
];

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        index="01"
        eyebrow="about"
        title="A developer who ships"
        accent="production systems"
        description="Backend-heavy, full-stack-minded — from database schema to deployed infrastructure."
      />

      <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <p className="leading-relaxed text-secondary">
            I didn&apos;t start in software. I started on the production floor —
            a mechanical engineering trainee at Bajaj Auto in Pune, tracking
            line metrics and diagnosing faults in a high-volume manufacturing
            environment. What that taught me: systems break in predictable
            ways, and the fix is usually discipline, not heroics.
          </p>
          <p className="mt-4 leading-relaxed text-secondary">
            That mindset carried straight into code. Today I build production
            systems at Bridgeon Solutions — designing REST APIs with clean
            contracts, eliminating N+1 queries with eager-loading strategies,
            and shipping real-time features end-to-end. My bar is simple:
            well-tested code, clear contracts, and systems that scale without
            drama.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {facts.map((fact) => {
              const Icon = fact.icon;
              return (
                <span key={fact.label} className="pill">
                  <Icon size={12} className="mr-1.5 text-accent" />
                  {fact.value}
                </span>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="glass rounded-2xl p-5 font-mono text-[12px] leading-relaxed sm:text-[13px]">
            <div className="mb-3 flex items-center gap-2 border-b border-border/70 pb-3 text-xs text-subtle">
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="ml-2">about_me.py</span>
            </div>
            <div>
              <span className="text-accent">class</span>{" "}
              <span className="text-primary">AboutMe:</span>
            </div>
            <div className="mt-2">
              {"    name = "}
              <span className="text-accent">"Abhinav A"</span>
            </div>
            <div>
              {"    path = "}
              <span className="text-accent">"mechanical → software"</span>
            </div>
            <div className="mt-2">
              {"    clean_code = "}
              <span className="text-accent">True</span>{" "}
              <span className="text-secondary">
                {"# contracts first, side effects last"}
              </span>
            </div>
            <div>
              {"    tests_before_ship = "}
              <span className="text-accent">True</span>{" "}
              <span className="text-secondary">
                {"# break it in CI, not in prod"}
              </span>
            </div>
            <div>
              {"    scales_without_drama = "}
              <span className="text-accent">True</span>{" "}
              <span className="text-secondary">
                {"# eager-load, cache, then repeat"}
              </span>
            </div>
            <div className="mt-2">
              {"    domain = {"}
              <span className="text-accent">"ev"</span>,{" "}
              <span className="text-accent">"geospatial"</span>,{" "}
              <span className="text-accent">"ai"</span>
              {"}"}
            </div>
            <div className="mt-2">
              {"    def "}
              <span className="text-accent">build</span>(self, problem) -&gt;{" "}
              <span className="text-primary">Solution</span>:
            </div>
            <div className="text-secondary">
              {"        \"\"\"Read the domain, design the contract, ship the tests.\"\"\""}
            </div>
            <div>
              {"        return "}
              <span className="text-primary">Solution</span>(clean=, tested=,
              on_time=)
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
