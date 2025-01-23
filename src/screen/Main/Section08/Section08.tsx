import { ReactNode } from "react";

import IntersectionObserverContainer from "@/components/IntersectionObserverContainer";
import Card from "@/components/Card";
import Empty from "@/components/Empty";

import { RequestGetListType } from "@/type";

async function PrevUI({ children }: { children: ReactNode }) {
  return (
    <div className="main-container bg-gray-100 desktop:h-[100dvh]">
      <h2>성당소식</h2>
      <div className="relative flex h-[calc(100%-128px)] mobile:flex-wrap tablet:flex-wrap desktop:flex-nowrap">
        {children}
      </div>
    </div>
  );
}

export default async function Section08({
  isLoading,
}: {
  isLoading?: boolean;
}) {
  const liStyle = "mobile:w-full tablet:flex tablet:w-full desktop:flex-1";

  const response: RequestGetListType = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_SERVER_API_URL}/news?page=1&limit=2`,
    {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json;charset=UTF-8",
      },
      next: { tags: ["serverNewsList"] },
    },
  ).then((res) => res.json());

  if (isLoading) {
    return (
      <PrevUI>
        <ul className="flex w-full gap-6 mobile:flex-wrap mobile:gap-y-10 tablet:flex-wrap tablet:gap-y-10">
          {[...new Array(2)].map((_, index) => {
            return (
              <li className={liStyle} key={index}>
                <IntersectionObserverContainer>
                  <Card isLoading />
                </IntersectionObserverContainer>
              </li>
            );
          })}
        </ul>
      </PrevUI>
    );
  }

  if (response.data.list.length === 0 || !response) {
    return (
      <PrevUI>
        <Empty description="성당소식이 없습니다." />
      </PrevUI>
    );
  }

  return (
    <div className="main-container bg-gray-100">
      <h2>성당소식</h2>
      <div className="flex h-[calc(100%-128px)] mobile:flex-wrap tablet:flex-wrap desktop:flex-nowrap">
        <ul className="flex w-full gap-6 mobile:flex-wrap mobile:gap-y-10 tablet:flex-wrap tablet:gap-y-10">
          {response.data.list.map(({ id, title, created_at, imgUrl }) => {
            return (
              <li className={liStyle} key={id}>
                <IntersectionObserverContainer>
                  <Card
                    id={id}
                    title={title}
                    date={created_at}
                    imgUrl={imgUrl}
                  />
                </IntersectionObserverContainer>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
