import Section01 from "@/screen/Nave/Section01";

export default async function Page() {
  return (
    <div className="sub-container relative">
      <div className="h-[4000dvh] bg-black">
        <div className="flex h-[calc(100dvh-64px)] w-[100dvw] items-center justify-center">
          <h2 className="mb-0 text-heading01b text-white">
            안녕하세요 은계성당 입니다.
          </h2>
        </div>
        <div className="h-[1000dvh] pt-[600px]">
          <Section01 />
        </div>
      </div>
    </div>
  );
}
