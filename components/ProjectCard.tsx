"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  FolderGit2,
  Layers,
  Users,
} from "lucide-react";
import { GithubIcon } from "./icons";
import { fadeUp, viewportOnce } from "@/components/animations";
import type { Project } from "@/data/content";

export default function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 10);
    rotateX.set(-py * 10);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      style={{ perspective: 1000 }}
      className="w-full md:w-[calc(50%-0.75rem)]"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="card-glow group flex h-full flex-col rounded-3xl p-6"
      >
        <div className="flex items-start justify-between">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent">
            <FolderGit2 size={22} />
          </span>
          <div className="flex items-center gap-2">
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live demo`}
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-[11px] font-semibold text-navy shadow-glow-sm transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-navy/60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-navy" />
                </span>
                Live demo
                <ArrowUpRight size={12} />
              </a>
            ) : null}
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} source code`}
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-secondary transition-all hover:border-accent/60 hover:text-accent"
            >
              <GithubIcon size={16} />
            </a>
          </div>
        </div>

        <h3 className="mt-5 text-xl font-semibold">{project.title}</h3>
        {project.badge ? (
          <span className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] leading-5 text-accent">
            <Users size={12} />
            {project.badge}
          </span>
        ) : null}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-secondary">
          {project.tagline}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border/70 bg-card/50 px-2.5 py-0.5 font-mono text-[11px] text-secondary"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 6 ? (
            <span className="px-1 py-0.5 font-mono text-[11px] text-subtle">
              +{project.stack.length - 6} more
            </span>
          ) : null}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold transition-colors hover:border-accent/60 hover:text-accent"
          >
            <Layers size={14} />
            View details
          </button>
          {project.caseStudy ? (
            <Link
              href={project.caseStudy}
              prefetch
              className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition-colors hover:text-accent"
            >
              Read case study
              <ArrowRight
                size={14}
                className="transition-transform group-hover/link:translate-x-0.5"
              />
            </Link>
          ) : null}
        </div>
      </motion.div>
    </motion.div>
  );
}
