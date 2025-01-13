import { InputHTMLAttributes, RefObject } from "react";

type InputSize = "sm" | "md" | "lg" | "xLg";

export interface InputType
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /**
   * @default "md"
   */
  size?: InputSize;
  ref?: RefObject<HTMLInputElement>;
}

export default function Input({ size = "md", ref, ...props }: InputType) {
  let sizeStyle;

  switch (size) {
    case "md": {
      sizeStyle = "h-10 w-full rounded-md border px-2 ";
      break;
    }
    case "sm": {
      sizeStyle = "h-10 w-full rounded-md border px-2 ";
      break;
    }
    case "lg": {
      sizeStyle = "h-10 w-full rounded-md border px-2 ";
      break;
    }
    case "xLg": {
      sizeStyle = "h-10 w-full rounded-md border px-2 ";
      break;
    }
  }

  const classList = [`${sizeStyle}`];

  return <input className={classList.join(" ")} ref={ref} {...props} />;
}
