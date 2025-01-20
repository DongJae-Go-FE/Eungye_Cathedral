import IntersectionObserverContainer from "@/components/IntersectionObserverContainer";

export default async function Section08() {
  return (
    <div className="main-container bg-gray-100">
      <h2>성당소식</h2>
      <div className="flex h-[calc(100%-128px)] mobile:flex-wrap tablet:flex-wrap">
        <IntersectionObserverContainer>
          <div>1</div>
        </IntersectionObserverContainer>
        <IntersectionObserverContainer>
          <div>2</div>
        </IntersectionObserverContainer>
      </div>
    </div>
  );
}
