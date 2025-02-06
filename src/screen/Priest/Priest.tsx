"use client";

import Section01 from "./Section01";
import Section02 from "./Section02";
import Section03 from "./Section03";
import PriestFooter from "./PriestFooter/PriestFooter";

import BackTop from "@/components/BackTop";

import { PriestContext } from "./context";

import useSchene from "../../hooks/useSchene";

const Priest = () => {
  const schene = useSchene([
    {
      totalFrame: 2,
    },
    {
      totalFrame: 2,
    },
    {
      totalFrame: 2,
    },
    {
      totalFrame: 1,
    },
  ]);

  const renderBackTop = () => {
    {
      switch (schene.state?.currentScheneIndex) {
        case 1:
          return <BackTop type="btn" />;
        case 2:
          return <BackTop type="btn" />;
        default:
          return "";
      }
    }
  };

  return (
    <PriestContext.Provider value={schene}>
      <div>
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
          {renderBackTop()}
        </div>
      </div>
    </PriestContext.Provider>
  );
};

export default Priest;
