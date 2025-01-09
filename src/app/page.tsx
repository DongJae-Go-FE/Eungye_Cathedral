import MainSlider from "@/components/MainSlider";
import Map from "@/components/Map/Map";
import IntroductionBox from "@/components/IntroductionBox";

export default async function Home() {
  return (
    <div className="w-[100dvw]">
      <main className="h-[100dvh] w-[100dvw] bg-red-300">
        <MainSlider />
      </main>
      <Map />
      <div className="h-[100dvh] w-[100dvw] bg-blue-100">미사 안내 및 문의
        <IntroductionBox 
        header ={"PERSBOL >"} 
        main ={"고즈넉한 매력의 새로운 암체어"} 
        sub = {<>
      심플하면서도 눈에 확 띄는 제품이며, 디자이너 Nike Karlsson은
      <br />
      "클래식한 디자인이라 친숙한 느낌이 들고, 따뜻한 느낌을 줍니다.
    </>}
    />
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
