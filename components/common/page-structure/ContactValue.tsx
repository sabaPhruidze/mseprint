import React from "react";

export default function ContactValue({ value }: { value: string }) {
  const v = (value || "").trim();
  if (!v) return null;

  const isEmail = v.includes("@");
  const isPhone = /^\d{3}-\d{3}-\d{4}$/.test(v);

  if (isEmail) {
    return (
      <a href={`mailto:${v}`} className="text-blue-600 font-semibold">
        {v}
      </a>
    );
  }

  if (isPhone) {
    return (
      <a
        href={`tel:${v.replace(/-/g, "")}`}
        className="text-blue-600 font-semibold"
      >
        {v}
      </a>
    );
  }

  return <span className="text-blue-600 font-semibold">{v}</span>;
}
