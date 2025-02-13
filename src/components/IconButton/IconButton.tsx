import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IconButtonType
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  size?: "xs" | "sm" | "md";
  icons?: ReactNode;
}

export default function IconButton({
  size = "md",
  icons,
  className,
  ...props
}: IconButtonType) {
  let sizeStyle = "";

  const classList = ["flex justify-center items-center", "cursor-pointer"];

  switch (size) {
    case "xs": {
      sizeStyle = "w-6 h-6 p-1";
      break;
    }
    case "sm": {
      sizeStyle = "w-8 h-8 p-1";
      break;
    }
    case "md": {
      sizeStyle = "w-10 h-10 p-2";
      break;
    }
  }

  if (className) {
    classList.push(className);
  }
  if (size) {
    classList.push(sizeStyle);
  }

  return (
    <button className={classList.join(" ")} {...props}>
      {icons ? icons : props.children}
    </button>
  );
}
