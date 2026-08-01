"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, FolderGit2, Layers } from "lucide-react";
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
          <div className="flex gap-2">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live demo`}
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-secondary transition-all hover:border-accent/60 hover:text-accent"
            >
              <ArrowUpRight size={16} />
            </a>
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

        <button
          type="button"
          onClick={onOpen}
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold transition-colors hover:border-accent/60 hover:text-accent"
        >
          <Layers size={14} />
          View details
        </button>
      </motion.div>
    </motion.div>
  );
}
