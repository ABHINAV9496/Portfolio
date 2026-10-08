"use client";

import { useEffect, useRef } from "react";
import { skills, type Skill } from "@/data/content";
import SkillLogo from "./SkillLogo";

export default function SkillsMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  const items = skills;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => el.classList.toggle("marquee-off", !entry.isIntersecting),
      { rootMargin: "100px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const logoItem = (skill: Skill, i: number | string, hidden?: boolean) => (
    <li key={i} aria-hidden={hidden || undefined} className="mx-3">
      <SkillLogo skill={skill} className="transition-transform duration-300 hover:scale-110" />
    </li>
  );

  return (
    <div
      ref={ref}
      className="marquee-paused relative mt-12 mb-4 overflow-hidden border-y border-border/40 py-4"
    >
      <ul className="marquee-track items-center">
        {items.map((entry, i) => logoItem(entry, i))}
        {items.map((entry, i) => logoItem(entry, `dup-${i}`, true))}
      </ul>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-navy to-transparent sm:w-24"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-navy to-transparent sm:w-24"
      />
    </div>
  );
}