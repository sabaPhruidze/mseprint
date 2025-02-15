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
    <header className="w-full h-[200px] bg-black text-white flex items-center justify-between px-8  max-w-[3000px] mx-auto">
      {/* Left: Logo */}
      <div className="flex items-center gap-4">
        <GetHeaderLogo />
        <GetHeaderEffectiveText effectiveTextData={headerEffectiveTextData} />
      </div>

      {/* Center: Navigation Menu */}
      <div className="flex gap-6 text-lg font-bold">
        <GetHeaderMenu menuData={headerMenuData} />
      </div>

      {/* Right: Sign-in & Search */}
      <div className="flex items-center gap-6">
        <GetHeaderRegister registerData={headerRegisterData} />
        <SearchEngine searchEngineData={allPagesData} />
      </div>
    </header>
  );
};

export default Header;
