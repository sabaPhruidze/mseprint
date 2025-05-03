import Link from "next/link";
import { getFooterData } from "db/GetFooterData";
import { ServicesPathTypes } from "types/commonTypes";

export const metadata = {
  title: "Sitemap | MSE Graphics",
  description:
    "Complete sitemap of MSE Graphics – find every product & service page from one place.",
};

// Helper that groups items by parent_id – guards against undefined
const groupChildren = (items: ServicesPathTypes[]) => {
  const map = new Map<number, ServicesPathTypes[]>();
  items.forEach((it) => {
    if (typeof it.parent_id === "number") {
      const pid = it.parent_id; // now guaranteed to be a number
      if (!map.has(pid)) map.set(pid, []);
      map.get(pid)!.push(it);
    }
  });
  return map;
};

const TOP_LEVEL_STATIC = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about-us" },
  { title: "Contact Us", path: "/contact-us" },
  { title: "Request a Quote", path: "/request-quote" },
  { title: "Place an Order", path: "/place-order" },
] as const;

const FOOTER_STATIC = [
  { title: "Accessibility", path: "/accessibility" },
  { title: "Blog", path: "/blog" },
  { title: "Privacy Policy", path: "/privacy-policy" },
  { title: "Terms & Conditions", path: "/terms-conditions" },
  { title: "EOE & Diversity", path: "/eoe-diversity" },
  { title: "Environmental Message", path: "/environmental-message" },
] as const;

export default async function Sitemap() {
  const { footerContentData } = await getFooterData();
  const serviceData = footerContentData as ServicesPathTypes[];

  const parentItems = serviceData
    .filter((it) => it.parent_id === null)
    .sort((a, b) => a.id - b.id);
  const childrenMap = groupChildren(serviceData);

  return (
    <main className="max-w-screen-lg mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">SITEMAP</h1>

      <nav aria-label="Sitemap">
        <ul className="space-y-3 text-blue-600 list-disc">
          {TOP_LEVEL_STATIC.map((link) => (
            <li key={link.path} className="text-red">
              <Link href={link.path} className="hover:underline ml-2">
                {link.title}
              </Link>
            </li>
          ))}

          {parentItems.map((parent) => (
            <li
              key={parent.id}
              className="text-blue-600 pl-4 list-disc list-inside"
            >
              <Link
                href={`/${parent.path}`}
                className="text-blue-600 font-semibold hover:underline "
              >
                {parent.title}
              </Link>

              {childrenMap.get(parent.id)?.length && (
                <ul className="mt-2 ml-6 space-y-1 list-disc list-inside">
                  {childrenMap
                    .get(parent.id)!
                    .sort((a, b) => a.id - b.id)
                    .map((child) => (
                      <li key={child.id} className="text-green-600">
                        <Link
                          href={`/${child.path}`}
                          className="hover:underline"
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              )}
            </li>
          ))}

          {FOOTER_STATIC.map((link) => (
            <li key={link.path} className="text-red">
              <Link href={link.path} className="hover:underline ml-2">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
