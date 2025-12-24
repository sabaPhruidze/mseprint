import GetHeaderLogo from "./GetHeaderLogo";
import GetHeaderMenu from "./GetHeaderMenu";
import GetHeaderRegister from "./GetHeaderRegister";
import GetHeaderEffectiveText from "./GetHeaderEffectiveText";
import SearchEngine from "../Search/SearchEngine";
import { headerEffectiveTextTypes } from "../../types/Header/headerTypes";
import {
  PagePathTypes,
  SEOImageProps,
  ServicesPathTypes,
} from "../../types/commonTypes";
import GetHeaderRQSF from "./GetHeaderRQSF";
import SiteNavigationSchema from "../seo/SiteNavigationSchema";

interface HeaderProps {
  headerMenuData: PagePathTypes[];
  headerEffectiveTextData: headerEffectiveTextTypes[];
  headerRegisterData: PagePathTypes[];
  requestQuoteSendAFileData: PagePathTypes[];
  headerLogoData: SEOImageProps[];
  servicesData: ServicesPathTypes[];
}

const Header: React.FC<HeaderProps> = ({
  headerMenuData,
  headerEffectiveTextData,
  headerRegisterData,
  requestQuoteSendAFileData,
  headerLogoData,
  servicesData,
}) => {
  const logoData = headerLogoData.length > 0 ? headerLogoData[0] : null;

  return (
    <header>
      <SiteNavigationSchema servicesData={servicesData} />
      <div className="w-full bg-black text-white flex items-center justify-between screen-size-10:px-8 px-0 mx-auto flex-col screen-size-13:flex-row screen-size-18:h-[200px] screen-size-13:h-[150px] h-[350px] screen-size-13:py-0 py-10">
        {logoData && <GetHeaderLogo LogoData={logoData} />}
        <GetHeaderEffectiveText effectiveTextData={headerEffectiveTextData} />
        <GetHeaderMenu menuData={headerMenuData} servicesData={servicesData} />
        <GetHeaderRegister registerData={headerRegisterData} />
        <SearchEngine searchEngineData={servicesData} />
      </div>
      <GetHeaderRQSF rqsafData={requestQuoteSendAFileData} />
    </header>
  );
};

export default Header;
