import Link from "next/link";
import { footerBottomTypes } from "../../types/Footer/footerTypes";

type Props = { footerBottomData: footerBottomTypes[] };

export default function FooterBottom({ footerBottomData }: Props) {
  const bottom = footerBottomData?.[0]?.data?.footer_bottom;
  if (!bottom) return null;

  const { address, pages } = bottom;

  return (
    <div className="w-full bg-black text-white px-[60px] py-5 flex flex-col items-center text-center screen-size-15:flex-row screen-size-15:justify-between screen-size-15:items-center screen-size-15:pl-[80px] screen-size-15:pr-[60px] screen-size-15:py-0 screen-size-15:min-h-[72px]">
      <address className="not-italic w-full screen-size-15:w-auto screen-size-15:text-left leading-snug screen-size-15:leading-tight">
        <div className="text-lg font-semibold">MSE Printing</div>

        <div className="text-sm text-white/80">
          <a
            href={address?.path || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {address?.page ||
              "3839 Washington Ave N Ste. 103, Minneapolis, MN 55412"}
          </a>
        </div>

        <div className="text-sm text-white/80 flex flex-wrap justify-center screen-size-15:justify-start items-center gap-x-3 gap-y-1 mt-1 screen-size-15:mt-0.5">
          <a className="hover:underline" href="tel:+17635428812">
            763-542-8812
          </a>
          <span className="text-white/40" aria-hidden="true">
            •
          </span>
          <a className="hover:underline" href="mailto:info@mseprinting.com">
            info@mseprinting.com
          </a>
        </div>
      </address>

      {/* ვიზუალური გამყოფი — მხოლოდ დიდ ეკრანზე */}
      <div
        className="hidden screen-size-15:block h-10 w-px bg-white/10 mx-10"
        aria-hidden="true"
      />

      {pages?.length ? (
        <nav
          className="mt-3 screen-size-15:mt-0"
          aria-label="Footer legal pages"
        >
          <ul className="flex flex-wrap justify-center screen-size-15:justify-start items-center gap-x-6 gap-y-2">
            {pages.map((p) => (
              <li key={p.id}>
                <Link
                  href={p.path || "/"}
                  className="text-sm text-white/80 hover:text-white hover:underline transition-colors"
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
