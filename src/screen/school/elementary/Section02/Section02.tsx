"use client";

import { useState, useRef } from "react";

import SchoolButton from "@/components/SchoolButton";

import { useObserver } from "@/hooks/useObserver";

export default function Section03() {
  const h3Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);

  const handleIntersect: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.target === h3Ref.current) {
        setIsVisible(entry.isIntersecting);
      } else if (entry.target === pRef.current) {
        setIsVisibleTwo(entry.isIntersecting);
      }
    });
  };

  useObserver({
    target: h3Ref,
    onIntersect: handleIntersect,
  });

  useObserver({
    target: pRef,
    onIntersect: handleIntersect,
  });

  return (
    <section className="flex flex-col justify-center pt-[200px] pb-40 text-center">
      <h3
        className={`mb-6 translate-y-[8%] text-4xl leading-[60px] font-black tracking-[2] opacity-0 ${isVisible ? "fadeInUp" : ""}`}
        ref={h3Ref}
      >
        초등부는 언제든지 환영합니다.
      </h3>
      <p
        className={`text-body01m mb-8 ${isVisibleTwo ? "fadeInUp" : ""}`}
        ref={pRef}
      >
        우리와 함께해요
      </p>
      <SchoolButton href="">은계성당 연락하기</SchoolButton>
    </section>
  );
}
