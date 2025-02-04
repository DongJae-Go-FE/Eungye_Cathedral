import ClientNoticesList from "@/components/_clientComponents/ClientNoticesList";

export default async function Page() {
  return (
    <div className="sub-container">
      <div className="title-area">
        <h2 className="text-white">공지사항</h2>
      </div>
      <div className="content-area">
        <ClientNoticesList />
      </div>
    </div>
  );
}
