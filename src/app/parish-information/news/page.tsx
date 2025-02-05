import ClientNewsList from "@/components/_clientComponents/ClientNewsList";

export default async function Page() {
  return (
    <div className="sub-container">
      <div className="title-area">
        <h2 className="text-white">본당 소식</h2>
      </div>
      <div className="content-area">
        <ClientNewsList />
      </div>
    </div>
  );
}
