import { ViewportHero } from "@/app/_components/marketing/viewport-hero";
import { cn } from "@/lib/utils";
import { companyFacts } from "../_content/about-content";

export function AboutHero() {
  return (
    <ViewportHero aria-labelledby="about-title" className="bg-ink text-white">
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl flex-1 flex-col px-10 text-center",
          "max-[901px]:px-6",
        )}
      >
        <div className="mx-auto flex w-full max-w-280 flex-1 flex-col items-center justify-center py-16 max-[901px]:py-12">
          <p className="mb-8 text-[12px] leading-[1.4] font-extrabold tracking-[0.15em] text-teal-pale uppercase">
            About Currency Alliance
          </p>
          <h1
            id="about-title"
            className={cn(
              "mb-7 text-[clamp(40px,6vw,80px)] leading-[1.08] tracking-[-0.065em] text-balance",
              "max-[541px]:max-w-90 max-[541px]:text-[44px] max-[381px]:text-[40px]",
            )}
          >
            Better loyalty. Built together.
          </h1>
          <p className="mb-0 max-w-165 text-[18px] leading-[1.75] text-teal-wash max-[541px]:text-[16px]">
            We connect brands so loyalty programs can do more for their members.
            More ways to earn. More places to use points. More reasons to
            return.
          </p>
        </div>
        <dl
          aria-label="Currency Alliance in numbers"
          className={cn(
            "m-0 grid grid-cols-3 border-t border-line-dark py-8",
            "max-[541px]:py-7",
          )}
        >
          {companyFacts.map((fact) => (
            <div
              key={fact.label}
              className={cn(
                "flex min-w-0 flex-col gap-2 border-r border-line-dark px-6 last:border-r-0",
                "max-[541px]:px-1",
              )}
            >
              <dt className="order-2 text-[14px] leading-[1.5] text-dark-muted max-[381px]:text-[13px]">
                {fact.label}
              </dt>
              <dd className="order-1 m-0 text-[38px] leading-none font-medium tracking-[-0.055em] text-teal-pale max-[541px]:text-[30px]">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </ViewportHero>
  );
}
