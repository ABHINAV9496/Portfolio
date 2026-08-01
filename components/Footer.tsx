import { ArrowUp } from "lucide-react";
import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border/70 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center font-mono text-xs text-secondary">
          © {new Date().getFullYear()}{" "}
          <span className="text-primary">{profile.name}</span> · Built with Next.js,
          Tailwind CSS &amp; Framer Motion
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold transition-colors hover:border-accent/60 hover:text-accent"
        >
          Back to top
          <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
