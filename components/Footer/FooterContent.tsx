import Link from "next/link";
import { ServicesPathTypes } from "../../types/commonTypes";

interface FooterContentProps {
  footerContentData: ServicesPathTypes[];
}

export default function FooterContent({
  footerContentData,
}: FooterContentProps) {
  if (!footerContentData || footerContentData.length === 0) {
    return <p>No footer content available.</p>;
  }
  const topLevel = footerContentData.filter(
    (item) =>
      item.parent_id === null &&
      item.title !== "Online Ordering Portals" &&
      item.title !== "Graphic Design"
  );

  return (
    <footer className="border-t border-gray-300 screen-size-5:max-h-[740px] max-h-[430px] overflow-hidden">
      <div
        className="
          grid
          grid-cols-1
          screen-size-4:grid-cols-1
          screen-size-5:grid-cols-2
          screen-size-10:grid-cols-3
          screen-size-13:grid-cols-4
          screen-size-15:grid-cols-5
          screen-size-18:grid-cols-6
          screen-size-20:grid-cols-7
          screen-size-23:grid-cols-8
          divide-x divide-gray-300
        "
      >
        {topLevel.map((category) => {
          const subItems = footerContentData.filter(
            (sub) =>
              sub.parent_id === category.id &&
              sub.title !== "Online Ordering Portals" &&
              sub.title !== "Graphic Design"
          );

          return (
            <div key={category.id} className="p-4 text-center ">
              <h2 className="text-xl font-bold mb-2">
                <Link href={`/${category.path}`}>{category.title}</Link>
              </h2>

              {subItems.length > 0 && (
                <ul className="list-none space-y-1">
                  {subItems.map((sub) => (
                    <li key={sub.id}>
                      <Link href={`/${sub.path}`}>{sub.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </footer>
  );
}
