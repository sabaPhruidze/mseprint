import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/header-images/logo.avif";

export default function HeaderLogo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center justify-center cursor-pointer screen-size-26:h-[70%] screen-size-23:h-[60%] screen-size-21:h-[50%] screen-size-20:h-[40%] screen-size-18:h-[50%] screen-size-13:h-[50%] screen-size-16:h-[60%] h-[40%] screen-size-5:px-0 px-4
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
