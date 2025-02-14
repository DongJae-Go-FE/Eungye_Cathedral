import Section01 from "@/screen/school/elementary/Section01";
import Section02 from "@/screen/school/elementary/Section02";
import Section03 from "@/screen/school/elementary/Section03";

export default async function Page() {
  return (
    <div className="sub-container">
      <Section01 />
      <Section02 />
      <Section03 />
    </div>
  );
}
