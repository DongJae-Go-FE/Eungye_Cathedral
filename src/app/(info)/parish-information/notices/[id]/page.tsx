import GetApi from "@/utils/getApi";

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
  console.log(noticesDetail);

  return <div></div>;
}
