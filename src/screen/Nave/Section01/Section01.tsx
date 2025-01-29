"use client";

import { useEffect, useRef } from "react";

export default function Section01() {
  const h3OneRef = useRef<HTMLHeadingElement>(null);
  const h3TwoRef = useRef<HTMLHeadingElement>(null);
  const ticking = useRef(false);

  const handleScroll = () => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        if (h3OneRef.current) {
          const startOne = 1200;
          const endOne = 1800;
          const fadeOutStart = 2400;
          const fadeOutEnd = 3000;

          let opacityOne = 0;

          if (scrollY >= startOne && scrollY < endOne) {
            opacityOne = (scrollY - startOne) / (endOne - startOne);
          } else if (scrollY >= endOne && scrollY < fadeOutStart) {
            opacityOne = 1;
          } else if (scrollY >= fadeOutStart && scrollY < fadeOutEnd) {
            opacityOne = (fadeOutEnd - scrollY) / (fadeOutEnd - fadeOutStart);
          }

          const translateYOne = Math.max(
            0,
            180 - ((scrollY - startOne) / (endOne - startOne)) * 180,
          );

          h3OneRef.current.style.opacity = opacityOne.toString();
          h3OneRef.current.style.transform = `translateY(${translateYOne}px)`;
        }

        if (h3TwoRef.current) {
          const startTwo = 5400;
          const endTwo = 8400;
          const opacityTwo = Math.max(
            0,
            Math.min(1, (scrollY - startTwo) / (endTwo - startTwo)),
          );

          h3TwoRef.current.style.opacity = opacityTwo.toString();
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
    <div className="sticky top-1/2 -translate-y-1/2 text-center">
      <h3 className="text-heading01b inline-flex gap-x-3 text-white">
        지금부터
        <div className="inline-flex gap-x-3">
          <div className="relative w-[139px]">
            <h3 className="absolute top-0 opacity-0" ref={h3OneRef}>
              은계성당
            </h3>
            <h3
              className="absolute top-0 text-blue-600 opacity-0"
              ref={h3TwoRef}
            >
              은계성당
            </h3>
          </div>
          <h3>이야기를 들어보실래요?</h3>
        </div>
      </h3>
    </div>
  );
}
