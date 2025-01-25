import Map from "@/components/Map/Map";

export default async function Section02() {
  const leftBoxStyle =
    "mobile:w-full mobile:border-b mobile:border-[#d9d9d9] mobile:pb-[16dvw] tablet:w-full tablet:border-b tablet:border-[#d9d9d9] tablet:pb-[10dvw] desktop:flex-1 desktop:border-b-0 desktop:border-r desktop:border-[#d9d9d9] desktop:pr-[120px]";
  const rightBoxStyle =
    "mobile:w-full mobile:pt-[16dvw] tablet:w-full tablet:pt-[10dvw] desktop:flex-1 desktop:pl-[120px] desktop:pt-0";
  const aStyle = "text-body01m text-xl";
  const tableStyle =
    "w-full table-fixed border-b-[1px] border-t-[1px] border-gray-200 text-center";
  const tableTheadStyle =
    "h-14 border-b border-gray-200 bg-gray-100 py-2.5 text-heading04b";
  const tableContentStyle = "h-14 border-b border-gray-200 py-2.5";
  const tableContentLastStyle = "h-14 py-2.5";

  return (
    <div className="main-container min-h-[60dvh]">
      <h2>성당 및 미사안내</h2>
      <div className="flex h-[calc(100%-128px)] mobile:flex-wrap tablet:flex-wrap">
        <div className={leftBoxStyle}>
          <Map />
          <address className="mt-6 not-italic">
            <ul>
              <li className="mb-1">
                <strong className="text-heading03b">
                  주소 : 경기 시흥시 은계중앙로 17(우편번호 14922)
                </strong>
              </li>
              <li>
                <a href="tel:031-317-2021" className={aStyle}>
                  - Tel : 031-317-2021
                </a>
              </li>
              <li>
                <a href="tel:031-317-2021" className={aStyle}>
                  - Fax : 031-317-2021
                </a>
              </li>
            </ul>
          </address>
        </div>
        <div className={rightBoxStyle}>
          <table className={tableStyle}>
            <caption className="sr-only">은계성당 미사안내</caption>
            <colgroup>
              <col width="50%" />
              <col width="50%" />
            </colgroup>
            <thead>
              <tr>
                <th className={tableTheadStyle}>요일</th>
                <th className={tableTheadStyle}>미사시간</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className={tableContentStyle}>월요일</th>
                <td className={tableContentStyle}>오전 9시</td>
              </tr>
              <tr>
                <th className={tableContentStyle}>화요일</th>
                <td className={tableContentStyle}>오후 7시</td>
              </tr>
              <tr>
                <th className={tableContentStyle}>수요일</th>
                <td className={tableContentStyle}>오전 10시</td>
              </tr>
              <tr>
                <th className={tableContentStyle}>목요일</th>
                <td className={tableContentStyle}>오후 7시</td>
              </tr>
              <tr>
                <th className={tableContentStyle}>금요일</th>
                <td className={tableContentStyle}>오전 10시</td>
              </tr>
              <tr>
                <th className={tableContentStyle}>토요일</th>
                <td className={tableContentStyle}>
                  초등부 - 오후 4시 <br />
                  중고등부 - 오후 7시
                </td>
              </tr>
              <tr>
                <th className={tableContentLastStyle}>주일(일요일)</th>
                <td className={tableContentLastStyle}>
                  오전 9시
                  <br />
                  교중미사 - 오전 11시
                  <br />
                  청년미사 - 오후 6시
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
