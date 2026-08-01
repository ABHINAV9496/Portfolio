"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/components/animations";
import { skillGroups } from "@/data/content";

const allSkills = skillGroups.flatMap((group) => group.skills.map((skill) => skill.name));
const marqueeItems = [...allSkills, ...allSkills];

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        index="02"
        eyebrow="skills"
        title="My"
        accent="tech stack"
        description="Languages, frameworks, and infrastructure I reach for every day."
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="marquee-mask mb-12 overflow-hidden md:mb-16"
      >
        <div className="marquee-paused">
          <div className="marquee-track">
            {marqueeItems.map((name, i) => (
              <span key={i} className="pill mr-3 shrink-0 cursor-default">
                {name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            variants={fadeUp}
            className="card-glow group rounded-2xl p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <h3 className="font-semibold">{group.title}</h3>
              <span className="relative h-px flex-1 overflow-hidden rounded-full bg-border/50">
                <span className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-accent to-transparent transition-all duration-700 group-hover:w-full" />
              </span>
            </div>

            <motion.div
              variants={staggerContainer(0.05, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="flex flex-wrap gap-2"
            >
              {group.skills.map((skill) => (
                <motion.span
                  key={skill.name}
                  variants={scaleIn}
                  className="pill cursor-default transition-all duration-200 hover:scale-[1.04] hover:shadow-glow-sm"
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
