import Image from "next/image";
import { cn } from "@/lib/utils";

export function EditorialImage({
  src,
  sizes,
  className,
  eager = false,
}: {
  src: string | null;
  sizes: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-paper-deep", className)}>
      {src && (
        <Image
          src={src}
          alt=""
          fill
          sizes={sizes}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : undefined}
          className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.025]"
        />
      )}
    </div>
  );
}
