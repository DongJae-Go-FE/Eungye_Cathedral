"use client";

import { useContext } from "react";

import PriestInfo from "@/components/PriestInfo";

import { PriestContext } from "@/screen/Priest/context";

export default function Section02() {
  const { state } = useContext(PriestContext);

  const frame = state?.schenes[state.currentScheneIndex].currentFrame;

  return (
    <section className="priest-section">
      <div className="bg-white">
        {frame === 1 && <div className="fadeInUp h-full w-full bg-gray-600" />}
        {frame === 2 && <div className="fadeInUp h-full w-full bg-gray-300" />}
      </div>
      <div>
        <PriestInfo
          title="2대 신부"
          name="김용수"
          christianName="마테오"
          feteDay="2024.12.12"
          briefHistory={[
            "신부님 약력",
            "신부님 약력",
            "신부님 약력",
            "신부님 약력",
          ]}
          scripture="asdasdsasdasdsas dasdsasdasdsasdas asda"
        />
      </div>
    </section>
  );
}
