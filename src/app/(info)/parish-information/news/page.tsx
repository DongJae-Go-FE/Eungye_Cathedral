import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import GetList from "@/utils/getApi";

import ClientNewsList from "@/components/_clientComponents/ClientNewsList";

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
