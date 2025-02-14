import Section01 from "@/screen/introduction/Nave/Section01";
import Section02 from "@/screen/introduction/Nave/Section02";
import Section03 from "@/screen/introduction/Nave/Section03";

import ScrollDown from "@/components/ScrollDown";

export default async function Page() {
  return (
    <div className="sub-container relative">
      <div className="bg-black">
        <div className="relative flex h-[calc(100dvh-64px)] w-[100dvw] items-center justify-center">
          <h2 className="desktop:text-heading01b tablet:text-heading02b mobile:text-heading03b mb-0 text-white">
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
          <div className="absolute top-0 left-0 h-[600dvh] w-full bg-white" />
          <Section03 />
        </div>
      </div>
    </div>
  );
}
