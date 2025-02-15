import GetHeaderLogo from "./HeaderLogo";
import { GetHeaderMenu } from "./GetHeaderMenu";
import { HeaderMenuTypes } from "@/types/Header/HeaderTypes";

export default function Header({
  headerMenuData,
}: {
  headerMenuData: HeaderMenuTypes[];
}) {
  return (
    <header>
      <GetHeaderLogo />
      <GetHeaderMenu menuData={headerMenuData} />
    </header>
  );
}
