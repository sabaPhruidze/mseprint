import { cookies } from "next/headers";
import Link from "next/link";
import { logoutAction } from "../../app/(header)/login/logoutAction";
import { PagePathTypes } from "types/commonTypes";

interface Props {
  registerData: PagePathTypes[];
}

/**
 * Header segment that shows:
 * •  “First Last” + **Log out** button when the user is signed-in
 * •  “Sign in / or / Sign up” links for guests
 */
export default async function GetHeaderRegister({ registerData }: Props) {
  const cookieStore = await cookies();
  const displayName = cookieStore.get("displayName")?.value;

  /* ─────────────────────────────── logged-in view ───────────────────────────── */
  if (displayName) {
    return (
      <nav
        role="navigation"
        aria-label="User navigation"
        className="flex items-center gap-4 screen-size-13:hidden screen-size-15:flex"
      >
        {/* user’s name */}
        <span className="font-inter-extrabold whitespace-nowrap screen-size-26:text-3xl screen-size-20:text-2xl screen-size-18:text-[26px] screen-size-15:text-[22px] text-2xl">
          {displayName}
        </span>

        {/* Log-out button that calls the server action */}
        <form action={logoutAction}>
          <button
            type="submit"
            className="font-inter-extrabold font-semibold transition-all screen-size-26:text-3xl screen-size-20:text-2xl screen-size-18:text-[26px] screen-size-15:text-[22px] text-2xl"
          >
            Log&nbsp;out
          </button>
        </form>
      </nav>
    );
  }

  /* ─────────────────────────────── guest view ─────────────────────────────── */
  return (
    <nav
      role="navigation"
      aria-label="Register navigation"
      className="screen-size-13:hidden screen-size-15:flex"
    >
      <ul className="flex items-center gap-4">
        {registerData.map((item) => (
          <li key={item.id}>
            <Link
              href={item.path || "/"}
              className={`font-inter-extrabold font-semibold transition-all screen-size-26:text-3xl screen-size-20:text-2xl screen-size-18:text-3xl text-2xl ${
                item.path && item.path !== "/" ? "hover:underline" : ""
              }`}
              aria-label={`Go to ${item.page}`}
            >
              {item.page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
