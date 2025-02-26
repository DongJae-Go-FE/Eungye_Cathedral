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
        const windowHeight = window.innerHeight;

        if (h3OneRef.current) {
          const startOne = windowHeight * 1.2;
          const endOne = windowHeight * 1.8;
          const fadeOutStart = windowHeight * 2.4;
          const fadeOutEnd = windowHeight * 3.0;
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
          const startTwo = windowHeight * 5.4;
          const endTwo = windowHeight * 8.4;
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

  const h3Style =
    "desktop:text-heading01b tablet:text-heading02b mobile:text-heading03b desktop:flex-row mobile:flex-col flex justify-center gap-x-3 text-white";
  const mouseAnimationBoxStyle =
    "desktop:w-[139px] mobile:w-full mobile:flex desktop:block mobile:justify-center desktop:justify-normal desktop:h-0 mobile:h-9 tablet:h-[48px] relative";

  return (
    <div className="sticky top-1/2 -translate-y-1/2 text-center">
      <h3 className={h3Style}>
        지금부터
        <div className="desktop:flex-row mobile:flex-col flex gap-x-3">
          <div className={mouseAnimationBoxStyle}>
            <h4
              className="absolute top-0 whitespace-nowrap opacity-0"
              ref={h3OneRef}
            >
              은계성당
            </h4>
            <h4
              className="absolute top-0 whitespace-nowrap text-blue-600 opacity-0"
              ref={h3TwoRef}
            >
              은계성당
            </h4>
          </div>
          <h4>이야기를 들어보실래요?</h4>
        </div>
      </h3>
    </div>
  );
}
