import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import FloatingBar from "./components/FloatingBar";
import Footer from "./components/Footer";

// 구조화 데이터 (Schema.org JSON-LD)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "마음속내과의원",
  "alternateName": "마음속내과",
  "slogan": "가족을 진료하는 마음으로 항상 최선을 다하겠습니다.",
  "image": "https://maeumsok-blog.vercel.app/images/logo.png",
  "url": "https://maeumsok-blog.vercel.app",
  "telephone": "032-541-6767",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "인천광역시 계양구 장제로 871 위너빌딩 3층",
    "addressLocality": "계양구",
    "addressRegion": "인천광역시",
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
  "medicalSpecialty": ["InternalMedicine", "Gastroenterology"]
};

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
    "마음속내과",
    "마음속내과의원",
    "계양구 위내시경",
    "계양구 대장내시경",
    "계양구 건강검진",
    "소화기내시경전문의",
  ],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700;800&family=Noto+Serif+KR:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-[#FAF8F5] text-stone-900 selection:bg-[#0B3B46] selection:text-white flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingBar />
      </body>
    </html>
  );
}
