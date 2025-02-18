import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import GetApi from "@/utils/getApi";

import DetailContent from "@/components/DetailContent";

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const weeklysList = await GetApi.getWeeklys({
    page: "1",
    limit: "5",
    search: "",
  });

  return (
    weeklysList.data.list.map((value) => ({
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

  const weeklysDetail = await GetApi.getWeeklysDetail({ id });

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["weeklys-adjacent"],
    queryFn: () => GetApi.getAdjacent({ id: id, href: "weeklys" }),
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DetailContent
          id={id}
          title={weeklysDetail.title}
          content={weeklysDetail.content}
          href="weeklys"
          imgUrl={weeklysDetail.imgUrl}
          date={weeklysDetail.created_at}
        />
      </HydrationBoundary>
    </div>
  );
}
