"use client";

import { usePathname } from "next/navigation";

export default function LayoutInfoTitle() {
  
  const pathName = usePathname();

  const pathTitleArr: { [key: string]: string } = {
    news: "성당소식",
    notices: "공지사항",
    weeklys: "주보",
    admission: "입교",
    organization: "단체",
    "youth-group": "청년부",
    elementary: "초등부",
    "middle_and_high": "중고등부",
  };

  const renderPathName = (): string | null => {
    for (const key in pathTitleArr) {
      if (pathName.includes(key)) {
        return pathTitleArr[key];
      }
    }
    return null; 
  };

  return <h2 className="text-white">{renderPathName()}</h2>;
}