import Section01 from "@/screen/Nave/Section01";
import Section02 from "@/screen/Nave/Section02";
import Section03 from "@/screen/Nave/Section03";

import ScrollDown from "@/components/ScrollDown";

export default async function Page() {
  return (
    <div className="sub-container relative">
      <div className="bg-black">
        <div className="relative flex h-[calc(100dvh-64px)] w-[100dvw] items-center justify-center">
          <h2 className="mb-0 text-heading01b text-white">
            안녕하세요 은계성당 입니다.
          </h2>
          <ScrollDown color="white" isVisible />
        </div>
        <div className="h-[1000dvh] pt-[600px]">
          <Section01 />
        </div>
        <div className="relative h-[4000dvh] py-[1500px]">
          <Section02 />
        </div>
        <div className="relative h-[1000dvh] bg-[url('/bg1.png')] bg-cover bg-fixed bg-center bg-no-repeat py-[600px]">
          <div className="absolute left-0 top-0 h-[600dvh] w-full bg-white" />
          <Section03 />
        </div>
      </div>
    </div>
  );
}
