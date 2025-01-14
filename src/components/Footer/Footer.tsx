import Link from "next/link"

export default function Footer() {
  return (
    <div className="w-[100dvw]-[45px] pt-[30px] flex justify-between h-48 bg-[#000]">
      <div className="w-[75dvw] flex flex-col gap-3 pl-[60px]">
        <div className="text-[28px] font-normal text-white">
          FURNITURE
        </div>
        <div className="text-[13px] leading-[18px] text-[#DDD] whitespace-pre-wrap">
          {`서울특별시 우자 산업단지 유튜브 99, 울트라사옥  대표이사: 홍길동\n사업자등록번호 : 123-45-67890 / 통신판매업신고 : 9999-12345호\n이메일: madia_madia@naver.com`}
        </div>
      </div>
      <div className="w-[25dvw] bg-[#000] flex flex-col gap-6">
        <div>
          <div className="text-white text-[24px] font-bold mb-2">1588-1234</div>
          <div className="text-[#DDD] text-[13px] font-medium mb-2">오전 9시 ~ 오후 6시(토요일, 공휴일 휴무)</div>
          <div className="flex gap-[20px] text-[#DDD] mb-2">
            <Link href="" className="underline decoration-1 ">1:1문의하기</Link>
            <Link href="" className="underline decoration-1 ">자주 묻는 질문</Link>
          </div>
        </div>
        <div className="text-[13px] font-normal text-[#DDD]">
          Copyright ⓒ MADIA  DESIGNER ALL RIGHTS RESERVED.
        </div>
      </div>
    </div>
  )
}