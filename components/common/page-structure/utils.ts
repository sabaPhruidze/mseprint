export type TokenKey = "city" | "state" | "state_abbr" | "brand" | "phone";
export type LocationTokens = Partial<Record<TokenKey, string>>;

export function applyTokens(input = "", t?: LocationTokens) {
  if (!t) return input;
  return input.replace(
    /\{\{\s*(city|state|state_abbr|brand|phone)\s*\}\}/g,
    (m, k) => (typeof t[k as TokenKey] === "string" ? t[k as TokenKey]! : m)
  );
}

export function slugify(s = "") {
  return s
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
