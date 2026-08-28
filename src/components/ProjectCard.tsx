import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "@/data/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group block overflow-hidden border border-border bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-luxe"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 border border-primary/70 bg-background/80 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
          {project.status}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl leading-snug transition-colors group-hover:text-primary">
            {project.name}
          </h3>
          <ArrowUpRight
            className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:text-primary"
            strokeWidth={1.5}
          />
        </div>
        <p className="mt-3 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-primary" strokeWidth={1.5} />
          {project.location}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.short}</p>
      </div>
    </Link>
  );
}
