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
        <div className="mobile:gap-y-3 desktop:gap-y-6 flex animate-pulse flex-col">
          <div className="relative w-full rounded-xs bg-gray-300" />
          <div className="flex flex-col gap-y-1">
            <div className="h-9 w-11/12 rounded-xs bg-gray-300" />
            <div className="h-6 w-32 rounded-xs bg-gray-300" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link href={`/modal/parish-information/news/${id}`} className="w-full">
      <figure className="mobile:gap-y-3 desktop:gap-y-6 flex flex-col">
        {imgUrl ? (
          <Image
            width={200}
            height={400}
            className="aspect-[9/7.5] w-full object-cover"
            src={imgUrl}
            alt={`${title} 이미지`}
            priority
          />
        ) : (
          <Image
            width={200}
            height={400}
            className="aspect-[9/7.5] w-full object-cover"
            src="/bg1.png"
            alt={`${title} 이미지`}
            priority
          />
        )}
        <figcaption className="flex flex-col gap-y-1">
          <h3 className="text-heading03b w-11/12 truncate" title={title}>
            {title}
          </h3>
          <p className="text-body01b text-gray-600">
            {date ? formatDate(date) : "-"}
          </p>
        </figcaption>
      </figure>
    </Link>
  );
}
