import React from "react";
import FooterTop from "./FooterTop";
import FooterContent from "./FooterContent";
import FooterBottom from "./FooterBottom";
import {
  footerBottomTypes,
  footerTopTypes,
} from "../../types/Footer/footerTypes";
import { ServicesPathTypes } from "../../types/commonTypes";

interface FooterProps {
  footerTopData: footerTopTypes[];
  footerContentData: ServicesPathTypes[];
  footerBottomData: footerBottomTypes[];
}

const Footer: React.FC<FooterProps> = ({
  footerTopData,
  footerContentData,
  footerBottomData,
}) => {
  console.log(footerBottomData[0].data.footer_bottom);
  return (
    <div>
      {footerTopData.length > 0 && (
        <FooterTop footerTopData={footerTopData[0]} />
      )}
      <FooterContent footerContentData={footerContentData} />
      <FooterBottom footerBottomData={footerBottomData} />
    </div>
  );
};

export default Footer;
