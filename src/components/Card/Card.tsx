import Link from "next/link";
import Image from "next/image";

import Empty from "@/components/Empty";

import { formatDate } from "@/utils/common";

type CardType = {
  id?: string | number;
  title?: string;
  date?: string;
  imgUrl?: string;
  isLoading?: boolean;
};

export default async function Card({
  id,
  title,
  date,
  imgUrl,
  isLoading,
}: CardType) {
  if (isLoading) {
    return (
      <div className="w-full">
        <div className="flex animate-pulse flex-col mobile:gap-y-3 desktop:gap-y-6">
          <div className="relative h-[600px] w-full rounded-sm bg-gray-300" />
          <div className="flex flex-col gap-y-1">
            <div className="h-9 w-11/12 rounded-sm bg-gray-300" />
            <div className="h-6 w-32 rounded-sm bg-gray-300" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link href={`/news/${id}`} className="w-full">
      <figure className="flex flex-col mobile:gap-y-3 desktop:gap-y-6">
        {imgUrl ? (
          <Image
            width={300}
            height={600}
            className="h-[600px] w-full"
            src={imgUrl}
            alt={`${title} 이미지`}
          />
        ) : (
          <div className="relative h-[600px] w-full rounded-sm bg-gray-300">
            <Empty description="이 소식은 사진이 없습니다." />
          </div>
        )}
        <figcaption className="flex flex-col gap-y-1">
          <h4 className="w-11/12 truncate text-heading03b" title={title}>
            {title}
          </h4>
          <p className="text-body01b text-gray-600">
            {date ? formatDate(date) : "-"}
          </p>
        </figcaption>
      </figure>
    </Link>
  );
}
