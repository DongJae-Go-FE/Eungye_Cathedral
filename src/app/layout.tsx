import type { Metadata } from "next";

import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import QueryProvider from "@/components/Provider/QueryProvider";

import "./globals.css";

const pretendard = localFont({
  src: "fonts/PretendardVariable.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "은계성당",
  description: "안녕하세요 인천교구 은계성당 페이지에 오신걸 환영합니다. 경기도 시흥시 은행동에 있는 은계성당을 소개하는 페이지입니다.",
  keywords:
    "은계성당, 천주교, 가톨릭, 천주교 은계성당, 인천교구 은계성당, 인천교구 시흥 은계성당, 성당, 은계, 시흥시, 경기도 시흥시, 은행동, 경기도, 인천교구, 경기도 시흥시 은행동, 은계지구, 시흥안산지구, 마나피캇, 마니피캇 성모방문성당, 성모방문성당, 경기 시흥시 은계중앙로, 경기 시흥시 은계중앙로 17",
  applicationName: "은계성당",
  generator: "Next.js",
  authors: [{ name: "clemens", url: "https://github.com/DongJae-Go-FE" }],
  creator: "clemens",
  publisher: "clemens",
  referrer: "origin-when-cross-origin",
  robots: "ALL",
  openGraph: {
    title: "은계성당",
    description: "안녕하세요 은계성당 페이지입니다.",
    siteName: "은계성당",
    images: ["/logo.png"],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "은계성당",
    description: "안녕하세요 은계성당 페이지입니다.",
    images: ["/logo.png"],
  },
  other: {
    "Content-Script-Type": "Text/javascript",
    Subject: "성당홈페이지",
    "Other Agent": "clemens",
    Date: "2025-02-20T12:17:00+09:00",
    Build: "20250220",
    "Last-Modified": "Thu, 20 Feb 2025 12:17:00",
    Copyright: "인천교구 은계성당",
    "geo.region": "KR-41",
    "geo.placename": "Siheung",
    "geo.position": "37.3884;126.8350",
    ICBM: "37.3884, 126.8350",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <QueryProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
