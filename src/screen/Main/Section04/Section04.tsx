import MainButton from "@/components/MainButton";
import MainIntroduction from "@/components/MainIntroduction";

export default async function Section04() {
  return (
    <section className="main-section main-bg bg-[url('/bg2.png')]">
      <MainIntroduction
        title="은계성당 본당 소개"
        content={`은계성당을 소개하는 페이지입니다.\n아래 버튼을 누르면 소개 페이지로 이동합니다.`}
        titleBtnName="본당 소개"
        titleBtnHref="/introduction/nave"
      >
        <ul>
          <li>
            <MainButton title="이동하기" href="/introduction/nave" />
          </li>
        </ul>
      </MainIntroduction>
      <div className="bg-backdrop" />
    </section>
  );
}
