import { cn } from "@/lib/utils";
import Image from "next/image";
import { partners } from "./home-data";
function PartnerLogo({
  name,
  category,
  logo,
}: {
  name: string;
  category: string;
  logo: string;
}) {
  return (
    <li
      className={cn(
        "relative grid min-h-31 min-w-0 grid-cols-[94px_minmax(0,1fr)] items-center gap-4 border-r border-b",
        "border-line p-5.5 transition-[background-color,transform] duration-180 ease-[ease] hover:z-1",
        "hover:bg-teal-wash hover:transform-[translateY(-2px)] min-[1101px]:[&:nth-child(4n)]:border-r-0",
        "min-[1101px]:[&:nth-last-child(-n+4)]:border-b-0 max-[1101px]:even:border-r-0",
        "max-[1101px]:[&:nth-last-child(-n+2)]:border-b-0 max-[541px]:grid-cols-1 max-[541px]:min-h-33",
        "max-[541px]:justify-items-center max-[541px]:content-center max-[541px]:text-center max-[541px]:py-4",
        "max-[541px]:px-3 max-[541px]:gap-3",
      )}
    >
      <span className="relative h-13.5 w-23.5 max-[541px]:h-11.5 max-[541px]:w-22">
        <Image
          src={logo}
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 541px) 88px, 94px"
        />
      </span>
      <span
        className={cn(
          "flex min-w-0 flex-col gap-1.5 [&_strong]:text-ink [&_strong]:text-[15px] [&_strong]:font-[650]",
          "[&_strong]:tracking-[-0.035em] [&_strong]:leading-[1.3] [&_small]:text-ink-muted [&_small]:text-[12px]",
          "[&_small]:leading-[1.4] max-[541px]:[&_strong]:flex max-[541px]:[&_strong]:min-h-[2.6em]",
          "max-[541px]:[&_strong]:items-center max-[541px]:[&_strong]:justify-center max-[541px]:[&_strong]:text-[14px]",
          "max-[541px]:[&_small]:hidden",
        )}
      >
        <strong>{name}</strong>
        <small>{category}</small>
      </span>
    </li>
  );
}
export function PartnerLogoCloud() {
  return (
    <ul
      className="grid grid-cols-4 max-[1101px]:grid-cols-2"
      aria-label="Currency Alliance partner network"
    >
      {partners.map((partner) => (
        <PartnerLogo key={partner.name} {...partner} />
      ))}
    </ul>
  );
}
