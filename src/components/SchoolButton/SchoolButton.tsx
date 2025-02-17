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
      className="desktop:h-[70px] tablet:h-[57px] mobile:h-12 mobile:text-[14px] desktop:text-[20px] tablet:text-[16px] desktop:px-16 tablet:px-12 mobile:px-8 m-auto cursor-pointer content-center rounded-[40px] border-none bg-black font-bold text-white transition-colors duration-500 hover:bg-blue-700"
    >
      {children}
    </Link>
  );
}
