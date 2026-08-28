import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { BookVisitDialog } from "@/components/BookVisitDialog";
import { PageHero, Section } from "@/components/Section";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/data/site";

const HERO =
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=80";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials — GEOmetric LLP" },
      {
        name: "description",
        content:
          "Homeowners, land owners and commercial clients on working with GEOmetric LLP in Bengaluru.",
      },
      { property: "og:title", content: "Client Testimonials — GEOmetric LLP" },
      {
        property: "og:description",
        content: "What owners say about our construction, interiors and joint-venture work.",
      },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Trust, in our clients' own words."
        intro="Every review below comes from a completed project we can take you to visit."
        image={HERO}
      />
      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </Section>
      <Section className="bg-secondary/40">
        <div className="flex flex-col items-center text-center">
          <h2 className="max-w-2xl text-4xl leading-tight lg:text-5xl">
            Ready to write the next one?
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
