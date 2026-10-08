"use client";

import { motion } from "framer-motion";
import { Award, CalendarDays, GraduationCap } from "lucide-react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/components/animations";
import { education } from "@/data/content";

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading
        index="05"
        eyebrow="Education"
        title="My"
        accent="education"
        description="The academic background behind my engineering mindset."
      />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-5 md:grid-cols-2"
      >
        {education.map((ed) => (
          <motion.div
            key={ed.degree}
            variants={fadeUp}
            className="card-glow group rounded-2xl p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
                <GraduationCap size={20} />
              </span>
              <span className="inline-flex items-center gap-1 font-mono text-xs text-accent">
                <CalendarDays size={12} />
                {ed.period}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold">{ed.degree}</h3>
            <p className="mt-1 text-sm text-accent">{ed.school}</p>
            {ed.note ? (
              <p className="mt-3 inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-xs text-secondary">
                <Award size={12} className="text-accent" />
                {ed.note}
              </p>
            ) : null}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
