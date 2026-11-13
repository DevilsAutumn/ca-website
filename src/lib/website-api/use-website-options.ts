"use client";

import { useEffect, useState } from "react";
import type { WebsiteOption, WebsiteOptionsState } from "./types";

type OptionsEndpoint = "/api/countries" | "/api/phone-country-codes";

function isWebsiteOption(value: unknown): value is WebsiteOption {
  if (typeof value !== "object" || value === null) return false;
  const option = value as Record<string, unknown>;
  return (
    (typeof option.id === "string" || Number.isSafeInteger(option.id)) &&
    typeof option.value === "string"
  );
}

export function useWebsiteOptions(endpoint: OptionsEndpoint) {
  const [state, setState] = useState<WebsiteOptionsState>({
    phase: "loading",
    options: [],
  });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15_000);

    async function loadOptions() {
      try {
        const response = await fetch(endpoint, {
          signal: controller.signal,
          cache: "no-store",
          redirect: "error",
        });
        if (!response.ok) throw new Error("Options unavailable");
        const options: unknown = await response.json();
        if (
          !Array.isArray(options) ||
          !options.length ||
          !options.every(isWebsiteOption)
        ) {
          throw new Error("Invalid options");
        }
        if (cancelled) return;
        setState({ phase: "ready", options });
      } catch {
        if (cancelled) return;
        setState({ phase: "failed", options: [] });
      } finally {
        clearTimeout(timeout);
      }
    }

    void loadOptions();
    return () => {
      cancelled = true;
      clearTimeout(timeout);
      controller.abort();
    };
  }, [endpoint, attempt]);

  function reload() {
    setState({ phase: "loading", options: [] });
    setAttempt((current) => current + 1);
  }

  return { ...state, reload };
}
