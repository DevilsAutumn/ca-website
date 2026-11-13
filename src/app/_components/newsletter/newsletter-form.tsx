"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { FormField } from "@/app/_components/forms/form-field";
import { formControlClassName } from "@/app/_components/forms/form-styles";
import { Button } from "@/app/_components/ui/button";
import { siteLinks } from "@/lib/site-links";
import { submitWebsiteForm } from "@/lib/website-api/client";

type NewsletterErrors = Partial<Record<"name" | "email" | "terms", string[]>>;
type SubmitState =
  | { phase: "idle" | "sending" | "sent" }
  | { phase: "failed"; message: string; errors: NewsletterErrors };

export function NewsletterForm() {
  const [state, setState] = useState<SubmitState>({ phase: "idle" });
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const submitLock = useRef(false);
  const sending = state.phase === "sending";
  const errors = state.phase === "failed" ? state.errors : {};

  useEffect(() => {
    if (state.phase !== "failed") return;
    const invalid = formRef.current?.querySelector<HTMLElement>(
      "[aria-invalid='true']",
    );
    (invalid ?? statusRef.current)?.focus();
  }, [state]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitLock.current) return;
    const form = event.currentTarget;
    const values = new FormData(form);
    submitLock.current = true;
    setState({ phase: "sending" });
    try {
      const result = await submitWebsiteForm(
        "/api/subscribe-newsletter",
        {
          name: values.get("name")?.toString().trim(),
          email: values.get("email")?.toString().trim(),
          terms: values.get("terms") === "on",
        },
        "We couldn’t confirm your subscription. Please try again later.",
      );
      if (!result.ok) {
        setState({
          phase: "failed",
          message: result.message,
          errors: result.fields,
        });
        return;
      }
      form.reset();
      setState({ phase: "sent" });
    } finally {
      submitLock.current = false;
    }
  }

  return (
    <form
      ref={formRef}
      action="/api/subscribe-newsletter"
      method="post"
      onSubmit={handleSubmit}
      aria-labelledby="newsletter-title"
      aria-busy={sending}
    >
      <fieldset
        disabled={sending}
        className="m-0 min-w-0 space-y-5 border-0 p-0"
      >
        <FormField
          id="newsletter-name"
          label="Your name"
          error={errors.name?.[0]}
          required
        >
          {(props) => (
            <input
              {...props}
              name="name"
              autoComplete="name"
              className={formControlClassName}
            />
          )}
        </FormField>
        <FormField
          id="newsletter-email"
          label="Email address"
          error={errors.email?.[0]}
          required
        >
          {(props) => (
            <input
              {...props}
              name="email"
              type="email"
              autoComplete="email"
              autoCapitalize="none"
              spellCheck={false}
              className={formControlClassName}
            />
          )}
        </FormField>
        <div>
          <label className="flex cursor-pointer items-start gap-3 text-sm leading-6">
            <input
              id="newsletter-terms"
              name="terms"
              type="checkbox"
              required
              aria-invalid={errors.terms ? true : undefined}
              aria-describedby={
                errors.terms ? "newsletter-terms-error" : undefined
              }
              className="mt-1 size-4 shrink-0 accent-teal"
            />
            <span>
              I agree to the{" "}
              <Link
                href={siteLinks.termsOfUse}
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
                className="font-semibold text-teal-dark underline underline-offset-4 hover:text-ink"
              >
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link
                href={siteLinks.privacyPolicy}
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
                className="font-semibold text-teal-dark underline underline-offset-4 hover:text-ink"
              >
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          {errors.terms && (
            <p id="newsletter-terms-error" className="mt-2 mb-0 text-sm">
              {errors.terms[0]}
            </p>
          )}
        </div>
      </fieldset>
      <Button
        type="submit"
        disabled={sending}
        aria-describedby="newsletter-status"
        className="mt-7 max-sm:w-full"
      >
        {sending ? "Subscribing…" : "Subscribe"}
      </Button>
      <p
        ref={statusRef}
        id="newsletter-status"
        role={state.phase === "failed" ? "alert" : "status"}
        tabIndex={state.phase === "failed" ? -1 : undefined}
        className="mt-4 mb-0 text-sm leading-6 text-ink-muted"
      >
        {state.phase === "failed"
          ? state.message
          : state.phase === "sending"
            ? "Sending your subscription request…"
            : state.phase === "sent"
              ? "Thank you. Your newsletter subscription request has been received."
              : ""}
      </p>
    </form>
  );
}
