import { notFound } from "next/navigation";

import { RequestGetListType, RequestGetDetailType } from "@/type";
// import { formatDate } from "@/utils/common";

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const response: RequestGetListType = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_SERVER_API_URL}/weeklys?page=1&limit=10`,
    {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json;charset=UTF-8",
      },
    },
  ).then((res) => res.json());

  return (
    response.data.list.map((value) => ({
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

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_SERVER_API_URL}/weeklys/${id}`,
    {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json;charset=UTF-8",
      },
    },
  );

  if (response.status === 404) {
    notFound();
  }

  const data: RequestGetDetailType = await response.json();
  console.log(data);

  return <div className="sub-container">주보 상세</div>;
}
