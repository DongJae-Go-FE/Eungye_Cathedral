"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathName = usePathname();

  if (pathName === "/introduction/history") return null;

  const footerStyle =
    "w-[100dvw]-[45px] flex tablet:h-[296px] justify-between bg-black tablet:px-[60px] mobile:px-[8vw] py-[30px] text-white mobile:flex-col tablet:flex-row mobile:h-auto mobile:gap-y-6 tablet:gap-y-0";
  const pStyle = "text-body02r text-gray-300";
  const linkStyle = "text-body02r underline underline-offset-4";

  return (
    <footer className={footerStyle}>
      <div className="flex flex-col mobile:w-full tablet:w-auto tablet:flex-1 desktop:flex-none">
        <h3 className="mb-[50px]">로고</h3>
        <address className="not-italic">
          <ul className={`flex flex-col gap-y-2 ${pStyle}`}>
            <li>도로명 주소: 주소를 쓸거임</li>
            <li>지번주소: 주소를 쓸거임</li>
            <li>이메일: </li>
          </ul>
        </address>
      </div>
      <hr className="h-[1px] bg-white mobile:block tablet:hidden" />
      <div className="mobile:w-full tablet:w-auto tablet:flex-1 desktop:flex-none">
        <h3 className="text-heading03b">031-311-1111</h3>
        <p className={pStyle}>운영시간: 10:00 ~ 18:00</p>
        <ul className="mb-12 mt-4 flex gap-x-4">
          <li>
            <Link href="/" className={linkStyle}>
              인천교구청
            </Link>
          </li>
          <li>
            <Link href="/" className={linkStyle}>
              인천교구 청소년 사목국
            </Link>
          </li>
        </ul>
        <p className={pStyle}>
          Copyright ⓒ 인천교구 은계성당 All rights reserved
        </p>
      </div>
    </footer>
  );
}
