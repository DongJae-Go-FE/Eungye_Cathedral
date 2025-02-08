"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

import Spinner from "@/components/Spinner";

const ClientDetailContentBox = dynamic(
  () => import("./ClientDetailContentBox"),
  {
    ssr: false,
  },
);

export default function ClientContent({ content }: { content: string }) {
  return (
    <Suspense fallback={<Spinner />}>
      <ClientDetailContentBox content={content} />
    </Suspense>
  );
}
