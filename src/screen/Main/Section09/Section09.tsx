export default async function Section09() {
  const liStyle = "group w-full overflow-hidden";
  const labelBeforeStyle =
    "before:absolute before:bottom-0 before:h-[2px] before:w-0 before:bg-black before:content-[''] before:transition-[width] before:duration-[500ms] group-has-[:checked]:before:w-full";
  const labelStyle = `cursor-pointer flex items-center justify-between relative ${labelBeforeStyle}`;
  const contentContainerStyle =
    "grid grid-rows-[0fr] overflow-hidden transition-[grid-template-rows] group-has-[:checked]:grid-rows-[1fr]";
  const contentStyle = "overflow-hidden px-8";

  const iconContainerStyle = "relative h-5 w-5";
  const iconXStyle = "position-center block h-1 w-5 bg-black";
  const iconYStyle =
    "position-center block h-5 w-1 rotate-180 bg-black transition-transform duration-[300ms] group-has-[:checked]:rotate-90";

  return (
    <div className="main-container">
      <h2>자주 묻는 질문</h2>
      <div className="flex h-[calc(100%-128px)] mobile:flex-wrap tablet:flex-wrap">
        <ul className="flex w-full flex-col">
          <li className={liStyle}>
            <label htmlFor="faq1" className={labelStyle}>
              테스트
              <div className={iconContainerStyle}>
                <span className={iconXStyle} />
                <span className={iconYStyle} />
              </div>
            </label>
            <input type="radio" name="faq" id="faq1" defaultChecked hidden />
            <div className={contentContainerStyle}>
              <div className={contentStyle}>내용입니다1</div>
            </div>
          </li>
          <li className={liStyle}>
            <label htmlFor="faq2" className={labelStyle}>
              테스트2
              <div className={iconContainerStyle}>
                <span className={iconXStyle} />
                <span className={iconYStyle} />
              </div>
            </label>
            <input type="radio" name="faq" id="faq2" hidden />
            <div className={contentContainerStyle}>
              <div className={contentStyle}>내용입니다2</div>
            </div>
          </li>
          <li className={liStyle}>
            <label htmlFor="faq3" className={labelStyle}>
              테스트3
              <div className={iconContainerStyle}>
                <span className={iconXStyle} />
                <span className={iconYStyle} />
              </div>
            </label>
            <input type="radio" name="faq" id="faq3" hidden />
            <div className={contentContainerStyle}>
              <div className={contentStyle}>내용입니다3</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
