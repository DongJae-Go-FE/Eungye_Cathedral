export default function SchoolCard04() {
  return (
    <div className="group relative mt-[200px] flex w-full max-w-[calc(57%-40px)] flex-col gap-y-8 text-right">
      <div className="relative aspect-[634/412] overflow-hidden rounded-[20px]">
        <div className="absolute top-0 left-0 h-full w-full scale-100 rounded-[20px] bg-[url('/bg4.png')] bg-cover object-contain object-center transition-all duration-[400ms] group-hover:scale-125 group-hover:opacity-80 group-hover:blur-[22px]" />
        <div className="absolute right-8 bottom-16 flex flex-col items-end gap-y-4 text-white opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100">
          <h6 className="text-2xl font-black tracking-widest">제목4입니다.</h6>
          <p className="w-3/4 text-[18px] whitespace-pre-wrap">
            내용입니다 내용입니다 내용입니다 내용입니다 내용입니다 내용입니다.
            내용내용내용내용내용내용내용내용내용내용
          </p>
        </div>
      </div>
      <h5 className="text-2xl font-bold text-black transition-colors duration-[400ms] group-hover:text-blue-700">
        우리의 활동4입니다.
      </h5>
    </div>
  );
}
