// components/common/SEOImage.tsx
import Image from "next/image";
import React from "react";
import { SEOImageProps } from "../../types/commonTypes";

type ComponentProps = Omit<SEOImageProps, "decoding" | "fetchPriority"> & {
  className?: string;
  objectFit?: React.CSSProperties["objectFit"];
  decoding?: string; // accept any string from callers
  fetchPriority?: string; // accept any string from callers
  loading?: "eager" | "lazy";
  withJsonLd?: boolean;
};

const SEOImage: React.FC<ComponentProps> = ({
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
  fetchPriority,
  decoding,
  loading,
  withJsonLd = true,
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

  const resolvedSizes = sizes ?? "100vw";

  // sanitize to Next/Image-accepted values
  const nextDecoding =
    decoding === "async" ? "async" : (undefined as "async" | undefined);
  const nextFetchPriority =
    fetchPriority === "high" ||
    fetchPriority === "low" ||
    fetchPriority === "auto"
      ? (fetchPriority as "high" | "low" | "auto")
      : undefined;

  return (
    <>
      {withJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      <div className={`relative ${className}`}>
        <Image
          src={src}
          alt={alt}
          priority={priority}
          loading={loading}
          sizes={resolvedSizes}
          decoding={nextDecoding}
          fetchPriority={nextFetchPriority}
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
