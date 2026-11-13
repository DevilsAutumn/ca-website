type Endpoint = {
  label: string;
  detail?: string;
};

type RelationshipDiagramProps = {
  from: Endpoint;
  to: Endpoint;
  connection: string;
  direction: "forward" | "mutual";
  description: string;
};

function RelationshipEndpoint({ label, detail }: Endpoint) {
  return (
    <div className="flex min-h-20 min-w-0 flex-col justify-center border border-line bg-surface px-2.5 py-3 sm:min-h-24 sm:px-4">
      <p className="m-0 text-[14px] leading-[1.3] font-extrabold text-balance sm:text-[16px]">
        {label}
      </p>
      {detail && (
        <p className="mt-1.5 mb-0 text-[13px] leading-[1.4] text-ink-muted">
          {detail}
        </p>
      )}
    </div>
  );
}

export function RelationshipDiagram({
  from,
  to,
  connection,
  direction,
  description,
}: RelationshipDiagramProps) {
  return (
    <figure className="m-0">
      <figcaption className="sr-only">{description}</figcaption>
      <div
        aria-hidden="true"
        className="grid grid-cols-[minmax(0,1fr)_minmax(3rem,0.65fr)_minmax(0,1fr)] text-center"
      >
        <RelationshipEndpoint {...from} />
        <div className="relative flex min-w-0 items-center text-teal-dark">
          <span className="absolute inset-x-0 bottom-[calc(50%+0.5rem)] px-0.5 text-[12px] leading-tight font-bold text-balance sm:text-[13px]">
            {connection}
          </span>
          <span className="relative block h-px w-full bg-current">
            {direction === "mutual" && (
              <span className="absolute top-1/2 left-px size-1.75 -translate-y-1/2 rotate-45 border-b border-l border-current" />
            )}
            <span className="absolute top-1/2 right-px size-1.75 -translate-y-1/2 rotate-45 border-t border-r border-current" />
          </span>
        </div>
        <RelationshipEndpoint {...to} />
      </div>
    </figure>
  );
}
