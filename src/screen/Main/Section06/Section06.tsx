import MainButton from "@/components/MainButton";
import MainIntroduction from "@/components/MainIntroduction";

export default async function Section06() {
  return (
    <section className="main-section main-bg bg-[url('/bg4.png')]">
      <MainIntroduction
        title="은계성당 주일 학교"
        content={`은계성당 주일학교를 소개합니다. 초등부와 중고등부로 이루어져 있으며\n아래 버튼들을 누르면 소개 페이지로 이동합니다.`}
        titleBtnName="주일학교"
        titleBtnHref="/school/elementary"
      >
        <ul>
          <li>
            <MainButton title="초등부" href="/school/elementary" />
          </li>
          <li>
            <MainButton title="중고등부" href="/school/middle_and_high" />
          </li>
        </ul>
      </MainIntroduction>
      <div className="bg-backdrop" />
    </section>
  );
}
