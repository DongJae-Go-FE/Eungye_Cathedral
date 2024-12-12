export default async function Home() {
  const data = await fetch("http://localhost:9093/news?page=1&limit=10}")
    .then((response) => response.json())
    .then((data) => data);

  console.log(data);

  return <div>프론트 서비스 페이지</div>;
}
