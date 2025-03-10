"use client";

import Link from "next/link";
import Image from "next/image";

import { useSearchParams } from "next/navigation";

import { formatDate } from "@/utils/common";

type TableCardType = {
  imgUrl: string;
  title: string;
  date: string;
  id?: number;
  href?: string;

  isLoading?: boolean;
};

export default function TableCard({
  imgUrl,
  date,
  title,
  href,
  id,
  isLoading,
}: TableCardType) {
  const searchParams = useSearchParams();

  const TableCardContainerStyle =
    "flex w-full flex-col gap-y-[15px] border-b border-gray-200";
  const TableCardTextContainerStyle = "flex w-full flex-col gap-y-3 px-6 pb-6";

  const queryString = searchParams.toString();

  if (isLoading) {
    const LoadingStyle = "rounded-sm bg-gray-200";

    return (
      <div className="animate-pulse">
        <div className={TableCardContainerStyle}>
          <div
            className={`aspect-[9/10] max-h-[435px] w-full ${LoadingStyle}`}
          />
          <div className={TableCardTextContainerStyle}>
            <div className={`${LoadingStyle} h-[24px] w-3/4`} />
            <div className={`${LoadingStyle} h-[18px] w-1/4`} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link href={`${href}/${id}?${queryString}`}>
      <div className={TableCardContainerStyle}>
        {imgUrl ? (
          <Image
            className="aspect-[9/10] max-h-[435px] w-full bg-gray-200 object-cover"
            src="/bg1.png"
            width={322}
            height={358}
            alt="이미지 테스트"
          />
        ) : (
          <Image
            className="aspect-[9/10] max-h-[435px] w-full bg-gray-200 object-cover"
            src="/bg1.png"
            width={322}
            height={358}
            alt="이미지 테스트"
          />
        )}
        <div className={TableCardTextContainerStyle}>
          <h3 className="body01b truncate text-black" title={title}>
            {title}
          </h3>
          <p
            className="body03m truncate text-gray-500"
            title={formatDate(date) || ""}
          >
            {formatDate(date)}
          </p>
        </div>
      </div>
    </Link>
  );
}
