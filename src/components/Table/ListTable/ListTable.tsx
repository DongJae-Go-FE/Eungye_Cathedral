import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { ReactNode, HtmlHTMLAttributes } from "react";
import Empty from "@/components/Empty";
import Spinner from "@/components/Spinner";
import Pagination from "@/components/Pagination";

export type TableColumnAlign = "left" | "right" | "center";

export interface TableColumn {
  key: string;
  title: ReactNode;
  width?: number | string;
  headerAlign?: TableColumnAlign;
  bodyAlign?: TableColumnAlign;
  render?: ReactNode;
}

interface TableProps extends HtmlHTMLAttributes<HTMLTableElement> {
  columns: Array<TableColumn>;
  // eslint-disable-next-line
  initialData: any[];
  caption: string;
  href?: string;
  isLoading?: boolean;
  totalCount: number;
  page?: number;
  pageSize?: number;
  onPageChange?: (page: number) => void;
}

const RenderPrevUI = ({
  columns,
  children,
}: {
  columns: Array<TableColumn>;
  children: ReactNode;
}) => {
  return (
    <div className="relative h-[611px] w-full">
      <div className="table-header mb-2">
        <span className="body02m">총 0건</span>
      </div>
      <ul className="flex h-12 w-full items-center border-y-2 border-gray-200">
        {columns.map(({ title, width }, index) => {
          return (
            <li
              key={index}
              style={{ width: width ? width : "auto" }}
              className="body02m px-5 text-center"
            >
              {title}
            </li>
          );
        })}
      </ul>
      {children}
    </div>
  );
};

export default function ListTable({
  caption,
  columns,
  initialData,
  page,
  pageSize,
  totalCount,
  href,
  isLoading,
  onPageChange,
}: TableProps) {
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();

  const totalPage = pageSize ? Math.ceil(totalCount / pageSize) : 1;

  if (isLoading) {
    return (
      <RenderPrevUI columns={columns}>
        <Spinner />
      </RenderPrevUI>
    );
  }
  if (initialData.length === 0 || !initialData) {
    return (
      <RenderPrevUI columns={columns}>
        <Empty description="데이터가 없습니다." />
      </RenderPrevUI>
    );
  }

  if (!columns || !columns.length) {
    throw new Error("테이블 헤더값이 없습니다.");
  }

  const columnsKey = columns.map((columns) => columns.key);

  return (
    <div>
      <div className="h-[611px] w-full">
        {totalCount && (
          <div className="table-header mb-2">
            <span className="body02m">총 {totalCount}건</span>
          </div>
        )}
        <div className="table-body relative h-[531px] w-full">
          <table className="w-full table-fixed">
            <caption className="sr-only">{caption}</caption>
            <colgroup>
              {columns.map(({ width }, index) => {
                return <col key={index} width={width ? width : "auto"} />;
              })}
            </colgroup>
            <thead>
              <tr>
                {columns.map(({ title, headerAlign }, index) => {
                  return (
                    <th
                      key={index}
                      style={{ textAlign: headerAlign }}
                      className="body02m h-12 border-y-2 border-gray-200 px-5"
                    >
                      {title}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {initialData.map((item, index) => (
                <tr key={index}>
                  {columnsKey.map((key, index2) => (
                    <td
                      key={key + index}
                      title={`${item[key]}`}
                      className="body02r h-12 truncate border-b-2 border-gray-100 px-5 text-center"
                    >
                      {Object.keys(item)[index2] === "title" ? (
                        <Link
                          href={`${href}/${item.id}?${queryString}`}
                          className="hover:underline"
                        >
                          {item[key]}
                        </Link>
                      ) : (
                        item[key]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
    </div>
  );
}
