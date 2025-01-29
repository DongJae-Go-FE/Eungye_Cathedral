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
        {frame === 1 && (
          <div className="h-full w-full animate-fadeInUp bg-gray-600" />
        )}
        {frame === 2 && (
          <div className="h-full w-full animate-fadeInUp bg-gray-300" />
        )}
      </div>
      <div className="flex flex-col">
        <h2>1대 신부</h2>
        <strong className="block text-heading03b">한정수 그레고리오</strong>
        <span className="mb-6 block">축일: 2024.12.12</span>
        <p className="mb-2 text-heading04b">약력</p>
        <ul className="flex flex-col gap-y-0.5">
          <li>- 신부님 약력</li>
          <li>- 신부님 약력</li>
          <li>- 신부님 약력</li>
          <li>- 신부님 약력</li>
        </ul>
        <p className="mt-auto whitespace-pre-line pb-20 text-heading01b">
          asdasdsasdasdsas dasdsasdasdsasdas asda
        </p>
      </div>
      <ScrollDown />
    </section>
  );
}
