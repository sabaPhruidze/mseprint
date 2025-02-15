import Image from "next/image";
import logo from "../../public/images/header-images/logo.avif";

export default function HeaderLogo() {
  return (
    <div className="flex items-center justify-center p-4">
      <Image
        src={logo}
        alt="Header Logo"
        width={800} 
        height={500} 
        priority 
        className="object-contain w-full h-auto" 
      />
    </div>
  );
}
