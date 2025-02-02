type PriestInfo = {
  title: string;
  name: string;
  christianName: string;
  feteDay: string;
  briefHistory: string[];
  scripture: string;
};

export default function PriestInfo({
  title,
  name,
  christianName,
  feteDay,
  briefHistory,
  scripture,
}: PriestInfo) {
  const scriptureStyle =
    "mobile:hidden desktop:block desktop:text-heading01b tablet:text-heading03b mobile:text-body01m desktop:pb-20 mt-2 whitespace-pre-line";

  return (
    <div className="flex h-full w-full flex-col">
      <h2 className="mobile:mb-[2dvh] desktop:text-heading02b mobile:text-heading03b">
        {title}
      </h2>
      <strong className="desktop:text-heading03b mobile:text-heading04b block">
        {name} {christianName}
      </strong>
      <span className="desktop:mb-6 mobile:mb-[2dvh] block">
        축일: {feteDay}
      </span>
      <p className="desktop:text-heading04b desktop:mb-2 mobile:text-body01b mobile:mb-[1dvh] mobile:hidden desktop:block">
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
