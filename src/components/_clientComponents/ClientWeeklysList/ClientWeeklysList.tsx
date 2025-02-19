"use client";

import SearchBar from "@/components/SearchBar";
import CardTable from "@/components/Table/CardTable/CardTable";
import InfiniteList from "@/components/Table/InfiniteList/InfiniteList";

import { useWeeklys } from "@/hooks/useListQuery";
import { formatDate } from "@/utils/common";

import { useInfiniteQuery } from "@tanstack/react-query";
import useDebounce from "@/hooks/useDebounce";
import { useFilter } from "@/hooks/useFilter";

import GetList from "@/utils/getApi";

import { RequestFilterListType } from "@/type";

export default function ClientWeeklysList() {
  const { filter, handleSubmit } = useFilter<RequestFilterListType>({
    page: "1",
    limit: "8",
    search: "",
  });

  const debouncedSearchValue = useDebounce({
    value: filter.search,
    delay: 300,
  });

  const { data: weeklysList, isFetching } = useWeeklys({
    page: filter.page,
    limit: filter.limit,
    search: debouncedSearchValue,
  });

  const {
    data: WeeklysInfiniteList,
    fetchNextPage,
    isFetchingNextPage,
    status,
    isFetching: InfiniteIsLoading,
  } = useInfiniteQuery({
    queryKey: ["weeklys", debouncedSearchValue],
    queryFn: ({ pageParam = filter.page }) =>
      GetList.getNews({
        page: pageParam.toString(),
        limit: filter.limit,
        search: debouncedSearchValue,
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

  const handleSearchSubmit = (e: string) => {
    handleSubmit({ ...filter, search: e });
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearchSubmit} isLoading={isFetching} />
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
        isLoading={isFetching}
        onPageChange={(newPage) =>
          handleSubmit({ ...filter, page: newPage.toString() })
        }
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
