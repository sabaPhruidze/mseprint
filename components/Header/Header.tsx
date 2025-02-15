import GetHeaderLogo from "./HeaderLogo";
import { GetHeaderMenu } from "./GetHeaderMenu";
import {
  headerEffectiveTextTypes,
  HeaderMenuTypes,
} from "@/types/Header/HeaderTypes";
import GetHeaderEffectiveText from "./GetHeaderEffectiveText";

export default function Header({
  headerMenuData,
  headerEffectiveTextData,
}: {
  headerMenuData: HeaderMenuTypes[];
  headerEffectiveTextData: headerEffectiveTextTypes[];
}) {
  return (
    <header>
      <GetHeaderLogo />
      <GetHeaderEffectiveText effectiveTextData={headerEffectiveTextData} />
      <GetHeaderMenu menuData={headerMenuData} />
    </header>
  );
}
