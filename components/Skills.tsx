"use client";

import { motion } from "framer-motion";
import type { ComponentType, CSSProperties } from "react";
import {
  BarChart3,
  BrainCircuit,
  Cloud,
  Database,
  MessageSquareText,
  Route,
  Sparkles,
  Wifi,
  Zap,
} from "lucide-react";
import {
  SiAxios,
  SiCelery,
  SiCss,
  SiDjango,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGithubactions,
  SiGoogle,
  SiHtml5,
  SiJavascript,
  SiLeaflet,
  SiNginx,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiRazorpay,
  SiReact,
  SiRedis,
  SiSwagger,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/components/animations";
import { skillGroups, type Skill } from "@/data/content";

type SkillIconType = ComponentType<{ className?: string; size?: number | string }>;

const brandIcons: Record<string, SkillIconType> = {
  axios: SiAxios,
  celery: SiCelery,
  css: SiCss,
  django: SiDjango,
  docker: SiDocker,
  fastapi: SiFastapi,
  git: SiGit,
  githubactions: SiGithubactions,
  google: SiGoogle,
  html5: SiHtml5,
  javascript: SiJavascript,
  leaflet: SiLeaflet,
  nginx: SiNginx,
  postgresql: SiPostgresql,
  postman: SiPostman,
  python: SiPython,
  razorpay: SiRazorpay,
  react: SiReact,
  redis: SiRedis,
  swagger: SiSwagger,
  tailwindcss: SiTailwindcss,
  vite: SiVite,
};

const fallbackIcons: Record<string, SkillIconType> = {
  BarChart3,
  BrainCircuit,
  Cloud,
  Database,
  MessageSquareText,
  Route,
  Sparkles,
  Wifi,
  Zap,
};

const brandColors: Record<string, string> = {
  axios: "#5A29E4",
  celery: "#37814A",
  css: "#663399",
  django: "#092E20",
  docker: "#2496ED",
  fastapi: "#009688",
  git: "#F05032",
  githubactions: "#2088FF",
  google: "#4285F4",
  html5: "#E34F26",
  javascript: "#F7DF1E",
  leaflet: "#199900",
  nginx: "#009639",
  postgresql: "#4169E1",
  postman: "#FF6C37",
  python: "#3776AB",
  razorpay: "#0C2451",
  react: "#61DAFB",
  redis: "#FF4438",
  swagger: "#85EA2D",
  tailwindcss: "#06B6D4",
  vite: "#646CFF",
};

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const Icon = skill.slug
    ? brandIcons[skill.slug]
    : skill.fallback
      ? fallbackIcons[skill.fallback]
      : null;
  const brand = skill.slug ? brandColors[skill.slug] : undefined;

  if (!Icon) return null;

  return (
    <motion.div
      variants={scaleIn}
      custom={index}
      className="group/skill flex h-[92px] flex-col items-center justify-center gap-2 rounded-2xl border border-border/70 bg-[#101838] p-2 text-center transition-all duration-200 hover:-translate-y-1 hover:scale-[1.04] hover:border-accent hover:shadow-glow-sm"
    >
      <span
        className="grid place-items-center text-secondary transition-colors duration-200 group-hover/skill:[color:var(--brand)]"
        style={{ "--brand": brand ?? "#FACC15" } as CSSProperties}
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
              className="grid grid-cols-3 gap-3 sm:grid-cols-4"
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
