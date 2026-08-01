"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/components/animations";
import { profile } from "@/data/content";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: profile.phoneHref, icon: Phone },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abhinav-a-934696202",
    href: profile.linkedin,
    icon: LinkedinIcon,
  },
  { label: "GitHub", value: "github.com/ABHINAV9496", href: profile.github, icon: GithubIcon },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-navy/60 px-4 py-3 text-sm text-primary placeholder:text-subtle focus:border-accent focus:outline-none";

  return (
    <Section id="contact">
      <SectionHeading
        index="06"
        eyebrow="contact"
        title="Let's build"
        accent="something"
        description="Have a project, role, or idea in mind? My inbox is always open."
      />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-10 lg:grid-cols-[1fr_1.2fr]"
      >
        <div className="space-y-4">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <motion.a
                key={channel.label}
                variants={fadeUp}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="card-glow group flex items-center gap-4 rounded-2xl p-4"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent transition-transform group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={19} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wide text-subtle">
                    {channel.label}
                  </span>
                  <span className="block truncate text-sm text-primary group-hover:text-accent">
                    {channel.value}
                  </span>
                </span>
              </motion.a>
            );
          })}
        </div>

        <motion.form
          variants={fadeUp}
          custom={1}
          onSubmit={handleSubmit}
          className="glass space-y-4 rounded-2xl p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className={inputClass}
            />
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Your email"
              className={inputClass}
            />
          </div>
          <textarea
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell me about your project…"
            rows={5}
            className={`${inputClass} resize-none`}
          />
          <button
            type="submit"
            className="btn-shine group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-navy transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Send message
            <Send size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-1" />
          </button>
        </motion.form>
      </motion.div>
    </Section>
  );
}
