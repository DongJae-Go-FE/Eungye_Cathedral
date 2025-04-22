import { Metadata } from "next";

import Image from "next/image";

import Modal from "@/components/Modal/Modal";
import GetApi from "@/utils/getApi";

import ClientContent from "@/components/_clientComponents/ClientDetailContentBox";
import ClientDateBox from "@/components/_clientComponents/ClientDateBox";

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const newsList = await GetApi.getNews({
    page: "1",
    limit: "2",
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

  const colStyle = "flex flex-col gap-y-3";

  return (
    <Modal title={newsDetail.title}>
      <div className="flex flex-col gap-y-4">
        <div className={colStyle}>
          {newsDetail.created_at && (
            <div className="body02r relative text-gray-500">
              생성일 : <ClientDateBox date={newsDetail.created_at} />
            </div>
          )}
          {newsDetail.content && <ClientContent content={newsDetail.content} />}
        </div>
        {newsDetail.imgUrl && (
          <Image
            src={newsDetail.imgUrl}
            alt={`${newsDetail.title} 이미지`}
            width={800}
            height={500}
            priority
          />
        )}
      </div>
    </Modal>
  );
}
