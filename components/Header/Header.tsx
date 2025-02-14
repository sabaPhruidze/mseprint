// Header/Header.tsx
// No "use client" if it doesn't need interactive, client-side behavior
import GetHeaderLogo from "./GetHeaderLogo";
import GetHeaderMenu from "./GetHeaderMenu";

export default function Header() {
  return (
    <header>
      {/* Each subcomponent is also a server component, so they can fetch & render data */}
      <GetHeaderLogo />
      <GetHeaderMenu />
    </header>
  );
}
