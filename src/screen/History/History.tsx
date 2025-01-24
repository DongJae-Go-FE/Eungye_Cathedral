"use client";

import { HistoryContext } from "./context";

import useSchene from "../../hooks/useSchene";

const History = () => {
  const schene = useSchene([
    {
      totalFrame: 1,
    },
    {
      totalFrame: 2,
    },
    {
      totalFrame: 1,
    },
    {
      totalFrame: 1,
    },
    {
      totalFrame: 1,
    },
  ]);

  return (
    <HistoryContext.Provider value={schene}>
      <div
        className="fixed h-full w-full overflow-hidden border-b transition-all duration-1000"
        style={{
          background: schene.state?.currentScheneIndex === 2 ? "#111" : "#fff",
        }}
      >
        <div
          ref={schene.ref}
          className="h-full w-full transition-all duration-1000"
        >
          <div className="h-full w-full bg-red-500" />
          <div className="h-full w-full bg-blue-500" />
          <div className="h-full w-full bg-green-500" />
          <div className="h-full w-full bg-yellow-500" />
          <div className="h-[200px] w-full bg-purple-300" />
        </div>
      </div>
    </HistoryContext.Provider>
  );
};

export default History;
