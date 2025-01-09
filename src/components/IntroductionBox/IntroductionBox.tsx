
import Button from "../Button";

interface introduction{
  header : string;
  main : string;
  sub : string;
}

export default function IntroductionBox({header,main,sub}: introduction) {
  return (
    <div className="flex flex-col justify-around h-[253px]">
      <div className="text-white text-[20px] font-[400] h-6">{header}</div>
      <div className="text-white text-[56px] font-[500] h-[70px]">{main}</div>
      <div className="text-white text-[18px] font-[400] h-[52px]">{sub}</div>
      <div className="flex gap-3">
        <Button color="transparent">
          상품보기
        </Button>
        <Button color="transparent">
          컬렉션 보기
        </Button>
      </div>
    </div>
  )
}