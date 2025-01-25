"use client";

import { createContext } from "react";

import { ScheneContext } from "./types";

export const PriestContext = createContext<ScheneContext>({
  state: {
    schenes: [],
    currentScheneIndex: 0,
  },
  dispatch: () => {},
});
