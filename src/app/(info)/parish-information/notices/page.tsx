import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import GetList from "@/utils/getApi";

import ClientNoticesList from "@/components/_clientComponents/ClientNoticesList";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notices"],
    queryFn: () => GetList.getNotices({ page: "1", limit: "10", search: "" }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ClientNoticesList />
    </HydrationBoundary>
  );
}
