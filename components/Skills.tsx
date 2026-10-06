"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import SkillLogo from "./SkillLogo";
import SkillsMarquee from "./SkillsMarquee";
import { fadeUp, staggerContainer, viewportOnce } from "@/components/animations";
import { SKILL_CATEGORIES, skills } from "@/data/content";

export default function Skills() {
  const groups = SKILL_CATEGORIES.map((title) => ({
    title,
    items: skills.filter((skill) => skill.category === title),
  }));

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
        className="mt-6 flex flex-col"
      >
        {groups.map((group) => (
          <motion.div
            key={group.title}
            variants={fadeUp}
            className="grid min-h-[88px] gap-3 border-b border-border py-5 min-[600px]:grid-cols-[220px_1fr] min-[600px]:items-center min-[600px]:gap-6"
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-subtle">
              {group.title}
            </h3>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3 min-[900px]:grid-cols-4">
              {group.items.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex h-12 items-center gap-3.5 whitespace-nowrap"
                >
                  <SkillLogo
                    skill={skill}
                    className="transition-colors duration-200 group-hover:border-accent"
                  />
                  <span className="text-base text-primary transition-colors duration-200 group-hover:text-accent">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
