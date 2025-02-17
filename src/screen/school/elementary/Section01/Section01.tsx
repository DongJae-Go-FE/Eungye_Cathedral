export default function Section01() {
  return (
    <section className="mobile:px-[3dvw] desktop:px-0 w-full">
      <div className="desktop:px-10 desktop:pt-[168px] tablet:pt-32 desktop:pb-20 tablet:pb-14 mobile:pt-[60px] mobile:pb-10 m-auto w-full max-w-[1280px]">
        <h2 className="desktop:text-7xl desktop:leading-[90px] tablet:text-5xl tablet:leading-[62px] mobile:text-2xl mobile:leading-8 mobile:mb-5 tablet:mb-8 desktop:mb-10 overflow-hidden font-black tracking-[2]">
          <div className="animate-bottomUp opacity-0">
            안녕하세요! <br />
            은계성당 초등부입니다.
          </div>
        </h2>
        <p className="animate-fadeIn tablet:text-[16px] mobile:text-[14px] tablet:leading-6 desktop:text-[20px] desktop:leading-[30px] opacity-0">
          우리는 은계성당입니다.우리는 은계성당입니다.우리는
          은계성당입니다.우리는 은계성당입니다.우리는 은계성당입니다.우리는
          은계성당입니다.우리는 은계성당입니다.우리는 은계성당입니다.우리는
          은계성당입니다.우리는 은계성당입니다.우리는 은계성당입니다.우리는
          은계성당입니다.우리는 은계성당입니다.
        </p>
      </div>

      <div className="relative m-auto h-[600px] w-full max-w-[1280px] overflow-hidden rounded-2xl bg-[url('/bg1.png')] bg-cover bg-fixed bg-center">
        <div className="animate-bottomUp2 absolute top-0 left-0 z-10 h-[600px] w-full bg-gray-100"></div>
      </div>
    </section>
  );
}
