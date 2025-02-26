import React from "react";
import { footerTopTypes } from "../../types/Footer/footerTypes";
import SEOImage from "../common/SEOImage";

interface FooterTopProps {
  footerTopData: footerTopTypes;
}

const FooterTop: React.FC<FooterTopProps> = ({ footerTopData }) => {
  const { first, second } = footerTopData;

  return (
    <div
      className="
        w-full
        bg-black
        text-white
        text-center
        flex
        flex-col
        h-auto
        px-[60px]
        py-5
        items-center
        lg:flex-row
        lg:h-[50px]
        lg:py-0
        lg:pl-[80px]
        lg:pr-[60px]
        lg:items-center
        lg:justify-between
      "
    >
      <h2 className="font-bold text-lg m-0 lg:text-xl">{first}</h2>

      <div className="flex flex-row items-center mt-4 lg:mt-0">
        {second.map((icon) => (
          <a
            key={icon.id}
            href={icon.path}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mx-[10px]
              transition-transform
              duration-300
              hover:scale-110
            "
            style={{
              filter:
                "invert(100%) sepia(7%) saturate(7500%) hue-rotate(165deg) brightness(120%) contrast(106%)",
            }}
          >
            <SEOImage
              src={`images/footer-images/${icon.src}`}
              alt={icon.alt}
              name={icon.alt}
              geoData={icon.geoData}
              priority={icon.priority}
              loading={icon.priority ? undefined : "lazy"}
              width={icon.width}
              height={icon.height}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterTop;
