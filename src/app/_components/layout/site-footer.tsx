import { TextLink } from "@/app/_components/ui/text-link";
import { NewsletterSignup } from "@/app/_components/newsletter/newsletter-signup";
import { socialProfiles } from "@/lib/seo/site";
import { siteLinks } from "@/lib/site-links";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "../ui/arrow";
export function SiteFooter() {
  return (
    <footer
      className={cn(
        "footer bg-ink text-white pt-16.25 pb-6.25 px-[max(40px,calc((100%_-_1200px)_/_2))] max-[901px]:pt-13.75",
        "max-[901px]:pb-6 max-[901px]:px-6 [&_a:focus-visible]:outline-teal-pale",
      )}
    >
      <div
        className={cn(
          "footer-main flex items-start pb-10 border-b border-b-line-dark gap-8.75",
          "max-[901px]:flex-wrap max-[901px]:gap-5",
        )}
      >
        <Link
          href="/"
          className={cn(
            "brand flex items-center text-[13px] leading-[1.03] tracking-[-0.04em] brand-footer text-white gap-2.25",
            "[&_strong]:font-extrabold",
          )}
        >
          <Image src="/logo.svg" alt="" width={40} height={23} />
          <span>
            Currency
            <br />
            <strong>Alliance</strong>
          </span>
        </Link>
        <div
          className={cn(
            "footer-social flex ml-auto gap-2 [&_a]:w-9 [&_a]:h-9 [&_a]:grid [&_a]:place-items-center [&_a]:text-[13px]",
            "[&_a]:border [&_a]:border-solid [&_a]:border-white/35",
          )}
        >
          <Link href={socialProfiles.linkedin} aria-label="LinkedIn">
            in
          </Link>
          <Link href={socialProfiles.youtube} aria-label="YouTube">
            ▶
          </Link>
        </div>
      </div>
      <div
        className={cn(
          "footer-links grid grid-cols-[1fr_1fr_2fr] pt-10 pb-12 px-0 gap-12.5 [&_>_div]:flex [&_>_div]:flex-col",
          "[&_>_div]:min-w-0 [&_>_div]:gap-2.5 [&_strong]:text-teal-pale [&_strong]:text-[12px]",
          "[&_strong]:tracking-[0.12em] [&_strong]:uppercase [&_strong]:mb-1.5 [&_a]:text-dark-muted [&_a]:text-[14px]",
          "[&_a]:leading-[1.6] [&_p]:text-dark-muted [&_p]:text-[14px] [&_p]:leading-[1.6] [&_a:hover]:text-white",
          "max-[901px]:grid-cols-[1fr_1fr] max-[901px]:gap-y-10 max-[901px]:gap-x-5 max-[901px]:pt-10",
          "max-[901px]:pb-12.5 max-[901px]:px-0 max-[541px]:grid-cols-2 [&_>_div_>_a]:min-h-6",
        )}
      >
        <div>
          <strong>Explore</strong>
          <Link href={siteLinks.solutions}>Platform</Link>
          <Link href={siteLinks.partnerMarketplace}>Marketplace</Link>
          <Link href="/#proof">Partners</Link>
          <Link href="/#comparison">Compare</Link>
          <Link href="/insights">Insights</Link>
        </div>
        <div>
          <strong>Company</strong>
          <Link href="/about-us">About us</Link>
          <Link href="/case-studies">Case studies</Link>
          <Link href="/our-technology">Our technology</Link>
          <Link href="/contact-us">Contact us</Link>
        </div>
        <div className="footer-updates [&_p]:max-w-90 [&_p]:leading-[1.6] [&_p]:m-0 max-[901px]:col-span-full">
          <strong>Keep in the loop</strong>
          <p>Perspectives on loyalty partnerships and customer value.</p>
          <NewsletterSignup />
          <TextLink
            href="/insights"
            tone="light"
            className={cn(
              "[.footer-links_&]:self-start [.footer-links_&]:mt-3 [.footer-links_&]:text-white",
              "[.footer-links_&]:text-[13px] [.footer-links_&:hover]:text-teal-pale",
            )}
          >
            Explore insights <Arrow />
          </TextLink>
        </div>
      </div>
      <div
        className={cn(
          "footer-bottom flex justify-between pt-5 text-dark-faint text-[12px] items-center flex-wrap gap-5",
          "max-[901px]:flex-col max-[901px]:items-start max-[901px]:gap-2.25 max-[541px]:text-[12px]",
          "max-[541px]:items-start",
        )}
      >
        <span>© 2026 Currency Alliance</span>
        <nav
          className={cn(
            "footer-policies flex flex-wrap gap-4 [&_a]:inline-flex [&_a]:min-h-6 [&_a]:items-center",
            "[&_a:hover]:text-white",
          )}
          aria-label="Legal information"
        >
          <Link href={siteLinks.privacyPolicy} prefetch={false}>
            Privacy
          </Link>
          <Link href={siteLinks.termsOfUse} prefetch={false}>
            Terms
          </Link>
        </nav>
        <span>Making loyalty commerce simple.</span>
      </div>
    </footer>
  );
}
