import Section01 from "@/screen/school/_components/Section01";
import Section02 from "@/screen/school/_components/Section02";
import Section03 from "@/screen/school/_components/Section03";

export default async function Page() {
  return (
    <div className="sub-container">
      <Section01
        title={`안녕하세요!\n은계성당 초등부입니다.`}
        content="우리는 은계성당입니다.우리는 은계성당입니다.우리는
          은계성당입니다.우리는 은계성당입니다.우리는 은계성당입니다.우리는
          은계성당입니다.우리는 은계성당입니다.우리는 은계성당입니다.우리는
          은계성당입니다.우리는 은계성당입니다.우리는 은계성당입니다.우리는
          은계성당입니다.우리는 은계성당입니다."
      />
      <Section02
        title="초등부는 언제든지 환영합니다."
        content="우리와 함께해요"
        btnHref="/"
        btnTitle="은계성당 연락하기"
      />
      <Section03
        title="초등부 활동을 소개합니다."
        btnTitle="은계성당 연락하기"
        btnHref="/"
        card={{
          one: {
            title: "활동1",
            contentTitle: "활동11",
            contentInfo: "내용내용내용내용내용내용내용내용내용내용내용내용",
            bgImg: "/bg1.png",
          },
          two: {
            title: "활동2",
            contentTitle: "활동2",
            contentInfo: "내용내용내용내용내용내용내용내용내용내용내용내용",
            bgImg: "/bg2.png",
          },
          three: {
            title: "활동3",
            contentTitle: "활동3",
            contentInfo: "내용내용내용내용내용내용내용내용내용내용내용내용",
            bgImg: "/bg3.png",
          },
          four: {
            title: "활동4",
            contentTitle: "활동44",
            contentInfo: "내용내용내용내용내용내용내용내용내용내용내용내용",
            bgImg: "/bg4.png",
          },
        }}
      />
    </div>
  );
}
