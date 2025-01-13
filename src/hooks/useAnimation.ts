"use client";

import { useEffect, useState } from "react";

function useAnimation(condition: boolean): [boolean, () => void, boolean] {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (condition) {
      setIsComplete(true);
    }
  }, [condition]);

  const hasRender = condition || isComplete;
  const animationTrigger = condition && isComplete;

  const handleTransitionEnd = () => {
    if (!condition) setIsComplete(false);
  };

  return [hasRender, handleTransitionEnd, animationTrigger];
}

export default useAnimation;
