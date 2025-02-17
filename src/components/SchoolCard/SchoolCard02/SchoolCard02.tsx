export default function SchoolCard02() {
  return (
    <div className="group tablet:max-w-[calc(43%-40px)] mobile:text-left desktop:text-right relative flex w-full flex-col gap-y-8">
      <div className="mobile:aspect-square tablet:aspect-[486/555] relative overflow-hidden rounded-[20px]">
        <div className="absolute top-0 left-0 h-full w-full scale-100 rounded-[20px] bg-[url('/bg2.png')] bg-cover object-contain object-center transition-all duration-[400ms] group-hover:scale-125 group-hover:opacity-80 group-hover:blur-[22px]" />
        <div className="mobile:school-card-mobile-center desktop:w-auto desktop:h-auto desktop:justify-start desktop:right-8 desktop:bottom-16 desktop:items-end absolute flex flex-col gap-y-4 text-white opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100">
          <h6 className="text-2xl font-black tracking-widest">제목2입니다.</h6>
          <p className="w-3/4 text-[18px] whitespace-pre-wrap">
            내용입니다 내용입니다 내용입니다 내용입니다 내용입니다 내용입니다.
            내용내용내용내용내용내용내용내용내용내용
          </p>
        </div>
      </div>
      <h5 className="tablet:text-right text-2xl font-bold text-black transition-colors duration-[400ms] group-hover:text-blue-700">
        우리의 활동2입니다.
      </h5>
    </div>
  );
}
