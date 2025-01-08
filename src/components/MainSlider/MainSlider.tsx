"use client";

import Image from "next/image";

import { useState, useRef, useEffect } from "react";

import Flicking from "@egjs/flicking";

import { AutoPlay, Pagination } from "@egjs/flicking-plugins";

import "@egjs/flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/pagination.css";

export default function Slider() {
  const flickingRef = useRef<HTMLDivElement>(null);
  const flickingInstanceRef = useRef<Flicking | null>(null);
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
          return `<span class="${currentClass} test"></span>/<span class="${totalClass}"></span>`;
        },
      });

      flickingInstance.addPlugins(autoplayInstance, paginationInstance);
      flickingInstanceRef.current = flickingInstance;

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
    }
  };
  const handlePrevSlide = () => {
    if (!isAnimating && flickingInstanceRef.current) {
      flickingInstanceRef.current.prev();
    }
  };

  return (
    <div
      ref={flickingRef}
      className="flicking-viewport relative h-[100dvh] w-[100dvw]"
    >
      <div className="flicking-camera">
        <div className="plugins-panel">
          <Image
            className="panel-image h-full w-full"
            width={100}
            height={100}
            src="/Anatomy2.png"
            alt="테스트"
          />
        </div>
        <div className="plugins-panel">
          <Image
            className="panel-image h-full w-full"
            width={100}
            height={100}
            src="/Anatomy3.png"
            alt="테스트"
          />
        </div>
        <div className="plugins-panel">
          <Image
            className="panel-image h-full w-full"
            width={100}
            height={100}
            src="/Anatomy4.png"
            alt="테스트"
          />
        </div>
      </div>
      <div className="flicking-pagination"></div>
      <span className="item-inside-viewport">
        <button
          className="absolute top-2 z-20"
          disabled={isAnimating}
          onClick={handleNextSlide}
        >
          다음 슬라이드
        </button>
        <button
          className="absolute right-0 top-2 z-20"
          disabled={isAnimating}
          onClick={handlePrevSlide}
        >
          이전 슬라이드
        </button>
      </span>
    </div>
  );
}
