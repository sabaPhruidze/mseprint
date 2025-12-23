export type FAQItem = { question?: string; answer?: string };

const stripTags = (s = "") => s.replace(/<[^>]*>/g, "").trim();

export function buildFaqJsonLd(list: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: list.map((it) => ({
      "@type": "Question",
      name: stripTags(it.question).slice(0, 200),
      acceptedAnswer: {
        "@type": "Answer",
        text: stripTags(it.answer).slice(0, 5000),
      },
    })),
  };
}

export function normalizeFaqForSchema(items: FAQItem[]) {
  return (items || [])
    .map((it) => ({
      question: stripTags(String(it.question || "")).slice(0, 200),
      answer: stripTags(String(it.answer || "")).slice(0, 5000),
    }))
    .filter((x) => x.question.length > 0 && x.answer.length > 0);
}
