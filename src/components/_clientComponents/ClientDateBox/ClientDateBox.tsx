"use client";

import { formatDate } from "@/utils/common";

export default function ClientDateBox({ date }: { date: string }) {
  return <span className="whitespace-nowrap">{formatDate(date)}</span>;
}
