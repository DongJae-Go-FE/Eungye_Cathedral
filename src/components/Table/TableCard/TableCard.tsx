import Link from "next/link";
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
  const TableCardContainerStyle =
    "flex w-full flex-col gap-y-[15px] rounded-sm border-b border-gray-200";
  const TableCardTextContainerStyle = "flex w-full flex-col gap-y-3 px-6 pb-6";

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
    <Link href={`${href}/${id}`}>
      <div className={TableCardContainerStyle}>
        {imgUrl ? (
          <div className="aspect-[9/10] max-h-[435px] w-full bg-gray-200" />
        ) : (
          <div className="aspect-[9/10] max-h-[435px] w-full bg-gray-200" />
        )}
        <div className={TableCardTextContainerStyle}>
          <h5 className="text-body01b truncate text-black" title={title}>
            {title}
          </h5>
          <p
            className="text-body03m truncate text-gray-500"
            title={formatDate(date) || ""}
          >
            {formatDate(date)}
          </p>
        </div>
      </div>
    </Link>
  );
}
