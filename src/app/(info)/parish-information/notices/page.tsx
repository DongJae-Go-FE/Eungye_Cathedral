import { Metadata } from "next";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import GetList from "@/utils/getApi";

import ClientNoticesList from "@/components/_clientComponents/ClientNoticesList";

export const metadata: Metadata = {
  title: "공지사항 - 은계성당",
  description: "은계성당 공지사항 페이지입니다. 해당 페이지는 은계성당 공지사항을 보는 페이지입니다.",
};

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
