import SEOImage from "../SEOImage";

type SecondaryImageData = {
  introsection?: { heading?: string };
  secondaryimage?: { src?: string; alt?: string; priority?: boolean };
};

export default function SecondaryImage({
  pageData,
}: {
  pageData: SecondaryImageData;
}) {
  const src = pageData.secondaryimage?.src
    ? `/images/${pageData.secondaryimage.src}`
    : "/images/home-images/additional/offset_printing_right.webp";

  const alt =
    pageData.secondaryimage?.alt ||
    `${pageData.introsection?.heading || ""} - MSE Printing`;

  return (
    <div className="w-full screen-size-5:w-[400px] screen-size-10:w-[500px] h-[400px] mx-auto md:float-right md:ml-2 md:mr-0">
      <SEOImage
        src={src}
        alt={alt}
        name={
          pageData.secondaryimage?.alt ||
          "MSE Printing | print your product here"
        }
        geoData={{
          latitude: 45.0229,
          longitude: -93.2793,
          location: "3839 Washington Ave N Ste. 103",
          addressRegion: "Minneapolis",
        }}
        priority={Boolean(pageData.secondaryimage?.priority)}
        fetchPriority="auto"
        decoding="async"
        loading={pageData.secondaryimage?.priority ? undefined : "lazy"}
        sizes="(min-width: 768px) 500px, 100vw"
        className="w-full h-full"
        fill
        objectFit="cover"
      />
    </div>
  );
}
