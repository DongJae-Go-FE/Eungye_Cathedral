"use client";

import { useRef, useState, useEffect, ReactNode } from "react";

export default function IntersectionObserverContainer({
  children,
}: {
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (target === ref.current) setIsVisible(isIntersecting);
        });
      },
      {
        threshold: 1,
      },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const observerStyle = `transition-all duration-[1000ms] ease-in-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`;

  return (
    <div ref={ref} className="w-full">
      <div className={observerStyle}>{children}</div>
    </div>
  );
}
