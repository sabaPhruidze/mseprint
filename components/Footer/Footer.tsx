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
  return (
    <footer>
      <FooterTop footerTopData={footerTopData[0]} />
      <FooterContent footerContentData={footerContentData} />
      <FooterBottom footerBottomData={footerBottomData} />
    </footer>
  );
};

export default Footer;
