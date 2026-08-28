import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/site";
import { cn } from "@/lib/utils";

const HERO =
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Ongoing, Completed & Upcoming | GEOmetric LLP" },
      {
        name: "description",
        content:
          "Explore GEOmetric LLP's portfolio of residential and commercial projects in Bengaluru, including Aalaya at Rajarajeshwari Nagar.",
      },
      { property: "og:title", content: "Projects — GEOmetric LLP" },
      {
        property: "og:description",
        content: "Residential and commercial developments across Bengaluru.",
      },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: Projects,
});

const statusFilters = ["All", "Ongoing", "Completed", "Upcoming"] as const;
const typeFilters = ["All", "Residential", "Commercial"] as const;

function Projects() {
  const [status, setStatus] = useState<(typeof statusFilters)[number]>("All");
  const [type, setType] = useState<(typeof typeFilters)[number]>("All");

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) => (status === "All" || p.status === status) && (type === "All" || p.type === type),
      ),
    [status, type],
  );

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Every address we have shaped."
        intro="Filter by stage or by type to find the project closest to what you are looking for."
        image={HERO}
      />
      <Section>
        <div className="flex flex-col gap-6 border-b border-border pb-8 lg:flex-row lg:items-center lg:justify-between">
          <FilterGroup
            label="Status"
            options={statusFilters}
            value={status}
            onChange={(v) => setStatus(v as (typeof statusFilters)[number])}
          />
          <FilterGroup
            label="Type"
            options={typeFilters}
            value={type}
            onChange={(v) => setType(v as (typeof typeFilters)[number])}
          />
        </div>

        {filtered.length === 0 ? (
          <p className="py-24 text-center text-muted-foreground">
            No projects match this combination yet — try a different filter.
          </p>
        ) : (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="eyebrow mr-2">{label}</span>
      {options.map((o) => (
        <button
          key={o}
          onClick={() => onChange(o)}
          className={cn(
            "border px-4 py-2 text-[0.7rem] uppercase tracking-[0.18em] transition-all duration-300",
            value === o
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border text-muted-foreground hover:border-primary hover:text-primary",
          )}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
