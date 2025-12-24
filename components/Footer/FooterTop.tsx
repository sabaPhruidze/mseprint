import SEOImage from "../common/SEOImage";
import { footerTopTypes } from "../../types/Footer/footerTypes";

type Props = { footerTopData: footerTopTypes };

const GEO = {
  latitude: 45.0229,
  longitude: -93.2793,
  location: "3839 Washington Ave N Ste. 103",
  addressRegion: "Minneapolis",
};

const WRAP =
  "w-full bg-black text-white px-[60px] py-5 flex flex-col items-center text-center lg:flex-row lg:justify-between lg:py-0 lg:h-[50px] lg:pl-[80px] lg:pr-[60px]";

export default function FooterTop({ footerTopData }: Props) {
  const { first, second } = footerTopData;

  return (
    <div className={WRAP}>
      <p className="font-bold text-lg m-0 lg:text-xl">{first}</p>

      {second?.length ? (
        <div className="flex items-center mt-4 lg:mt-0">
          {second.map((icon) => (
            <a
              key={icon.id}
              href={icon.path}
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label={icon.alt}
              className="mx-[10px] transition-transform duration-300 hover:scale-110"
              style={{
                filter:
                  "invert(100%) sepia(7%) saturate(7500%) hue-rotate(165deg) brightness(120%) contrast(106%)",
              }}
            >
              <SEOImage
                src={`${process.env.PUBLIC_URL || ""}/images/footer-images/${icon.src}`}
                alt={icon.alt}
                name={icon.alt}
                geoData={GEO}
                priority={icon.priority}
                loading={icon.priority ? undefined : "lazy"}
                width={icon.width}
                height={icon.height}
              />
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
