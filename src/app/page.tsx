import Section01 from "@/screen/Main/Section01";
import Section02 from "@/screen/Main/Section02";
import Section03 from "@/screen/Main/Section03";
import Section04 from "@/screen/Main/Section04";
import Section05 from "@/screen/Main/Section05";
import Section06 from "@/screen/Main/Section06";

export default async function Home() {
  return (
    <div className="w-[100dvw]">
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <div className="h-[100dvh] w-[100dvw] bg-orange-400">성당소식</div>
      <div className="h-[100dvh] w-[100dvw] bg-slate-300">공지사항 및 문의</div>
    </div>
  );
}
