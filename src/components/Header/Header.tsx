"use client";

import Link from "next/link";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const liStyle = "h-full";
  const LinkStyle = "flex h-full items-center justify-center";
  const depthStyle = "transition-[grid-template-rows] duration-300";
  const depthUlStyle = "overflow-hidden";

  return (
    <header
      className={`fixed top-0 z-[1001] w-full bg-gray-500 transition-[height] duration-200 ${isOpen ? "h-[300px]" : "h-[64px]"}`}
    >
      <div className="flex h-[64px] w-full items-center justify-between px-[60px]">
        <h1 className="w-32">
          <Link href="/">로고</Link>
        </h1>
        <div className="h-full">
          <nav className="h-full">
            <ul className="flex h-full items-center">
              <li
                className={liStyle}
                onMouseEnter={() => {
                  setIsOpen(true);
                }}
                onMouseLeave={() => {
                  setIsOpen(false);
                }}
              >
                <Link href="/" className={LinkStyle}>
                  테스트1
                </Link>
                <div
                  className={`${isOpen ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]"} ${depthStyle}`}
                >
                  <ul className={depthUlStyle}>
                    <li>
                      <Link href="/">테스트1-1</Link>
                    </li>
                    <li>
                      <Link href="/">테스트1-2</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                className={liStyle}
                onMouseEnter={() => {
                  setIsOpen(true);
                }}
                onMouseLeave={() => {
                  setIsOpen(false);
                }}
              >
                <Link href="/" className={LinkStyle}>
                  테스트2
                </Link>
                <div
                  className={`${isOpen ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]"} ${depthStyle}`}
                >
                  <ul className={depthUlStyle}>
                    <li>
                      <Link href="/">테스트2-1</Link>
                    </li>
                    <li>
                      <Link href="/">테스트2-2</Link>
                    </li>
                    <li>
                      <Link href="/">테스트2-3</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                className={liStyle}
                onMouseEnter={() => {
                  setIsOpen(true);
                }}
                onMouseLeave={() => {
                  setIsOpen(false);
                }}
              >
                <Link href="/" className={LinkStyle}>
                  테스트3
                </Link>
                <div
                  className={`${isOpen ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]"} ${depthStyle}`}
                >
                  <ul className={depthUlStyle}>
                    <li>
                      <Link href="/">테스트3-1</Link>
                    </li>
                    <li>
                      <Link href="/">테스트3-2</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
