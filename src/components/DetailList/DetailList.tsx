import Link from "next/link";

import GetApi from "@/utils/getApi";
import ClientDateBox from "../_clientComponents/ClientDateBox";

type DetailListType = {
  id: string;
  href: "news" | "notices" | "weeklys";
};

export default async function DetailList({ href, id }: DetailListType) {
  const commonPaddingStyle = "px-5 py-[13.5px]";
  const liStyle = "w-full border-b border-gray-200 flex";
  const titleBox = `w-20 ${commonPaddingStyle}`;
  const contentBox = `flex justify-between w-[calc(100%-80px)] ${commonPaddingStyle}`;
  const LinkStyle = "w-3/4 truncate";

  const data = await GetApi.getAdjacent({ id: id, href: href });

  return (
    <ul className="text-body02r w-full text-black">
      <li className={liStyle}>
        <div className={titleBox}>이전 글</div>
        <div className={contentBox}>
          <Link
            href={`parish-information/${href}/`}
            className={LinkStyle}
            title={data.previous.title}
          >
            {data.previous.title}
          </Link>
          <ClientDateBox date={data.previous.created_at || ""} />
        </div>
      </li>
      <li className={liStyle}>
        <div className={titleBox}>다음 글</div>
        <div className={contentBox}>
          <Link
            href={`parish-information/${href}/`}
            className={LinkStyle}
            title={data.next.title}
          >
            {data.next.title}
          </Link>
          <ClientDateBox date={data.next.created_at || ""} />
        </div>
      </li>
    </ul>
  );
}
