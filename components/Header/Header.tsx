import React from "react";
import GetHeaderLogo from "./HeaderLogo";
import GetHeaderMenu from "./GetHeaderMenu";
import GetHeaderRegister from "./GetHeaderRegister";
import GetHeaderEffectiveText from "./GetHeaderEffectiveText";
import { headerEffectiveTextTypes } from "@/types/Header/headerTypes";
import { pagePathTypes } from "@/types/commonTypes";
import SearchEngine from "../Search/SearchEngine";

interface HeaderProps {
  headerMenuData: pagePathTypes[];
  headerEffectiveTextData: headerEffectiveTextTypes[];
  headerRegisterData: pagePathTypes[];
  allPagesData: pagePathTypes[];
}

const Header: React.FC<HeaderProps> = ({
  headerMenuData,
  headerEffectiveTextData,
  headerRegisterData,
  allPagesData,
}) => {
  return (
    <header>
      <GetHeaderLogo />
      <GetHeaderEffectiveText effectiveTextData={headerEffectiveTextData} />
      <GetHeaderMenu menuData={headerMenuData} />
      <GetHeaderRegister registerData={headerRegisterData} />
      <SearchEngine searchEngineData={allPagesData} />
    </header>
  );
};

export default Header;
