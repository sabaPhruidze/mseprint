import Image from "next/image";
import Head from "next/head";
import { SEOImageProps } from "@/types/commonTypes";

const SEOImage: React.FC<SEOImageProps> = ({
  src,
  alt,
  name,
  geoData,
  priority = false,
  loading = "lazy",
}) => {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "ImageObject",
    contentUrl: src,
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
      <Head>
        <title>{name}</title>
        <meta name="description" content={alt} />
        <meta property="og:image" content={src} />
        <meta property="og:image:alt" content={alt} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          priority={priority}
          loading={loading}
          fill
          className="object-contain w-full h-full"
        />
      </div>
    </>
  );
};

export default SEOImage;
