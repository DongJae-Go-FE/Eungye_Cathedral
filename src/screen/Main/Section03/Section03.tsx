import MainButton from "@/components/MainButton";
import MainIntroduction from "@/components/MainIntroduction";

export default async function Section03() {
  return (
    <section className="main-section bg-[url('/bg1.png')]">
      <MainIntroduction
        title="주일학교입니다."
        content={`은계성당 주일학교를 소개합니다.은계성당 주일학교를 소개합니다.은계성당 주일학교를 소개합니다.\n은계성당 주일학교를 소개합니다.`}
        titleBtnName="주일학교"
        titleBtnHref="/school"
      >
        <ul>
          <li>
            <MainButton title="메인" href="/" />
          </li>
          <li>
            <MainButton title="메인" href="/" />
          </li>
        </ul>
      </MainIntroduction>
    </section>
  );
}
