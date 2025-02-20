import { Metadata } from "next";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import GetList from "@/utils/getApi";

import ClientWeeklysList from "@/components/_clientComponents/ClientWeeklysList";

export const metadata: Metadata = {
  title: "주보 - 은계성당",
  description: "은계성당 주보 페이지입니다. 해당 페이지는 은계성당 주보를 보는 페이지입니다.",
};

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["weeklys"],
    queryFn: () => GetList.getWeeklys({ page: "1", limit: "10", search: "" }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ClientWeeklysList />
    </HydrationBoundary>
  );
}
