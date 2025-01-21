export default async function Section09() {
  const liStyle = "group w-full overflow-hidden";
  const labelBeforeStyle =
    "before:absolute h-20 before:-bottom-[1px] before:h-[2px] before:w-0 before:bg-black before:content-[''] before:transition-[width] before:duration-[500ms] group-has-[:checked]:before:w-full";
  const labelStyle = `cursor-pointer flex items-center justify-between relative text-heading03b border-b border-b-gray-400 ${labelBeforeStyle}`;
  const labelTitleStyle = "w-3/4 inline-block truncate";

  const contentContainerStyle =
    "grid grid-rows-[0fr] overflow-hidden transition-[grid-template-rows] group-has-[:checked]:grid-rows-[1fr]";
  const contentStyle = "overflow-hidden";
  const contentInnerStyle = "px-4 py-8";

  const iconContainerStyle = "relative h-5 w-5";
  const iconXStyle = "position-center block h-1 w-5 bg-black";
  const iconYStyle =
    "position-center block h-5 w-1 rotate-180 bg-black transition-transform duration-[300ms] group-has-[:checked]:rotate-90";

  const faqData = [
    { id: "faq1", title: "테스트1", content: "내용입니다1" },
    { id: "faq2", title: "테스트2", content: "내용입니다2" },
    { id: "faq3", title: "테스트3", content: "내용입니다3" },
    { id: "faq4", title: "테스트4", content: "내용입니다4" },
    { id: "faq5", title: "테스트5", content: "내용입니다5" },
  ];

  return (
    <div className="main-container min-h-[60dvh]">
      <h2>자주 묻는 질문</h2>
      <div className="flex h-[calc(100%-128px)] mobile:flex-wrap tablet:flex-wrap">
        <ul className="flex w-full flex-col">
          {faqData.map(({ id, title, content }, index) => {
            return (
              <li key={id} className={liStyle}>
                <label htmlFor={id} className={labelStyle}>
                  <span className={labelTitleStyle}>{title}</span>
                  <div className={iconContainerStyle}>
                    <span className={iconXStyle} />
                    <span className={iconYStyle} />
                  </div>
                </label>
                <input
                  type="radio"
                  name="faq"
                  id={id}
                  defaultChecked={index === 0}
                  hidden
                />
                <div className={contentContainerStyle}>
                  <div className={contentStyle}>
                    <div className={contentInnerStyle}>{content}</div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
