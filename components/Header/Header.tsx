import React from "react";
import GetHeaderLogo from "./HeaderLogo";
import GetHeaderMenu from "./GetHeaderMenu";
import GetHeaderRegister from "./GetHeaderRegister";
import GetHeaderEffectiveText from "./GetHeaderEffectiveText";
import SearchEngine from "../Search/SearchEngine";
import { headerEffectiveTextTypes } from "@/types/Header/headerTypes";
import { pagePathTypes } from "@/types/commonTypes";

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
    <header className="w-full bg-black text-white flex items-center justify-between screen-size-5:px-8 px-0  max-w-[3000px] mx-auto flex-col screen-size-13:flex-row screen-size-18:h-[200px] screen-size-13:h-[150px] h-[350px] screen-size-13:py-0 py-10">
      <GetHeaderLogo />
      <GetHeaderEffectiveText effectiveTextData={headerEffectiveTextData} />
      <GetHeaderMenu menuData={headerMenuData} />
      <GetHeaderRegister registerData={headerRegisterData} />
      <SearchEngine searchEngineData={allPagesData} />
    </header>
  );
};

export default Header;
