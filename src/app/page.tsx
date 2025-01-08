import MainSlider from "@/components/MainSlider";

export default async function Home() {
  return (
    <div className="w-[100dvw]">
      <main className="h-[100dvh] w-[100dvw] bg-red-300">
        <MainSlider />
      </main>
      <div className="h-[100dvh] w-[100dvw] bg-blue-100">미사 안내 및 문의</div>
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
