import SchoolCard01 from "@/components/SchoolCard/SchoolCard01";
import SchoolCard02 from "@/components/SchoolCard/SchoolCard02";
import SchoolCard03 from "@/components/SchoolCard/SchoolCard03";
import SchoolCard04 from "@/components/SchoolCard/SchoolCard04";

import SchoolButton from "@/components/SchoolButton";

export default function Section02() {
  return (
    <section className="m-auto w-full max-w-[1280px] px-[3dvw]">
      <div className="mobile:pb-10 desktop:pb-20 m-auto w-full">
        <h2 className="desktop:text-5xl desktop:leading-[60px] tablet:text-4xl tablet:leading-[44px] mobile:text-2xl mobile:leading-8 mobile:mb-0 tablet:mb-8 desktop:mb-10 font-black tracking-[2]">
          초등부 <br />
          활동을 소개합니다.
        </h2>
      </div>
      <div className="mobile:gap-y-4 tablet:justify-between desktop:flex-col mobile:grid tablet:flex w-full">
        <div className="mobile:gap-x-4 tablet:max-w-[calc(50%-26px)] desktop:w-full tablet:flex-col desktop:flex-row desktop:max-w-full flex w-full items-end">
          <SchoolCard01 />
          <SchoolCard02 />
        </div>
        <div className="mobile:gap-x-4 tablet:max-w-[calc(50%-26px)] desktop:w-full tablet:flex-col desktop:flex-row desktop:max-w-full flex w-full items-end">
          <SchoolCard03 />
          <SchoolCard04 />
        </div>
      </div>
      <div className="flex w-full justify-center pt-20 desktop:pb-[200px] tablet:pb-[150px] mobile:pb-[100px]">
        <SchoolButton href="">은계성당 연락하기</SchoolButton>
      </div>
    </section>
  );
}
