import type { Skill } from "@/data/content";

export default function SkillLogo({
  skill,
  className = "",
}: {
  skill: Skill;
  className?: string;
}) {
  const { Icon, color, scale = 1 } = skill;

  return (
    <span
      className={`grid h-10 w-10 shrink-0 place-items-center rounded-[10px] border border-border/50 bg-card/60 ${className}`}
      style={{ color }}
    >
      <Icon size={Math.round(24 * scale)} />
    </span>
  );
}
