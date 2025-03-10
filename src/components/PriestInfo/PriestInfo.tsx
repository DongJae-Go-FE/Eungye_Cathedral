type PriestInfo = {
  title: string;
  name: string;
  christianName: string;
  period: {
    start: string;
    end: string;
  };
  feteDay: string;
  briefHistory: string[];
  scripture: string;
};

export default function PriestInfo({
  title,
  name,
  christianName,
  period,
  feteDay,
  briefHistory,
  scripture,
}: PriestInfo) {
  const scriptureStyle =
    "mobile:hidden desktop:block desktop:heading01b tablet:heading03b mobile:body01m desktop:pb-20 mt-2 whitespace-pre-line";

  return (
    <div className="flex h-full w-full flex-col">
      <h2 className="mobile:mb-[2dvh] desktop:heading02b mobile:heading03b">
        {title}
      </h2>
      <strong className="desktop:heading03b mobile:heading04b block">
        {name} {christianName}
      </strong>
      <p className="body01b">
        재임기간: {period.start} ~ {period.end}
      </p>
      <span className="desktop:mb-6 mobile:mb-[2dvh] block">
        축일: {feteDay}
      </span>
      <p className="desktop:heading04b desktop:mb-2 mobile:body01b mobile:mb-[1dvh] mobile:hidden desktop:block">
        약력
      </p>
      <ul className="mobile:hidden desktop:flex flex-col gap-y-0.5">
        {briefHistory.map((value, index) => {
          return <li key={index}>- {value}</li>;
        })}
      </ul>
      <p className={scriptureStyle}>{scripture}</p>
    </div>
  );
}
