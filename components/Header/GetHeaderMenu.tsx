import { HeaderMenuTypes } from "@/types/Header/HeaderTypes";

export function GetHeaderMenu({ menuData }: { menuData: HeaderMenuTypes[] }) {
  try {
    return (
      <nav
        className="header-navigation"
        role="navigation"
        aria-label="Main navigation"
      >
        <ul className="flex gap-4">
          {menuData.map((item) => (
            <li key={item.id}>{item.page}</li>
          ))}
        </ul>
      </nav>
    );
  } catch (error) {
    // Fallback UI for error state
    return (
      <nav
        className="header-navigation"
        role="navigation"
        aria-label="Main navigation"
      >
        <ul className="flex gap-4">
          <li></li>
        </ul>
      </nav>
    );
  }
}
