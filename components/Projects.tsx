"use client";

import { useState } from "react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects, type Project } from "@/data/content";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section id="projects">
      <SectionHeading
        index="04"
        eyebrow="Projects"
        title="Featured"
        accent="work"
        description="Production-minded builds — end-to-end systems from database to deployment."
      />

      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            onOpen={() => setActive(project)}
          />
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </Section>
  );
}
