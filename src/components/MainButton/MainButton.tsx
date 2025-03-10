import Link from "next/link";

type MainButtonType = {
  href: URL | string;
  title: string;
};

export default async function MainButton({ href, title }: MainButtonType) {
  const btnCommonStyle =
    "relative z-1 flex h-12 desktop:w-[120px] tablet:w-full mobile:w-full items-center justify-center border border-gray-100 body01r text-white transition-[color] duration-300";

  const btnBeforeStyle =
    "before:content-[''] before:absolute desktop:before:left-0 before:top-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-300 before:-z-1 tablet:left-1/2 mobile:left-1/2 tablet:-translate-x-1/2 mobile:-translate-x-1/2";

  const btnHoverStyle = "hover:before:w-full hover:text-black";

  return (
    <Link
      href={href}
      className={`${btnCommonStyle} ${btnBeforeStyle} ${btnHoverStyle}`}
    >
      {title}
    </Link>
  );
}
