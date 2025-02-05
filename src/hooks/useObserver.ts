import { useEffect, RefObject } from "react";

interface useIntersectionObserverProps {
  target: RefObject<HTMLElement | null>;
  root?: null;
  rootMargin?: string;
  threshold?: number;
  onIntersect: IntersectionObserverCallback;
}

export const useObserver = ({
  target,
  onIntersect,
  root = null,
  rootMargin = "0px",
  threshold = 1.0,
}: useIntersectionObserverProps) => {
  useEffect(() => {
    let observer: IntersectionObserver;

    if (target && target.current) {
      observer = new IntersectionObserver(onIntersect, {
        root,
        rootMargin,
        threshold,
      });

      observer.observe(target.current);
    }

    return () => observer && observer.disconnect();
  }, [target, rootMargin, threshold, root, onIntersect]);
};
