import SchoolCard01 from "@/components/SchoolCard/SchoolCard01";
import SchoolCard02 from "@/components/SchoolCard/SchoolCard02";
import SchoolCard03 from "@/components/SchoolCard/SchoolCard03";
import SchoolCard04 from "@/components/SchoolCard/SchoolCard04";

import SchoolButton from "@/components/SchoolButton";

export default function Section02() {
  return (
    <section className="m-auto w-full max-w-[1200px]">
      <div className="m-auto w-full pb-20">
        <h2 className="text-5xl leading-[60px] font-black tracking-[2]">
          초등부 <br />
          활동을 소개합니다.
        </h2>
      </div>
      <div className="flex w-full flex-col">
        <div className="flex w-full items-end">
          <SchoolCard01 />
          <SchoolCard02 />
        </div>
        <div className="flex w-full items-end">
          <SchoolCard03 />
          <SchoolCard04 />
        </div>
      </div>
      <div className="flex w-full justify-center pt-20 pb-[200px]">
        <SchoolButton href="">은계성당 연락하기</SchoolButton>
      </div>
    </section>
  );
}
