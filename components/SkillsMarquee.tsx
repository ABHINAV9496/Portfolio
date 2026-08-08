import { skillGroups } from "@/data/content";
import { resolveSkillIcon, type SkillIconType } from "./skillIcons";

export default function SkillsMarquee() {
  const logos = skillGroups.flatMap((group) => group.skills);
  const seen = new Set<string>();
  const unique = logos.filter((skill) => {
    const key = skill.slug ?? skill.fallback ?? skill.name;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  const items = unique
    .map(resolveSkillIcon)
    .filter((entry): entry is { Icon: SkillIconType; brand: string } => Boolean(entry.Icon));

  const logoItem = (
    { Icon, brand }: { Icon: SkillIconType; brand: string },
    i: number | string,
    hidden?: boolean
  ) => (
    <li key={i} aria-hidden={hidden || undefined} className="mx-3">
      <span
        className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-border/50 bg-[#0D1733]/60 transition-transform duration-300 hover:scale-110"
        style={{ color: brand }}
      >
        <Icon size={26} />
      </span>
    </li>
  );

  return (
    <div className="marquee-paused relative mt-12 mb-4 overflow-hidden border-y border-border/40 py-4">
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
