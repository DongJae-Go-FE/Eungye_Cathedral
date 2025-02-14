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

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const newsDetail = await GetApi.getNewsDetail({ id });

  return (
    <div>
      <DetailContent
        id={id}
        title={newsDetail.title}
        content={newsDetail.content}
        href="news"
        imgUrl={newsDetail.imgUrl}
        date={newsDetail.created_at}
      />
    </div>
  );
}
