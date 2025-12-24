import Link from "next/link";
import SEOImage from "../common/SEOImage";
import { SEOImageProps } from "../../types/commonTypes";
import { buildImagePath } from "../common/buildImagePath";

const GetHeaderLogo = ({ LogoData }: { LogoData: SEOImageProps }) => {
  const desktopLogo = buildImagePath(LogoData.src, false);
  const mobileLogo = buildImagePath(LogoData.src, true);

  return (
    <Link
      href="/"
      aria-label="MSE Printing home"
      className="inline-flex items-center justify-center cursor-pointer screen-size-26:h-[70%] screen-size-23:h-[60%] screen-size-21:h-[50%] screen-size-20:h-[40%] screen-size-18:h-[50%] screen-size-13:h-[50%] screen-size-16:h-[60%] h-[100%] screen-size-5:px-0 px-4"
    >
      <div className="relative h-full screen-size-13:aspect-[4.5/1] screen-size-5:aspect-[5/1] aspect-[4/1]">
        <SEOImage
          src={mobileLogo}
          alt={LogoData.alt}
          name={LogoData.name}
          geoData={{
            latitude: 45.0229,
            longitude: -93.2793,
            location: "3839 Washington Ave N Ste. 103",
            addressRegion: "Minneapolis",
          }}
          priority={LogoData.priority}
          sizes={LogoData.sizes}
          fill
          withJsonLd={false}
          className="object-contain w-full h-full block sm:hidden"
        />
        <SEOImage
          src={desktopLogo}
          alt={LogoData.alt}
          name={LogoData.name}
          geoData={{
            latitude: 45.0229,
            longitude: -93.2793,
            location: "3839 Washington Ave N Ste. 103",
            addressRegion: "Minneapolis",
          }}
          priority={LogoData.priority}
          sizes={LogoData.sizes}
          fill
          withJsonLd={false}
          className="object-contain w-full h-full hidden sm:block"
        />
      </div>
    </Link>
  );
};

export default GetHeaderLogo;
