import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/header-images/logo.avif";

export default function HeaderLogo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center justify-center cursor-pointer
                 max-w-[25%] md:max-w-[20%] lg:max-w-[30%] xl:max-w-[25%] 2xl:max-w-[20%] 
                 sm:max-w-[90%] sm:mb-2"
    >
      <Image
        src={logo}
        alt="Header Logo"
        priority
        className="object-contain w-full h-auto"
      />
    </Link>
  );
}
