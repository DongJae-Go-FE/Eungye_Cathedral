export default function SchoolCard04() {
  return (
    <div className="group tablet:mt-0 desktop:mt-[200px] desktop:max-w-[calc(57%-26px)] tablet:text-right desktop:gap-y-8 tablet:gap-y-4 mobile:gap-y-2 relative flex w-full flex-col">
      <div className="mobile:aspect-square desktop:aspect-[634/412] tablet:aspect-[466/300] relative overflow-hidden rounded-[20px]">
        <div className="mobile:gap-y-1 absolute top-0 left-0 h-full w-full scale-100 rounded-[20px] bg-[url('/bg4.png')] bg-cover object-contain object-center transition-all duration-[400ms] group-hover:scale-125 group-hover:opacity-80 group-hover:blur-[22px]" />
        <div className="mobile:school-card-mobile-center tablet:w-auto tablet:h-auto tablet:justify-start tablet:right-8 tablet:bottom-16 tablet:items-end desktop:gap-y-4 tablet:gap-y-2 absolute flex flex-col text-white opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100">
          <h6 className="desktop:text-2xl tablet:text-[16px] font-black tracking-widest">
            제목4입니다.
          </h6>
          <p className="desktop:text-[18px] tablet:text-[14px] mobile:text-[12px] w-3/4 whitespace-pre-wrap">
            내용입니다 내용입니다 내용입니다 내용입니다 내용입니다 내용입니다.
            내용내용내용내용내용내용내용내용내용내용
          </p>
        </div>
      </div>
      <h5 className="tablet:text-right desktop:text-2xl tablet:text-[16px] font-bold text-black transition-colors duration-[400ms] group-hover:text-blue-700">
        우리의 활동4입니다.
      </h5>
    </div>
  );
}
