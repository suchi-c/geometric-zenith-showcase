import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-5 py-24 lg:px-10 lg:py-32", className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl leading-tight lg:text-5xl">{title}</h2>
      <div
        className={cn(
          "mt-5 h-px w-14 gradient-gold",
          align === "center" && "mx-auto",
        )}
      />
      {intro && <p className="mt-6 text-base leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden pt-20">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 lg:px-10 lg:pb-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] lg:text-7xl">{title}</h1>
        {intro && (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">{intro}</p>
        )}
      </div>
    </section>
  );
}
