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
        const windowHeight = window.innerHeight;

        const translateStart = windowHeight * 50;
        const translateEnd = windowHeight * 53;
        const fadeOutStart = windowHeight * 54;
        const fadeOutEnd = windowHeight * 57;
        const fadeContainerStart = windowHeight * 55;
        const fadeContainerEnd = windowHeight * 58;

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
          const opacity = fadeProgress;

          if (containerRef.current) {
            containerRef.current.style.opacity = opacity.toString();
          }
        } else if (scrollY < fadeContainerStart) {
          if (containerRef.current) {
            containerRef.current.style.opacity = "0";
          }
        } else if (scrollY > fadeContainerEnd) {
          if (containerRef.current) {
            containerRef.current.style.opacity = "1";
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

  const containerStyle =
    "sticky top-1/2 flex -translate-y-1/2 flex-col items-center justify-center gap-y-3 overflow-x-hidden z-24 mobile:h-[300px] tablet:h-auto";

  const pStyle = "desktop:heading01b tablet:heading02b mobile:heading03b";

  return (
    <div className={containerStyle}>
      <p className={pStyle} ref={pOneRef}>
        <strong>은계성당</strong> 이야기에
      </p>
      <p className={pStyle} ref={pTwoRef}>
        함께 해주실래요?
      </p>
      <div
        className="position-center w-full text-center text-gray-300 opacity-0"
        ref={containerRef}
      >
        <address className="not-italic">
          <strong className="desktop:text-2xl mobile:heading04b">031-317-2021</strong>
          <br />
          <strong className="desktop:text-2xl mobile:heading04b">
            경기도 시흥시 은계중앙로 17
          </strong>
        </address>
        <p className="desktop:text-3xl mt-1.5 desktop:font-bold mobile:heading03b">
          언제든지 여러분을 환영합니다!
        </p>
      </div>
    </div>
  );
}
