import { Reducer } from "react";

import { ReducerAction, ReducerState } from "./types";

export const reducer: Reducer<ReducerState, ReducerAction> = (
  state,
  action,
) => {
  const currentSchene = state.schenes[state.currentScheneIndex];

  switch (action.type) {
    case "moveToTop": {
      state.currentScheneIndex = 0;
      for (const schene of state.schenes) {
        schene.currentFrame = 1;
      }
      break;
    }
    case "setSchene": {
      state.currentScheneIndex = action.payload;
      break;
    }
    case "setFrame": {
      currentSchene.currentFrame = action.payload;
      break;
    }
  }

  return {
    ...state,
  };
};
