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
    <nav role="navigation" aria-label="Register navigation">
      <ul className="flex items-center gap-4">
        {registerData.map((item) => (
          <li key={item.id}>
            <Link
              href={item.path || "/"}
              className="text-lg font-semibold hover:underline"
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
