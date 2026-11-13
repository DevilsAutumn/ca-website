import { getImageProps } from "next/image";
import { ContentTabs } from "@/app/_components/ui/content-tabs";
import { earningRuleScreens } from "../_content/rules-content";

type RuleScreen = (typeof earningRuleScreens)[number];

function RuleScreenFigure({ desktop, mobile, alt, caption }: RuleScreen) {
  const { props: desktopProps } = getImageProps({
    src: desktop,
    alt,
    sizes: "(min-width: 1280px) 595px, 48vw",
  });
  const { props: mobileProps } = getImageProps({
    src: mobile,
    alt,
    sizes:
      "(min-width: 768px) 48vw, (min-width: 640px) calc(100vw - 5rem), calc(100vw - 3rem)",
  });

  return (
    <figure className="m-0">
      <picture className="block">
        <source
          media="(min-width: 1200px)"
          srcSet={desktopProps.srcSet}
          sizes={desktopProps.sizes}
          width={desktop.width}
          height={desktop.height}
        />
        <img {...mobileProps} alt={alt} className="block h-auto w-full" />
      </picture>
      <figcaption className="flex min-h-18.5 items-center border-t border-line px-4 py-3.5 text-sm leading-5.5 text-ink-muted sm:px-5">
        {caption}
      </figcaption>
    </figure>
  );
}

export function RuleScreens() {
  return (
    <div className="min-w-0 border-x border-b border-line bg-surface">
      <ContentTabs
        label="Loyalty rules product screens"
        appearance="light"
        items={earningRuleScreens.map((screen) => ({
          value: screen.id,
          label: screen.tabLabel,
          content: <RuleScreenFigure {...screen} />,
        }))}
      />
    </div>
  );
}
