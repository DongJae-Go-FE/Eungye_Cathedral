import Link from "next/link";

export default async function Section07() {
  return (
    <div className="main-container mobile:min-h-[60dvh]">
      <h2>
        공지사항
        <Link href="/" className="flex items-center gap-x-2">
          전체 보기
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.0632 7.99982C25.1677 8.00126 26.062 8.89786 26.0605 10.0024L26.0239 38.0024C26.0225 39.107 25.1259 40.0012 24.0213 39.9998C22.9167 39.9983 22.0225 39.1017 22.0239 37.9972L22.0605 9.9972C22.062 8.89263 22.9586 7.99837 24.0632 7.99982Z"
              fill="#111"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 24.0002C8 22.8956 8.89543 22.0002 10 22.0002H38C39.1046 22.0002 40 22.8956 40 24.0002C40 25.1048 39.1046 26.0002 38 26.0002H10C8.89543 26.0002 8 25.1048 8 24.0002Z"
              fill="#111"
            />
          </svg>
        </Link>
      </h2>
      <div className="h-[calc(100%-128px)]">
        <ul className="flex w-full flex-col border-t border-black">
          <li className="flex w-full justify-between border-b border-[#e6e6e6] py-7 mobile:flex-col mobile:gap-y-3 tablet:flex-row tablet:items-center">
            <Link
              href="/"
              className="w-4/5 truncate text-body01r text-black underline-offset-4 hover:underline mobile:!text-[5vw] tablet:!text-lg"
              title=""
            >
              제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목
              제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목
              제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목
              제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목
              제목 제목
            </Link>
            <p className="text-body02r text-gray-500 mobile:text-[3vw] tablet:!text-base">
              날짜
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
