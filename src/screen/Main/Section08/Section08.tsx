import IntersectionObserverContainer from "@/components/IntersectionObserverContainer";
import Card from "@/components/Card";
import Link from "next/link";

export default async function Section08() {
  return (
    <div className="main-container bg-gray-100">
      <h2>성당소식</h2>
      <div className="flex h-[calc(100%-128px)] mobile:flex-wrap tablet:flex-wrap">
        <ul className="flex w-full gap-3 mobile:flex-wrap mobile:gap-y-10 tablet:flex-wrap tablet:gap-y-10">
          <li className="desktop:flex-1 mobile:w-full tablet:flex tablet:w-full">
            <Link href ='/' className="w-full">
              <IntersectionObserverContainer>
                <Card/>
              </IntersectionObserverContainer>
            </Link>
          </li>
          <li className="desktop:flex-1 mobile:w-full tablet:flex tablet:w-full">
              <Link href ='/' className="w-full">
                <IntersectionObserverContainer>
                  <Card/>
                </IntersectionObserverContainer>
              </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
