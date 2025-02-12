import SideBar from "@/components/SideBar";
import LayoutInfoTitle from "@/components/LayoutInfoTitle";

export default async function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
