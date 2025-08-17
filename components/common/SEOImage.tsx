// components/common/SEOImage.tsx
import Image from "next/image";
import React from "react";
import { SEOImageProps } from "../../types/commonTypes";

type ComponentProps = Omit<SEOImageProps, "decoding" | "fetchPriority"> & {
  className?: string;
  objectFit?: React.CSSProperties["objectFit"];
  objectPosition?: React.CSSProperties["objectPosition"];
  decoding?: string; // accept any string from callers
  fetchPriority?: string; // accept any string from callers
  loading?: "eager" | "lazy";
  withJsonLd?: boolean;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  quality?: number;
  baseUrl?: string; // optional override for absolute URLs in JSON-LD
};

function toAbsolute(src: string, base = "https://www.mseprinting.com") {
  if (!src) return src;
  // If already absolute (http/https/data), leave it
  if (/^(https?:)?\/\//.test(src) || src.startsWith("data:")) return src;
  // Ensure leading slash once, then prefix base
  const normalized = src.startsWith("/") ? src : `/${src}`;
  return `${base}${normalized}`;
}

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
  objectPosition,
  className = "",
  fetchPriority,
  decoding,
  loading,
  withJsonLd = true,
  placeholder,
  blurDataURL,
  quality,
  baseUrl,
}) => {
  // JSON-LD: prefer absolute URLs
  const absoluteUrl = toAbsolute(src, baseUrl);

  const structuredData = {
    "@context": "http://schema.org",
    "@type": "ImageObject",
    contentUrl: absoluteUrl,
    url: absoluteUrl,
    thumbnailUrl: absoluteUrl,
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
            // City should be locality; if you have a city field, map it here.
            addressLocality: geoData.addressRegion || "Minneapolis",
            streetAddress: geoData.location,
            addressRegion: "MN",
            addressCountry: "US",
          },
        }
      : undefined,
  };

  const resolvedSizes = sizes ?? "100vw";

  // sanitize values accepted by next/image
  const nextDecoding = decoding === "async" ? ("async" as const) : undefined;
  const nextFetchPriority =
    fetchPriority === "high" ||
    fetchPriority === "low" ||
    fetchPriority === "auto"
      ? (fetchPriority as "high" | "low" | "auto")
      : undefined;

  // ✅ LCP-friendly computed defaults
  const computedLoading = priority ? undefined : (loading ?? "lazy");
  const computedFetchPriority = priority
    ? ("high" as const)
    : nextFetchPriority;
  const computedDecoding = nextDecoding ?? ("async" as const);

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
          fetchPriority={computedFetchPriority}
          loading={computedLoading}
          decoding={computedDecoding}
          fill={fill}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          sizes={resolvedSizes}
          style={{
            ...(fill && objectFit ? { objectFit } : {}),
            ...(fill && objectPosition ? { objectPosition } : {}),
          }}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          quality={quality}
        />
      </div>
    </>
  );
};

export default SEOImage;
