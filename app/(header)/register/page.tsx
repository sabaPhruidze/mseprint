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
  return (
    <div className="my-10 flex flex-col items-center justify-center px-4 ">
      <h1 className="text-4xl md:text-5xl font-bold text-center dark:text-white text-black my-8">
        Registration
      </h1>
      <RegisterClient />
      <h2 className="text-3xl md:text-4xl font-inter-bold mt-10 text-center">
        Why Registering Is a Smart Choice
      </h2>
      <p className="text-2xl font-inter-medium max-w-[700px] my-6 text-center">
        Creating an account gives you access to a faster and more personalized
        experience. When you're registered, your personal and business details
        are securely saved, allowing the "Request a Quote" and "Send a File"
        forms to be filled out automatically. This not only saves you time on
        every submission but also reduces the chance of errors or missing
        information. Plus, registering gives you access to view your past
        requests, track your submissions, and receive updates more easily—all in
        one place.
      </p>
    </div>
  );
}
