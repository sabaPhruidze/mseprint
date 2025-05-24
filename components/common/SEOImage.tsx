import Image from "next/image";
import { SEOImageProps } from "../../types/commonTypes";

const SEOImage: React.FC<SEOImageProps & { className?: string }> = ({
  src,
  alt,
  name,
  geoData,
  priority = false,
  sizes,
  width,
  height,
  fill,
  objectFit,
  className = "",
}) => {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "ImageObject",
    contentUrl: src,
    url: src,
    thumbnailUrl: src,
    description: alt,
    name,
    locationCreated: geoData
      ? {
          "@type": "Place",
          name: geoData.location,
          geo: {
            "@type": "GeoCoordinates",
            latitude: geoData.latitude,
            longitude: geoData.longitude,
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: geoData.location,
            addressRegion: geoData.addressRegion || "",
            addressCountry: "USA",
          },
        }
      : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className={`relative ${className}`}>
        <Image
          src={src}
          alt={alt}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes={sizes}
          fill={fill}
          style={fill && objectFit ? { objectFit } : undefined}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
        />
      </div>
    </>
  );
};

export default SEOImage;
