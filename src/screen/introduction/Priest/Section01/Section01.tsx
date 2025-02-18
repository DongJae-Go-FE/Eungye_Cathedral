"use client";

import { useContext } from "react";

import ScrollDown from "@/components/ScrollDown";
import PriestInfo from "@/components/PriestInfo";

import { PriestContext } from "@/screen/introduction/Priest/context";

export default function Section01() {
  const { state } = useContext(PriestContext);

  const frame = state?.schenes[state.currentScheneIndex].currentFrame;

  return (
    <section className="priest-section relative">
      <div className="bg-white">
        {frame === 1 && <div className="fadeInUp h-full w-full bg-gray-600" />}
        {frame === 2 && <div className="fadeInUp h-full w-full bg-gray-300" />}
      </div>
      <div>
        <PriestInfo
          title="1대 신부"
          name="한정수"
          christianName="그레고리오"
          period={{
            start: "2024.01.01",
            end: "2024.01.01",
          }}
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
      <ScrollDown />
    </section>
  );
}
