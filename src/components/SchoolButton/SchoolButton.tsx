import Link from "next/link";
import { ReactNode } from "react";

type SchoolButtonType = {
  href: URL | string;
  children: ReactNode;
};

export default function SchoolButton({ children, href }: SchoolButtonType) {
  return (
    <Link
      href={href}
      className="m-auto h-[70px] cursor-pointer content-center rounded-[40px] border-none bg-black px-16 text-[20px] font-bold text-white transition-colors duration-500 hover:bg-blue-700"
    >
      {children}
    </Link>
  );
}
