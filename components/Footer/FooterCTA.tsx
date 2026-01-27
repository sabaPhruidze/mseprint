import Link from "next/link";

export default function FooterCTA() {
  return (
    <section
      className="
        border-t border-gray-200 bg-white
        dark:border-gray-800 dark:bg-gray-950
      "
      aria-label="Footer call to action"
    >
      <div
        className="
          px-6 py-6 screen-size-15:px-20
          flex flex-col screen-size-10:flex-row
          items-center justify-between gap-4
        "
      >
        <div className="text-center screen-size-10:text-left">
          <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
            Ready to start your project?
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Get a fast quote for printing, signs, and trade show graphics in
            Minneapolis.
          </p>
        </div>

        <nav aria-label="Footer primary actions">
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <li>
              <Link
                href="/request-quote"
                className="
                  font-semibold underline underline-offset-4
                  text-gray-900 dark:text-gray-100
                  hover:text-gray-700 dark:hover:text-gray-200
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400
                  dark:focus-visible:ring-gray-600 rounded
                "
              >
                Request a Quote
              </Link>
            </li>

            <li>
              <Link
                href="/contact-us"
                className="
                  underline underline-offset-4
                  text-gray-700 dark:text-gray-300
                  hover:text-gray-900 dark:hover:text-gray-100
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400
                  dark:focus-visible:ring-gray-600 rounded
                "
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                href="/signs"
                className="
                  underline underline-offset-4
                  text-gray-700 dark:text-gray-300
                  hover:text-gray-900 dark:hover:text-gray-100
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400
                  dark:focus-visible:ring-gray-600 rounded
                "
              >
                Signs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
