import Link from "next/link";

import { ReactNode } from "react";

import Empty from "@/components/Empty";
import Spinner from "@/components/Spinner";

import { RequestGetListType } from "@/type";

import { formatDate } from "@/utils/common";

async function PrevUI({ children }: { children: ReactNode }) {
  return (
    <div className="main-container relative mobile:min-h-[60dvh]">
      <h2>
        공지사항
        <Link href="/notices" className="flex items-center gap-x-2">
          전체 보기
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.0632 7.99982C25.1677 8.00126 26.062 8.89786 26.0605 10.0024L26.0239 38.0024C26.0225 39.107 25.1259 40.0012 24.0213 39.9998C22.9167 39.9983 22.0225 39.1017 22.0239 37.9972L22.0605 9.9972C22.062 8.89263 22.9586 7.99837 24.0632 7.99982Z"
              fill="#111"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 24.0002C8 22.8956 8.89543 22.0002 10 22.0002H38C39.1046 22.0002 40 22.8956 40 24.0002C40 25.1048 39.1046 26.0002 38 26.0002H10C8.89543 26.0002 8 25.1048 8 24.0002Z"
              fill="#111"
            />
          </svg>
        </Link>
      </h2>
      <div className="h-[calc(100%-128px)]">
        <div className="h-96">{children}</div>
      </div>
    </div>
  );
}

export default async function Section07({
  isLoading,
}: {
  isLoading?: boolean;
}) {
  const response: RequestGetListType = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_SERVER_API_URL}/notices?page=1&limit=5`,
    {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json;charset=UTF-8",
      },
      next: { tags: ["serverNoticesList"] },
    },
  ).then((res) => res.json());

  if (isLoading) {
    return (
      <PrevUI>
        <Spinner />
      </PrevUI>
    );
  }

  if (response.data.list.length === 0 || !response) {
    return (
      <PrevUI>
        <Empty description="공지사항이 없습니다." />
      </PrevUI>
    );
  }

  return (
    <div className="main-container mobile:min-h-[60dvh]" id="section7">
      <h2>
        공지사항
        <Link href="/notices" className="flex items-center gap-x-2">
          전체 보기
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.0632 7.99982C25.1677 8.00126 26.062 8.89786 26.0605 10.0024L26.0239 38.0024C26.0225 39.107 25.1259 40.0012 24.0213 39.9998C22.9167 39.9983 22.0225 39.1017 22.0239 37.9972L22.0605 9.9972C22.062 8.89263 22.9586 7.99837 24.0632 7.99982Z"
              fill="#111"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 24.0002C8 22.8956 8.89543 22.0002 10 22.0002H38C39.1046 22.0002 40 22.8956 40 24.0002C40 25.1048 39.1046 26.0002 38 26.0002H10C8.89543 26.0002 8 25.1048 8 24.0002Z"
              fill="#111"
            />
          </svg>
        </Link>
      </h2>
      <div className="h-[calc(100%-128px)]">
        <ul className="flex w-full flex-col border-t border-black">
          {response.data.list.map(({ id, title, created_at }, index) => {
            return (
              <li
                key={index}
                className="flex w-full justify-between border-b border-[#e6e6e6] py-7 mobile:flex-col mobile:gap-y-3 tablet:flex-row tablet:items-center"
              >
                <Link
                  href={`/parish-information/notices/${id}`}
                  className="w-4/5 truncate text-body01r text-black mobile:!text-lg"
                  title={title}
                >
                  {title}
                </Link>
                <p className="text-body02r text-gray-500 mobile:!text-base">
                  {formatDate(created_at)}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
