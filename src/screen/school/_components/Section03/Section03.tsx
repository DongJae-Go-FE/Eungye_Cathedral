import SchoolCard01 from "@/components/SchoolCard/SchoolCard01";
import SchoolCard02 from "@/components/SchoolCard/SchoolCard02";
import SchoolCard03 from "@/components/SchoolCard/SchoolCard03";
import SchoolCard04 from "@/components/SchoolCard/SchoolCard04";

import SchoolButton from "@/components/SchoolButton";

type cardType = {
  one: {
    title: string;
    contentTitle: string;
    contentInfo: string;
    bgImg: string;
  };
  two: {
    title: string;
    contentTitle: string;
    contentInfo: string;
    bgImg: string;
  };
  three: {
    title: string;
    contentTitle: string;
    contentInfo: string;
    bgImg: string;
  };
  four: {
    title: string;
    contentTitle: string;
    contentInfo: string;
    bgImg: string;
  };
};

type SectionThreeType = {
  title: string;
  card: cardType;
  btnTitle: string;
  btnHref: string;
};

export default function Section03({
  title,
  card,
  btnHref,
  btnTitle,
}: SectionThreeType) {
  const h2Style =
    "desktop:text-5xl desktop:leading-[60px] tablet:text-4xl tablet:leading-[44px] mobile:text-2xl mobile:leading-8 mb-0 font-black tracking-[2]";

  return (
    <section className="m-auto w-full max-w-[1280px] px-[3dvw]">
      <div className="mobile:pb-10 desktop:pb-20 m-auto w-full">
        <h2 className={h2Style}>{title}</h2>
      </div>
      <div className="mobile:gap-y-4 tablet:justify-between desktop:flex-col mobile:grid tablet:flex w-full">
        <div className="mobile:gap-x-4 tablet:max-w-[calc(50%-26px)] desktop:w-full tablet:flex-col desktop:flex-row desktop:max-w-full flex w-full items-end">
          <SchoolCard01
            title={card.one.title}
            contentTitle={card.one.contentTitle}
            contentInfo={card.one.contentInfo}
            bgImg={card.one.bgImg}
          />
          <SchoolCard02
            title={card.two.title}
            contentTitle={card.two.contentTitle}
            contentInfo={card.two.contentInfo}
            bgImg={card.two.bgImg}
          />
        </div>
        <div className="mobile:gap-x-4 tablet:max-w-[calc(50%-26px)] desktop:w-full tablet:flex-col desktop:flex-row desktop:max-w-full flex w-full items-end">
          <SchoolCard03
            title={card.three.title}
            contentTitle={card.three.contentTitle}
            contentInfo={card.three.contentInfo}
            bgImg={card.three.bgImg}
          />
          <SchoolCard04
            title={card.four.title}
            contentTitle={card.four.contentTitle}
            contentInfo={card.four.contentInfo}
            bgImg={card.four.bgImg}
          />
        </div>
      </div>
      <div className="desktop:pb-[200px] tablet:pb-[150px] mobile:pb-[100px] flex w-full justify-center pt-20">
        <SchoolButton href={btnHref}>{btnTitle}</SchoolButton>
      </div>
    </section>
  );
}
