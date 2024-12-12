import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "fonts/PretendardVariable.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "은계성당 페이지",
  description: "안녕하세요 은계성당 페이지에 오신걸 환영합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
