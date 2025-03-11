import MainButton from "@/components/MainButton";
import MainIntroduction from "@/components/MainIntroduction";

export default async function Section05() {
  return (
    <section className="main-section main-bg bg-[url('/main/main06.jpg')]">
      <MainIntroduction
        title="은계성당 신부님"
        content={`은계성당의 역대 신부님들을 소개합니다.\n아래 버튼을 누르면 소개 페이지로 이동합니다.`}
        titleBtnName="사제 안내"
        titleBtnHref="/introduction/priest"
      >
        <ul>
          <li>
            <MainButton title="이동하기" href="/introduction/priest" />
          </li>
        </ul>
      </MainIntroduction>
      <div className="bg-backdrop" />
    </section>
  );
}
