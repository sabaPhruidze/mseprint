import "../styles/globals.css";
import localFont from "next/font/local";
import Header from "../components/Header/Header";
import { getHeaderData } from "../db/getHeaderData";
import { getFooterData } from "../db/GetFooterData";
import Footer from "../components/Footer/Footer";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerData = await getHeaderData();
  const footerData = await getFooterData();
  return (
    <html lang="en">
      <body
        className={` ${interBold.variable}
          ${interExtraBold.variable}
          ${interExtraLight.variable}
          ${interLight.variable}
          ${interMedium.variable} 
          min-h-screen flex flex-col font-inter-medium`}
      >
        <Header {...headerData} servicesData={footerData.footerContentData} />
        <main className="flex-grow">{children}</main>
        <Footer {...footerData} />
      </body>
    </html>
  );
}
