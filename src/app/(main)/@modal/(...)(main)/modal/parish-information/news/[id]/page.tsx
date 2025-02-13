import Image from "next/image";

import Modal from "@/components/Modal/Modal";
import GetApi from "@/utils/getApi";

import ImageDownload from "@/components/ImageDownload";
import ClientContent from "@/components/_clientComponents/ClientDetailContentBox";
import ClientDateBox from "@/components/_clientComponents/ClientDateBox";

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

  const colStyle = "flex flex-col gap-y-3";

  return (
    <Modal title={newsDetail.title}>
      <div className="flex flex-col gap-y-4">
        <div className={colStyle}>
          {newsDetail.created_at && (
            <div className="text-body02r relative text-gray-500">
              생성일 : <ClientDateBox date={newsDetail.created_at} />
            </div>
          )}
          {newsDetail.content && <ClientContent content={newsDetail.content} />}
        </div>
        {newsDetail.imgUrl && (
          <Image
            src={newsDetail.imgUrl}
            alt={`${newsDetail.title} 이미지`}
            width={500}
            height={300}
            priority
          />
        )}
        {newsDetail.imgUrl && (
          <div className={colStyle}>
            <h4 className="text-heading04b">이미지 다운로드</h4>
            <ImageDownload
              fileName={newsDetail.imgUrl}
              fileUrl={newsDetail.imgUrl}
            />
          </div>
        )}
      </div>
    </Modal>
  );
}
