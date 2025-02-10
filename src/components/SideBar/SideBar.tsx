"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export default function SideBar() {
  const pathName = usePathname();

  const h3Style =
    "text-heading04b h-[96px] w-full pt-10 pb-[26px] pl-8 text-black";
  const navStyle = "w-full";

  const sections = [
    {
      key: "parish-information",
      title: "본당안내",
      list: [
        { title: "공지사항", href: "/parish-information/notices" },
        { title: "본당소식", href: "/parish-information/news" },
        { title: "주보", href: "/parish-information/weeklys" },
      ],
    },
    {
      key: "religious-life",
      title: "신앙생활",
      list: [
        { title: "입교 안내", href: "/religious-life/admission" },
        { title: "단체 안내", href: "/religious-life/organization" },
        { title: "청년부", href: "/religious-life/youth-group" },
      ],
    },
    {
      key: "school",
      title: "주일학교",
      list: [
        { title: "초등부", href: "/school/elementary" },
        { title: "중고등부", href: "/school/middle_and_high" },
      ],
    },
  ];

  const renderSideBar = () => {
    const currentSection = sections.find((section) =>
      pathName.includes(section.key),
    );
    if (!currentSection) return null;

    return (
      <Fragment>
        <h3 className={h3Style}>{currentSection.title}</h3>
        <nav className={navStyle}>
          <ul className="flex w-full flex-col">
            {currentSection.list.map(({ title, href }, index) => (
              <li key={index} className="h-12">
                <Link
                  href={href}
                  className={`block h-full w-full px-8 py-3 ${
                    pathName.includes(href)
                      ? "text-body01b text-black"
                      : "text-body01m text-gray-600"
                  }`}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Fragment>
    );
  };

  return (
    <aside className="mobile:hidden desktop:block w-[240px] border-r border-gray-200 bg-white">
      <div className="sticky top-[64px] w-full">{renderSideBar()}</div>
    </aside>
  );
}
