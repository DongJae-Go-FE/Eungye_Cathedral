"use client";

import {
  useReducer,
  useRef,
  useEffect,
  useCallback,
  useMemo,
  useState,
} from "react";

import { Schene, ScheneContext } from "../screen/History/types";

import { reducer } from "../screen/History/reducer";

const useSchene = (
  schenes: Omit<Schene, "currentFrame" | "index">[],
): ScheneContext => {
  const [state, dispatch] = useReducer(reducer, {
    schenes: schenes.map((schene, index) => ({
      ...schene,
      currentFrame: 1,
      index,
    })),
    currentScheneIndex: 0,
  });

  const { currentScheneIndex } = state;

  const ref = useRef<HTMLDivElement>(null);

  const [pageHeight, setPageHeight] = useState(0);
  const handleResize = () => {
    if (ref.current) {
      setPageHeight(ref.current.scrollHeight);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (ref.current) {
      if (currentScheneIndex === state.schenes.length - 1) {
        ref.current.style.transform = `translateY(calc(100% - ${pageHeight}px))`;
      } else {
        ref.current.style.transform = `translateY(-${
          100 * currentScheneIndex
        }%)`;
      }
    }
  }, [currentScheneIndex, pageHeight, state.schenes.length]);

  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const currentSchene = state.schenes[state.currentScheneIndex];

  const hasPrevSchene = useMemo(
    () => state.currentScheneIndex > 0,
    [state.currentScheneIndex],
  );
  const hasNextSchene = useMemo(
    () => state.currentScheneIndex < state.schenes.length - 1,
    [state.currentScheneIndex, state.schenes.length],
  );

  const hasPrevFrame = useMemo(
    () => currentSchene.currentFrame > 1,
    [currentSchene.currentFrame],
  );

  const hasNextFrame = useMemo(
    () => currentSchene.currentFrame < currentSchene.totalFrame,
    [currentSchene.currentFrame, currentSchene.totalFrame],
  );

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      } else {
        if (e.deltaY > 0) {
          if (hasNextFrame) {
            dispatch({
              type: "setFrame",
              payload: currentSchene.currentFrame + 1,
            });
          } else if (hasNextSchene) {
            dispatch({ type: "setSchene", payload: currentScheneIndex + 1 });
          }
        } else {
          if (hasPrevFrame) {
            dispatch({
              type: "setFrame",
              payload: currentSchene.currentFrame - 1,
            });
          } else if (hasPrevSchene) {
            dispatch({ type: "setSchene", payload: currentScheneIndex - 1 });
          }
        }
      }

      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
      }, 100);
    },
    [
      currentSchene.currentFrame,
      currentScheneIndex,
      hasNextFrame,
      hasNextSchene,
      hasPrevFrame,
      hasPrevSchene,
    ],
  );

  const [touchStartY, setTouchStartY] = useState(0);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStartY(e.touches[0].pageY);
  };

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      } else {
        if (e.touches[0].pageY < touchStartY) {
          if (hasNextFrame) {
            dispatch({
              type: "setFrame",
              payload: currentSchene.currentFrame + 1,
            });
          } else if (hasNextSchene) {
            dispatch({ type: "setSchene", payload: currentScheneIndex + 1 });
          }
        } else {
          if (hasPrevFrame) {
            dispatch({
              type: "setFrame",
              payload: currentSchene.currentFrame - 1,
            });
          } else if (hasPrevSchene) {
            dispatch({ type: "setSchene", payload: currentScheneIndex - 1 });
          }
        }
      }

      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
      }, 100);
    },
    [
      currentSchene.currentFrame,
      currentScheneIndex,
      hasNextFrame,
      hasNextSchene,
      hasPrevFrame,
      hasPrevSchene,
      touchStartY,
    ],
  );

  const handleTouchEnd = () => {
    setTouchStartY(0);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleTouchMove, handleWheel]);

  return {
    state,
    dispatch,

    ref,
  };
};

export default useSchene;
