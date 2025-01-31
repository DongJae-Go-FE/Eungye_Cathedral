import Link from "next/link";

export default function TableCard() {
  return (
    <Link href="/">
      <div className="flex w-full flex-col gap-y-[15px] border-b border-gray-200">
        <div className="aspect-[9/10] max-h-[435px] w-full bg-gray-200"></div>
        <div className="flex w-full flex-col gap-y-3 px-6 pb-6">
          <h5 className="text-body01b truncate text-black">
            타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀
          </h5>
          <p className="text-body03m truncate text-gray-500">만든날짜</p>
        </div>
      </div>
    </Link>
  );
}
