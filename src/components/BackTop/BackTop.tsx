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
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (type === "link") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [type]);

  const debouncedScrollValue = useDebounce({ value: scroll, delay: 100 });

  const backTopCommonStyle =
    "mobile:bottom-5 mobile:right-5 tablet:bottom-11 tablet:right-11 z-10 block h-14 w-14 rounded-full bg-white cursor-pointer";

  if (type === "link") {
    return (
      debouncedScrollValue > 10 && (
        <a href={`#${topGoId}`} className={`${backTopCommonStyle} fixed`}>
          백탑
        </a>
      )
    );
  }

  return (
    <button
      type="button"
      className={`${backTopCommonStyle} absolute`}
      onClick={() => {
        dispatch({ type: "moveToTop", payload: undefined });
      }}
    >
      백탑
    </button>
  );
}
