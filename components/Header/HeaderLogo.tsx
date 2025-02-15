import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/header-images/logo.avif";

export default function HeaderLogo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center justify-center cursor-pointer h-[70%] 
                "
    >
      <Image
        src={logo}
        alt="Header Logo"
        priority
        className="object-contain w-full h-full"
      />
    </Link>
  );
}
