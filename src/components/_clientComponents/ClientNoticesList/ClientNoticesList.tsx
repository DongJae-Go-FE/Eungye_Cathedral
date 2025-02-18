"use client";

import { useMemo } from "react";

import SearchBar from "@/components/SearchBar";
import ListTable from "@/components/Table/ListTable";

import { TableColumn } from "@/components/Table/ListTable/ListTable";
import { useNotices } from "@/queryApi/useListQuery";
import { formatDate } from "@/utils/common";

import useDebounce from "@/hooks/useDebounce";
import { useFilter } from "@/hooks/useFilter";

import { RequestFilterListType } from "@/type";

export default function ClientNoticesList() {
  const { filter, handleSubmit } = useFilter<RequestFilterListType>({
    page: "1",
    limit: "10",
    search: "",
  });

  const debouncedSearchValue = useDebounce({
    value: filter.search,
    delay: 300,
  });

  const { data: noticesList, isFetching } = useNotices({
    page: filter.page,
    limit: filter.limit,
    search: debouncedSearchValue,
  });

  const columns: TableColumn[] = useMemo(
    () => [
      {
        key: "no",
        title: "No",
        width: "10%",
      },
      {
        key: "title",
        title: "제목",
        width: "60%",
      },
      {
        key: "created_at",
        title: "생성일",
        width: "30%",
      },
    ],
    [],
  );

  const handleSearchSubmit = (e: string) => {
    handleSubmit({ ...filter, search: e });
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearchSubmit} isLoading={isFetching} />
      <ListTable
        columns={columns}
        caption="공지사항 테이블"
        totalCount={noticesList?.data.total || 0}
        isLoading={isFetching}
        href="/parish-information/notices"
        initialData={
          noticesList?.data?.list?.map((list, index) => ({
            no: index + 1,
            title: list.title,
            created_at: formatDate(list.created_at),
            id: list.id,
          })) || []
        }
        page={Number(noticesList?.page)}
        pageSize={Number(noticesList?.limit)}
        // onPageChange={(page) => {
        //   setPage((prev) => {
        //     prev = page.toString();
        //     return prev;
        //   });
        // }}
        onPageChange={(newPage) =>
          handleSubmit({ ...filter, page: newPage.toString() })
        }
      />
    </div>
  );
}
