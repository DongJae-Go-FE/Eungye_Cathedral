import GetApi from "@/utils/getApi";

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
  console.log(weeklysDetail);

  return <div></div>;
}
