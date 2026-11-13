import { offices } from "../_content/offices";

export function OfficeDirectory() {
  return (
    <section
      aria-labelledby="offices-title"
      className="min-w-0 bg-ink p-5 text-white sm:p-8 lg:p-9"
    >
      <h2
        id="offices-title"
        className="mt-0 mb-5 text-[clamp(27px,3vw,38px)] leading-[1.12] tracking-[-0.05em]"
      >
        Offices
      </h2>
      <ul
        role="list"
        className="m-0 list-none divide-y divide-line-dark border-t border-line-dark p-0"
      >
        {offices.map(({ name, address, email }) => (
          <li key={name} className="py-4.5 last:pb-0">
            <h3 className="mt-0 mb-1.5 text-[17px] leading-snug font-extrabold">
              {name}
            </h3>
            <address className="text-[15px] leading-relaxed text-teal-wash not-italic">
              {address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <a
                href={`mailto:${email}`}
                className="mt-2 inline-block text-sm font-bold break-words text-teal-pale underline underline-offset-4 hover:text-white focus-visible:outline-teal-pale"
              >
                {email}
              </a>
            </address>
          </li>
        ))}
      </ul>
    </section>
  );
}
