import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';
import Image from 'next/image';
import BlogExplorer from '@/app/components/BlogExplorer';

export const metadata = {
  title: '마음속내과의원 | 인천 계양구 내과전문의 4인 · 소화기내시경 센터',
  description:
    '가족을 진료하는 마음으로 항상 최선을 다하겠습니다. 인천 계양구 장제로 871 위너빌딩 3층 마음속내과의원 건강칼럼 및 진료안내.',
};

const CORE_PILLARS = [
  {
    num: '01',
    title: '내과전문의 4인 진료',
    desc: '풍부한 임상경험을 갖춘 내과전문의 4인의 체계적이고 신속한 협진 시스템',
  },
  {
    num: '02',
    title: '위·대장내시경 전문',
    desc: '소화기 내시경 세부전문의가 직접 시행하는 정밀 내시경 및 용종절제술',
  },
  {
    num: '03',
    title: '대학병원급 검진장비',
    desc: '고해상도 내시경·정밀 초음파 등 대학병원 수준의 첨단 의료장비 구축',
  },
  {
    num: '04',
    title: '국가검진 · 5대 암검진',
    desc: '국민건강보험공단 지정 검진기관으로 정밀 암검진부터 생애전환기 검진까지',
  },
  {
    num: '05',
    title: '만성질환 · 갑상선 · 간',
    desc: '고혈압·당뇨·고지혈증·갑상선·간질환의 정밀 진단과 맞춤형 주치의 관리',
  },
];

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Architectural Hero Section */}
      <section className="relative overflow-hidden bg-[#092228] text-white">
        {/* Background Clinic Interior Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-[1.02] transition-transform duration-1000"
          style={{ backgroundImage: "url('/images/clinic-interior.jpg')" }}
        />
        {/* Multi-layered Editorial Vignette & Warm Dark Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(115deg, rgba(7, 29, 36, 0.90) 0%, rgba(11, 59, 70, 0.76) 50%, rgba(24, 20, 18, 0.84) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-architectural-grid-light opacity-35 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 sm:pt-28 sm:pb-36">
          <div className="max-w-3xl">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-7 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#F4A261]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-stone-100">
                인천 계양구 · 내과전문의 4인 · 소화기 내시경 세부전문의
              </span>
            </div>

            {/* Editorial Headline */}
            <p className="text-xs sm:text-sm uppercase tracking-[0.26em] text-[#F4A261] font-bold mb-3">
              HEART &amp; DIGESTIVE DISEASE CLINIC
            </p>
            <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.22] tracking-tight mb-6 drop-shadow-sm">
              가족을 진료하는 마음으로,
              <br />
              <span className="text-[#FCD5B5]">마음속 깊이</span> 살피는 내과
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-stone-200/95 leading-relaxed max-w-2xl mb-10 font-normal">
              마음속내과의원은 소화기 내시경 세부전문의 및 내과전문의 4인이 상주하며,
              대학병원급 검진장비를 통해 위·대장내시경부터 5대 암검진, 만성질환까지
              정확하고 편안한 진료를 약속드립니다.
            </p>

            {/* Hero CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#medical-columns"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#C25E28] hover:bg-[#D46B32] text-white text-sm sm:text-base font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>전문의 건강칼럼 읽기</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/12 hover:bg-white/20 text-white text-sm sm:text-base font-semibold backdrop-blur-md border border-white/25 transition-all duration-300"
              >
                <span>진료안내 및 검진센터</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Core Clinical Pillars (Architectural Overlapping Bento Dock) */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 sm:-mt-16 mb-20">
        <div className="bg-white rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(11,59,70,0.08)] border border-stone-200/90">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5 divide-y sm:divide-y-0 lg:divide-x divide-stone-200/70">
            {CORE_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.num}
                className={`${idx > 0 ? 'pt-5 sm:pt-0 lg:pl-5' : ''} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="font-serif-editorial text-xs font-bold tracking-widest text-[#C25E28]">
                      PILLAR {pillar.num}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-[#EBF3F5] text-[#0B3B46] flex items-center justify-center">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </div>
                  <h2 className="font-serif-editorial text-lg font-bold text-stone-900 mb-1.5">
                    {pillar.title}
                  </h2>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Column Explorer Section */}
      <section id="medical-columns" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 scroll-mt-24">
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-stone-200/90 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0B3B46]" />
              <span className="text-xs font-bold tracking-[0.22em] text-[#0B3B46] uppercase">
                MAEUMSOK MEDICAL JOURNAL
              </span>
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              전문의가 전하는 건강칼럼
            </h2>
          </div>
          <p className="text-sm sm:text-base text-stone-600 max-w-md">
            진료실에서 환자분들이 가장 자주 묻는 질문과 질환 정보를 내과전문의의 시선으로 알기 쉽게 정리했습니다.
          </p>
        </div>

        <BlogExplorer posts={posts} showFeatured={true} />
      </section>

      {/* Architectural Clinic Space & Philosophy Section */}
      <section className="bg-[#F2ECE4]/70 border-t border-stone-200/80 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Clinic Lounge Visual & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200/80 text-xs font-bold text-[#0B3B46]">
                <span>OUR SPACE &amp; PHILOSOPHY</span>
              </div>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-stone-900 leading-snug">
                “가족을 진료하는 마음으로
                <br />
                항상 최선을 다하겠습니다.”
              </h2>
              <p className="text-stone-600 leading-relaxed text-base">
                병원을 찾는 발걸음이 무겁지 않도록, 따뜻하고 쾌적한 대기 공간과 대학병원급 정밀 검사 환경을 갖추었습니다.
                내과전문의 4인이 세심한 문진부터 정밀 내시경·초음파 진단, 사후 관리까지 함께합니다.
              </p>

              {/* Framed Interior Photograph */}
              <div className="relative rounded-[2rem] overflow-hidden border border-stone-200/90 shadow-lg group">
                <Image
                  src="/images/clinic-interior.jpg"
                  alt="마음속내과의원 대기실 및 내부 전경"
                  width={900}
                  height={560}
                  className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between text-white">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#F4A261]">
                      COMFORT &amp; PRECISION
                    </p>
                    <p className="font-serif-editorial text-lg font-bold">
                      마음속내과의원 라운지 전경 (위너빌딩 3층)
                    </p>
                  </div>
                  <Link
                    href="/services"
                    className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-xs font-bold border border-white/30 transition-colors"
                  >
                    진료과목 보기 →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Consultation & Operating Hours Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-stone-200/90 shadow-[0_16px_40px_rgba(11,59,70,0.06)]">
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-stone-100">
                  <div>
                    <span className="text-xs font-bold tracking-[0.18em] text-[#C25E28] uppercase block mb-1">
                      CLINIC HOURS &amp; LOCATION
                    </span>
                    <h3 className="font-serif-editorial text-2xl font-bold text-stone-900">
                      진료시간 및 내원 안내
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF3F5] text-[#0B3B46] flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                {/* Timetable */}
                <div className="space-y-4 text-sm mb-8">
                  <div className="flex items-center justify-between py-2.5 border-b border-stone-100">
                    <span className="font-bold text-stone-800">평일 (월 – 금)</span>
                    <span className="font-bold text-stone-900 text-base">08:30 – 19:00</span>
                  </div>
                  <div className="flex items-center justify-between py-2.5 border-b border-stone-100">
                    <span className="font-bold text-[#C25E28]">토요일</span>
                    <div className="text-right">
                      <span className="font-bold text-stone-900 text-base block">08:30 – 14:00</span>
                      <span className="text-xs text-[#C25E28] font-medium">점심시간 없이 진료</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-2.5 border-b border-stone-100">
                    <span className="font-medium text-stone-600">점심시간 (평일)</span>
                    <span className="text-stone-700 font-medium">13:00 – 14:00</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="font-bold text-red-600">일요일 · 공휴일</span>
                    <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold">
                      휴진
                    </span>
                  </div>
                </div>

                {/* Address Box */}
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 mb-6 space-y-2 text-sm">
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#0B3B46] mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-bold text-stone-900">인천광역시 계양구 장제로 871 위너빌딩 3층</p>
                      <p className="text-xs text-stone-500 mt-0.5">위너빌딩 3층 마음속내과의원</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:032-541-6767"
                    className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#0B3B46] hover:bg-[#135666] text-white text-sm font-bold transition-colors shadow-sm"
                  >
                    <svg className="w-4 h-4 text-[#F4A261]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>전화문의</span>
                  </a>
                  <a
                    href="https://map.naver.com/p/search/마음속내과의원 계양구"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#FAF8F5] hover:bg-stone-200/70 text-stone-800 border border-stone-200/90 text-sm font-bold transition-colors"
                  >
                    <span>네이버 지도</span>
                    <svg className="w-4 h-4 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
