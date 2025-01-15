"use client";

import { useState, useRef, useEffect } from "react";

import Flicking from "@egjs/flicking";

import { AutoPlay, Pagination } from "@egjs/flicking-plugins";

import "@egjs/flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/pagination.css";

export default function MainSlider() {
  const flickingRef = useRef<HTMLDivElement>(null);
  const flickingInstanceRef = useRef<Flicking | null>(null);
  const autoPlayInstanceRef = useRef<AutoPlay | null>(null);

  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (flickingRef.current) {
      const flickingInstance = new Flicking(flickingRef.current, {
        align: "center",
        circular: true,
        renderOnlyVisible: true,
        panelsPerView: 1,
        autoResize: true,
        useResizeObserver: true,
        preventDefaultOnDrag: true,
        useFractionalSize: true,
        moveType: ["strict", { count: 1 }],
      });

      const autoplayInstance = new AutoPlay({
        duration: 4000,
      });

      const paginationInstance = new Pagination({
        type: "fraction",
        renderFraction: (currentClass, totalClass) => {
          return `<span class="${currentClass} text-heading01b text-white"></span> <span class="text-heading03r text-gray-600"> / </span> <span class="${totalClass} text-heading03r text-gray-600"></span>`;
        },
        fractionCurrentFormat: (index) => {
          return `0${index.toString()}`;
        },
        fractionTotalFormat: (index) => {
          return `0${index.toString()}`;
        },
      });

      flickingInstance.addPlugins(autoplayInstance, paginationInstance);
      flickingInstanceRef.current = flickingInstance;
      autoPlayInstanceRef.current = autoplayInstance;

      flickingInstance.on("moveStart", () => setIsAnimating(true));
      flickingInstance.on("moveEnd", () => setIsAnimating(false));

      return () => {
        flickingInstance.destroy();
      };
    }
  }, [flickingRef]);

  const handleNextSlide = () => {
    if (!isAnimating && flickingInstanceRef.current) {
      flickingInstanceRef.current.next();

      if (autoPlayInstanceRef.current) {
        autoPlayInstanceRef.current.stop();
      }
    }
  };
  const handlePrevSlide = () => {
    if (!isAnimating && flickingInstanceRef.current) {
      flickingInstanceRef.current.prev();
    }
  };

  const handleAutoPlay = () => {
    setIsAutoPlay((prev) => {
      prev = !isAutoPlay;
      if (autoPlayInstanceRef.current && !prev) {
        autoPlayInstanceRef.current.stop();
      }

      if (autoPlayInstanceRef.current && prev) {
        autoPlayInstanceRef.current.play();
      }
      return prev;
    });
  };

  const viewportStyle = "flicking-viewport relative h-[100dvh] w-[100dvw]";
  const cameraStyle = "flicking-camera";
  const panelStyle = "panel";
  const slideAreaStyle = "h-full w-full";
  const btnAreaStyle =
    "item-inside-viewport absolute z-20 flex w-56 justify-between mobile:bottom-[10dvh] mobile:left-1/2 mobile:-translate-x-1/2 tablet:bottom-[13.5dvh] tablet:left-1/2 tablet:-translate-x-1/2 desktop:bottom-[17dvh] desktop:left-auto desktop:right-32 desktop:translate-x-0";
  const paginationStyle = "flicking-pagination !relative !bottom-0";
  const pauseBtnStyle = "mr-4 mobile:hidden tablet:hidden desktop:block";

  return (
    <div ref={flickingRef} className={viewportStyle}>
      <div className={cameraStyle}>
        <div className={panelStyle}>
          <div className={`${slideAreaStyle} bg-blue-200`}>1</div>
        </div>
        <div className={panelStyle}>
          <div className={`${slideAreaStyle} bg-red-200`}>2</div>
        </div>
        <div className={panelStyle}>
          <div className={`${slideAreaStyle} bg-green-200`}>3</div>
        </div>
      </div>
      <div className={btnAreaStyle}>
        <button
          type="button"
          disabled={isAnimating}
          title={isAutoPlay ? "일시정지 버튼" : "재생 버튼"}
          className={pauseBtnStyle}
          onClick={handleAutoPlay}
        >
          {isAutoPlay ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="28"
              viewBox="0 0 20 28"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 0C3.10457 0 4 0.89543 4 2V26C4 27.1046 3.10457 28 2 28C0.895431 28 0 27.1046 0 26V2C0 0.89543 0.895431 0 2 0Z"
                fill="#fff"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 0C19.1046 0 20 0.89543 20 2V26C20 27.1046 19.1046 28 18 28C16.8954 28 16 27.1046 16 26V2C16 0.89543 16.8954 0 18 0Z"
                fill="#fff"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="30"
              viewBox="0 0 25 30"
              fill="none"
            >
              <path
                d="M2 15.0001V2.87573L12.5 8.93791L23 15.0001L12.5 21.0623L2 27.1244V15.0001Z"
                fill="#fff"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25 15.0001C25 15.7146 24.6188 16.3749 24 16.7321L3 28.8565C2.3812 29.2138 1.6188 29.2138 1 28.8565C0.381197 28.4992 0 27.839 0 27.1244V2.87573C0 2.1612 0.381197 1.50095 1 1.14368C1.6188 0.786416 2.3812 0.786416 3 1.14368L24 13.268C24.6188 13.6253 25 14.2856 25 15.0001ZM19 15.0001L4 6.33983V23.6603L19 15.0001Z"
                fill="#fff"
              />
            </svg>
          )}
        </button>
        <button
          type="button"
          title="이전 슬라이드 버튼"
          disabled={isAnimating}
          onClick={handlePrevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.7071 5.29289C15.0976 5.68342 15.0976 6.31658 14.7071 6.70711L9.41421 12L14.7071 17.2929C15.0976 17.6834 15.0976 18.3166 14.7071 18.7071C14.3166 19.0976 13.6834 19.0976 13.2929 18.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L13.2929 5.29289C13.6834 4.90237 14.3166 4.90237 14.7071 5.29289Z"
              fill="white"
            />
          </svg>
        </button>
        <div className={paginationStyle} />
        <button
          type="button"
          title="다음 슬라이드 버튼"
          disabled={isAnimating}
          onClick={handleNextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
