"use client";

import DOMPurify from "dompurify";

export default function ClientDetailContentBox({
  content,
}: {
  content: string;
}) {
  return (
    <div
      className="min-h-32"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(content),
      }}
    />
  );
}
