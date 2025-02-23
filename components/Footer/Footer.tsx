import React from "react";
import FooterTop from "./FooterTop";
import FooterContent from "./FooterContent";
import FooterBottom from "./FooterBottom";
import { footerTopTypes } from "../../types/Footer/footerTypes";

interface FooterProps {
  footerTopData: footerTopTypes; // A single object with { first, second[] }
}

const Footer: React.FC<FooterProps> = ({ footerTopData }) => {
  return (
    <div>
      <FooterTop footerTopData={footerTopData} />
      <FooterContent />
      <FooterBottom />
    </div>
  );
};

export default Footer;
