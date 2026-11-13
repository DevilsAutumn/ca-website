import { Arrow } from "@/app/_components/ui/arrow";
import { TextLink } from "@/app/_components/ui/text-link";

export function LinkingIntegration() {
  return (
    <section
      aria-labelledby="linking-integration-title"
      className="bg-ink text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:px-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 lg:py-19">
        <div>
          <h2
            id="linking-integration-title"
            className="mt-0 mb-5 max-w-115 text-[clamp(34px,4.3vw,55px)] leading-[1.06] tracking-[-0.06em] text-balance"
          >
            Sign-in stays <em className="text-teal-pale">with the partner.</em>
          </h2>
          <TextLink href="/our-technology" tone="light">
            Explore our technology <Arrow />
          </TextLink>
        </div>
        <dl className="m-0 divide-y divide-line-dark border-y border-line-dark">
          <div className="py-4">
            <dt className="mb-1.5 text-[16px] font-extrabold">
              Partner authentication
            </dt>
            <dd className="m-0 max-w-130 text-[15px] leading-[1.65] text-teal-wash">
              The partner runs its own sign-in flow, using the methods it
              supports, such as single sign-on or a one-time passcode.
            </dd>
          </div>
          <div className="py-4">
            <dt className="mb-1.5 text-[16px] font-extrabold">
              Token-based return
            </dt>
            <dd className="m-0 max-w-130 text-[15px] leading-[1.65] text-teal-wash">
              The token authorizes the link or an agreed action. This reduces
              the need to share identifying data, and a partner member ID can be
              tokenized if one is required.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
