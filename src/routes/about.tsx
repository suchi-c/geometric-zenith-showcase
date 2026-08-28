import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { BookVisitDialog } from "@/components/BookVisitDialog";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { milestones, team } from "@/data/site";

const HERO =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About GEOmetric LLP — Our Story, Team & Milestones" },
      {
        name: "description",
        content:
          "Founded in 2012, GEOmetric LLP builds residences, interiors and joint ventures across Bengaluru with in-house design and site teams.",
      },
      { property: "og:title", content: "About GEOmetric LLP" },
      {
        property: "og:description",
        content: "Our story, leadership and fourteen years of building in Bengaluru.",
      },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Fourteen years of building quietly, carefully."
        intro="GEOmetric LLP began with two engineers, one site and a refusal to compromise on finish quality. That has not changed."
        image={HERO}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <SectionHeading eyebrow="Our story" title="Built on the sites we still stand on." />
            <p>
              We started in 2012 as a contracting firm on Mysore Road, taking on work larger firms
              considered too small to bother with. Those first projects taught us that clients do
              not remember the sales pitch — they remember whether the door closes cleanly three
              years later.
            </p>
            <p>
              Since then we have added an interiors studio, delivered a commercial block through a
              joint venture, and handed over more than fifty homes. We remain deliberately small,
              because every project is still reviewed personally by a partner.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="border border-border bg-card p-8">
              <h3 className="text-3xl text-primary">Mission</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                To build spaces that stay beautiful and functional long after handover, through
                honest engineering, written specifications and disciplined site supervision.
              </p>
            </div>
            <div className="border border-border bg-card p-8">
              <h3 className="text-3xl text-primary">Vision</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                To be the practice west Bengaluru trusts most for boutique residential development —
                known for restraint, detail and integrity rather than scale.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-charcoal">
        <SectionHeading eyebrow="Leadership" title="The people accountable for your project." />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="group border border-border bg-card">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl">{m.name}</h3>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-primary">
                  {m.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Milestones" title="How the practice grew." />
        <ol className="mt-14 border-l border-border">
          {milestones.map((m) => (
            <li key={m.year} className="relative pb-12 pl-8 last:pb-0">
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary" />
              <p className="font-display text-3xl text-primary">{m.year}</p>
              <h3 className="mt-2 text-2xl">{m.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {m.text}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="bg-secondary/40">
        <div className="flex flex-col items-center text-center">
          <h2 className="max-w-2xl text-4xl leading-tight lg:text-5xl">
            Come see the standard for yourself.
          </h2>
          <div className="mt-10">
            <BookVisitDialog>
              <Button variant="gold" size="lg">
                Book a Site Visit
              </Button>
            </BookVisitDialog>
          </div>
        </div>
      </Section>
    </>
  );
}
