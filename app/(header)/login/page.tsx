import type { Metadata, Viewport } from "next";
import GetLoginClient from "components/Header/GetLoginClient";

export const metadata: Metadata = {
  title: "Sign In | MSE Printing",
  description:
    "Securely sign in to your MSE Printing account to track orders, request quotes, and manage your projects online.",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: { canonical: "https://www.mseprinting.com/login" },
  keywords: [
    // ბრენდული/ნავიგაციური
    "MSE Printing login",
    "MSE Printing sign in",
    "MSE Printing account",
    "MSE Printing customer portal",
    "MSE Printing client portal",
    "MSE Printing dashboard",

    // ქმედებები (რა უნდა ქნას მომხმარებელმა)
    "print order tracking",
    "track print orders",
    "manage printing projects",
    "request a printing quote",
    "upload print files",
    "send a file MSE Printing",
    "order history MSE Printing",
    "reorder prints online",

    // ლოკალი და სერვისი
    "printing services account Minneapolis",
    "printing portal Minneapolis",
    "print file upload Minneapolis",
    "print quotes Minneapolis MN",
  ],
  applicationName: "MSE Printing",
  category: "Printing Services",
  robots: {
    index: true, // სურვილის შემთხვევაში შეგიძლია აქ დადგა false (login გვერდები ხშირად noindex-დება)
    follow: true,
    "max-image-preview": "large",
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Sign In | MSE Printing",
    description:
      "Access your personalised printing dashboard at MSE Printing. Sign in to view orders, upload files, and get real-time updates.",
    url: "https://www.mseprinting.com/login",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/header-images/login.webp",
        width: 1200, // ← 1200×630 სჯობს
        height: 630,
        alt: "MSE Printing – Sign In preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign In | MSE Printing",
    description:
      "Login to manage your print projects, request quotes, and upload files with MSE Printing’s secure client dashboard.",
    site: "@MSEPrinting",
    creator: "@MSEPrinting",
    images: [
      {
        url: "https://www.mseprinting.com/images/header-images/login.webp",
        alt: "MSE Printing – Sign In preview",
      },
    ],
  },
  other: {
    "geo.region": "US-MN",
    "geo.placename": "Minneapolis",
    "geo.position": "45.0230;-93.2790",
    ICBM: "45.0230, -93.2790",
    "business:contact_data:street_address": "3839 Washington Ave N Ste. 103",
    "business:contact_data:locality": "Minneapolis",
    "business:contact_data:region": "MN",
    "business:contact_data:postal_code": "55412",
    "business:contact_data:country_name": "USA",
    "business:contact_data:phone_number": "763-542-8812",
    "og:email": "info@mseprinting.com",
    "og:phone_number": "763-542-8812",
  },
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
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
const LoginSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Login Page - MSE Printing",
    url: "https://www.mseprinting.com/login",
    description:
      "Login securely to access your dashboard, request printing quotes, manage orders, and upload project files.",
    about: {
      "@type": "Organization",
      name: "MSE Printing",
      url: "https://www.mseprinting.com",
    },
    potentialAction: {
      "@type": "LoginAction",
      target: "https://www.mseprinting.com/login",
      name: "User Login",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default function LoginPage() {
  return (
    <div className="my-10 flex flex-col items-center justify-center px-4">
      <LoginSchema />
      <h1 className="text-4xl md:text-5xl font-inter-extrabold text-center dark:text-white text-black my-6">
        Log in
      </h1>

      <GetLoginClient />
      <h2 className="text-3xl md:text-4xl font-inter-bold mt-10 text-center">
        Why Logging In Is Recommended
      </h2>
      <p className="text-2xl font-inter-medium max-w-[700px] my-6 text-center">
        For a faster and more convenient experience, we recommend logging into
        your account. When you&rsquo;re logged in, your personal and company
        information will be automatically filled in the Request a Quote and Send
        a File forms. This saves you time and effort by eliminating the need to
        re-enter important details every time you submit a request&mdash;making
        your workflow smoother and more efficient.
      </p>
    </div>
  );
}
