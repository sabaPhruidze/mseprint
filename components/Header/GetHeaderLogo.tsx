import Link from "next/link";
import SEOImage from "../common/SEOImage";
import { SEOImageProps } from "../../types/commonTypes";

const GetHeaderLogo = ({ LogoData }: { LogoData: SEOImageProps }) => {
  return (
    <Link
      href="/"
      className="inline-flex items-center justify-center cursor-pointer screen-size-26:h-[70%] screen-size-23:h-[60%] screen-size-21:h-[50%] screen-size-20:h-[40%] screen-size-18:h-[50%] screen-size-13:h-[50%] screen-size-16:h-[60%] h-[100%] screen-size-5:px-0 px-4"
    >
      <div className="relative h-full screen-size-13:aspect-[4.5/1] screen-size-4:aspect-[5/1] aspect-[4/1]">
        <SEOImage
          src={`/images/${LogoData.src}`}
          alt={LogoData.alt}
          name={LogoData.name}
          geoData={LogoData.geoData}
          priority={LogoData.priority}
          sizes={LogoData.sizes}
          fill={true}
          className="object-contain w-full h-full"
        />
      </div>
    </Link>
  );
};

export default GetHeaderLogo;
