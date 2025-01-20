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

  return (
    <div className="main-container">
      <h2>자주 묻는 질문</h2>
      <div className="flex h-[calc(100%-128px)] mobile:flex-wrap tablet:flex-wrap">
        <ul className="flex w-full flex-col">
          <li className={liStyle}>
            <label htmlFor="faq1" className={labelStyle}>
              <span className={labelTitleStyle}>테스트</span>
              <div className={iconContainerStyle}>
                <span className={iconXStyle} />
                <span className={iconYStyle} />
              </div>
            </label>
            <input type="radio" name="faq" id="faq1" defaultChecked hidden />
            <div className={contentContainerStyle}>
              <div className={contentStyle}>
                <div className={contentInnerStyle}>내용입니다1</div>
              </div>
            </div>
          </li>
          <li className={liStyle}>
            <label htmlFor="faq2" className={labelStyle}>
              <span className={labelTitleStyle}>테스트2</span>
              <div className={iconContainerStyle}>
                <span className={iconXStyle} />
                <span className={iconYStyle} />
              </div>
            </label>
            <input type="radio" name="faq" id="faq2" hidden />
            <div className={contentContainerStyle}>
              <div className={contentStyle}>
                <div className={contentStyle}>
                  <div className={contentInnerStyle}>내용입니다2</div>
                </div>
              </div>
            </div>
          </li>
          <li className={liStyle}>
            <label htmlFor="faq3" className={labelStyle}>
            <span className={labelTitleStyle}>테스트3</span>
              <div className={iconContainerStyle}>
                <span className={iconXStyle} />
                <span className={iconYStyle} />
              </div>
            </label>
            <input type="radio" name="faq" id="faq3" hidden />
            <div className={contentContainerStyle}>
              <div className={contentStyle}>
                <div className={contentStyle}>
                  <div className={contentInnerStyle}>내용입니다3</div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
