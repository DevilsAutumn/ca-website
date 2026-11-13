type Recaptcha = {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

export async function getContactCaptcha(
  siteKey: string,
): Promise<string | null> {
  if (typeof window === "undefined" || !siteKey.trim()) return null;
  const captcha = (window as Window & { grecaptcha?: Recaptcha }).grecaptcha;
  if (!captcha) return null;

  return new Promise<string | null>((resolve) => {
    let settled = false;
    const timeout = window.setTimeout(() => finish(null), 8_000);

    function finish(token: string | null) {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeout);
      resolve(token);
    }

    try {
      captcha.ready(async () => {
        if (settled) return;
        try {
          const token = await captcha.execute(siteKey, { action: "submit" });
          finish(typeof token === "string" && token.trim() ? token : null);
        } catch {
          finish(null);
        }
      });
    } catch {
      finish(null);
    }
  });
}
