import SearchBar from "@/components/SearchBar";
import CardTable from "@/components/Table/CardTable/CardTable";

export default async function Page() {
  return (
    <div className="sub-container">
      <div className="title-area">
        <h2 className="text-white">주보</h2>
      </div>
      <div className="content-area">
        <SearchBar />
        <CardTable />
      </div>
    </div>
  );
}
