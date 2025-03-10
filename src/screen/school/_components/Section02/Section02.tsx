"use client";

import { useState, useRef } from "react";

import SchoolButton from "@/components/SchoolButton";

import { useObserver } from "@/hooks/useObserver";

type SectionTwoType = {
  title: string;
  content: string;
  btnTitle: string;
  btnHref: string;
};

export default function Section02({
  title,
  content,
  btnTitle,
  btnHref,
}: SectionTwoType) {
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

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  useObserver({
    target: h3Ref,
    onIntersect: handleIntersect,
    root: options.root,
    rootMargin: options.rootMargin,
    threshold: options.threshold,
  });

  useObserver({
    target: pRef,
    onIntersect: handleIntersect,
    root: options.root,
    rootMargin: options.rootMargin,
    threshold: options.threshold,
  });

  const h3Style = `desktop:text-4xl desktop:leading-[60px] tablet:text-3xl tablet:leading-[44px] mobile:text-2xl mobile:leading-8 desktop:mb-6 table:mb-4 mobile:mb-2 translate-y-[8%] font-black tracking-[2] opacity-0 ${isVisible ? "fadeInUp" : ""}`;

  return (
    <section className="desktop:pt-[200px] desktop:pb-40 tablet:pt-[120px] tablet:pb-35 mobile:pt-[86px] mobile:pb-30 flex flex-col justify-center text-center">
      <h3 className={h3Style} ref={h3Ref}>
        {title}
      </h3>
      <strong
        className={`body01m mb-8 ${isVisibleTwo ? "fadeInUp" : ""}`}
        ref={pRef}
      >
        {content}
      </strong>
      <SchoolButton href={btnHref}>{btnTitle}</SchoolButton>
    </section>
  );
}
