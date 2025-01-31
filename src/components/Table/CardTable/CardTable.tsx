import TableCard from "../TableCard";

export default function CardTable() {
  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-body02m">총12건</span>
      <ul
        className="grid justify-center gap-5 rounded-b-md"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
        }}
      >
        <li>
          <TableCard />
        </li>
        <li>
          <TableCard />
        </li>
        <li>
          <TableCard />
        </li>
        <li>
          <TableCard />
        </li>
        <li>
          <TableCard />
        </li>
        <li>
          <TableCard />
        </li>
        <li>
          <TableCard />
        </li>
        <li>
          <TableCard />
        </li>
      </ul>
    </div>
  );
}
