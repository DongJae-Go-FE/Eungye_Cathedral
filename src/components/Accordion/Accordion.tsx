"use client";

import { ReactNode, useState } from "react";

type AccordionType = {
  title: string;
  children: ReactNode;
  isOpen?: boolean;
};

export default function Accordion({ title, children, isOpen }: AccordionType) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(isOpen);

  const handleOpen = () => {
    setIsAccordionOpen((prev) => !prev);
  };

  return (
    <div className="w-full overflow-hidden">
      <button type="button" onClick={handleOpen}>
        {title}
      </button>
      <div
        className={`grid ${isAccordionOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} overflow-hidden transition-[grid-template-rows] duration-500`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
