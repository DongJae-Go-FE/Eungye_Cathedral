"use client";

import { useRef, useMemo, ReactNode, Fragment } from "react";

import Spinner from "../../Spinner";
import Empty from "../../Empty";
import TableCard from "@/components/Table/TableCard";

import { useObserver } from "@/hooks/useObserver";
import {
  InfiniteData,
  InfiniteQueryObserverResult,
  FetchNextPageOptions,
} from "@tanstack/react-query";

import { RequestGetListType } from "@/type";

type InfiniteListType = {
  data?: InfiniteData<RequestGetListType>;
  href?: string;
  totalCount?: number;
  fetchNextPage: (
    options?: FetchNextPageOptions,
  ) => Promise<
    InfiniteQueryObserverResult<
      InfiniteData<RequestGetListType, unknown>,
      Error
    >
  >;
  isFetchingNextPage?: boolean;
  status: "error" | "success" | "pending";
  isLoading?: boolean;
};

const CardContainerStyle =
  "min-h-[975px] flex-col gap-y-3 py-4 desktop:hidden mobile:flex";

const RenderPrevUI = ({ children }: { children: ReactNode }) => {
  return (
    <div className={CardContainerStyle}>
      <span className="body02m">총0건</span>
      <ul className="relative min-h-[942px] w-full">{children}</ul>
    </div>
  );
};

export default function InfiniteList({
  data,
  fetchNextPage,
  isFetchingNextPage,
  totalCount,
  href,
  status,
  isLoading,
}: InfiniteListType) {
  const infiniteScrollBottom = useRef(null);

  const onIntersect: IntersectionObserverCallback = ([entry]) =>
    entry.isIntersecting && fetchNextPage();

  useObserver({
    target: infiniteScrollBottom,
    onIntersect,
  });

  const infiniteData = useMemo(
    () => data?.pages?.flatMap((page) => page.data.list || []),
    [data],
  );

  if (isLoading || status === "pending") {
    return (
      <RenderPrevUI>
        <Spinner />
      </RenderPrevUI>
    );
  }
  if (infiniteData?.length === 0 || !infiniteData || status === "error") {
    return (
      <RenderPrevUI>
        <Empty description="데이터가 없습니다." />
      </RenderPrevUI>
    );
  }

  const ulStyle =
    "relative grid min-h-[942px] justify-center gap-5 rounded-b-md ";

  return (
    <div className="mobile:block desktop:hidden">
      <div className={CardContainerStyle}>
        <span className="body02m">총{totalCount}건</span>
        <ul
          className={ulStyle}
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
          }}
        >
          {infiniteData.map(({ title, created_at, imgUrl, id }, index) => {
            const itemRef = infiniteData && infiniteData.length - 1 === index;
            return (
              <li key={index} ref={itemRef ? infiniteScrollBottom : null}>
                <TableCard
                  title={title}
                  date={created_at}
                  imgUrl={imgUrl || ""}
                  href={href}
                  id={id}
                />
              </li>
            );
          })}
          {isFetchingNextPage && (
            <Fragment>
              {[...Array.of(3)].map((_, index) => {
                return (
                  <li key={index}>
                    <TableCard title="" date="" imgUrl="" href="" isLoading />
                  </li>
                );
              })}
            </Fragment>
          )}
        </ul>
      </div>
    </div>
  );
}
