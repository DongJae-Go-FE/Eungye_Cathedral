import { SchoolCardType } from "@/type";

export default function SchoolCard03({
  title,
  contentInfo,
  contentTitle,
  bgImg = "/bg3.png",
}: SchoolCardType) {
  const cardContainer =
    "group tablet:max-w-full tablet:mb-[120px] desktop:mb-auto tablet:mt-[120px] desktop:max-w-[calc(43%-40px)] desktop:mt-0 desktop:mr-20 mobile:gap-y-2 desktop:gap-y-8 tablet:gap-y-4 desktop:text-left tablet:text-right relative flex w-full flex-col";

  const cardImg =
    "mobile:gap-y-1 absolute top-0 left-0 h-full w-full scale-100 rounded-[20px] bg-cover object-contain object-center transition-all duration-[400ms] group-hover:scale-125 group-hover:opacity-80 group-hover:blur-[22px]";

  const cardContent =
    "mobile:school-card-mobile-center tablet:w-auto tablet:h-auto tablet:justify-start desktop:items-start tablet:items-end tablet:bottom-16 tablet:left-auto tablet:right-8 desktop:left-8 desktop:gap-y-4 tablet:gap-y-2 absolute flex flex-col text-white opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100";

  return (
    <div className={cardContainer}>
      <div className="mobile:aspect-square tablet:aspect-[486/502] relative overflow-hidden rounded-[20px]">
        <div
          className={cardImg}
          style={{ backgroundImage: `url('${bgImg}')` }}
        />
        <div className={cardContent}>
          <h6 className="desktop:text-2xl tablet:text-[16px] font-black tracking-widest">
            {contentTitle}
          </h6>
          <p className="desktop:text-[18px] tablet:text-[14px] mobile:text-[12px] w-3/4 whitespace-pre-wrap">
            {contentInfo}
          </p>
        </div>
      </div>
      <h5 className="tablet:text-[18px] tablet:text-right desktop:text-left desktop:text-2xl font-bold text-black transition-colors duration-[400ms] group-hover:text-blue-700">
        {title}
      </h5>
    </div>
  );
}
