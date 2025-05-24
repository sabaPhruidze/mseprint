import { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactUs from "components/common/ContactUs";

export const metadata: Metadata = {
  title: "Contact Us | MSE Printing",
  description:
    "Get in touch with MSE Printing – your Minneapolis partner for high‑quality printing, signage, and marketing solutions. Call, visit, or send us a message today.",
  keywords: [
    "MSE Printing",
    "printing services Minneapolis",
    "custom printing",
    "signage Minneapolis",
    "marketing materials",
    "contact MSE Printing",
    "print shop",
  ],
  openGraph: {
    title: "Contact MSE Printing – We’re Here to Help",
    description:
      "Questions about printing, signage, or custom projects? Reach out to our friendly team for prompt assistance.",
    url: "https://www.mseprinting.com/contact-us",
    siteName: "MSE Printing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.mseprinting.com/images/header-images/contact_us.webp",
        width: 800,
        height: 630,
        alt: "MSE Printing contact page preview",
      },
    ],
  },
};

const phoneNumberDisplay = "763-542-8812";
const phoneNumberHref = "tel:7635428812";
const emailDisplay = "info@mseprinting.com";
const emailHref = "mailto:info@mseprinting.com";

const ContactUsPage = () => {
  return (
    <div>
      <main className="mx-auto max-w-4xl px-4 py-16 text-gray-800 dark:text-white">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Contact <span className="text-primary-600">MSE Printing</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            We’re here to answer your questions, guide your projects, and
            deliver exceptional printing solutions.
          </p>
        </header>

        {/* Contact Details */}
        <section
          aria-label="Contact information"
          className="grid gap-8 md:grid-cols-2 lg:gap-12"
        >
          {/* Phone & Email */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold">Phone</h2>
                <Link
                  href={phoneNumberHref}
                  className="text-primary-600 hover:underline"
                >
                  {phoneNumberDisplay}
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold">Email</h2>
                <Link
                  href={emailHref}
                  className="text-primary-600 hover:underline"
                >
                  {emailDisplay}
                </Link>
              </div>
            </div>
          </div>

          {/* Address & Hours */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold">Visit Us</h2>
                <address className="not-italic leading-relaxed">
                  MSE Printing
                  <br />
                  3839 N Washington Ave Ste&nbsp;101
                  <br />
                  Minneapolis, MN&nbsp;55412
                </address>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold">Business Hours</h2>
                <ul className="space-y-1">
                  <li>Monday – Thursday: 9:00 AM – 4:30 PM</li>
                  <li>Friday: 8:00 AM – 12:00 PM</li>
                  <li>Saturday &amp; Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ContactUs />
    </div>
  );
};

export default ContactUsPage;
