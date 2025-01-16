import Section01 from "@/screen/Main/Section01";
import Section02 from "@/screen/Main/Section02";
import Section03 from "@/screen/Main/Section03";
import Section04 from "@/screen/Main/Section04";
import Section05 from "@/screen/Main/Section05";
import Section06 from "@/screen/Main/Section06";
import Section07 from "@/screen/Main/Section07";
import Section08 from "@/screen/Main/Section08";
import Section09 from "@/screen/Main/Section09";

export default async function Home() {
  return (
    <div className="w-[100dvw]">
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <Section07 />
      <Section08 />
      <Section09 />
    </div>
  );
}
