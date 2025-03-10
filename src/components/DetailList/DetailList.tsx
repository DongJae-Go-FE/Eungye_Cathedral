"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

import { useQuery } from "@tanstack/react-query";

import GetApi from "@/utils/getApi";

import { formatDate } from "@/utils/common";

import { AdjacentType } from "@/type";

type DetailListType = {
  id: string;
  href: "news" | "notices" | "weeklys";
};

export default function DetailList({ href, id }: DetailListType) {
  const searchParams = useSearchParams();

  const commonPaddingStyle = "px-5 py-[13.5px]";
  const liStyle = "w-full border-b border-gray-200 flex";
  const titleBox = `w-20 ${commonPaddingStyle}`;
  const contentBox = `flex justify-between w-[calc(100%-80px)] ${commonPaddingStyle}`;
  const LinkStyle = "w-3/4 truncate";

  const { data, isLoading } = useQuery<AdjacentType>({
    queryKey: ["adjacentData", id, href as string],
    queryFn: async () => GetApi.getAdjacent({ id: id, href: href }),
  });

  if (isLoading) {
    return (
      <ul className="body02r h-[98px] w-full text-black">
        <li className={liStyle}>
          <div className={titleBox}>이전 글</div>
          <div className={contentBox} />
        </li>
        <li className={liStyle}>
          <div className={titleBox}>다음 글</div>
          <div className={contentBox} />
        </li>
      </ul>
    );
  }

  return (
    <ul className="body02r h-[98px] w-full text-black">
      {data?.previous && (
        <li className={liStyle}>
          <div className={titleBox}>이전 글</div>
          <div className={contentBox}>
            <Link
              href={`/parish-information/${href}/${data.previous.id}?${searchParams.toString()}`}
              className={LinkStyle}
              title={data.previous.title}
            >
              {data.previous.title}
            </Link>
            <span className="whitespace-nowrap">
              {formatDate(data.previous.created_at || "")}
            </span>
          </div>
        </li>
      )}
      {data?.next && (
        <li className={liStyle}>
          <div className={titleBox}>다음 글</div>
          <div className={contentBox}>
            <Link
              href={`/parish-information/${href}/${data.next.id}?${searchParams.toString()}`}
              className={LinkStyle}
              title={data.next.title}
            >
              {data.next.title}
            </Link>
            <span className="whitespace-nowrap">
              {formatDate(data.next.created_at || "")}
            </span>
          </div>
        </li>
      )}
    </ul>
  );
}
