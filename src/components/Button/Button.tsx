import Link from "next/link";
import { FC, ButtonHTMLAttributes } from "react";

import type { UrlObject } from "url";

type Url = string | UrlObject;
type BtnSize = "xs" | "sm" | "md" | "lg" | "xlg";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  color?: "black" | "white" | "blue" | "transparent";
  href?: Url | string;
  size?: BtnSize;
}

const Button: FC<ButtonProps> = ({
  children,
  href,
  className,
  color = "black",
  size = "md",
  ...props
}) => {
  const btnStyle =
    "inline-flex items-center rounded whitespace-nowrap border disabled:bg-gray-300";

  const classList = [btnStyle];

  let colorStyle;
  let sizeStyle;

  switch (color) {
    case "black": {
      colorStyle = "bg-black text-white";
      break;
    }
    case "white": {
      colorStyle = "bg-white text-black";
      break;
    }
    case "blue": {
      colorStyle = "bg-blue-700 text-white";
      break;
    }
    case "transparent": {
      colorStyle = "bg-transparent text-white btn-hover relative overflow-hidden px-6 py-3 text-lg font-bold text-white bg-blue-500 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200";
      break;
    }
  }

  switch (size) {
    case "xs": {
      sizeStyle = "h-6 px-2 text-body03r";
      break;
    }
    case "sm": {
      sizeStyle = "h-8 px-4 text-body02m";
      break;
    }
    case "md": {
      sizeStyle = "h-10 px-6 text-body02m";
      break;
    }
    case "lg": {
      sizeStyle = "h-12 px-8 text-body01m";
      break;
    }
    case "xlg": {
      sizeStyle = "h-14 px-10 text-body01b";
      break;
    }
  }

  if (className) {
    classList.push(className);
  }

  if (color) {
    classList.push(colorStyle);
  }

  if (size) {
    classList.push(sizeStyle);
  }


  const buttonStyles = `
  .btn-hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: orange;
    z-index: 0;
    transition: width 0.5s ease-in-out;
  }

  .btn-hover:hover::before {
    width: 100%;
  }
`;

  if (href) {
    return (
      <Link className={classList.join(" ")} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <>
    <style>{buttonStyles}</style>
    <button className={classList.join(" ")} {...props}>
      <div className="relative z-10">{children}</div>
    </button>
    </>
    
  );
};

export default Button;
