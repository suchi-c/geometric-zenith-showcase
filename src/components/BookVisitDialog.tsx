import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BookVisitForm } from "@/components/BookVisitForm";

export function BookVisitDialog({
  children,
  defaultProject,
}: {
  children: ReactNode;
  defaultProject?: string | undefined;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-border bg-card sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl font-light">Book a Site Visit</DialogTitle>
          <DialogDescription>
            Tell us when you would like to visit and we will arrange a guided walkthrough.
          </DialogDescription>
        </DialogHeader>
        <BookVisitForm defaultProject={defaultProject} />
      </DialogContent>
    </Dialog>
  );
}
