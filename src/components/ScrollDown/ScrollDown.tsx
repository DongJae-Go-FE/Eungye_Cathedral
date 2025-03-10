"use client";

import { usePathname } from "next/navigation";

import { useCallback, useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";

type ScrollDownType = {
  color?: "white" | "black";
  isVisible?: boolean;
};

export default function ScrollDown({
  isVisible,
  color = "black",
}: ScrollDownType) {
  const pathName = usePathname();

  const [hide, setHide] = useState(false);
  const debouncedHide = useDebounce({ value: hide, delay: 100 });

  const handleScroll = useCallback(() => {
    if (isVisible) {
      const scrollY = window.scrollY;
      setHide(scrollY > 50);
    }
  }, [isVisible]);

  useEffect(() => {
    const handleScrollDebounced = () => {
      handleScroll();
    };

    window.addEventListener("scroll", handleScrollDebounced);

    return () => {
      window.removeEventListener("scroll", handleScrollDebounced);
    };
  }, [handleScroll]);

  useEffect(() => {
    setHide(debouncedHide);
  }, [debouncedHide]);

  return (
    <div
      className={`scroll-down mobile:bottom-2 tablet:bottom-8 absolute left-1/2 -translate-x-1/2 p-0 ${hide ? "invisible opacity-0" : ""}`}
    >
      <div
        className={`heading04r animate-bounce ${color === "black" ? "text-black" : "text-white"}`}
      >
        Scroll Down
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 14 14"
          fill="none"
          className="m-auto"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.37917 4.83736C3.60697 4.60955 3.97632 4.60955 4.20413 4.83736L7.29165 7.92488L10.3792 4.83736C10.607 4.60955 10.9763 4.60955 11.2041 4.83736C11.4319 5.06516 11.4319 5.43451 11.2041 5.66232L7.70413 9.16232C7.47632 9.39012 7.10697 9.39012 6.87917 9.16232L3.37917 5.66232C3.15136 5.43451 3.15136 5.06516 3.37917 4.83736Z"
            fill={pathName.includes("priest") ? "#000" : "#fff"}
          />
        </svg>
      </div>
    </div>
  );
}
