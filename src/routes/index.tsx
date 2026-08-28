import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, HardHat, Ruler, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookVisitDialog } from "@/components/BookVisitDialog";
import { Section, SectionHeading } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard, type Service } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects, services, testimonials } from "@/data/site";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GEOmetric LLP — Luxury Construction & Interiors in Bengaluru" },
      {
        name: "description",
        content:
          "GEOmetric LLP crafts premium residences, interiors and joint-venture developments across Bengaluru. Book a site visit at Aalaya, RR Nagar.",
      },
      { property: "og:title", content: "GEOmetric LLP — Luxury Construction & Interiors" },
      {
        property: "og:description",
        content: "Premium construction, interiors and joint ventures across Bengaluru.",
      },
      { property: "og:image", content: HERO_IMAGE },
      { name: "twitter:image", content: HERO_IMAGE },
    ],
  }),
  component: Home,
});

const strengths = [
  {
    icon: ShieldCheck,
    title: "Approvals first",
    text: "Every project begins with sanctioned plans and full statutory compliance — no shortcuts, no retrofitted permissions.",
  },
  {
    icon: Ruler,
    title: "Detail-led design",
    text: "In-house architects and interior designers draw each joint, reveal and finish before a single wall goes up.",
  },
  {
    icon: HardHat,
    title: "Own site teams",
    text: "Supervision by our own engineers rather than rotating subcontractors keeps quality consistent to handover.",
  },
  {
    icon: Award,
    title: "Honest costing",
    text: "Stage-wise transparent billing with a specification schedule fixed in writing at the time of booking.",
  },
];

function Home() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Contemporary residence built by GEOmetric LLP"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 lg:px-10">
          <p className="eyebrow">GEOmetric LLP · Bengaluru</p>
          <h1 className="mt-6 max-w-4xl text-5xl leading-[1.03] sm:text-6xl lg:text-8xl">
            Spaces measured in
            <span className="block text-primary">craft, not square feet.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/75 lg:text-lg">
            Construction, interiors and joint ventures for people who notice the finish line, the
            shadow gap and the way light lands at four in the afternoon.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <BookVisitDialog>
              <Button variant="gold" size="lg">
                Book a Site Visit
              </Button>
            </BookVisitDialog>
            <Button variant="goldOutline" size="lg" asChild>
              <Link to="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading
            eyebrow="Who we are"
            title="A building practice with a designer's temperament."
          />
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              GEOmetric LLP builds residences and commercial spaces across west Bengaluru, and
              designs the interiors that go inside them. Since 2012 we have worked on a simple
              premise: a home is judged by the hundred details nobody photographs.
            </p>
            <p>
              We work in three ways — ground-up construction, full-service interiors, and joint
              ventures with land owners who want a partner rather than a buyer. Each one is run by
              the same team, to the same standard, with the same written specification schedule.
            </p>
            <div className="grid grid-cols-3 gap-8 border-t border-border pt-8">
              {[
                { k: "14", v: "Years building" },
                { k: "50+", v: "Homes delivered" },
                { k: "100%", v: "Approved plans" },
              ].map((s) => (
                <div key={s.v}>
                  <p className="font-display text-4xl text-primary">{s.k}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em]">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-charcoal">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Featured work"
            title="Projects currently defining our portfolio."
          />
          <Link
            to="/projects"
            className="group flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-primary"
          >
            All projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="Three disciplines, one accountable team."
          align="center"
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s as unknown as Service} />
          ))}
        </div>
      </Section>

      <Section className="bg-charcoal">
        <SectionHeading eyebrow="Why GEOmetric" title="The reasons clients stay with us." />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s) => (
            <div key={s.title} className="border-t border-border pt-8">
              <s.icon className="h-8 w-8 text-primary" strokeWidth={1} />
              <h3 className="mt-5 text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Client voices" title="What our owners say." align="center" />
        <Carousel className="mt-14" opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {testimonials.slice(0, 5).map((t) => (
              <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
                <TestimonialCard testimonial={t} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-10 flex justify-center gap-4">
            <CarouselPrevious className="relative inset-auto translate-y-0 border-border bg-transparent text-primary hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="relative inset-auto translate-y-0 border-border bg-transparent text-primary hover:bg-primary hover:text-primary-foreground" />
          </div>
        </Carousel>
        <div className="mt-12 text-center">
          <Button variant="goldOutline" asChild>
            <Link to="/testimonials">Read all testimonials</Link>
          </Button>
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow">Visit us</p>
          <h2 className="mt-4 max-w-2xl text-4xl leading-tight lg:text-5xl">
            Walk the site. Feel the proportions. Then decide.
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
