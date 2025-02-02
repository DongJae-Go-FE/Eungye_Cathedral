import { ReactNode } from "react";

import TableCard from "../TableCard";
import Empty from "@/components/Empty";
import Spinner from "@/components/Spinner";
import Pagination from "@/components/Pagination";

type CardTableType = {
  // eslint-disable-next-line
  initialData: any[];
  isLoading?: boolean;
  totalCount: number;
  page?: number;
  pageSize?: number;
  onPageChange?: (page: number) => void;
};

const CardContainerStyle = "flex min-h-[975px] flex-col gap-y-3";

const RenderPrevUI = ({ children }: { children: ReactNode }) => {
  return (
    <div className={CardContainerStyle}>
      <span className="text-body02m">총0건</span>
      <ul className="relative min-h-[942px] w-full">{children}</ul>
    </div>
  );
};

export default function CardTable({
  initialData,
  isLoading,
  totalCount,
  page,
  pageSize,
  onPageChange,
}: CardTableType) {
  const totalPage = pageSize ? Math.ceil(totalCount / pageSize) : 1;

  if (isLoading) {
    return (
      <RenderPrevUI>
        <Spinner />
      </RenderPrevUI>
    );
  }
  if (initialData.length === 0 || !initialData) {
    return (
      <RenderPrevUI>
        <Empty description="데이터가 없습니다." />
      </RenderPrevUI>
    );
  }

  const ulStyle =
    "relative grid min-h-[942px] justify-center gap-5 rounded-b-md";

  return (
    <div className={CardContainerStyle}>
      <span className="text-body02m">총{totalCount}건</span>
      <ul
        className={ulStyle}
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
        }}
      >
        <li>
          <TableCard
            title="테스트테스트테스트테스트테스트테스트테스트"
            date="2025.01.01"
            imgUrl="123"
          />
        </li>
        <li>
          <TableCard
            title="테스트테스트테스트테스트테스트테스트테스트"
            date="2025.01.01"
            imgUrl="123"
          />
        </li>
        <li>
          <TableCard
            title="테스트테스트테스트테스트테스트테스트테스트"
            date="2025.01.01"
            imgUrl="123"
          />
        </li>
        <li>
          <TableCard
            title="테스트테스트테스트테스트테스트테스트테스트"
            date="2025.01.01"
            imgUrl="123"
          />
        </li>
        <li>
          <TableCard
            title="테스트테스트테스트테스트테스트테스트테스트"
            date="2025.01.01"
            imgUrl="123"
          />
        </li>
        <li>
          <TableCard
            title="테스트테스트테스트테스트테스트테스트테스트"
            date="2025.01.01"
            imgUrl="123"
          />
        </li>
        <li>
          <TableCard
            title="테스트테스트테스트테스트테스트테스트테스트"
            date="2025.01.01"
            imgUrl="123"
          />
        </li>
        <li>
          <TableCard
            title="테스트테스트테스트테스트테스트테스트테스트"
            date="2025.01.01"
            imgUrl="123"
            isLoading
          />
        </li>
      </ul>
      {totalPage > 1 && (
        <div className="mt-4 flex w-full justify-center">
          <Pagination
            current={page || 1}
            total={totalPage}
            numericOptions={{
              max: 10,
            }}
            onChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
}
