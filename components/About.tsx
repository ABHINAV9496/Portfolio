"use client";

/* eslint-disable react/no-unescaped-entities */

import { BadgeCheck, Briefcase, MapPin } from "lucide-react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile } from "@/data/content";

const facts = [
  { icon: MapPin, label: "Based in", value: "Kozhikode, India" },
  { icon: BadgeCheck, label: "Status", value: "Open to opportunities" },
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
          <p className="leading-relaxed text-secondary">{profile.summary}</p>
          <p className="mt-4 leading-relaxed text-secondary">
            Currently building at Bridgeon Solutions — designing REST APIs,
            optimizing query performance with eager-loading strategies, and
            shipping real-time features end-to-end. I care about clean API
            contracts, well-tested code, and systems that scale without drama.
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
          <div className="glass rounded-2xl p-5 font-mono text-[13px] leading-relaxed">
            <div className="mb-3 flex items-center gap-2 border-b border-border/70 pb-3 text-xs text-subtle">
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="ml-2">about_me.py</span>
            </div>
            <div>
              <span className="text-accent">class</span>{" "}
              <span className="text-primary">FullStackDeveloper:</span>
            </div>
            <div className="mt-2">
              {"    stack = ["}
              <span className="text-accent">"Python"</span>,{" "}
              <span className="text-accent">"Django"</span>,{" "}
              <span className="text-accent">"FastAPI"</span>
              {"]"}
            </div>
            <div>
              {"    db = ["}
              <span className="text-accent">"PostgreSQL"</span>,{" "}
              <span className="text-accent">"PostGIS"</span>,{" "}
              <span className="text-accent">"Redis"</span>
              {"]"}
            </div>
            <div>
              {"    realtime = "}
              <span className="text-accent">True</span>
              {"  # WebSockets + Channels"}
            </div>
            <div>
              {"    cloud = ["}
              <span className="text-accent">"Docker"</span>,{" "}
              <span className="text-accent">"AWS"</span>,{" "}
              <span className="text-accent">"Nginx"</span>
              {"]"}
            </div>
            <div className="mt-2">
              {"    def "}
              <span className="text-accent">build</span>(self, scale) -&gt;{" "}
              <span className="text-primary">App</span>:
            </div>
            <div className="text-secondary">
              {"        # production-ready, tested, well-typed"}
            </div>
            <div>
              {"        return "}
              <span className="text-primary">App</span>(secure=, fast=)
            </div>
            <div className="mt-2">
              {"    location = "}
              <span className="text-accent">"Kozhikode, India"</span>{" "}
              <span className="text-secondary"># open to remote</span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
