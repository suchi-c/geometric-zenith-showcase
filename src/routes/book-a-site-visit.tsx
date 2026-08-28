import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { BookVisitForm } from "@/components/BookVisitForm";
import { PageHero, Section } from "@/components/Section";
import { CONTACT } from "@/data/site";

const HERO =
  "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2000&q=80";

export const Route = createFileRoute("/book-a-site-visit")({
  head: () => ({
    meta: [
      { title: "Book a Site Visit — GEOmetric LLP" },
      {
        name: "description",
        content:
          "Schedule a guided walkthrough of Aalaya or any GEOmetric LLP project in Bengaluru. Choose your preferred date and time.",
      },
      { property: "og:title", content: "Book a Site Visit — GEOmetric LLP" },
      {
        property: "og:description",
        content: "Schedule a guided walkthrough of our Bengaluru projects.",
      },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: BookVisit,
});

function BookVisit() {
  return (
    <>
      <PageHero
        eyebrow="Site visit"
        title="Book a walkthrough."
        intro="Pick a date and we will arrange a guided visit with the project engineer on site."
        image={HERO}
      />
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <h2 className="text-3xl">Talk to us directly</h2>
            <ul className="mt-8 space-y-6 text-sm text-muted-foreground">
              <li className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                <span>
                  <a href={`tel:${CONTACT.phonePrimary.replace(/\s/g, "")}`} className="hover:text-primary">
                    {CONTACT.phonePrimary}
                  </a>
                  <br />
                  <a href={`tel:${CONTACT.phoneSecondary.replace(/\s/g, "")}`} className="hover:text-primary">
                    {CONTACT.phoneSecondary}
                  </a>
                </span>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-primary">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                {CONTACT.address}
              </li>
            </ul>
          </div>
          <div className="border border-border bg-card p-8 lg:p-10">
            <BookVisitForm />
          </div>
        </div>
      </Section>
    </>
  );
}
