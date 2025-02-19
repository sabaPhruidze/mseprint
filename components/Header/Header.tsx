import React from "react";
import GetHeaderLogo from "./GetHeaderLogo";
import GetHeaderMenu from "./GetHeaderMenu";
import GetHeaderRegister from "./GetHeaderRegister";
import GetHeaderEffectiveText from "./GetHeaderEffectiveText";
import SearchEngine from "../Search/SearchEngine";

import { pagePathTypes, SEOImageProps } from "../../types/commonTypes";
import GetHeaderRQSF from "./GetHeaderRQSF";

interface headerEffectiveTextTypes {
  id: number;
  text: string;
  circle?: string;
}

interface HeaderProps {
  headerMenuData: pagePathTypes[];
  headerEffectiveTextData: headerEffectiveTextTypes[];
  headerRegisterData: pagePathTypes[];
  allPagesData: pagePathTypes[];
  requestQuoteSendAFileData: pagePathTypes[];
  headerLogoData: SEOImageProps[]; // Fix: Ensure it's treated as an array
}

const Header: React.FC<HeaderProps> = ({
  headerMenuData,
  headerEffectiveTextData,
  headerRegisterData,
  allPagesData,
  requestQuoteSendAFileData,
  headerLogoData,
}) => {
  const logoData = headerLogoData.length > 0 ? headerLogoData[0] : null; // Fix: Ensure it's a single object

  return (
    <header>
      <div className="w-full bg-black text-white flex items-center justify-between screen-size-5:px-8 px-0 max-w-[3000px] mx-auto flex-col screen-size-13:flex-row screen-size-18:h-[200px] screen-size-13:h-[150px] h-[350px] screen-size-13:py-0 py-10">
        {logoData && <GetHeaderLogo LogoData={logoData} />}
        <GetHeaderEffectiveText effectiveTextData={headerEffectiveTextData} />
        <GetHeaderMenu menuData={headerMenuData} />
        <GetHeaderRegister registerData={headerRegisterData} />
        <SearchEngine searchEngineData={allPagesData} />
      </div>
      <GetHeaderRQSF rqsafData={requestQuoteSendAFileData} />
    </header>
  );
};

export default Header;
