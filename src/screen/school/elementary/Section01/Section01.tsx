export default function Section01() {
  return (
    <section className="w-full">
      <div className="m-auto w-full max-w-[1280px] px-10 pt-[168px] pb-20">
        <h2 className="overflow-hidden text-7xl leading-[90px] font-black tracking-[2]">
          <div className="animate-bottomUp opacity-0">
            안녕하세요! <br />
            은계성당 초등부입니다.
          </div>
        </h2>
        <p className="animate-fadeIn text-[20px] leading-[30px] opacity-0">
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
