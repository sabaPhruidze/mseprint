import Link from "next/link";
import { PagePathTypes } from "../../types/commonTypes";

interface GetHeaderMenuProps {
  menuData: PagePathTypes[];
}

const GetHeaderMenu: React.FC<GetHeaderMenuProps> = ({ menuData }) => {
  return (
    <nav role="navigation" aria-label="Main navigation" className="h-[100%]">
      <ul className="flex gap-6 h-full">
        {menuData.map((item) => (
          <li key={item.id} className="h-[100%] flex items-stretch">
            <Link
              href={item.path || "/"}
              className="font-inter-extrabold h-[100%] flex items-center px-0 hover:bg-white hover:text-black underline font-bold screen-size-26:text-3xl screen-size-20:text-2xl screen-size-18:text-3xl screen-size-5:text-2xl text-md transition-all duration-700"
              aria-label={`Go to ${item.page}`}
              style={{ color: getMenuColor(item.page) }}
            >
              {item.page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GetHeaderMenu;

function getMenuColor(page: string): string {
  switch (page) {
    case "Products & Services":
      return "#fb70c6"; // pink
    case "About us":
      return "#faa34d"; // orange
    case "Contact us":
      return "#69be4a"; // green
    default:
      return "#ffffff"; // white
  }
}
