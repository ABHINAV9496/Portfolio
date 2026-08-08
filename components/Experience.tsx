"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { fadeUp, viewportOnce } from "@/components/animations";
import { experience } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        index="03"
        eyebrow="experience"
        title="Where I've"
        accent="worked"
        description="From high-volume manufacturing to production web apps."
      />

      <div className="relative">
        <div className="absolute bottom-2 left-4 top-2 w-px bg-gradient-to-b from-accent/70 via-border to-transparent md:left-1/2" />

        {experience.map((exp, i) => {
          const onLeft = i % 2 === 0;
          return (
            <motion.div
              key={exp.company}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className={cn(
                "relative mb-12 pl-12 last:mb-0 md:w-1/2 md:pl-0",
                onLeft ? "md:pr-16" : "md:ml-auto md:pl-16"
              )}
            >
              <span
                className={cn(
                  "absolute top-2 h-3.5 w-3.5 rounded-full border-2 bg-navy",
                  exp.kind === "pre-software" ? "border-border" : "border-accent",
                  "left-[9px] md:left-auto",
                  onLeft ? "md:-right-[7px]" : "md:-left-[7px]"
                )}
              />

              <div
                className={cn(
                  "card-glow rounded-2xl p-6",
                  onLeft && "md:text-right",
                  exp.kind === "pre-software" && "opacity-80"
                )}
              >
                <div
                  className={cn(
                    "flex items-center gap-2 font-mono text-xs",
                    onLeft && "md:justify-end",
                    exp.kind === "pre-software" ? "text-secondary" : "text-accent"
                  )}
                >
                  <CalendarDays size={13} />
                  <span>{exp.period}</span>
                </div>

                <h3 className="mt-2 text-lg font-semibold">{exp.role}</h3>
                <p
                  className={cn(
                    "mt-0.5 text-sm",
                    exp.kind === "pre-software" ? "text-secondary" : "text-accent"
                  )}
                >
                  {exp.company}
                  {exp.current ? (
                    <span className="ml-2 inline-flex rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-navy">
                      Current
                    </span>
                  ) : null}
                  {exp.kind === "pre-software" ? (
                    <span className="ml-2 inline-flex rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-subtle">
                      Pre-software career
                    </span>
                  ) : null}
                </p>
                <p
                  className={cn(
                    "mt-1 flex items-center gap-1 text-xs text-secondary",
                    onLeft && "md:justify-end"
                  )}
                >
                  <MapPin size={12} />
                  {exp.location}
                </p>

                <ul
                  className={cn(
                    "mt-4 space-y-2 text-sm text-secondary",
                    onLeft && "md:text-right"
                  )}
                >
                  {exp.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
