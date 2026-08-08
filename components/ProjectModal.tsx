"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, X } from "lucide-react";
import { GithubIcon } from "./icons";
import type { Project } from "@/data/content";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-border bg-card p-7 shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close details"
              className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-border text-secondary transition-colors hover:border-accent/60 hover:text-accent"
            >
              <X size={18} />
            </button>

            <h3 className="pr-10 text-2xl font-bold">{project.title}</h3>
            <p className="mt-2 text-sm text-secondary">{project.tagline}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border/70 bg-navy/60 px-2.5 py-0.5 font-mono text-[11px] text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mt-6 space-y-3">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-secondary">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-navy transition-transform hover:scale-105"
              >
                Live demo
                <ArrowUpRight size={15} />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent/60 hover:text-accent"
              >
                <GithubIcon size={15} />
                Source code
              </a>
              {project.caseStudy ? (
                <Link
                  href={project.caseStudy}
                  className="inline-flex items-center gap-2 rounded-full border border-accent/60 px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
                >
                  Read case study
                  <ArrowRight size={15} />
                </Link>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
