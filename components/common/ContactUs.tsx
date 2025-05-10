import React from "react";
import Link from "next/link";

const ContactUs = () => {
  const phone = "763-542-8812";
  const email = "info@mseprinting.com";
  return (
    <section className="flex flex-col items-center gap-6 rounded-xl bg-blue-50 p-8 text-center dark:bg-blue-900/20">
      <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-200">
        Ready to Experience the MSE Printing Difference?
      </h2>
      <p className="max-w-2xl text-lg text-gray-700 dark:text-gray-300">
        Let’s bring your next project to life. Call us or send an email — we’d
        love to hear from you.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href={`tel:${phone.replace(/\D/g, "")}`}
          className="rounded-full bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
        >
          Call {phone}
        </a>
        <Link
          href={`mailto:${email}`}
          className="rounded-full bg-gray-200 px-6 py-3 text-gray-900 transition hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
        >
          Email Us
        </Link>
      </div>
    </section>
  );
};

export default ContactUs;
