import { cn } from "@/lib/utils";
import Image from "next/image";
import { Database, Globe2, Network, Smartphone, Store } from "lucide-react";
import { DiagramConnection } from "./diagram-connection";
const channels = [
  { label: "Web", icon: Globe2 },
  { label: "App", icon: Smartphone },
  { label: "In-store", icon: Store },
];
const systems = [
  { label: "Loyalty system", icon: Database },
  { label: "CRM / CDP", icon: Database },
  { label: "Commerce", icon: Database },
  { label: "Partner APIs", icon: Network },
];
const verticalConnectionPath =
  "M300 0V10Q300 23 287 23H88Q75 23 75 36V46M300 0V10Q300 23 287 23H238Q225 23 225 36V46M300 0V10Q300 23 313 23H362Q375 23 375 36V46M300 0V10Q300 23 313 23H512Q525 23 525 36V46";
const horizontalConnectionPath =
  "M0 100H20Q32 100 32 88V34Q32 22 44 22H64M0 100H20Q32 100 32 88V86Q32 74 44 74H64M0 100H20Q32 100 32 112V114Q32 126 44 126H64M0 100H20Q32 100 32 112V166Q32 178 44 178H64";
function SystemConnections() {
  return (
    <div
      className={cn(
        "h-50",
        "max-[901px]:w-[calc(100%_+_var(--system-gap))] max-[901px]:h-11.5",
        "max-[901px]:[margin-inline:calc(var(--system-gap)_/_-2)]",
      )}
      aria-hidden="true"
    >
      <DiagramConnection
        className="block max-[901px]:hidden"
        viewBox="0 0 64 200"
        path={horizontalConnectionPath}
      />
      <DiagramConnection
        className="hidden max-[901px]:block max-[541px]:hidden"
        viewBox="0 0 600 46"
        path={verticalConnectionPath}
      />
      <DiagramConnection
        className="hidden max-[541px]:block"
        viewBox="0 0 600 46"
        path="M300 0V46"
      />
    </div>
  );
}
export function ArchitectureDiagram() {
  return (
    <figure
      className={cn(
        "[--system-gap:10px] grid grid-cols-[minmax(0,0.95fr)_44px_minmax(0,1.45fr)_64px_minmax(0,0.9fr)]",
        "items-center min-w-0 w-full rounded-[6px] bg-surface m-0 p-7 border border-solid border-line",
        "[&_figcaption]:col-span-full [&_figcaption]:mt-6 [&_figcaption]:pt-4.5 [&_figcaption]:border-t",
        "[&_figcaption]:border-t-line [&_figcaption]:text-ink-muted [&_figcaption]:text-[12px]",
        "[&_figcaption]:leading-[1.5] [&_figcaption]:text-center max-[901px]:block max-[901px]:max-w-155",
        "max-[901px]:m-auto max-[541px]:[--system-gap:7px] max-[541px]:py-4.5 max-[541px]:px-3.5",
        "max-[541px]:[&_figcaption]:text-[12px]",
      )}
    >
      <div className="grid grid-cols-3 rounded-[3px] border border-solid border-line">
        {channels.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className={cn(
              "tech-diagram-channel flex min-w-0 items-center flex-col text-ink-soft text-[12px] font-[650] py-4.5 px-1",
              "gap-2.5 [.tech-diagram-channel_+_&]:border-l [.tech-diagram-channel_+_&]:border-l-line",
            )}
          >
            <Icon size={21} strokeWidth={1.4} aria-hidden="true" />
            <span>{label}</span>
          </div>
        ))}
        <div className="col-span-full border-t border-t-line text-ink-muted text-[12px] text-center p-2.5">
          Your application backend
        </div>
      </div>
      <div className="h-px max-[901px]:h-9.5" aria-hidden="true">
        <DiagramConnection
          className="block max-[901px]:hidden"
          viewBox="0 0 44 1"
          path="M0 0.5H44"
          compact
        />
        <DiagramConnection
          className="mx-auto hidden w-px max-[901px]:block"
          viewBox="0 0 1 38"
          path="M0.5 0V38"
          compact
        />
      </div>
      <div
        className={cn(
          "relative rounded-[3px] bg-paper shadow-[0_5px_0_var(--surface),0_6px_0_var(--line)] border border-solid",
          "border-teal before:absolute before:top-[calc(50%_-_3px)] before:w-1.5 before:h-1.5 before:rounded-full",
          "before:bg-teal before:content-[''] before:left-[-4px] after:absolute after:top-[calc(50%_-_3px)] after:w-1.5",
          "after:h-1.5 after:rounded-full after:bg-teal after:content-[''] after:right-[-4px]",
          "max-[901px]:before:top-[-4px] max-[901px]:before:left-[calc(50%_-_3px)] max-[901px]:after:top-auto",
          "max-[901px]:after:right-auto max-[901px]:after:bottom-[-4px] max-[901px]:after:left-[calc(50%_-_3px)]",
        )}
      >
        <div
          className={cn(
            "flex items-center border-b border-b-line p-5 gap-3.5 [&_img]:shrink-0 [&_strong]:text-ink",
            "[&_strong]:text-[21px] [&_strong]:font-[550] [&_strong]:tracking-[-0.04em] [&_>_span]:ml-auto",
            "[&_>_span]:text-teal-dark [&_>_span]:text-[11px] [&_>_span]:font-[750] [&_>_span]:tracking-[0.04em]",
            "min-[901px]:max-[1101px]:[&_>_span]:hidden max-[541px]:py-4.5 max-[541px]:px-3.5 max-[541px]:gap-3",
            "max-[541px]:[&_strong]:text-[20px] max-[541px]:[&_>_span]:hidden",
          )}
        >
          <Image
            src="/logo.svg"
            alt="Currency Alliance"
            width={46}
            height={26}
          />
          <strong>Loyalty API</strong>
          <span>REST / JSON</span>
        </div>
        <div
          className={cn(
            "grid grid-cols-3 text-ink-soft text-[12px] text-center [&_span]:py-4 [&_span]:px-0.75",
            "[&_span_+_span]:border-l [&_span_+_span]:border-l-line",
          )}
        >
          <span>Accrual</span>
          <span>Exchange</span>
          <span>Redemption</span>
        </div>
        <div
          className={cn(
            "grid text-[12px] text-center grid-cols-2 pt-0 pb-3 text-teal-dark px-3 gap-2 [&_span]:bg-teal-wash",
            "[&_span]:rounded-[2px] [&_span]:py-2.25 [&_span]:px-1",
          )}
        >
          <span>Rules engine</span>
          <span>Points bank</span>
        </div>
      </div>
      <SystemConnections />
      <div
        className={cn(
          "grid gap-2 [&_>_div]:flex [&_>_div]:min-w-0 [&_>_div]:min-h-11 [&_>_div]:items-center",
          "[&_>_div]:rounded-[3px] [&_>_div]:text-ink-muted [&_>_div]:text-[13px] [&_>_div]:leading-[1.3]",
          "[&_>_div]:py-2.5 [&_>_div]:px-3.5 [&_>_div]:gap-2.5 [&_>_div]:border [&_>_div]:border-solid",
          "[&_>_div]:border-line [&_svg]:shrink-0 max-[901px]:grid-cols-4 max-[901px]:gap-[var(--system-gap)]",
          "max-[901px]:[&_>_div]:min-h-17.5 max-[901px]:[&_>_div]:justify-center max-[901px]:[&_>_div]:flex-col",
          "max-[901px]:[&_>_div]:text-[12px] max-[901px]:[&_>_div]:text-center max-[901px]:[&_>_div]:py-2",
          "max-[901px]:[&_>_div]:px-0.75 max-[901px]:[&_>_div]:gap-2 max-[541px]:grid-cols-2 max-[541px]:rounded-[3px]",
          "max-[541px]:gap-0 max-[541px]:border max-[541px]:border-solid max-[541px]:border-line",
          "max-[541px]:[&_>_div]:min-h-20.5 max-[541px]:[&_>_div]:rounded-none max-[541px]:[&_>_div]:text-[12px]",
          "max-[541px]:[&_>_div]:py-3 max-[541px]:[&_>_div]:px-2 max-[541px]:[&_>_div]:border-0",
          "max-[541px]:[&_>_div]:border-none max-[541px]:[&_>_div:nth-child(odd)]:border-r",
          "max-[541px]:[&_>_div:nth-child(odd)]:border-r-line max-[541px]:[&_>_div:nth-child(n_+_3)]:border-t",
          "max-[541px]:[&_>_div:nth-child(n_+_3)]:border-t-line",
        )}
      >
        {systems.map(({ label, icon: Icon }) => (
          <div key={label}>
            <Icon size={17} strokeWidth={1.4} aria-hidden="true" />
            <span>{label}</span>
          </div>
        ))}
      </div>
      <figcaption>
        One API layer. The services and systems you choose.
      </figcaption>
    </figure>
  );
}
