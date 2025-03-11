import MainButton from "@/components/MainButton";
import MainIntroduction from "@/components/MainIntroduction";

export default async function Section03() {
  return (
    <section className="main-section main-bg bg-[url('/main/main04.jpg')]">
      <MainIntroduction
        title="은계성당 주보"
        content={`은계성당 주보를 안내하는 페이지입니다.\n아래 버튼을 누르면 소개 페이지로 이동합니다.`}
        titleBtnName="주보 안내"
        titleBtnHref="/parish-information/weeklys"
      >
        <ul>
          <li>
            <MainButton title="이동하기" href="/parish-information/weeklys" />
          </li>
        </ul>
      </MainIntroduction>
      <div className="bg-backdrop" />
    </section>
  );
}
