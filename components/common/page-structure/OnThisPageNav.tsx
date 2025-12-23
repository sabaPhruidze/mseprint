type NavData = {
  whychoosesection?: { heading?: string };
  servicessection?: { heading?: string };
  offeringssection?: { list?: unknown[] };
  advancedfeatures?: {
    heading?: string;
    customizationFinishing?: { heading?: string };
    bulkPrinting?: { heading?: string };
    convenientPrinting?: { heading?: string };
  };
  howtogetstarted?: { heading?: string };
  whytrustus?: { heading?: string };
  faqs?: { list?: unknown[] };
  getstartedsection?: { heading?: string };
};

export default function OnThisPageNav({ pageData }: { pageData: NavData }) {
  const items = [
    {
      id: "why-choose",
      label: "Why choose",
      exists: Boolean(pageData.whychoosesection?.heading),
    },
    {
      id: "services",
      label: "Services",
      exists: Boolean(pageData.servicessection?.heading),
    },
    {
      id: "offerings",
      label: "Related services",
      exists: Boolean(pageData.offeringssection?.list?.length),
    },
    {
      id: "advanced-features",
      label: "Advanced features",
      exists: Boolean(pageData.advancedfeatures?.heading),
    },
    {
      id: "customization-finishing",
      label: "Customization & finishing",
      exists: Boolean(
        pageData.advancedfeatures?.customizationFinishing?.heading
      ),
    },
    {
      id: "bulk-printing",
      label: "Bulk printing",
      exists: Boolean(pageData.advancedfeatures?.bulkPrinting?.heading),
    },
    {
      id: "convenient-printing",
      label: "Convenient printing",
      exists: Boolean(pageData.advancedfeatures?.convenientPrinting?.heading),
    },
    {
      id: "how-to-get-started",
      label: "Get started",
      exists: Boolean(pageData.howtogetstarted?.heading),
    },
    {
      id: "why-trust-us",
      label: "Why trust us",
      exists: Boolean(pageData.whytrustus?.heading),
    },
    { id: "faqs", label: "FAQs", exists: Boolean(pageData.faqs?.list?.length) },
    {
      id: "get-started",
      label: "Contact / CTA",
      exists: Boolean(pageData.getstartedsection?.heading),
    },
  ].filter((x) => x.exists);

  if (!items.length) return null;

  return (
    <nav
      aria-label="On this page"
      className="hidden md:block container mx-auto px-8 max-w-[1500px] mt-4"
    >
      <h2 className="sr-only">On this page</h2>
      <ul className="flex flex-wrap gap-3 text-sm text-blue-600">
        {items.map((t) => (
          <li key={t.id}>
            <a href={`#${t.id}`} className="underline-offset-2 hover:underline">
              {t.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
