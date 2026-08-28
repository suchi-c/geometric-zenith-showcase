import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { projects } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function BookVisitForm({ defaultProject }: { defaultProject?: string }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-primary" strokeWidth={1} />
        <h3 className="text-2xl">Your visit request is in</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          A member of our team will call you within one working day to confirm the date and time of
          your site visit.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Book another visit
        </Button>
      </div>
    );
  }

  return (
    <form
      className="grid gap-5 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <Field id="name" label="Full name">
        <Input id="name" name="name" required placeholder="Your name" />
      </Field>
      <Field id="phone" label="Phone">
        <Input id="phone" name="phone" type="tel" required placeholder="+91 00000 00000" />
      </Field>
      <Field id="email" label="Email">
        <Input id="email" name="email" type="email" required placeholder="you@example.com" />
      </Field>
      <Field id="project" label="Project of interest">
        <select
          id="project"
          name="project"
          defaultValue={defaultProject ?? projects[0].slug}
          className="h-10 w-full rounded-sm border border-input bg-transparent px-3 text-sm text-foreground outline-none focus-visible:border-ring"
        >
          {projects.map((p) => (
            <option key={p.slug} value={p.slug} className="bg-card">
              {p.name}
            </option>
          ))}
          <option value="general" className="bg-card">
            Not sure yet / general enquiry
          </option>
        </select>
      </Field>
      <Field id="date" label="Preferred date">
        <Input id="date" name="date" type="date" required />
      </Field>
      <Field id="time" label="Preferred time">
        <select
          id="time"
          name="time"
          className="h-10 w-full rounded-sm border border-input bg-transparent px-3 text-sm text-foreground outline-none focus-visible:border-ring"
        >
          {["Morning (9–12)", "Afternoon (12–4)", "Evening (4–7)"].map((t) => (
            <option key={t} className="bg-card">
              {t}
            </option>
          ))}
        </select>
      </Field>
      <div className="sm:col-span-2">
        <Field id="message" label="Message">
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Anything you would like us to know before the visit"
          />
        </Field>
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" variant="gold" size="lg" className="w-full">
          Request Site Visit
        </Button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="eyebrow">
        {label}
      </Label>
      {children}
    </div>
  );
}
