"use client";

import { useState } from "react";

import SearchBar from "@/components/SearchBar";
import ListTable from "@/components/Table/ListTable";

import { TableColumn } from "@/components/Table/ListTable/ListTable";
import { useNotices } from "@/queryApi/useListQuery";
import { formatDate } from "@/utils/common";

import useDebounce from "@/hooks/useDebounce";

export default function ClientNoticesList() {
  const [page, setPage] = useState("1");
  const [search, setSearch] = useState("");

  const debouncedSearchValue = useDebounce({ value: search, delay: 300 });

  const columns: TableColumn[] = [
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
  ];

  const { data: noticesList, isLoading } = useNotices({
    page: page,
    limit: "10",
    search: debouncedSearchValue,
  });

  const handleSubmit = (e: string) => {
    setSearch(e);
  };

  return (
    <div>
      <SearchBar handleSearch={handleSubmit} isLoading={isLoading} />
      <ListTable
        columns={columns}
        caption="공지사항 테이블"
        totalCount={noticesList?.data.total || 0}
        isLoading={isLoading}
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
        onPageChange={(page) => {
          setPage(page.toString());
        }}
      />
    </div>
  );
}
