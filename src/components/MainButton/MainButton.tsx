import Link from "next/link";

type MainButtonType = {
  href: URL | string;
  title: string;
};

export default function MainButton({ href, title }: MainButtonType) {
  const btnCommonStyle =
    "relative z-[1] flex h-12 w-[120px] items-center justify-center border border-gray-100 text-body01r text-white transition-[color] duration-300";

  const btnBeforeStyle =
    "before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-300 before:-z-[1]";

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
