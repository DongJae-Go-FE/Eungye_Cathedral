"use client";

import Link from "next/link";

import { useState } from "react";
import { createPortal } from "react-dom";

import IconButton from "../IconButton";
import Menu from "../Menu";

import useAnimation from "@/hooks/useAnimation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [hasDrawer, handleTransitionEnd, triggerAnimation] =
    useAnimation(isDrawerOpen);

  const liStyle = "h-full";
  const LinkStyle = "flex h-full items-center justify-center";
  const depthStyle = "transition-[grid-template-rows] duration-300";
  const depthUlStyle = "overflow-hidden";

  const handleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-0 z-[1001] w-full bg-gray-500 transition-[height] duration-200 ${isOpen ? "h-[300px]" : "h-[64px]"}`}
    >
      <div className="flex h-[64px] w-full items-center justify-between pl-5">
        <h1 className="w-32">
          <Link href="/">로고</Link>
        </h1>
        <div className="hidden h-full pr-5 tablet:block">
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
        <IconButton
          type="button"
          className="block h-full w-16 tablet:hidden"
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
              fill="#111"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.97485 11.9751C2.97485 11.4228 3.42257 10.9751 3.97485 10.9751L19.9749 10.9751C20.5271 10.9751 20.9749 11.4228 20.9749 11.9751C20.9749 12.5274 20.5271 12.9751 19.9749 12.9751L3.97485 12.9751C3.42257 12.9751 2.97485 12.5274 2.97485 11.9751Z"
              fill="#111"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.97485 17.9751C2.97485 17.4228 3.42257 16.9751 3.97485 16.9751L19.9749 16.9751C20.5271 16.9751 20.9749 17.4228 20.9749 17.9751C20.9749 18.5274 20.5271 18.9751 19.9749 18.9751L3.97485 18.9751C3.42257 18.9751 2.97485 18.5274 2.97485 17.9751Z"
              fill="#111"
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
