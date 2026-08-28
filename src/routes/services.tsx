import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { BookVisitDialog } from "@/components/BookVisitDialog";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { ServiceCard, type Service } from "@/components/ServiceCard";
import { services } from "@/data/site";

const HERO =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Construction, Interiors & Joint Ventures | GEOmetric LLP" },
      {
        name: "description",
        content:
          "Ground-up construction, studio-led interiors and transparent joint ventures for land owners in Bengaluru.",
      },
      { property: "og:title", content: "Services — GEOmetric LLP" },
      {
        property: "og:description",
        content: "Construction, interiors and joint ventures delivered by one accountable team.",
      },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: Services,
});

const detail = [
  {
    slug: "construction",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
    body: "We take a site from soil test to handover: structural design, BBMP approvals, RCC works, MEP, façade and finishes. Every stage is billed against a written schedule and inspected by our own engineers before the next begins.",
  },
  {
    slug: "interiors",
    image:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1400&q=80",
    body: "Our interiors studio works from first mood board to final styling — space planning, bespoke joinery, lighting design, automation and procurement. We produce full working drawings, so what is presented is what is built.",
  },
  {
    slug: "joint-ventures",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
    body: "For land owners we structure joint ventures with clear carpet-area shares, defined timelines with damages, and an annexed specification schedule. You keep visibility through stage-wise reporting until handover.",
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Three disciplines under one roof."
        intro="Construction, interiors and joint ventures — run by the same team, to the same written standard."
        image={HERO}
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s as unknown as Service} />
          ))}
        </div>
      </Section>

      {detail.map((d, i) => {
        const service = services.find((s) => s.slug === d.slug)!;
        return (
          <Section key={d.slug} id={d.slug} className={i % 2 === 1 ? "bg-charcoal" : ""}>
            <div
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                i % 2 === 1 ? "lg:[&>figure]:order-last" : ""
              }`}
            >
              <figure className="overflow-hidden border border-border">
                <img
                  src={d.image}
                  alt={service.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </figure>
              <div>
                <SectionHeading eyebrow={`0${i + 1} — Service`} title={service.title} />
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">{d.body}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <BookVisitDialog>
                    <Button variant="gold">Talk to our team</Button>
                  </BookVisitDialog>
                </div>
              </div>
            </div>
          </Section>
        );
      })}
    </>
  );
}
