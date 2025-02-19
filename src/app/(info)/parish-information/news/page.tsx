import { Metadata } from "next";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import GetList from "@/utils/getApi";

import ClientNewsList from "@/components/_clientComponents/ClientNewsList";

export const metadata: Metadata = {
  title: "본당소식 - 은계성당",
  description: "은계성당 본당소식 페이지입니다.",
};

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["news"],
    queryFn: () => GetList.getNews({ page: "1", limit: "10", search: "" }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ClientNewsList />
    </HydrationBoundary>
  );
}
