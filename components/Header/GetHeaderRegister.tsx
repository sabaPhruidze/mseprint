import Link from "next/link";
import { pagePathTypes } from "@/types/commonTypes";

interface GetHeaderRegisterProps {
  registerData: pagePathTypes[];
}

const GetHeaderRegister: React.FC<GetHeaderRegisterProps> = ({
  registerData,
}) => {
  return (
    <nav
      role="navigation"
      aria-label="Register navigation"
      className="screen-size-13:hidden screen-size-15:flex"
    >
      <ul className="flex items-center gap-4">
        {registerData.map((item) => (
          <li key={item.id}>
            <Link
              href={item.path || "/"}
              className={`font-inter-extrabold h-full font-semibold transition-all screen-size-26:text-3xl screen-size-20:text-2xl screen-size-18:text-3xl text-2xl ${
                item.path && item.path !== "/" ? "hover:underline" : ""
              }`}
              aria-label={`Go to ${item.page}`}
            >
              {item.page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GetHeaderRegister;
