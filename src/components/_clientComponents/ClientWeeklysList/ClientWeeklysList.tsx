"use client";

import { useState } from "react";

import SearchBar from "@/components/SearchBar";
import CardTable from "@/components/Table/CardTable/CardTable";
import InfiniteList from "@/components/Table/InfiniteList/InfiniteList";

import { useWeeklys } from "@/queryApi/useListQuery";
import { formatDate } from "@/utils/common";

import { useInfiniteQuery } from "@tanstack/react-query";
import useDebounce from "@/hooks/useDebounce";

import GetList from "@/utils/getApi";

export default function ClientWeeklysList() {
  const [page, setPage] = useState("1");
  const [search, setSearch] = useState("");

  const debouncedSearchValue = useDebounce({ value: search, delay: 300 });

  const { data: weeklysList, isLoading } = useWeeklys({
    page: page,
    limit: "8",
    search: debouncedSearchValue,
  });

  const {
    data: WeeklysInfiniteList,
    fetchNextPage,
    isFetchingNextPage,
    status,
    isLoading: InfiniteIsLoading,
  } = useInfiniteQuery({
    queryKey: ["weeklys", debouncedSearchValue],
    queryFn: ({ pageParam = 1 }) =>
      GetList.getNews({
        page: pageParam.toString(),
        limit: "8",
        search: search,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage) {
        const last = Number(lastPage.page);
        const totalPage = lastPage.data.totalPages;
        if (last === totalPage) return;
        if (last < totalPage) return Math.min(totalPage, last + 1);
      }
    },
  });

  const handleSubmit = (e: string) => {
    setSearch(e);
  };

  return (
    <div>
      <SearchBar handleSearch={handleSubmit} isLoading={isLoading} />
      <CardTable
        totalCount={weeklysList?.data.total || 0}
        href="/parish-information/weeklys"
        initialData={
          weeklysList?.data?.list?.map((list, index) => ({
            no: index + 1,
            title: list.title,
            date: formatDate(list.created_at) || "",
            imgUrl: list.imgUrl || "",
            id: list.id,
          })) || []
        }
        page={Number(weeklysList?.page)}
        pageSize={Number(weeklysList?.limit)}
        isLoading={isLoading}
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
      <InfiniteList
        data={WeeklysInfiniteList}
        fetchNextPage={fetchNextPage}
        status={status}
        href="/parish-information/weeklys"
        isFetchingNextPage={isFetchingNextPage}
        isLoading={InfiniteIsLoading}
        totalCount={WeeklysInfiniteList?.pages[0].data.total}
      />
    </div>
  );
}
