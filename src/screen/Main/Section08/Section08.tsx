import { ReactNode } from "react";

import IntersectionObserverContainer from "@/components/IntersectionObserverContainer";
import Card from "@/components/Card";
import Empty from "@/components/Empty";

import GetApi from "@/utils/getApi";

async function PrevUI({ children }: { children: ReactNode }) {
  return (
    <div className="main-container desktop:h-[100dvh] bg-gray-100">
      <h2>성당소식</h2>
      <div className="mobile:flex-wrap tablet:flex-wrap desktop:flex-nowrap relative flex h-[calc(100%-128px)]">
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

  const newsList = await GetApi.getNews({
    page: "1",
    limit: "2",
    search: "",
    config: {
      next: { tags: ["serverNewsList"] },
    },
  });

  if (isLoading) {
    return (
      <PrevUI>
        <ul className="mobile:flex-wrap mobile:gap-y-10 tablet:flex-wrap tablet:gap-y-10 flex w-full gap-6">
          {[...new Array(2)].map((_, index) => {
            return (
              <li key={index} className={liStyle}>
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

  if (newsList.data.list.length === 0 || !newsList) {
    return (
      <PrevUI>
        <Empty description="성당소식이 없습니다." />
      </PrevUI>
    );
  }

  return (
    <div className="main-container bg-gray-100">
      <h2>성당소식</h2>
      <div className="mobile:flex-wrap tablet:flex-wrap desktop:flex-nowrap flex h-[calc(100%-128px)]">
        <ul className="mobile:flex-wrap mobile:gap-y-10 tablet:flex-wrap tablet:gap-y-10 flex w-full gap-6">
          {newsList.data.list.map(({ id, title, created_at, imgUrl }) => {
            return (
              <li key={id} className={liStyle}>
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
