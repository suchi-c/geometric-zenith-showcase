import { Link } from "@tanstack/react-router";
import { Building2, Handshake, Sofa } from "lucide-react";

const icons = {
  building: Building2,
  sofa: Sofa,
  handshake: Handshake,
} as const;

export interface Service {
  slug: string;
  title: string;
  icon: keyof typeof icons;
  summary: string;
  points: readonly string[];
}

export function ServiceCard({ service, href = "/services" }: { service: Service; href?: string }) {
  const Icon = icons[service.icon];
  return (
    <div
      id={service.slug}
      className="group flex h-full flex-col border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-luxe"
    >
      <Icon className="h-9 w-9 text-primary" strokeWidth={1} />
      <h3 className="mt-6 text-3xl">{service.title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
      <ul className="mt-6 flex-1 space-y-3 text-sm text-foreground/80">
        {service.points.map((p) => (
          <li key={p} className="flex gap-3">
            <span className="mt-2 h-px w-4 shrink-0 gradient-gold" />
            {p}
          </li>
        ))}
      </ul>
      <Link
        to={href}
        hash={service.slug}
        className="mt-8 text-[0.7rem] uppercase tracking-[0.2em] text-primary transition-opacity hover:opacity-75"
      >
        Learn more →
      </Link>
    </div>
  );
}
