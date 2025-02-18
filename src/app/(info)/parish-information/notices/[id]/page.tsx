import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import GetApi from "@/utils/getApi";

import DetailContent from "@/components/DetailContent";

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const noticesList = await GetApi.getNotices({
    page: "1",
    limit: "5",
    search: "",
  });

  return (
    noticesList.data.list.map((value) => ({
      id: value.id.toString(),
    })) || []
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const noticesDetail = await GetApi.getNoticesDetail({ id });

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notices-adjacent"],
    queryFn: () => GetApi.getAdjacent({ id: id, href: "notices" }),
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DetailContent
          id={id}
          title={noticesDetail.title}
          content={noticesDetail.content}
          href="notices"
          imgUrl={noticesDetail.imgUrl}
          date={noticesDetail.created_at}
        />
      </HydrationBoundary>
    </div>
  );
}
