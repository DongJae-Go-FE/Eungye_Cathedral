import Image from "next/image";

import Button from "../Button";
import ImageDownload from "../ImageDownload";
import ClientContent from "../_clientComponents/ClientDetailContentBox";
import DetailList from "../DetailList";
import ClientDateBox from "../_clientComponents/ClientDateBox";

type DetailContentType = {
  id: string;
  title: string;
  content?: string;
  imgUrl?: string;
  href: "news" | "notices" | "weeklys";
  date?: string;
};

export default async function DetailContent({
  id,
  title,
  content,
  href,
  imgUrl,
  date,
}: DetailContentType) {
  const h4Style = "text-heading04b";
  const colStyle = "flex flex-col gap-y-3";

  return (
    <div className="flex w-full flex-col gap-y-20">
      <div className={colStyle}>
        <h3 className="text-heading02b text-black">{title}</h3>
        {date && (
          <div className="text-body02r relative text-gray-500">
            생성일 : <ClientDateBox date={date} />
          </div>
        )}
        {content && <ClientContent content={content} />}
      </div>

      <Image
        src="/"
        alt={`${title} 이미지`}
        width={1200}
        height={676}
        priority
      />

      {imgUrl && (
        <div className={colStyle}>
          <h4 className={h4Style}>이미지 다운로드</h4>
          <ImageDownload fileName={imgUrl} fileUrl={imgUrl} />
        </div>
      )}

      <div className={colStyle}>
        <h4 className={h4Style}>목록</h4>
        <DetailList id={id} href={href} />
        <Button
          href={`/parish-information/${href}`}
          className="mt-6 ml-auto"
          color="white"
        >
          전체보기
        </Button>
      </div>
    </div>
  );
}
