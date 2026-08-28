import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, QrCode, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CONTACT } from "@/data/site";

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="border-t border-border bg-charcoal">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl">GEO</span>
              <span className="font-display text-2xl text-primary">metric</span>
              <span className="eyebrow">LLP</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Construction, interiors and joint ventures in Bengaluru — built with restraint,
              detail and an obsession with finish quality.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="eyebrow">Navigate</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/projects", label: "Projects" },
                { to: "/testimonials", label: "Testimonials" },
                { to: "/blogs", label: "Blogs" },
                { to: "/book-a-site-visit", label: "Book a Site Visit" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow">Services</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {["Construction", "Interiors", "Joint Ventures"].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    hash={s.toLowerCase().replace(/\s/g, "-")}
                    className="transition-colors hover:text-primary"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h4 className="eyebrow">Newsletter</h4>
              {subscribed ? (
                <p className="mt-4 text-sm text-primary">Thank you — you're on the list.</p>
              ) : (
                <form
                  className="mt-4 flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubscribed(true);
                  }}
                >
                  <Input type="email" required placeholder="Email address" className="h-10" />
                  <Button type="submit" variant="gold" size="sm">
                    Join
                  </Button>
                </form>
              )}
            </div>
          </div>

          <div>
            <h4 className="eyebrow">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                {CONTACT.address}
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                <span>
                  <a href={`tel:${CONTACT.phonePrimary.replace(/\s/g, "")}`} className="hover:text-primary">
                    {CONTACT.phonePrimary}
                  </a>
                  {" / "}
                  <a href={`tel:${CONTACT.phoneSecondary.replace(/\s/g, "")}`} className="hover:text-primary">
                    {CONTACT.phoneSecondary}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-primary">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex h-24 w-24 items-center justify-center border border-border bg-muted/40 text-muted-foreground">
              <QrCode className="h-10 w-10" strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} GEOmetric LLP. All rights reserved.</p>
          <p className="max-w-2xl lg:text-right">
            Disclaimer: All specifications, plans, dimensions and images shown are indicative and
            subject to change without prior notice, in accordance with statutory approvals.
          </p>
        </div>
      </div>
    </footer>
  );
}
