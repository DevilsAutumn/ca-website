"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useWebsiteOptions } from "@/lib/website-api/use-website-options";
import {
  initialRegistrationData,
  registrationStepContent,
  type AccountFieldName,
  type RegistrationErrors,
} from "../_content/registration-content";
import { sendRegistration } from "../_lib/registration-request";
import { AccountDetails } from "./account-details";
import { LoyaltyCurrency, LoyaltyInterests } from "./loyalty-preferences";
import { RegistrationActions } from "./registration-actions";
import { RegistrationConsents } from "./registration-consents";
import { RegistrationProgress } from "./registration-progress";
import { RegistrationSuccess } from "./registration-success";

type SubmitState =
  | { phase: "idle" | "sending" }
  | { phase: "failed"; message: string; errors: RegistrationErrors };

export function RegistrationForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(initialRegistrationData);
  const countries = useWebsiteOptions("/api/countries");
  const [submitState, setSubmitState] = useState<SubmitState>({
    phase: "idle",
  });
  const [confirmationEmail, setConfirmationEmail] = useState<string | null>(
    null,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const feedbackRef = useRef<HTMLParagraphElement>(null);
  const previousStep = useRef(step);
  const submitLock = useRef(false);
  const sending = submitState.phase === "sending";
  const errors = submitState.phase === "failed" ? submitState.errors : {};

  useEffect(() => {
    if (confirmationEmail !== null) {
      headingRef.current?.focus();
    } else if (submitState.phase === "failed") {
      const invalid = formRef.current?.querySelector<HTMLElement>(
        "[aria-invalid='true']",
      );
      (invalid ?? feedbackRef.current)?.focus();
    } else if (previousStep.current !== step) {
      headingRef.current?.focus();
    }
    previousStep.current = step;
  }, [step, submitState, confirmationEmail]);

  function updateAccount(field: AccountFieldName, value: string) {
    setData((current) => ({ ...current, [field]: value }));
  }

  function goBack() {
    setSubmitState({ phase: "idle" });
    setStep((current) => Math.max(0, current - 1));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitLock.current || (step === 0 && countries.phase !== "ready"))
      return;
    if (step === 1) {
      if (data.company_has_loyalty_currency !== null) {
        setSubmitState({ phase: "idle" });
        setStep(2);
      }
      return;
    }

    submitLock.current = true;
    setSubmitState({ phase: "sending" });
    try {
      const result = await sendRegistration(data, step === 2);
      if (!result.ok) {
        if (result.step !== undefined) setStep(result.step);
        setSubmitState({
          phase: "failed",
          message: result.message,
          errors: result.errors,
        });
        return;
      }
      setSubmitState({ phase: "idle" });
      if (step === 0) setStep(1);
      else {
        setConfirmationEmail(data.email.trim());
        setData(initialRegistrationData);
      }
    } finally {
      submitLock.current = false;
    }
  }

  if (confirmationEmail !== null)
    return (
      <RegistrationSuccess email={confirmationEmail} titleRef={headingRef} />
    );

  return (
    <div className="flex min-w-0 flex-col p-6 sm:p-9 xl:p-11">
      <RegistrationProgress step={step} />
      <form
        ref={formRef}
        action="/api/register"
        method="post"
        onSubmit={handleSubmit}
        aria-labelledby="registration-step-title"
        aria-describedby="registration-step-description"
        aria-busy={sending}
        className="mt-7 flex flex-1 flex-col sm:mt-8"
      >
        <h2
          ref={headingRef}
          id="registration-step-title"
          tabIndex={-1}
          className="mb-2 text-[clamp(26px,2.5vw,32px)] leading-[1.15] tracking-[-0.045em]"
        >
          {registrationStepContent[step].title}
        </h2>
        <p
          id="registration-step-description"
          className="mb-6 text-[15px] leading-6 text-ink-muted"
        >
          {registrationStepContent[step].description}
        </p>
        <fieldset disabled={sending} className="m-0 min-w-0 border-0 p-0">
          {step === 0 && (
            <>
              <AccountDetails
                data={data}
                countries={countries}
                errors={errors}
                onChange={updateAccount}
                onRetryCountries={countries.reload}
              />
              <RegistrationConsents
                data={data}
                errors={errors}
                onChange={(field, checked) =>
                  setData((current) => ({ ...current, [field]: checked }))
                }
              />
            </>
          )}
          {step === 1 && (
            <LoyaltyCurrency
              value={data.company_has_loyalty_currency}
              error={errors.company_has_loyalty_currency?.[0]}
              onChange={(value) =>
                setData((current) => ({
                  ...current,
                  company_has_loyalty_currency: value,
                  interests:
                    current.company_has_loyalty_currency === value
                      ? current.interests
                      : {},
                }))
              }
            />
          )}
          {step === 2 && (
            <LoyaltyInterests
              data={data}
              error={errors.interests?.[0]}
              onChange={(id, checked) =>
                setData((current) => ({
                  ...current,
                  interests: { ...current.interests, [id]: checked },
                }))
              }
            />
          )}
        </fieldset>
        {submitState.phase === "failed" && (
          <p
            ref={feedbackRef}
            role="alert"
            tabIndex={-1}
            className="mt-5 mb-0 border-l-2 border-destructive bg-surface-soft px-4 py-3 text-sm leading-6"
          >
            {submitState.message}
          </p>
        )}
        <RegistrationActions
          step={step}
          sending={sending}
          canContinue={
            step === 0
              ? countries.phase === "ready"
              : step !== 1 || data.company_has_loyalty_currency !== null
          }
          onBack={goBack}
        />
      </form>
    </div>
  );
}
