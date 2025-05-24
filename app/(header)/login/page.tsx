import type { Metadata } from "next";
import GetLoginClient from "components/Header/GetLoginClient";

export const metadata: Metadata = {
  title: "Sign In | MSE Printing",
  description:
    "Securely sign in to your MSE Printing account to track orders, request quotes, and manage your projects online.",
  alternates: { canonical: "https://www.mseprinting.com/login" },
  metadataBase: new URL("https://www.mseprinting.com"),
  keywords: [
    "MSE Printing login",
    "print order tracking",
    "manage printing projects",
    "printing services account",
  ],
  robots: { index: false, follow: false },
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
  return (
    <div className="my-10 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-5xl font-inter-extrabold text-center dark:text-white text-black my-6">
        Log in
      </h1>

      <GetLoginClient />
      <h2 className="text-3xl md:text-4xl font-inter-bold mt-10 text-center">
        Why Logging In Is Recommended
      </h2>
      <p className="text-2xl font-inter-medium max-w-[700px] my-6 text-center">
        For a faster and more convenient experience, we recommend logging into
        your account. When you’re logged in, your personal and company
        information will be automatically filled in the "Request a Quote" and
        "Send a File" forms. This saves you time and effort by eliminating the
        need to re-enter important details every time you submit a
        request—making your workflow smoother and more efficient.
      </p>
    </div>
  );
}
