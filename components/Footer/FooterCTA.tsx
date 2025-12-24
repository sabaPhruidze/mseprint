import Link from "next/link";

export default function FooterCTA() {
  return (
    <section
      className="border-t border-gray-300 bg-white"
      aria-label="Footer call to action"
    >
      <div className="px-6 py-6 screen-size-15:px-20 flex flex-col screen-size-10:flex-row items-center justify-between gap-4">
        <div className="text-center screen-size-10:text-left">
          <p className="text-lg font-bold">Ready to start your project?</p>
          <p className="text-sm text-gray-600">
            Get a fast quote for printing, signs, and trade show graphics in
            Minneapolis.
          </p>
        </div>

        <nav aria-label="Footer primary actions">
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <li>
              <Link className="underline font-semibold" href="/request-quote">
                Request a Quote
              </Link>
            </li>
            <li>
              <Link className="underline" href="/contact-us">
                Contact
              </Link>
            </li>
            <li>
              <Link className="underline" href="/signs">
                Signs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
