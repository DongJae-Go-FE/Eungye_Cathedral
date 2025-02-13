export default async function Page() {
  return (
    <div className="sub-container">
      <section className="w-full">
        <div className="m-auto w-full max-w-[1280px] px-10 pt-[168px] pb-20">
          <h2 className="text-7xl leading-[90px] font-black tracking-[2]">
            안녕하세요! <br />
            은계성당 초등부입니다.
          </h2>
          <p className="text-[20px] leading-[30px]">
            우리는 은계성당입니다.우리는 은계성당입니다.우리는
            은계성당입니다.우리는 은계성당입니다.우리는 은계성당입니다.우리는
            은계성당입니다.우리는 은계성당입니다.우리는 은계성당입니다.우리는
            은계성당입니다.우리는 은계성당입니다.우리는 은계성당입니다.우리는
            은계성당입니다.우리는 은계성당입니다.
          </p>
        </div>

        <div className="m-auto h-[600px] w-full max-w-[1280px] rounded-2xl bg-gray-300"></div>
      </section>

      <section>
        <div className="m-auto w-full max-w-[1280px] pt-[168px] pb-20">
          <h2 className="text-5xl leading-[60px] font-black tracking-[2]">
            초등부 <br />
            활동을 소개합니다.
          </h2>
        </div>
      </section>

      <section className="flex flex-col justify-center pt-[200px] pb-40 text-center">
        <h3 className="mb-6 text-4xl leading-[60px] font-black tracking-[2]">
          초등부는 언제든지 환영합니다.
        </h3>
        <p className="mb-8 text-body01m">우리와 함께해요</p>
        <button>버튼</button>
      </section>
    </div>
  );
}
