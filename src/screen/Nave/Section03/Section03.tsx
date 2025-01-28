"use client";

import { useEffect, useRef } from "react";

export default function Section03() {
  const pOneRef = useRef<HTMLParagraphElement>(null);
  const pTwoRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const ticking = useRef(false);

  const handleScroll = () => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        const translateStart = 50000;
        const translateEnd = 53000;
        const fadeOutStart = 54000;
        const fadeOutEnd = 57000;
        const fadeContainerStart = 55000;
        const fadeContainerEnd = 58000;

        if (scrollY >= translateStart && scrollY <= translateEnd) {
          const progress =
            (scrollY - translateStart) / (translateEnd - translateStart);
          let translateX = 100 * (1 - progress);

          translateX = Math.max(0, translateX);

          if (pOneRef.current && pTwoRef.current) {
            pOneRef.current.style.transform = `translateX(-${translateX}vw)`;
            pTwoRef.current.style.transform = `translateX(${translateX}vw)`;
          }
        } else if (scrollY < translateStart) {
          if (pOneRef.current && pTwoRef.current) {
            pOneRef.current.style.transform = `translateX(-100vw)`;
            pTwoRef.current.style.transform = `translateX(100vw)`;
          }
        } else if (scrollY > translateEnd) {
          if (pOneRef.current && pTwoRef.current) {
            pOneRef.current.style.transform = `translateX(0)`;
            pTwoRef.current.style.transform = `translateX(0)`;
          }
        }

        if (scrollY >= fadeOutStart && scrollY <= fadeOutEnd) {
          const fadeProgress =
            (scrollY - fadeOutStart) / (fadeOutEnd - fadeOutStart);
          const opacity = 1 - fadeProgress;

          if (pOneRef.current && pTwoRef.current) {
            pOneRef.current.style.opacity = opacity.toString();
            pTwoRef.current.style.opacity = opacity.toString();
          }
        } else if (scrollY < fadeOutStart) {
          if (pOneRef.current && pTwoRef.current) {
            pOneRef.current.style.opacity = "1";
            pTwoRef.current.style.opacity = "1";
          }
        } else if (scrollY > fadeOutEnd) {
          if (pOneRef.current && pTwoRef.current) {
            pOneRef.current.style.opacity = "0";
            pTwoRef.current.style.opacity = "0";
          }
        }

        if (scrollY >= fadeContainerStart && scrollY <= fadeContainerEnd) {
          const fadeProgress =
            (scrollY - fadeContainerStart) /
            (fadeContainerEnd - fadeContainerStart);
          const opacity = fadeProgress; // 0에서 1로 증가

          if (containerRef.current) {
            containerRef.current.style.opacity = opacity.toString();
          }
        } else if (scrollY < fadeContainerStart) {
          if (containerRef.current) {
            containerRef.current.style.opacity = "0"; // 시작 이전에는 0
          }
        } else if (scrollY > fadeContainerEnd) {
          if (containerRef.current) {
            containerRef.current.style.opacity = "1"; // 끝 이후에는 1
          }
        }

        ticking.current = false;
      });

      ticking.current = true;
    }
  };

  useEffect(() => {
    const onScroll = () => handleScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="sticky top-1/2 flex -translate-y-1/2 flex-col items-center gap-y-3">
      <p className="text-heading01b" ref={pOneRef}>
        <strong>은계성당</strong> 이야기에
      </p>
      <p className="text-heading01b" ref={pTwoRef}>
        함께 해주실래요?
      </p>
      <div className="position-center opacity-0" ref={containerRef}>
        <address>
          <strong>성당번호</strong>
          <strong>주소</strong>
        </address>
        <p>언제든지 환영합니다</p>
      </div>
    </div>
  );
}
