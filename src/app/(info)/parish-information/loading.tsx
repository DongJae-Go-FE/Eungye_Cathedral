import Spinner from "@/components/Spinner";

export default function Loading() {
  return (
    <div className="desktop:min-h-[calc(100dvh-299px)] tablet:min-h-[calc(100dvh-249px)] mobile:min-h-[calc(100dvh-199px)] relative w-full">
      <Spinner />
    </div>
  );
}
