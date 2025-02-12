"use client";

import { useContext, useEffect, useState } from "react";
import { PriestContext } from "@/screen/Priest/context";
import useDebounce from "@/hooks/useDebounce";

type BackTopType = {
  type: "btn" | "link";
  topGoId?: string;
};

export default function BackTop({ type, topGoId }: BackTopType) {
  const { dispatch } = useContext(PriestContext);
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    if (type === "link") {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      if (type === "link") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [type]);

  const debouncedScrollValue = useDebounce({ value: scroll, delay: 100 });

  const backTopCommonStyle =
    "mobile:bottom-5 mobile:right-5 shadow-md tablet:bottom-11 tablet:right-11 z-10 block h-14 w-14 rounded-full cursor-pointer flex justify-center items-center bg-gray-100";

  const handleSmooth = () => {
    if (type === "link")
      document.documentElement.style.scrollBehavior = "smooth";
  };

  if (type === "link") {
    return (
      debouncedScrollValue > 10 && (
        <a
          href={`#${topGoId}`}
          className={`${backTopCommonStyle} fixed`}
          title="페이지 상단 이동"
          onClick={handleSmooth}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <g clipPath="url(#clip0_5162_89506)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.0065 6.75049C20.927 6.75049 21.6732 7.49668 21.6732 8.41715V31.6667C21.6732 32.5872 20.927 33.3334 20.0065 33.3334C19.086 33.3334 18.3398 32.5872 18.3398 31.6667V8.41715C18.3398 7.49668 19.086 6.75049 20.0065 6.75049Z"
                fill="#111111"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.8214 7.15481C19.4723 6.50394 20.5276 6.50394 21.1784 7.15481L31.1784 17.1548C31.8293 17.8057 31.8293 18.861 31.1784 19.5118C30.5276 20.1627 29.4723 20.1627 28.8214 19.5118L19.9999 10.6903L11.1784 19.5118C10.5276 20.1627 9.47228 20.1627 8.82141 19.5118C8.17053 18.861 8.17053 17.8057 8.82141 17.1548L18.8214 7.15481Z"
                fill="#111111"
              />
            </g>
            <defs>
              <clipPath id="clip0_5162_89506">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      )
    );
  }

  return (
    <button
      type="button"
      className={`${backTopCommonStyle} absolute`}
      title="페이지 상단 이동"
      onClick={() => {
        dispatch({ type: "moveToTop", payload: undefined });
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <g clipPath="url(#clip0_5162_89506)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.0065 6.75049C20.927 6.75049 21.6732 7.49668 21.6732 8.41715V31.6667C21.6732 32.5872 20.927 33.3334 20.0065 33.3334C19.086 33.3334 18.3398 32.5872 18.3398 31.6667V8.41715C18.3398 7.49668 19.086 6.75049 20.0065 6.75049Z"
            fill="#111111"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.8214 7.15481C19.4723 6.50394 20.5276 6.50394 21.1784 7.15481L31.1784 17.1548C31.8293 17.8057 31.8293 18.861 31.1784 19.5118C30.5276 20.1627 29.4723 20.1627 28.8214 19.5118L19.9999 10.6903L11.1784 19.5118C10.5276 20.1627 9.47228 20.1627 8.82141 19.5118C8.17053 18.861 8.17053 17.8057 8.82141 17.1548L18.8214 7.15481Z"
            fill="#111111"
          />
        </g>
        <defs>
          <clipPath id="clip0_5162_89506">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}
