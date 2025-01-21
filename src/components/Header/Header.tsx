"use client";

import Link from "next/link";
import Image from "next/image";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import IconButton from "../IconButton";
import Menu from "../Menu";

import useAnimation from "@/hooks/useAnimation";

export default function Header() {
  const headerRef = useRef<HTMLHeadingElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [hasDrawer, handleTransitionEnd, triggerAnimation] =
    useAnimation(isDrawerOpen);

  const headerStyle = `fixed top-0 z-[1001] w-full border-b border-[#D9D9D9] transition-[height, background-color]  text-white ${isVisible ? "bg-black" : isOpen ? "bg-dimmedEffectBlack30D" : "bg-transparent"} duration-200 ${isOpen ? "h-[300px]" : "h-[64px]"}`;

  const liStyle = "h-full w-32 group";
  const liAfterStyle =
    "after:content-[''] after:absolute after:w-0 after:-bottom-5 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:bg-white after:transition-[width] after:duration-200 group-hover:after:w-full";
  const liSpanStyle = `block text-white text-body01r relative group-hover:text-body01b ${liAfterStyle}`;
  const LinkStyle = "flex h-full w-full items-center justify-center";
  const depthStyle = `${isOpen ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]"} transition-[grid-template-rows] duration-300`;
  const depthUlStyle = "overflow-hidden";
  const depthLiStyle = "w-full h-[64px]";
  const depthLinkStyle =
    "flex w-full h-full items-center justify-center text-body02r text-white";

  const handleDrawer = () => {
    setIsDrawerOpen(true);
  };

  let section2 = null;
  let section3 = null;
  let section7 = null;

  if (typeof document !== "undefined") {
    section2 = document.getElementById("section2");
    section3 = document.getElementById("section3");
    section7 = document.getElementById("section7");
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (section2 && section2.getBoundingClientRect().top > 0) {
        setIsVisible(false);
      }
      if (section2 && section2.getBoundingClientRect().top < 0) {
        setIsVisible(true);
      }
      if (section3 && section3.getBoundingClientRect().top < 0) {
        setIsVisible(false);
      }
      if (section7 && section7.getBoundingClientRect().top < 0) {
        setIsVisible(true);
      }
    });
  }, []);

  return (
    <header className={headerStyle} ref={headerRef}>
      <div className="flex h-[64px] w-full items-center border-b border-[#D9D9D9] pl-5">
        <h1 className="w-32">
          <Link href="/">
            <Image
              src="/logo.png"
              width={118}
              height={32}
              alt="은계성당 로고"
              className="h-full"
            />
          </Link>
        </h1>
        <div className="hidden h-full desktop:block">
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
                  <span className={liSpanStyle}>테스트1</span>
                </Link>
                <div className={depthStyle}>
                  <ul className={depthUlStyle}>
                    <li className={depthLiStyle}>
                      <Link className={depthLinkStyle} href="/">
                        테스트1-1
                      </Link>
                    </li>
                    <li className={depthLiStyle}>
                      <Link className={depthLinkStyle} href="/">
                        테스트1-2
                      </Link>
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
                  <span className={liSpanStyle}>테스트2</span>
                </Link>
                <div className={depthStyle}>
                  <ul className={depthUlStyle}>
                    <li className={depthLiStyle}>
                      <Link className={depthLinkStyle} href="/">
                        테스트2-1
                      </Link>
                    </li>
                    <li className={depthLiStyle}>
                      <Link className={depthLinkStyle} href="/">
                        테스트2-2
                      </Link>
                    </li>
                    <li className={depthLiStyle}>
                      <Link className={depthLinkStyle} href="/">
                        테스트2-3
                      </Link>
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
                  <span className={liSpanStyle}>테스트3</span>
                </Link>
                <div
                  className={`${isOpen ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]"} ${depthStyle}`}
                >
                  <ul className={depthUlStyle}>
                    <li className={depthLiStyle}>
                      <Link className={depthLinkStyle} href="/">
                        테스트3-1
                      </Link>
                    </li>
                    <li className={depthLiStyle}>
                      <Link className={depthLinkStyle} href="/">
                        테스트3-2
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <IconButton
          type="button"
          className="ml-auto h-full w-16 mobile:flex tablet:flex desktop:hidden"
          title="모바일 메뉴 아이콘"
          onClick={handleDrawer}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.97485 5.9751C2.97485 5.42281 3.42257 4.9751 3.97485 4.9751L19.9749 4.9751C20.5271 4.9751 20.9749 5.42281 20.9749 5.9751C20.9749 6.52738 20.5271 6.9751 19.9749 6.9751L3.97485 6.9751C3.42257 6.9751 2.97485 6.52738 2.97485 5.9751Z"
              fill={isVisible ? "#fff" : "#111"}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.97485 11.9751C2.97485 11.4228 3.42257 10.9751 3.97485 10.9751L19.9749 10.9751C20.5271 10.9751 20.9749 11.4228 20.9749 11.9751C20.9749 12.5274 20.5271 12.9751 19.9749 12.9751L3.97485 12.9751C3.42257 12.9751 2.97485 12.5274 2.97485 11.9751Z"
              fill={isVisible ? "#fff" : "#111"}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.97485 17.9751C2.97485 17.4228 3.42257 16.9751 3.97485 16.9751L19.9749 16.9751C20.5271 16.9751 20.9749 17.4228 20.9749 17.9751C20.9749 18.5274 20.5271 18.9751 19.9749 18.9751L3.97485 18.9751C3.42257 18.9751 2.97485 18.5274 2.97485 17.9751Z"
              fill={isVisible ? "#fff" : "#111"}
            />
          </svg>
        </IconButton>
      </div>
      {hasDrawer &&
        createPortal(
          <Menu
            handleTransitionEnd={handleTransitionEnd}
            isTriggerAnimation={triggerAnimation}
            onClose={() => setIsDrawerOpen(false)}
          />,
          document.body,
        )}
    </header>
  );
}
