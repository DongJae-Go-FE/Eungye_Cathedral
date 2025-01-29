"use client";

import { useContext } from "react";

import ScrollDown from "@/components/ScrollDown";

import { PriestContext } from "@/screen/Priest/context";

export default function Section01() {
  const { state } = useContext(PriestContext);

  const frame = state?.schenes[state.currentScheneIndex].currentFrame;

  return (
    <section className="priest-section relative">
      <div className="bg-white">
        {frame === 1 && <div className="fadeInUp h-full w-full bg-gray-600" />}
        {frame === 2 && <div className="fadeInUp h-full w-full bg-gray-300" />}
      </div>
      <div className="flex flex-col">
        <h2>1대 신부</h2>
        <strong className="text-heading03b block">한정수 그레고리오</strong>
        <span className="mb-6 block">축일: 2024.12.12</span>
        <p className="text-heading04b mb-2">약력</p>
        <ul className="flex flex-col gap-y-0.5">
          <li>- 신부님 약력</li>
          <li>- 신부님 약력</li>
          <li>- 신부님 약력</li>
          <li>- 신부님 약력</li>
        </ul>
        <p className="text-heading01b mt-auto pb-20 whitespace-pre-line">
          asdasdsasdasdsas dasdsasdasdsasdas asda
        </p>
      </div>
      <ScrollDown />
    </section>
  );
}
