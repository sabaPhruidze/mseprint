import FooterTop from "./FooterTop";
import FooterContent from "./FooterContent";
import FooterBottom from "./FooterBottom";
import FooterCTA from "./FooterCTA";
import {
  footerBottomTypes,
  footerTopTypes,
} from "../../types/Footer/footerTypes";
import { ServicesPathTypes } from "../../types/commonTypes";

type FooterProps = {
  footerTopData: footerTopTypes[];
  footerContentData: ServicesPathTypes[];
  footerBottomData: footerBottomTypes[];
};

export default function Footer({
  footerTopData,
  footerContentData,
  footerBottomData,
}: FooterProps) {
  const top = footerTopData?.[0];
  const hasContent = Boolean(footerContentData?.length);
  const hasBottom = Boolean(footerBottomData?.length);

  if (!top && !hasContent && !hasBottom) return null;

  return (
    <footer role="contentinfo" aria-label="Site footer">
      {top ? <FooterTop footerTopData={top} /> : null}
      <FooterCTA />
      {hasContent ? (
        <FooterContent footerContentData={footerContentData} />
      ) : null}
      {hasBottom ? <FooterBottom footerBottomData={footerBottomData} /> : null}
    </footer>
  );
}
