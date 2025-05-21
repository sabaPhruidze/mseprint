import type { Metadata } from "next";
import GetLoginClient from "components/Header/GetLoginClient";

export const metadata: Metadata = {
  title: "Sign In | MSE Printing",
  description:
    "Securely sign in to your MSE Printing account to track orders, request quotes, and manage your projects online.",
  alternates: { canonical: "https://www.mseprinting.com/login" },
  metadataBase: new URL("https://www.mseprinting.com/login"),
  keywords: [
    "MSE Printing login",
    "print order tracking",
    "manage printing projects",
    "printing services account",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sign In | MSE Printing",
    description:
      "Access your personalised printing dashboard at MSE Printing. Sign in to view orders, upload files, and get real-time updates.",
    url: "https://www.mseprinting.com/login",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/home-images/booth-graphics-signs-banners.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing – Sign In preview",
      },
    ],
  },
};

export default function LoginPage() {
  return <GetLoginClient />; // 👈 renders the hook-based UI
}
