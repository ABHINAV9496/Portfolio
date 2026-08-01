"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/components/animations";

export default function SectionHeading({
  index,
  eyebrow,
  title,
  accent,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="mb-12 md:mb-16"
    >
      <p className="font-mono text-sm text-accent">
        <span className="text-subtle">{index}.</span>
        {" // "}
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
        {title}{" "}
        {accent ? <span className="text-accent">{accent}</span> : null}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-secondary">{description}</p>
      ) : null}
      <div className="mt-5 h-px w-24 bg-gradient-to-r from-accent to-transparent" />
    </motion.div>
  );
}
