"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NewsletterForm } from "./newsletter-form";

export function NewsletterSignup() {
  return (
    <Sheet>
      <SheetTrigger render={<Button className="mt-3 self-start" />}>
        Subscribe to newsletter
      </SheetTrigger>
      <SheetContent
        side="right"
        className={cn(
          "w-full! max-w-120! gap-0 overflow-y-auto overscroll-contain rounded-none border-line bg-surface p-0 text-ink",
          "[&_[data-slot=sheet-close]]:rounded-none [&_[data-slot=sheet-close]]:text-ink",
        )}
      >
        <SheetHeader className="gap-3 px-6 pt-16 pb-7 sm:px-8">
          <SheetTitle
            id="newsletter-title"
            className="text-[32px] leading-[1.12] font-medium tracking-[-0.045em] text-ink"
          >
            Subscribe to our newsletter
          </SheetTitle>
          <SheetDescription className="text-base leading-7 text-ink-muted">
            Occasional insights on loyalty partnerships and customer value.
          </SheetDescription>
        </SheetHeader>
        <div className="px-6 pb-9 sm:px-8">
          <NewsletterForm />
        </div>
      </SheetContent>
    </Sheet>
  );
}
