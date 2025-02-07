import Image from "next/image";

import Button from "../Button";
import ImageDownload from "../ImageDownload";
import ClientDetailContentBox from "../_clientComponents/ClientDetailContentBox";

type DetailContentType = {
  id: string;
  title: string;
  content?: string;
  imgUrl?: string;
  href?: "news" | "notices" | "weeklys";
};

export default async function DetailContent({
  id,
  title,
  content,
  href,
  imgUrl,
}: DetailContentType) {
  const h4Style = "text-heading04b";
  const colStyle = "flex flex-col gap-y-3";

  console.log(id);

  return (
    <div className="flex w-full flex-col gap-y-20">
      <div className={colStyle}>
        <h3 className="text-heading02b text-black">{title}</h3>
        {content && <ClientDetailContentBox content={content} />}
      </div>

      <Image src="/" alt={`${title} 이미지`} width={1200} height={676} priority />

      {imgUrl && (
        <div className={colStyle}>
          <h4 className={h4Style}>이미지 다운로드</h4>
          <ImageDownload fileName={imgUrl} fileUrl={imgUrl} />
        </div>
      )}

      <div className={colStyle}>
        <h4 className={h4Style}>목록</h4>
        <Button
          href={`/parish-information/${href}`}
          className="ml-auto"
          color="white"
        >
          전체보기
        </Button>
      </div>
    </div>
  );
}
