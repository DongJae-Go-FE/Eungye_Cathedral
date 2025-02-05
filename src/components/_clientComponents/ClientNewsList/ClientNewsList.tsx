"use client";

import { useState } from "react";

import SearchBar from "@/components/SearchBar";
import CardTable from "@/components/Table/CardTable/CardTable";

import { useNews } from "@/queryApi/useListQuery";
import { formatDate } from "@/utils/common";

export default function ClientNewsList() {
  const [page, setPage] = useState("1");
  const [search, setSearch] = useState("");

  const { data: newsList, isLoading } = useNews({
    page: page,
    limit: "8",
    search: search,
  });

  const handleSubmit = (e: string) => {
    setSearch(e);
  };

  return (
    <div>
      <SearchBar handleSearch={handleSubmit} isLoading={isLoading} />
      <CardTable
        totalCount={newsList?.data.total || 0}
        href="/parish-information/news"
        initialData={
          newsList?.data?.list?.map((list, index) => ({
            no: index + 1,
            title: list.title,
            date: formatDate(list.created_at) || "",
            imgUrl: list.imgUrl || "",
            id: list.id,
          })) || []
        }
        page={Number(newsList?.page)}
        pageSize={Number(newsList?.limit)}
        isLoading={isLoading}
        onPageChange={(page) => {
          setPage((prev) => {
            prev = page.toString();
            return prev;
          });
        }}
      />
    </div>
  );
}
