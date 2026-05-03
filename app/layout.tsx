import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import FloatingBar from "./components/FloatingBar";
import Footer from "./components/Footer";

// 구조화 데이터 (Schema.org JSON-LD)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "마음속내과의원",
  "image": "/logo.png",
  "url": "https://maeumsok-blog.vercel.app",
  "telephone": "032-541-6767",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "인천광역시 계양구 장제로 871 위너빌딩 3층",
    "addressLocality": "Incheon",
    "postalCode": "21060",
    "addressCountry": "KR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.537,
    "longitude": 126.737
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:30",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:30",
      "closes": "14:00"
    }
  ],
  "medicalSpecialty": "InternalMedicine"
};

// Noto Sans KR - 한글 최적화 웹폰트
const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-noto',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://maeumsok-blog.vercel.app'),
  title: "마음속내과 | 인천 계양구 소화기내과 전문",
  description: "인천 계양구 마음속내과, 소화기 내시경 전문의 진료, 위대장내시경, 건강검진, 만성질환 관리 안내.",
  keywords: "인천 계양구 내과, 계양구내과, 계양동내과, 마음속내과, 건강검진, 위내시경, 대장내시경, 인천내과",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <FloatingBar />
      </body>
    </html>
  );
}
