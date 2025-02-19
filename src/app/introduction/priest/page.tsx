import { Metadata } from "next";

import Priest from "@/screen/introduction/Priest/Priest";

export const metadata: Metadata = {
  title: "역대 본당 사제 - 은계성당",
  description: "역대 본당 사제 페이지입니다.",
};

export default async function Page() {
  return <Priest />;
}
