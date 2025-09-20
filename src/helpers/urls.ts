export const normalizeHref = (p?: string) => {
  const raw = String(p ?? "").trim().replace(/\s+/g, " ");
  if (!raw) return "/";

  const noLead = raw.replace(/^\/+/, "");
  const segments = noLead.split("/").filter(Boolean).map(s => encodeURIComponent(s));
  return "/" + segments.join("/");
};

export const absUrl = (base: string, href: string) =>
  new URL(normalizeHref(href), base.replace(/\/+$/, "/")).toString();