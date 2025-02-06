import SideBar from "@/components/SideBar";
import LayoutInfoTitle from "@/components/LayoutInfoTitle";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="sub-container">
      <div className="title-area">
        <LayoutInfoTitle />
      </div>
      <div className="desktop:min-h-[calc(100dvh-595px)] tablet:min-h-[calc(100dvh-510px)] mobile:min-h-[calc(100dvh-575px)] flex">
        <SideBar />
        <div className="content-area">{children}</div>
      </div>
    </div>
  );
}
