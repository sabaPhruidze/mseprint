import type { Metadata } from "next";
import "../styles/globals.css";
import localFont from "next/font/local";

import Header from "@/components/Header/Header";
import { getDataPattern } from "@/lib/getDataPattern";
import Footer from "@/components/Footer";

const interBold = localFont({
  src: "../public/fonts/Inter_18pt-Bold.woff2",
  variable: "--font-inter-bold",
});

const interExtraBold = localFont({
  src: "../public/fonts/Inter_18pt-ExtraBold.woff2",
  variable: "--font-inter-extrabold",
});

const interExtraLight = localFont({
  src: "../public/fonts/Inter_18pt-ExtraLight.woff2",
  variable: "--font-inter-extralight",
});

const interLight = localFont({
  src: "../public/fonts/Inter_18pt-Light.woff2",
  variable: "--font-inter-light",
});

const interMedium = localFont({
  src: "../public/fonts/Inter_18pt-Medium.woff2",
  variable: "--font-inter-medium",
});

export const metadata: Metadata = {
  title: "MSE Printing | Commercial Printing & Direct Mail Services",
  description:
    "Professional commercial printing services including offset printing, digital printing, direct mail, signs, and custom online ordering portals. Quality printing solutions for businesses.",
  metadataBase: new URL("https://www.mseprinting.com"),
  openGraph: {
    title: "MSE Printing | Commercial Printing & Direct Mail Services",
    description:
      "Full-service commercial printing company offering offset printing, digital printing, direct mail services, and custom online ordering portals for businesses.",
    url: "https://www.mseprinting.com",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/main-page-images/offset-printing.avif",
        width: 1200,
        height: 630,
        alt: "MSE Printing Services",
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "MSE Printing | Commercial Printing & Direct Mail Services",
  //   description:
  //     "Full-service commercial printing company specializing in offset printing, digital printing, and direct mail services.",
  // },
  // alternates: {
  //   canonical: "/",
  // },
  // verification: {
  //   google: "your-google-verification-code", // Add your Google verification code here
  // },
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${interBold.variable}
    ${interExtraBold.variable}
    ${interExtraLight.variable}
    ${interLight.variable}
    ${interMedium.variable} min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
