import { useState } from "react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookVisitDialog } from "@/components/BookVisitDialog";
import { Section } from "@/components/Section";
import { CONTACT, projects } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project unavailable — GEOmetric LLP" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.name} — ${project.location} | GEOmetric LLP` },
        { name: "description", content: project.short },
        { property: "og:title", content: `${project.name} — GEOmetric LLP` },
        { property: "og:description", content: project.short },
        { property: "og:image", content: project.image },
        { name: "twitter:image", content: project.image },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const [active, setActive] = useState(0);

  return (
    <>
      <section className="relative flex min-h-[65vh] items-end overflow-hidden pt-20">
        <img
          src={project.image}
          alt={project.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 lg:px-10 lg:pb-24">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>
          <span className="mt-6 inline-block border border-primary/70 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-primary">
            {project.status} · {project.type}
          </span>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] lg:text-7xl">{project.name}</h1>
          <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" strokeWidth={1.5} />
            {project.location}
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
          <div>
            <p className="eyebrow">Overview</p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-14">
              <div className="overflow-hidden border border-border">
                <img
                  src={project.gallery[active]}
                  alt={`${project.name} gallery image ${active + 1}`}
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4 sm:grid-cols-6">
                {project.gallery.map((g, i) => (
                  <button
                    key={g}
                    onClick={() => setActive(i)}
                    className={cn(
                      "overflow-hidden border transition-all duration-300",
                      i === active ? "border-primary" : "border-border opacity-60 hover:opacity-100",
                    )}
                  >
                    <img src={g} alt="" loading="lazy" className="aspect-square w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-16 space-y-10">
              <h2 className="text-4xl">Specifications</h2>
              {project.specifications.map((spec) => (
                <div key={spec.group} className="border-t border-border pt-6">
                  <h3 className="text-[0.7rem] uppercase tracking-[0.2em] text-primary">
                    {spec.group}
                  </h3>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {spec.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="mt-2 h-px w-4 shrink-0 gradient-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <h2 className="text-4xl">Location & proximity</h2>
              <ul className="mt-8 divide-y divide-border border-y border-border">
                {project.proximity.map((p) => (
                  <li key={p.label} className="flex items-center justify-between gap-6 py-4">
                    <span className="text-sm text-foreground/85">{p.label}</span>
                    <span className="text-[0.7rem] uppercase tracking-[0.18em] text-primary">
                      {p.distance}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-border bg-card p-8">
              <p className="eyebrow">Unit sizes</p>
              <ul className="mt-5 space-y-4">
                {project.unitSizes.map((u) => (
                  <li key={u} className="flex items-center gap-3 text-base">
                    <Ruler className="h-4 w-4 text-primary" strokeWidth={1.5} />
                    {u}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-border pt-8">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Visit the site with our project engineer and walk through the plan in person.
                </p>
                <BookVisitDialog defaultProject={project.slug}>
                  <Button variant="gold" size="lg" className="mt-6 w-full">
                    Book a Site Visit
                  </Button>
                </BookVisitDialog>
                <div className="mt-6 space-y-1 text-sm text-muted-foreground">
                  <a
                    href={`tel:${CONTACT.phonePrimary.replace(/\s/g, "")}`}
                    className="block hover:text-primary"
                  >
                    {CONTACT.phonePrimary}
                  </a>
                  <a
                    href={`tel:${CONTACT.phoneSecondary.replace(/\s/g, "")}`}
                    className="block hover:text-primary"
                  >
                    {CONTACT.phoneSecondary}
                  </a>
                  <a href={`mailto:${CONTACT.email}`} className="block hover:text-primary">
                    {CONTACT.email}
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
