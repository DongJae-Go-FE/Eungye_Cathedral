"use client";

import Section01 from "./Section01";
import Section02 from "./Section02";
import Section03 from "./Section03";
import PriestFooter from "./PriestFooter/PriestFooter";

import { HistoryContext } from "./context";

import useSchene from "../../hooks/useSchene";

const Priest = () => {
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
  ]);

  return (
    <HistoryContext.Provider value={schene}>
      <div className="fixed h-full w-full overflow-hidden border-b transition-all duration-1000">
        <div
          ref={schene.ref}
          className="h-full w-full transition-all duration-1000"
        >
          <Section01 />
          <Section02 />
          <Section03 />
          <PriestFooter />
        </div>
      </div>
    </HistoryContext.Provider>
  );
};

export default Priest;
