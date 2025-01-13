import Link from "next/link";

import { Fragment, PropsWithChildren } from "react";

import MainButton from "../MainButton";

interface MainIntroduction extends PropsWithChildren {
  titleBtnName: string;
  titleBtnHref: string;
  title: string;
  content: string;
}

export default async function MainIntroduction({
  titleBtnName,
  titleBtnHref,
  title,
  content,
  children,
}: MainIntroduction) {
  return (
    <Fragment>
      <h3 className="mb-4 flex flex-col text-heading01r text-white">
        <Link
          href={titleBtnHref}
          className="flex items-center gap-1 text-body01r text-xl text-white"
        >
          {titleBtnName}
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.5 1L6 5.73684L1 11" stroke="white" strokeWidth="2" />
          </svg>
        </Link>
        {title}
      </h3>
      <p className="mb-11 whitespace-pre-wrap text-body01r text-white">
        {content}
      </p>
      {children}
    </Fragment>
  );
}
