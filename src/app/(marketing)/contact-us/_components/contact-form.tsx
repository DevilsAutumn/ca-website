"use client";

import Script from "next/script";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Button } from "@/app/_components/ui/button";
import { useWebsiteOptions } from "@/lib/website-api/use-website-options";
import {
  sendContactMessage,
  type ContactFieldErrors,
} from "../_lib/contact-request";
import { ContactFields } from "./contact-fields";

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim();
const unavailable =
  "The form is currently unavailable. You can email one of our offices.";
const captchaMessages = {
  loading: "Loading form verification…",
  ready: "",
  failed:
    "Verification couldn’t load. Reload the page or email one of our offices.",
};

type SubmitState =
  | { phase: "idle" | "sending" | "sent" }
  | { phase: "failed"; message: string; errors?: ContactFieldErrors };

export function ContactForm() {
  const [captchaStatus, setCaptchaStatus] = useState<
    "loading" | "ready" | "failed"
  >("loading");
  const codes = useWebsiteOptions("/api/phone-country-codes");
  const [submitState, setSubmitState] = useState<SubmitState>({
    phase: "idle",
  });
  const submitLock = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const sending = submitState.phase === "sending";

  useEffect(() => {
    if (submitState.phase !== "failed") return;
    const invalid = formRef.current?.querySelector<HTMLElement>(
      "[aria-invalid='true']:not(:disabled)",
    );
    (invalid ?? statusRef.current)?.focus();
  }, [submitState]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!siteKey || captchaStatus !== "ready" || submitLock.current) return;

    const form = event.currentTarget;
    const values = new FormData(form);
    submitLock.current = true;
    setSubmitState({ phase: "sending" });

    try {
      const result = await sendContactMessage(values, siteKey);
      if (!result.ok) {
        setSubmitState({
          phase: "failed",
          message: result.message,
          errors: result.errors,
        });
        return;
      }

      form.reset();
      setSubmitState({ phase: "sent" });
    } finally {
      submitLock.current = false;
    }
  }

  const statusMessages = {
    idle: siteKey ? captchaMessages[captchaStatus] : unavailable,
    sending: "Sending your message…",
    sent: "Message sent. Thank you for getting in touch.",
  };
  const statusMessage =
    submitState.phase === "failed"
      ? submitState.message
      : statusMessages[submitState.phase];

  return (
    <form
      ref={formRef}
      aria-labelledby="contact-form-title"
      aria-describedby="contact-required-fields"
      method="post"
      action="/api/contact-us"
      aria-busy={sending}
      onSubmit={handleSubmit}
      className="min-w-0 border border-line bg-surface p-5 sm:p-8 lg:p-9"
    >
      {siteKey && (
        <Script
          src={
            "https://www.google.com/recaptcha/api.js?render=" +
            encodeURIComponent(siteKey)
          }
          strategy="afterInteractive"
          onReady={() => setCaptchaStatus("ready")}
          onError={() => setCaptchaStatus("failed")}
        />
      )}
      <h2
        id="contact-form-title"
        className="mt-0 mb-2 text-[clamp(27px,3vw,38px)] leading-[1.12] tracking-[-0.05em]"
      >
        Send a message
      </h2>
      <p
        id="contact-required-fields"
        className="mt-0 mb-6 text-sm text-ink-muted"
      >
        Fields marked with an asterisk are required.
      </p>
      <ContactFields
        codes={codes}
        onRetryCodes={codes.reload}
        errors={submitState.phase === "failed" ? submitState.errors : undefined}
        disabled={sending}
      />
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
        <Button
          type="submit"
          disabled={!siteKey || captchaStatus !== "ready" || sending}
          aria-describedby="contact-send-status"
          className="min-w-24"
        >
          {sending ? "Sending…" : "Send"}
        </Button>
        <p
          ref={statusRef}
          id="contact-send-status"
          role={submitState.phase === "failed" ? "alert" : "status"}
          tabIndex={submitState.phase === "failed" ? -1 : undefined}
          className="m-0 text-sm leading-relaxed text-ink-muted"
        >
          {statusMessage}
        </p>
      </div>
    </form>
  );
}
