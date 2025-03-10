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

  const btnStyle =
    "flex h-14 w-full items-center justify-between px-6 py-1.5 body01b text-black cursor-pointer";
  const contentStyle = `grid ${isAccordionOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} overflow-hidden transition-[grid-template-rows] duration-500`;

  return (
    <div className="w-full overflow-hidden">
      <button type="button" className={btnStyle} onClick={handleOpen}>
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={`transform transition-transform ${isAccordionOpen ? "rotate-180" : ""}`}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.86177 5.52851C8.12212 5.26816 8.54423 5.26816 8.80457 5.52851L12.8046 9.52851C13.0649 9.78886 13.0649 10.211 12.8046 10.4713C12.5442 10.7317 12.1221 10.7317 11.8618 10.4713L8.33317 6.94273L4.80458 10.4713C4.54423 10.7317 4.12212 10.7317 3.86177 10.4713C3.60142 10.211 3.60142 9.78886 3.86177 9.52851L7.86177 5.52851Z"
            fill="#111111"
          />
        </svg>
      </button>
      <div className={contentStyle}>
        <div className="overflow-hidden px-8">{children}</div>
      </div>
    </div>
  );
}
