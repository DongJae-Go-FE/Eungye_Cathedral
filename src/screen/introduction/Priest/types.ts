import { Dispatch, RefObject } from "react";

export type ReducerState = {
  schenes: Schene[];
  currentScheneIndex: number;
};

type ReducerActionConfig = {
  moveToTop: undefined;
  setSchene: number;
  setFrame: number;
};

export type ReducerAction = {
  [key in keyof ReducerActionConfig]: {
    type: key;
    payload: ReducerActionConfig[key];
  };
}[keyof ReducerActionConfig];

export interface Schene {
  index: number;
  currentFrame: number;
  totalFrame: number;
}

export type ScheneContext = {
  state?: ReducerState;
  dispatch: Dispatch<ReducerAction>;

  ref?: RefObject<HTMLDivElement | null>;
};
