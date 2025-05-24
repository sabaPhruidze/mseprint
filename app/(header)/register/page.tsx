import type { Metadata, Viewport } from "next";
import RegisterClient from "components/Header/GetRegisterClient";

export const metadata: Metadata = {
  title: "Create Account | MSE Printing",
  description:
    "Register with MSE Printing to place orders, request quotes, and get exclusive access to time-saving print management tools.",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/register",
  },
  keywords: [
    "MSE Printing sign up",
    "create printing account",
    "register printing services",
    "online print ordering",
  ],
  applicationName: "MSE Printing",
  category: "Printing Services",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: "Create Your MSE Printing Account",
    description:
      "Join MSE Printing and streamline your print projects with our easy online ordering and file-upload platform.",
    url: "https://www.mseprinting.com/register",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/header-images/about_us.webp",
        width: 800,
        height: 630,
        alt: "MSE Printing – Account registration preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Account | MSE Printing",
    description:
      "Register to manage orders, submit files, and request printing quotes faster with your MSE Printing account.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/header-images/about_us.webp",
        alt: "MSE Printing – Account registration preview",
      },
    ],
  },
  other: {
    "geo.region": "US-MN",
    "geo.placename": "Minneapolis",
    "geo.position": "45.0230;-93.2790",
    ICBM: "45.0230, -93.2790",
    "business:contact_data:street_address": "3839 N Washington Ave Ste. 101",
    "business:contact_data:locality": "Minneapolis",
    "business:contact_data:region": "MN",
    "business:contact_data:postal_code": "55412",
    "business:contact_data:country_name": "USA",
    "business:contact_data:phone_number": "763-542-8812",
    "og:email": "info@mseprinting.com",
    "og:phone_number": "763-542-8812",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  authors: [{ name: "MSE Printing", url: "https://www.mseprinting.com" }],
  creator: "MSE Printing",
  publisher: "MSE Printing",
};

/* ──────────────── VIEWPORT ──────────────── */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "normal",
};

/* ──────────────── STRUCTURED DATA ──────────────── */
const RegisterSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Register Account - MSE Printing",
    url: "https://www.mseprinting.com/register",
    description:
      "Create your account with MSE Printing to simplify your workflow, manage orders, and save time on printing requests.",
    about: {
      "@type": "Organization",
      name: "MSE Printing",
      url: "https://www.mseprinting.com",
    },
    potentialAction: {
      "@type": "RegisterAction",
      target: "https://www.mseprinting.com/register",
      name: "User Registration",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default function RegisterPage() {
  return (
    <div className="my-10 flex flex-col items-center justify-center px-4 ">
      <RegisterSchema />
      <h1 className="text-4xl md:text-5xl font-bold text-center dark:text-white text-black my-8">
        Registration
      </h1>
      <RegisterClient />
      <h2 className="text-3xl md:text-4xl font-inter-bold mt-10 text-center">
        Why Registering Is a Smart Choice
      </h2>
      <p className="text-2xl font-inter-medium max-w-[700px] my-6 text-center">
        Creating an account gives you access to a faster and more personalized
        experience. When you&rsquo;re registered, your personal and business
        details are securely saved, allowing the Request a Quote and Send a File
        forms to be filled out automatically. This not only saves you time on
        every submission but also reduces the chance of errors or missing
        information. Plus, registering gives you access to view your past
        requests, track your submissions, and receive updates more
        easily&mdash;all in one place.
      </p>
    </div>
  );
}
// change
