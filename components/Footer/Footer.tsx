import React from "react";
import FooterTop from "./FooterTop";
import FooterContent from "./FooterContent";
import FooterBottom from "./FooterBottom";
import { footerTopTypes } from "../../types/Footer/footerTypes";
import { ServicesPathTypes } from "../../types/commonTypes";

interface FooterProps {
  footerTopData: footerTopTypes[];
  footerContentData: ServicesPathTypes[];
}

const Footer: React.FC<FooterProps> = ({
  footerTopData,
  footerContentData,
}) => {
  return (
    <div>
      {footerTopData.length > 0 && (
        <FooterTop footerTopData={footerTopData[0]} />
      )}
      <FooterContent footerContentData={footerContentData} />
      <FooterBottom />
    </div>
  );
};

export default Footer;
