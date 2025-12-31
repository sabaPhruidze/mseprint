import { cookies } from "next/headers";
import Link from "next/link";
import { logoutAction } from "../../app/(header)/login/logoutAction";
import { PagePathTypes } from "types/commonTypes";

interface Props {
  registerData: PagePathTypes[];
}

const TEXT_CLASS =
  "font-inter-extrabold font-semibold transition-all whitespace-nowrap " +
  "text-2xl screen-size-15:text-[22px] screen-size-18:text-[26px] " +
  "screen-size-20:text-2xl screen-size-26:text-3xl";

const NAV_CLASS =
  "screen-size-13:hidden screen-size-15:flex items-center gap-4";

export default async function GetHeaderRegister({ registerData }: Props) {
  const cookieStore = await cookies();
  const displayName = cookieStore.get("displayName")?.value;

  if (displayName) {
    return (
      <nav role="navigation" aria-label="User navigation" className={NAV_CLASS}>
        <span className={TEXT_CLASS}>{displayName}</span>

        <form action={logoutAction}>
          <button type="submit" className={TEXT_CLASS} aria-label="Log out">
            Log&nbsp;out
          </button>
        </form>
      </nav>
    );
  }

  return (
    <nav
      role="navigation"
      aria-label="Register navigation"
      className={NAV_CLASS}
    >
      <ul className="flex items-center gap-4">
        {registerData.map((item) => {
          const href = item.path || "/";
          const hover = href !== "/" ? "hover:underline" : "";
          return (
            <li key={item.id}>
              <Link
                href={href}
                className={`${TEXT_CLASS} ${hover}`}
                aria-label={`Go to ${item.page}`}
              >
                {item.page}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
