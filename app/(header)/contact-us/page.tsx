import { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactUs from "components/common/ContactUs";

export const metadata: Metadata = {
  title: "Contact Us | MSE Printing",
  metadataBase: new URL("https://www.mseprinting.com"),
  alternates: {
    canonical: "https://www.mseprinting.com/contact-us",
  },
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
                  3839 N Washington Ave Ste&nbsp;103
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
        {/*  MAP SECTION */}
        <section aria-label="Map Location" className="mt-16 w-full">
          <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.6698662660136!2d-93.2809636!3d45.0232496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b332906b3c9f2b%3A0x6b4f7b5b5b5b5b5b!2s3839%20N%20Washington%20Ave%20Ste%20103%2C%20Minneapolis%2C%20MN%2055412!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MSE Printing Location Map"
              className="h-[300px] w-full sm:h-[400px] md:h-[450px]"
            ></iframe>
          </div>
        </section>
      </main>
      <ContactUs />
    </div>
  );
};

export default ContactUsPage;
