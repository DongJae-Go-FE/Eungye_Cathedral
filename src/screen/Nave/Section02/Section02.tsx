"use client";

import { useEffect, useRef } from "react";

export default function Section02() {
  const liOne = useRef<HTMLLIElement>(null);
  const liOneH4 = useRef<HTMLHeadingElement>(null);
  const liOneP = useRef<HTMLParagraphElement>(null);

  const liTwo = useRef<HTMLLIElement>(null);
  const liTwoH4 = useRef<HTMLHeadingElement>(null);
  const liTwoP = useRef<HTMLParagraphElement>(null);

  const liThree = useRef<HTMLLIElement>(null);
  const liThreeH4 = useRef<HTMLHeadingElement>(null);
  const liThreeP = useRef<HTMLParagraphElement>(null);

  const liFour = useRef<HTMLLIElement>(null);
  const liFourH4 = useRef<HTMLHeadingElement>(null);
  const liFourP = useRef<HTMLParagraphElement>(null);

  const liFive = useRef<HTMLLIElement>(null);
  const liFiveH4 = useRef<HTMLHeadingElement>(null);
  const liFiveP = useRef<HTMLParagraphElement>(null);

  const ticking = useRef(false);

  const handleScroll = () => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        if (liOne.current) {
          const startOne = windowHeight * 15;
          const endOne = windowHeight * 17;
          const fadeOutStart = windowHeight * 20;
          const fadeOutEnd = windowHeight * 24;

          let opacityOne = 0;
          let translateYOne = 120;
          let scaleOne = 1;

          if (scrollY >= startOne && scrollY < endOne) {
            opacityOne = (scrollY - startOne) / (endOne - startOne);
            translateYOne = 120 - 120 * opacityOne;
          } else if (scrollY >= endOne && scrollY < fadeOutStart) {
            opacityOne = 1;
            translateYOne = 0;
            scaleOne =
              1 - ((scrollY - endOne) / (fadeOutStart - endOne)) * 0.015;
          } else if (scrollY >= fadeOutStart && scrollY < fadeOutEnd) {
            opacityOne = (fadeOutEnd - scrollY) / (fadeOutEnd - fadeOutStart);
            translateYOne = 0;
            scaleOne = 0.985;
          }

          liOne.current.style.opacity = opacityOne.toString();
          liOne.current.style.transform = `scale(${scaleOne})`;
          if (liOneH4.current && liOneP.current) {
            liOneH4.current.style.opacity = opacityOne.toString();
            liOneH4.current.style.transform = `translateY(${translateYOne}px)`;
            liOneP.current.style.opacity = opacityOne.toString();
            liOneP.current.style.transform = `translateY(${translateYOne}px)`;
          }
        }

        if (liTwo.current) {
          const startTwo = windowHeight * 21;
          const endTwo = windowHeight * 23;
          const fadeOutStart = windowHeight * 26;
          const fadeOutEnd = windowHeight * 29;

          let opacityTwo = 0;
          let translateYTwo = 120;
          let scaleTwo = 1;

          if (scrollY >= startTwo && scrollY < endTwo) {
            opacityTwo = (scrollY - startTwo) / (endTwo - startTwo);
            translateYTwo = 120 - 120 * opacityTwo;
          } else if (scrollY >= endTwo && scrollY < fadeOutStart) {
            opacityTwo = 1;
            translateYTwo = 0;
            scaleTwo =
              1 - ((scrollY - endTwo) / (fadeOutStart - endTwo)) * 0.015;
          } else if (scrollY >= fadeOutStart && scrollY < fadeOutEnd) {
            opacityTwo = (fadeOutEnd - scrollY) / (fadeOutEnd - fadeOutStart);
            translateYTwo = 0;
            scaleTwo = 0.985;
          }

          liTwo.current.style.opacity = opacityTwo.toString();
          liTwo.current.style.transform = `scale(${scaleTwo}) translateY(${translateYTwo}px)`;

          if (liTwoH4.current && liTwoP.current) {
            liTwoH4.current.style.opacity = opacityTwo.toString();
            liTwoH4.current.style.transform = `translateY(${translateYTwo}px)`;
            liTwoP.current.style.opacity = opacityTwo.toString();
            liTwoP.current.style.transform = `translateY(${translateYTwo}px)`;
          }
        }

        if (liThree.current) {
          const startThree = windowHeight * 27;
          const endThree = windowHeight * 29;
          const fadeOutStart = windowHeight * 32;
          const fadeOutEnd = windowHeight * 35;

          let opacityThree = 0;
          let translateYThree = 120;
          let scaleThree = 1;

          if (scrollY >= startThree && scrollY < endThree) {
            opacityThree = (scrollY - startThree) / (endThree - startThree);
            translateYThree = 120 - 120 * opacityThree;
          } else if (scrollY >= endThree && scrollY < fadeOutStart) {
            opacityThree = 1;
            translateYThree = 0;
            scaleThree =
              1 - ((scrollY - endThree) / (fadeOutStart - endThree)) * 0.015;
          } else if (scrollY >= fadeOutStart && scrollY < fadeOutEnd) {
            opacityThree = (fadeOutEnd - scrollY) / (fadeOutEnd - fadeOutStart);
            translateYThree = 0;
            scaleThree = 0.985;
          }

          liThree.current.style.opacity = opacityThree.toString();
          liThree.current.style.transform = `scale(${scaleThree}) translateY(${translateYThree}px)`;

          if (liThreeH4.current && liThreeP.current) {
            liThreeH4.current.style.opacity = opacityThree.toString();
            liThreeH4.current.style.transform = `translateY(${translateYThree}px)`;
            liThreeP.current.style.opacity = opacityThree.toString();
            liThreeP.current.style.transform = `translateY(${translateYThree}px)`;
          }
        }

        if (liFour.current) {
          const startFour = windowHeight * 33;
          const endFour = windowHeight * 35;
          const fadeOutStart = windowHeight * 38;
          const fadeOutEnd = windowHeight * 41;

          let opacityFour = 0;
          let translateYFour = 120;
          let scaleFour = 1;

          if (scrollY >= startFour && scrollY < endFour) {
            opacityFour = (scrollY - startFour) / (endFour - startFour);
            translateYFour = 120 - 120 * opacityFour;
          } else if (scrollY >= endFour && scrollY < fadeOutStart) {
            opacityFour = 1;
            translateYFour = 0;
            scaleFour =
              1 - ((scrollY - endFour) / (fadeOutStart - endFour)) * 0.015;
          } else if (scrollY >= fadeOutStart && scrollY < fadeOutEnd) {
            opacityFour = (fadeOutEnd - scrollY) / (fadeOutEnd - fadeOutStart);
            translateYFour = 0;
            scaleFour = 0.985;
          }

          liFour.current.style.opacity = opacityFour.toString();
          liFour.current.style.transform = `scale(${scaleFour}) translateY(${translateYFour}px)`;

          if (liFourH4.current && liFourP.current) {
            liFourH4.current.style.opacity = opacityFour.toString();
            liFourH4.current.style.transform = `translateY(${translateYFour}px)`;
            liFourP.current.style.opacity = opacityFour.toString();
            liFourP.current.style.transform = `translateY(${translateYFour}px)`;
          }
        }

        if (liFive.current) {
          const startFive = windowHeight * 39;
          const endFive = windowHeight * 41;
          const fadeOutStart = windowHeight * 44;
          const fadeOutEnd = windowHeight * 47;

          let opacityFive = 0;
          let translateYFive = 120;
          let scaleFive = 1;

          if (scrollY >= startFive && scrollY < endFive) {
            opacityFive = (scrollY - startFive) / (endFive - startFive);
            translateYFive = 120 - 120 * opacityFive;
          } else if (scrollY >= endFive && scrollY < fadeOutStart) {
            opacityFive = 1;
            translateYFive = 0;
            scaleFive =
              1 - ((scrollY - endFive) / (fadeOutStart - endFive)) * 0.015;
          } else if (scrollY >= fadeOutStart && scrollY < fadeOutEnd) {
            opacityFive = (fadeOutEnd - scrollY) / (fadeOutEnd - fadeOutStart);
            translateYFive = 0;
            scaleFive = 0.985;
          }

          liFive.current.style.opacity = opacityFive.toString();
          liFive.current.style.transform = `scale(${scaleFive}) translateY(${translateYFive}px)`;

          if (liFiveH4.current && liFiveP.current) {
            liFiveH4.current.style.opacity = opacityFive.toString();
            liFiveH4.current.style.transform = `translateY(${translateYFive}px)`;
            liFiveP.current.style.opacity = opacityFive.toString();
            liFiveP.current.style.transform = `translateY(${translateYFive}px)`;
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

  const ulStyle = "relative flex w-full flex-col items-center justify-center";
  const boxStyle = "absolute top-0 h-[70dvh] w-3/4 rounded-2xl";
  const opacityStyle = "opacity-0";

  return (
    <div className="sticky top-[20%] w-full">
      <ul className={ulStyle}>
        <li
          className={`${boxStyle} bg-red-100 text-white opacity-0`}
          ref={liOne}
        >
          <h4 ref={liOneH4} className={opacityStyle}>
            테스트1
          </h4>
          <p ref={liOneP} className={opacityStyle}>
            문구
          </p>
        </li>
        <li
          className={`${boxStyle} bg-blue-100 text-white opacity-0`}
          ref={liTwo}
        >
          <h4 ref={liTwoH4} className={opacityStyle}>
            테스트2
          </h4>
          <p ref={liTwoP} className={opacityStyle}>
            문구
          </p>
        </li>
        <li
          className={`${boxStyle} bg-green-100 text-white opacity-0`}
          ref={liThree}
        >
          <h4 ref={liThreeH4} className={opacityStyle}>
            테스트3
          </h4>
          <p ref={liThreeP} className={opacityStyle}>
            문구
          </p>
        </li>
        <li
          className="${boxStyle} bg-yellow-100 text-white opacity-0"
          ref={liFour}
        >
          <h4 ref={liFourH4} className={opacityStyle}>
            테스트4
          </h4>
          <p ref={liFourP} className={opacityStyle}>
            문구
          </p>
        </li>
        <li
          className={`${boxStyle} bg-purple-100 text-white opacity-0`}
          ref={liFive}
        >
          <h4 ref={liFiveH4} className={opacityStyle}>
            테스트5
          </h4>
          <p ref={liFiveP} className={opacityStyle}>
            문구
          </p>
        </li>
      </ul>
    </div>
  );
}
