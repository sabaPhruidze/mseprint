import { getDataPattern } from "@/lib/getDataPattern";

export default async function GetHeaderLogo() {
  const logoData = await getDataPattern("header_logo");

  return (
    <div>
      {logoData.map((item) => (
        <img key={item.id} src={item.logo} alt="Header Logo" />
      ))}
    </div>
  );
}
