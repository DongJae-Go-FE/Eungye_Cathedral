import { SchoolCardType } from "@/type";

export default function SchoolCard02({
  title,
  contentInfo,
  contentTitle,
  bgImg = "/bg2.png",
}: SchoolCardType) {
  const cardContainer =
    "group desktop:max-w-[calc(43%-40px)] tablet:max-w[calc(43%-40px)] mobile:text-left desktop:gap-y-8 desktop:text-right tablet:gap-y-4 mobile:gap-y-2 tablet:mb-[120px] desktop:mb-0 relative flex w-full flex-col";

  const cardImg =
    "mobile:gap-y-1 absolute top-0 left-0 h-full w-full scale-100 rounded-[20px] bg-cover object-contain object-center transition-all duration-[400ms] group-hover:scale-125 group-hover:opacity-80 group-hover:blur-[22px]";

  const cardContent =
    "mobile:school-card-mobile-center tablet:w-auto tablet:h-auto tablet:justify-start de desktop:right-8 tablet:right-auto tablet:left-8 tablet:bottom-16 desktop:items-end tablet:items-start desktop:gap-y-4 tablet:gap-y-2 absolute flex flex-col text-white opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100";

  return (
    <div className={cardContainer}>
      <div className="mobile:aspect-square desktop:aspect-[486/555] tablet:aspect-[486/502] relative overflow-hidden rounded-[20px]">
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
      <h5 className="desktop:text-right desktop:text-2xl tablet:text-[18px] font-bold text-black transition-colors duration-[400ms] group-hover:text-blue-700">
        {title}
      </h5>
    </div>
  );
}
