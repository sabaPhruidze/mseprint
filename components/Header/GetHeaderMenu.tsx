import { getDataPattern } from "@/lib/getDataPattern";

export default async function GetHeaderMenu() {
  const menuData = await getDataPattern("header_menu");

  return (
    <nav>
      <ul>
        {menuData.map((item) => (
          <li key={item.id}>
            <a href={item.path}>{item.page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
