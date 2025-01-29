"use client";

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
      className={`scroll-down absolute bottom-8 left-1/2 -translate-x-1/2 p-0 ${hide ? "invisible opacity-0" : ""}`}
    >
      <div
        className={`animate-bounce ${color === "black" ? "text-black" : "text-white"}`}
      >
        Scroll Down
      </div>
    </div>
  );
}
