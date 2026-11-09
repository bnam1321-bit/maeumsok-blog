import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import FloatingBar from "./components/FloatingBar";
import Footer from "./components/Footer";
import { getRootGraphJsonLd } from "@/lib/schema";

const rootGraphJsonLd = getRootGraphJsonLd();

export const metadata: Metadata = {
  metadataBase: new URL("https://maeumsok-blog.vercel.app"),
  title: {
    default: "마음속내과의원 | 인천 계양구 내과전문의 4인 · 소화기내시경 센터",
    template: "%s | 마음속내과의원",
  },
  description:
    "인천 계양구 장제로 871 위너빌딩 3층 마음속내과의원. 내과전문의 4인 협진, 소화기 내시경 세부전문의 위·대장내시경, 대학병원급 검진장비, 5대 암검진 및 만성질환 주치의 진료.",
  keywords: [
    "인천 계양구 내과",
    "계양구내과",
    "계양동내과",
    "임학역내과",
    "작전동내과",
    "계산동내과",
    "마음속내과",
    "마음속내과의원",
    "계양구 위내시경",
    "계양구 대장내시경",
    "계양구 건강검진",
    "소화기내시경전문의",
  ],
  alternates: {
    canonical: "https://maeumsok-blog.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "마음속내과의원 | 가족을 진료하는 마음으로",
    description:
      "내과전문의 4인 진료 · 소화기 내시경 세부전문의 · 대학병원급 검진장비 · 위/대장내시경 및 국가건강검진 센터",
    url: "https://maeumsok-blog.vercel.app",
    siteName: "마음속내과의원",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/images/clinic-interior.jpg",
        width: 1200,
        height: 630,
        alt: "마음속내과의원 내부 전경",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="alternate"
          type="text/plain"
          href="/llms.txt"
          title="마음속내과의원 LLM 구조화 요약 (llms.txt)"
        />
        <link
          rel="alternate"
          type="text/plain"
          href="/llms-full.txt"
          title="마음속내과의원 전체 의학칼럼 지식베이스 (llms-full.txt)"
        />
      </head>
      <body className="font-sans antialiased bg-[#F7F5F0] text-[#191918] selection:bg-[#0B3B46] selection:text-white flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootGraphJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingBar />
      </body>
    </html>
  );
}
