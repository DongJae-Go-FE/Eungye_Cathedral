import Modal from "@/components/Modal/Modal";
import GetApi from "@/utils/getApi";

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
    <Modal>
      <div className="h-[200px] w-[200px]">{id}</div>
    </Modal>
  );
}
