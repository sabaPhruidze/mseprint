import Link from "next/link";
import { footerBottomTypes } from "../../types/Footer/footerTypes";

type Props = { footerBottomData: footerBottomTypes[] };

export default function FooterBottom({ footerBottomData }: Props) {
  const bottom = footerBottomData?.[0]?.data?.footer_bottom;
  if (!bottom) return null;

  const { address, pages } = bottom;

  return (
    <div className="w-full bg-black text-white px-[60px] py-5 flex flex-col items-center text-center screen-size-15:flex-row screen-size-15:justify-between screen-size-15:py-0 screen-size-15:h-[50px] screen-size-15:pl-[80px] screen-size-15:pr-[60px]">
      <address className="not-italic">
        <a
          href={address?.path || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline text-lg font-semibold"
        >
          {address?.page || "Our Location"}
        </a>
      </address>

      {pages?.length ? (
        <nav
          className="mt-3 screen-size-15:mt-0"
          aria-label="Footer legal pages"
        >
          <ul className="flex flex-wrap justify-center screen-size-15:justify-start items-center gap-x-4 gap-y-2">
            {pages.map((p) => (
              <li key={p.id}>
                <Link
                  href={p.path || "/"}
                  className="hover:underline text-sm text-gray-300"
                >
                  {p.page}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
