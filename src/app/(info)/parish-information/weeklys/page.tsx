import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import GetList from "@/utils/getApi";

import ClientWeeklysList from "@/components/_clientComponents/ClientWeeklysList";

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
