import GetHeaderLogo from "./HeaderLogo";
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
