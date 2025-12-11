import React from "react";
// ✅ აქ ვაიმპორტებთ აიკონებს
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const ContactUs = () => {
  const phone = "763-542-8812";
  const email = "info@mseprinting.com";

  return (
    <section className="flex flex-col items-center gap-6 rounded-xl bg-blue-50 p-8 text-center dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200">
          Ready to Experience the MSE Difference?
        </h2>
        <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300 mx-auto">
          Let’s bring your next project to life. Call us or send an email — we’d
          love to hear from you.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {/* ტელეფონის ღილაკი */}
        <a
          href={`tel:${phone.replace(/\D/g, "")}`}
          className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 shadow-sm"
        >
          {/* h-5 w-5 არის 20px ზომა, იდეალურია ტექსტთან */}
          <PhoneIcon className="h-5 w-5" aria-hidden="true" />
          <span className="font-medium">Call {phone}</span>
        </a>

        {/* მეილის ღილაკი */}
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-gray-900 border border-gray-300 transition hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 shadow-sm"
        >
          <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
          <span className="font-medium">Email Us</span>
        </a>
      </div>
    </section>
  );
};

export default ContactUs;
