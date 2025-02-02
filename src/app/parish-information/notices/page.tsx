import SearchBar from "@/components/SearchBar";
import ListTable from "@/components/Table/ListTable";
import { TableColumn } from "@/components/Table/ListTable/ListTable";

export default async function Page() {
  const columns: TableColumn[] = [
    {
      key: "no",
      title: "No",
      width: "10%",
    },
    {
      key: "title",
      title: "제목",
      width: "60%",
    },
    {
      key: "created_at",
      title: "생성일",
      width: "30%",
    },
  ];

  return (
    <div className="sub-container">
      <div className="title-area">
        <h2 className="text-white">공지사항</h2>
      </div>
      <div className="content-area">
        <SearchBar />
        <ListTable
          columns={columns}
          caption="공지사항 테이블"
          totalCount={0}
          initialData={[]}
        />
      </div>
    </div>
  );
}
