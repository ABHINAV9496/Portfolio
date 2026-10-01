import { existsSync } from "fs";
import { join } from "path";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Users } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { Project } from "@/data/content";

type SectionItem = { title: string; body: string };

export default function CaseStudy({
  project,
  problem,
  architecture,
  decisions,
  challenges,
  metrics,
}: {
  project: Project;
  problem: string[];
  architecture: SectionItem[];
  decisions: SectionItem[];
  challenges: SectionItem[];
  metrics: { value: string; label: string }[];
}) {
  const screenshotExists = project.image
    ? existsSync(join(process.cwd(), "public", project.image))
    : false;

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-secondary transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} />
          Back to projects
        </Link>

        <header className="mt-10">
          <p className="font-mono text-sm text-accent">case study</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          {project.badge ? (
            <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-xs leading-5 text-accent">
              <Users size={13} />
              {project.badge}
            </span>
          ) : null}
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-secondary">
            {project.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-navy shadow-glow-sm transition-transform hover:scale-105 active:scale-95"
              >
                Live demo
                <ArrowUpRight size={16} />
              </a>
            ) : null}
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-accent/60 hover:text-accent"
            >
              <GithubIcon size={16} />
              Source code
            </a>
          </div>
        </header>

        <section className="mt-20">
          <p className="font-mono text-xs text-accent">01 · problem</p>
          <h2 className="mt-2 text-2xl font-semibold">The problem</h2>
          <div className="mt-4 space-y-4">
            {problem.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="max-w-3xl leading-relaxed text-secondary"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <p className="font-mono text-xs text-accent">02 · architecture</p>
          <h2 className="mt-2 text-2xl font-semibold">How it&apos;s built</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {architecture.map((card) => (
              <div key={card.title} className="glass rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-accent">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border/70 bg-card/50 px-3 py-1 font-mono text-[11px] text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <p className="font-mono text-xs text-accent">03 · key decisions</p>
          <h2 className="mt-2 text-2xl font-semibold">
            The calls that shaped it
          </h2>
          <ul className="mt-6 space-y-4">
            {decisions.map((item) => (
              <li key={item.title} className="flex gap-3">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <div>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-secondary">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <p className="font-mono text-xs text-accent">04 · challenges</p>
          <h2 className="mt-2 text-2xl font-semibold">
            Where it could have broken
          </h2>
          <ul className="mt-6 space-y-4">
            {challenges.map((item) => (
              <li key={item.title} className="flex gap-3">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <div>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-secondary">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {project.image ? (
          <section className="mt-16">
            <p className="font-mono text-xs text-accent">05 · screenshots</p>
            <h2 className="mt-2 text-2xl font-semibold">In action</h2>
            {screenshotExists ? (
              <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border/60">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 1152px) 100vw, 1152px"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="mt-6 flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-card/40 text-subtle">
                <span className="font-mono text-xs uppercase tracking-widest">
                  screenshot coming soon
                </span>
                <span className="text-xs">
                  drop it at /public{project.image}
                </span>
              </div>
            )}
          </section>
        ) : null}

        <section className="mt-16">
          <p className="font-mono text-xs text-accent">06 · impact</p>
          <h2 className="mt-2 text-2xl font-semibold">The numbers</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="card-glow rounded-2xl p-6 text-center"
              >
                <p className="text-4xl font-bold text-accent">{metric.value}</p>
                <p className="mt-2 text-xs text-secondary">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-border/70 pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs text-secondary transition-colors hover:text-accent"
          >
            <ArrowLeft size={14} />
            Back to projects
          </Link>
          <p className="font-mono text-[11px] text-subtle">
            abhinav_a · case study
          </p>
        </footer>
      </div>
    </main>
  );
}
