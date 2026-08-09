"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { fadeUp, slideLeft, staggerContainer } from "@/components/animations";
import { profile, skillGroups } from "@/data/content";
import { resolveSkillIcon } from "./skillIcons";
import { useTypewriter } from "@/hooks/useTypewriter";

const STACK_SHOWCASE = [
  "Python",
  "Django",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "Celery",
  "Docker",
  "React.js",
  "Tailwind CSS",
];

function StackShowcase() {
  const tiles = skillGroups
    .flatMap((group) => group.skills)
    .filter((skill) => STACK_SHOWCASE.includes(skill.name))
    .map((skill) => ({ skill, ...resolveSkillIcon(skill) }));

  return (
    <motion.div
      variants={slideLeft}
      custom={0.35}
      initial="hidden"
      animate="show"
      className="relative"
    >
      <div className="card-glow overflow-hidden rounded-2xl">
        <div className="flex items-center gap-2 border-b border-border/70 bg-card/60 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="ml-2 font-mono text-[11px] text-subtle">
            abhinav_a · core stack
          </span>
        </div>

        <motion.div
          variants={staggerContainer(0.05, 0.1)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-3 gap-3 p-6"
        >
          {tiles.map(({ skill, Icon, brand }, i) => (
            <motion.div
              key={skill.name}
              variants={fadeUp}
              custom={i}
              className="group/tile flex h-[96px] flex-col items-center justify-center gap-2 rounded-2xl border border-border/60 bg-[#0D1733]/60 p-2 transition-colors duration-200 hover:border-accent/60"
            >
              <span
                style={{ color: brand }}
                className="grid place-items-center opacity-75 transition-opacity duration-200 group-hover/tile:opacity-100"
              >
                <Icon
                  size={30}
                  className="transition-transform duration-200 group-hover/tile:scale-110"
                />
              </span>
              <span className="font-mono text-[10px] text-subtle transition-colors duration-200 group-hover/tile:text-primary">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-4 flex items-center justify-between font-mono text-[11px] text-subtle">
        <span>~/kozhikode</span>
        <span className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          open to work
        </span>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const typed = useTypewriter(profile.roles, { startDelay: 1100 });
  const nameWords = profile.name.split(" ");

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-24 pt-32 lg:pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={staggerContainer(0.16, 0.15)}
          initial="hidden"
          animate="show"
          className="text-center lg:text-left"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 font-mono text-xs text-primary lg:justify-start"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-semibold text-accent">{profile.availability}</span>
            <span className="text-secondary">— Available Now</span>
            <span className="hidden text-border sm:inline">·</span>
            <span className="hidden text-secondary sm:inline">{profile.location}</span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="mt-7 font-mono text-sm text-accent"
          >
            &gt; Hello, My Name Is
          </motion.p>

          <motion.h1
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            animate="show"
            className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            {nameWords.map((word, i) => (
              <motion.span
                key={i}
                variants={fadeUp}
                className="inline-block whitespace-pre"
              >
                {i === nameWords.length - 1 ? (
                  <span className="text-accent">{word}</span>
                ) : (
                  word
                )}
                {i < nameWords.length - 1 ? " " : null}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.4}
            className="mt-6 font-mono text-lg text-secondary md:text-xl"
          >
            <span className="text-accent">&gt;</span> {typed}
            <span className="animate-caret ml-0.5 inline-block h-5 w-[2px] translate-y-1 bg-accent" />
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={0.6}
            className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-secondary lg:mx-0 md:text-base"
          >
            {profile.heroLead}
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={0.8}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#projects"
              className="btn-shine group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-navy shadow-glow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_16px_44px_-12px_rgb(250_204_21_/_0.6)] active:scale-95"
            >
              View Projects
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:border-accent/70 hover:text-accent hover:shadow-[0_12px_36px_-14px_rgb(250_204_21_/_0.5)] active:scale-95"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:border-accent/70 hover:text-accent hover:shadow-[0_12px_36px_-14px_rgb(250_204_21_/_0.5)] active:scale-95"
            >
              <Download
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={1}
            className="mt-10 flex items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/40 text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:text-accent hover:shadow-glow-sm"
            >
              <GithubIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/40 text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:text-accent hover:shadow-glow-sm"
            >
              <LinkedinIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/40 text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:text-accent hover:shadow-glow-sm"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </motion.div>

        <StackShowcase />
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-border pt-1.5 transition-colors hover:border-accent">
          <motion.span
            className="h-2 w-1 rounded-full bg-accent"
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          />
        </div>
      </a>
    </section>
  );
}
