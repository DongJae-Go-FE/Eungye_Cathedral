import MainSlider from "@/components/MainSlider";
import Map from "@/components/Map/Map";
import MainButton from "@/components/MainButton";
import MainIntroduction from "@/components/MainIntroduction";
import Footer from "@/components/Footer";
export default async function Home() {
  return (
    <div className="w-[100dvw]">
      <main className="h-[100dvh] w-[100dvw] bg-red-300">
        <MainSlider />
      </main>
      <div className="h-[100dvh] w-[100dvw] bg-gray-800">
        <h2>성당 및 미사안내</h2>
        <div className="flex h-[calc(100%-48px)]">
          <div className="flex-1">
            <p>주소: 경기 시흥시 은계중앙로 17(우편번호 14922)</p>
            <p>Tel : 031-317-2021</p>
            <p>Fax : 031-317-2021</p>
            <Map />
          </div>
          <div className="flex-1">
            <table className="table-fixed">
              <caption className="sr-only">은계성당 미사안내</caption>
              <colgroup>
                <col width="50%" />
                <col width="50%" />
              </colgroup>
              <thead>
                <tr>
                  <th>요일</th>
                  <th>미사시간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>월요일</th>
                  <td>오전 9시</td>
                </tr>
                <tr>
                  <th>화요일</th>
                  <td>오후 7시</td>
                </tr>
                <tr>
                  <th>수요일</th>
                  <td>오전 10시</td>
                </tr>
                <tr>
                  <th>목요일</th>
                  <td>오후 7시</td>
                </tr>
                <tr>
                  <th>금요일</th>
                  <td>오전 10시</td>
                </tr>
                <tr>
                  <th>토요일</th>
                  <td>
                    초등부 - 오후 4시 <br />
                    중고등부 - 오후 7시
                  </td>
                </tr>
                <tr>
                  <th>주일(일요일)</th>
                  <td>
                    오전 9시
                    <br />
                    교중미사 - 오전 11시
                    <br />
                    청년미사 - 오후 6시
                  </td>
                </tr>
              </tbody>
            </table>
            <MainButton title="메인" href="/" />
          </div>
        </div>
      </div>
      <section className="main-section bg-[url('/bg1.png')]">
        <MainIntroduction
          title="주일학교입니다."
          content={`은계성당 주일학교를 소개합니다.은계성당 주일학교를 소개합니다.은계성당 주일학교를 소개합니다.\n은계성당 주일학교를 소개합니다.`}
          titleBtnName="주일학교"
          titleBtnHref="/school"
        >
          <ul className="flex mobile:flex-col mobile:gap-y-2 tablet:flex-col tablet:gap-y-2 desktop:flex-row desktop:gap-x-4">
            <li className="mobile:w-full tablet:w-full desktop:w-auto">
              <MainButton title="메인" href="/" />
            </li>
            <li className="mobile:w-full tablet:w-full desktop:w-auto">
              <MainButton title="메인" href="/" />
            </li>
          </ul>
        </MainIntroduction>
      </section>
      <section className="main-section bg-[url('/bg2.png')]">
        <MainIntroduction
          title="주일학교입니다."
          content="은계성당 주일학교를 소개합니다."
          titleBtnName="주일학교"
          titleBtnHref="/school"
        >
          <ul className="flex gap-x-4">
            <li>
              <MainButton title="메인" href="/" />
            </li>
            <li>
              <MainButton title="메인" href="/" />
            </li>
          </ul>
        </MainIntroduction>
      </section>
      <section className="main-section bg-[url('/bg3.png')]">
        <MainIntroduction
          title="주일학교입니다."
          content="은계성당 주일학교를 소개합니다."
          titleBtnName="주일학교"
          titleBtnHref="/school"
        >
          <ul className="flex gap-x-4">
            <li>
              <MainButton title="메인" href="/" />
            </li>
            <li>
              <MainButton title="메인" href="/" />
            </li>
          </ul>
        </MainIntroduction>
      </section>
      <section className="main-section bg-[url('/bg4.png')]">
        <MainIntroduction
          title="주일학교입니다."
          content="은계성당 주일학교를 소개합니다."
          titleBtnName="주일학교"
          titleBtnHref="/school"
        >
          <ul className="flex gap-x-4">
            <li>
              <MainButton title="메인" href="/" />
            </li>
            <li>
              <MainButton title="메인" href="/" />
            </li>
          </ul>
        </MainIntroduction>
      </section>
      <div className="h-[100dvh] w-[100dvw] bg-orange-400">성당소식</div>
      <div className="h-[100dvh] w-[100dvw] bg-slate-300">공지사항 및 문의</div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
