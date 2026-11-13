import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteLinks } from "@/lib/site-links";
import { ButtonLink } from "../ui/button";

export function NavigationActions({
  layout,
  onNavigate,
}: {
  layout: "desktop" | "mobile";
  onNavigate?: () => void;
}) {
  return (
    <div
      className={cn(
        "text-[12px] font-extrabold",
        layout === "desktop"
          ? "header-actions hidden shrink-0 items-center gap-4 lg:flex"
          : "mobile-actions mt-auto flex flex-col items-stretch gap-4.5 px-6 pt-3 pb-7",
      )}
    >
      <ButtonLink href={siteLinks.register} onClick={onNavigate}>
        Register
      </ButtonLink>
      <Link
        href={siteLinks.signIn}
        onClick={onNavigate}
        className={cn(
          "sign-in inline-flex min-h-11 items-center gap-1.5 hover:text-teal-dark",
          layout === "mobile" && "self-start",
        )}
      >
        Sign in{" "}
        <span aria-hidden="true" className="text-teal">
          ↗
        </span>
      </Link>
    </div>
  );
}
