import type { Metadata } from "next";
import RegisterClient from "components/Header/GetRegisterClient";

export const metadata: Metadata = {
  title: "Create Account | MSE Printing",
  description:
    "Register with MSE Printing to place orders, request quotes, and get exclusive access to time-saving print management tools.",
  alternates: { canonical: "https://www.mseprinting.com/register" },
  metadataBase: new URL("https://www.mseprinting.com/register"),
  keywords: [
    "MSE Printing sign up",
    "create printing account",
    "register printing services",
    "online print ordering",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Create Your MSE Printing Account",
    description:
      "Join MSE Printing and streamline your print projects with our easy online ordering and file-upload platform.",
    url: "https://www.mseprinting.com/register",
    siteName: "MSE Printing",
    type: "website",
    images: [
      {
        url: "/images/home-images/booth-graphics-signs-banners.webp",
        width: 500,
        height: 500,
        alt: "MSE Printing – Account registration preview",
      },
    ],
  },
};

export default function RegisterPage() {
  return <RegisterClient />;
}
