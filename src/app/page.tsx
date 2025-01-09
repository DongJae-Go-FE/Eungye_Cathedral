import MainSlider from "@/components/MainSlider";
import Map from "@/components/Map/Map";
import MainButton from "@/components/MainButton";

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
      <div className="h-[100dvh] w-[100dvw] bg-yellow-100">
        초등부 주일학교 안내
      </div>
      <div className="h-[100dvh] w-[100dvw] bg-purple-100">
        중고등부 주일학교 안내
      </div>
      <div className="h-[100dvh] w-[100dvw] bg-green-100">청년부 안내</div>
      <div className="h-[100dvh] w-[100dvw] bg-gray-100">단체 안내</div>
      <div className="h-[100dvh] w-[100dvw] bg-orange-400">성당소식</div>
      <div className="h-[100dvh] w-[100dvw] bg-slate-300">공지사항 및 문의</div>
      <div className="h-[180px] w-[100dvw]">풋터</div>
    </div>
  );
}
