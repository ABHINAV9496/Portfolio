import type { ComponentType } from "react";
import { Cloud, Database, Sparkles, Zap } from "lucide-react";
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
import type { Skill } from "@/data/content";

export type SkillIconType = ComponentType<{ className?: string; size?: number | string }>;

export const brandIcons: Record<string, SkillIconType> = {
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

export const fallbackIcons: Record<string, SkillIconType> = {
  Cloud,
  Database,
  Sparkles,
  Zap,
};

export const brandColors: Record<string, string> = {
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

function relativeLuminance(hex: string): number {
  const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const lin = c.map((v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
  return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
}

function lighten(hex: string, t: number): string {
  const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  const mixed = c.map((v) => Math.round(v + (255 - v) * t));
  return "#" + mixed.map((v) => v.toString(16).padStart(2, "0")).join("");
}

function readableBrandColor(hex: string): string {
  const l = relativeLuminance(hex);
  if (l >= 0.21) return hex;
  const t = Math.min(0.5, ((0.21 - l) / 0.21) * 0.5);
  return lighten(hex, t);
}

export function resolveSkillIcon(
  skill: Skill
): { Icon: SkillIconType; brand: string } {
  const Icon = skill.slug
    ? brandIcons[skill.slug]
    : skill.fallback
      ? fallbackIcons[skill.fallback]
      : null;
  return {
    Icon: Icon ?? fallbackIcons.Zap,
    brand: skill.slug ? readableBrandColor(brandColors[skill.slug]) : "#FACC15",
  };
}
