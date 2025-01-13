"use client";

import Link from "next/link";
// import { usePathname } from "next/navigation";

import { useEffect } from "react";
import { createPortal } from "react-dom";

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
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div>
      <div
        aria-label="mobile-side-menu"
        className={`duration-800 fixed right-0 top-0 z-[3000] h-[100dvh] bg-white transition-transform mobile:w-[100dvw] tablet:w-[80dvw] desktop:hidden ${isTriggerAnimation ? "translate-x-0" : "mobile:translate-x-[100dvw] tablet:translate-x-[80dvw]"}`}
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
      {createPortal(
        <div
          className="fixed left-0 top-0 z-[2001] h-[100dvh] w-[100dvw] cursor-pointer bg-dimmedEffectBlack70D desktop:hidden"
          onClick={onClose}
        />,
        document.body,
      )}
    </div>
  );
}
