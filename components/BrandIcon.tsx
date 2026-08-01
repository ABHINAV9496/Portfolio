import {
  siAxios,
  siCelery,
  siCss,
  siDjango,
  siDocker,
  siFastapi,
  siGit,
  siGithubactions,
  siGoogle,
  siHtml5,
  siJavascript,
  siLeaflet,
  siNginx,
  siPostgresql,
  siPostman,
  siPython,
  siRazorpay,
  siReact,
  siRedis,
  siSwagger,
  siTailwindcss,
  siVite,
} from "simple-icons";

const registry: Record<string, { path: string } | undefined> = {
  axios: siAxios,
  celery: siCelery,
  css: siCss,
  django: siDjango,
  docker: siDocker,
  fastapi: siFastapi,
  git: siGit,
  githubactions: siGithubactions,
  google: siGoogle,
  html5: siHtml5,
  javascript: siJavascript,
  leaflet: siLeaflet,
  nginx: siNginx,
  postgresql: siPostgresql,
  postman: siPostman,
  python: siPython,
  razorpay: siRazorpay,
  react: siReact,
  redis: siRedis,
  swagger: siSwagger,
  tailwindcss: siTailwindcss,
  vite: siVite,
};

export default function BrandIcon({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const icon = registry[slug.toLowerCase()];
  if (!icon) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d={icon.path} />
    </svg>
  );
}
