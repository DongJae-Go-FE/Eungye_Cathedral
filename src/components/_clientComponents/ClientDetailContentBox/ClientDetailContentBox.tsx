"use client";

import DOMPurify from "dompurify";

export default function ClientDetailContentBox({
  content,
}: {
  content: string;
}) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(content),
      }}
    />
  );
}
