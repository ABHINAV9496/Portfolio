"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import SkillsMarquee from "./SkillsMarquee";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/components/animations";
import { skillGroups, type Skill } from "@/data/content";
import { resolveSkillIcon } from "./skillIcons";

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const { Icon, brand } = resolveSkillIcon(skill);

  return (
    <motion.div
      variants={scaleIn}
      custom={index}
      className="group/skill flex h-[92px] flex-col items-center justify-center gap-2 rounded-2xl border border-border/70 bg-[#101838] p-2 text-center transition-all duration-200 hover:-translate-y-1 hover:scale-[1.04] hover:border-accent hover:shadow-glow-sm"
    >
      <span
        className="grid place-items-center text-secondary transition-colors duration-200 group-hover/skill:[color:var(--brand)]"
        style={{ "--brand": brand } as CSSProperties}
      >
        <Icon
          size={30}
          className="transition-transform duration-200 group-hover/skill:-rotate-6 group-hover/skill:scale-110"
        />
      </span>
      <span className="max-w-full break-words text-xs leading-snug text-secondary transition-colors duration-200 group-hover/skill:text-primary">
        {skill.name}
      </span>
    </motion.div>
  );
}

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

      <SkillsMarquee />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-5 md:grid-cols-2"
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
              variants={staggerContainer(0.05, 0.05)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="grid min-h-[196px] grid-cols-3 gap-3"
            >
              {group.skills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
