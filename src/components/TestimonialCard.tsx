import { Quote, Star } from "lucide-react";

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  quote: string;
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col border border-border bg-card p-8 transition-colors duration-500 hover:border-primary/50">
      <Quote className="h-7 w-7 text-primary/70" strokeWidth={1} />
      <blockquote className="mt-5 flex-1 font-display text-xl leading-relaxed text-foreground/90">
        “{testimonial.quote}”
      </blockquote>
      <div className="mt-6 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={
              i < testimonial.rating ? "h-4 w-4 fill-primary text-primary" : "h-4 w-4 text-muted"
            }
            strokeWidth={1}
          />
        ))}
      </div>
      <figcaption className="mt-6 flex items-center gap-4 border-t border-border pt-6">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 font-display text-lg text-primary">
          {testimonial.name.charAt(0)}
        </span>
        <span>
          <span className="block text-sm text-foreground">{testimonial.name}</span>
          <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {testimonial.role}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
