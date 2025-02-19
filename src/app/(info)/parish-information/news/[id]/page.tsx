import { Metadata } from "next";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import GetApi from "@/utils/getApi";

import DetailContent from "@/components/DetailContent";

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const newsList = await GetApi.getNews({
    page: "1",
    limit: "5",
    search: "",
  });

  return (
    newsList.data.list.map((value) => ({
      id: value.id.toString(),
    })) || []
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const data = await GetApi.getNewsDetail({ id });

  return {
    title: `${data.title} 본당 소식 상세 페이지 - 은계성당`,
    description: `${data.content}`,
    openGraph: {
      title: `${data.title} 본당 소식 상세 페이지 - 은계성당`,
      description: `${data.content}`,
      images: [data.imgUrl || ""],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const newsDetail = await GetApi.getNewsDetail({ id });

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["news-adjacent"],
    queryFn: () => GetApi.getAdjacent({ id: id, href: "news" }),
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DetailContent
          id={id}
          title={newsDetail.title}
          content={newsDetail.content}
          href="news"
          imgUrl={newsDetail.imgUrl}
          date={newsDetail.created_at}
        />
      </HydrationBoundary>
    </div>
  );
}
