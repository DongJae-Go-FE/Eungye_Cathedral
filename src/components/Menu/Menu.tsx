"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect } from "react";

type MenuType = {
  handleTransitionEnd: () => void;
  isTriggerAnimation: boolean;
  onClose: () => void;
};

export default function Menu({
  handleTransitionEnd,
  isTriggerAnimation,
  onClose,
}: MenuType) {
  const pathName = usePathname();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      aria-label="mobile-side-menu"
      className={`duration-400 fixed right-0 top-0 z-[3000] h-[100dvh] w-[100dvw] bg-white transition-transform tablet:w-[80dvw] ${!isTriggerAnimation && "transform: tablet:translateX(80vw) transform: translateX(100vw)"}`}
      onTransitionEnd={handleTransitionEnd}
    >
      <button onClick={onClose}>닫기</button>
      <ul>
        <li>
          <button type="button">테스트1</button>
          <div>
            <ul>
              <li>
                <Link href="">테스트1-1</Link>
              </li>
              <li>
                <Link href="">테스트1-2</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <button type="button">테스트2</button>
          <div>
            <ul>
              <li>
                <Link href="">테스트2-1</Link>
              </li>
              <li>
                <Link href="">테스트2-2</Link>
              </li>
              <li>
                <Link href="">테스트2-3</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <button type="button">테스트3</button>
          <div>
            <ul>
              <li>
                <Link href="">테스트3-1</Link>
              </li>
              <li>
                <Link href="">테스트3-2</Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
