"use client";

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
      className="header-navigation"
      role="navigation"
      aria-label="Main navigation"
    >
      <ul className="flex gap-4">
        {registerData.map((item) => (
          <li key={item.id}>
            <Link
              href={item.path || "/"}
              className="hover:underline"
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
