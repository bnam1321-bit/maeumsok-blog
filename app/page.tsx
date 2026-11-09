import { getAllPosts } from '@/lib/blog';
import { CLINIC_FACTS, CLINIC_FAQS } from '@/lib/schema';
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
    desc: '소화기 내시경 세부전문의가 직접 시행하는 정밀 내시경 및 당일 용종절제술',
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
    <div className="min-h-screen bg-[#F7F5F0]">
      {/* Bespoke Split Architectural Hero Section */}
      <section
        aria-label="마음속내과의원 메인 소개"
        className="relative overflow-hidden bg-[#08262E] text-white border-b border-white/10"
      >
        {/* Subtle Architectural Grid & Ambient Lighting */}
        <div className="absolute inset-0 bg-architectural-grid-light opacity-40 pointer-events-none" />
        <div
          className="absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ backgroundColor: '#196476' }}
        />
        <div
          className="absolute -bottom-32 right-1/4 w-[26rem] h-[26rem] rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ backgroundColor: '#C25E28' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-28 sm:pt-20 sm:pb-36">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Editorial Typography & Key Metrics (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#F4A261] animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold tracking-normal text-stone-100">
                  인천 계양구 · 내과전문의 4인 · 소화기 내시경 세부전문의
                </span>
              </div>

              <p className="text-xs sm:text-sm uppercase tracking-[0.24em] text-[#F4A261] font-bold mb-4">
                HEART &amp; DIGESTIVE DISEASE CLINIC
              </p>

              {/* Breathable Korean Headline with Explicit Block Gap */}
              <h1 className="font-serif-editorial text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-white tracking-[-0.02em] mb-8">
                <span className="block leading-[1.45] sm:leading-[1.45] lg:leading-[1.45]">
                  가족을 진료하는 마음으로,
                </span>
                <span className="block mt-2.5 sm:mt-3.5 leading-[1.45] sm:leading-[1.45] lg:leading-[1.45]">
                  <span className="text-[#FCD5B5]">마음속 깊이</span> 살피는 내과
                </span>
              </h1>

              {/* Breathable Body Copy (leading-[1.92]) */}
              <p className="text-base sm:text-[1.08rem] text-stone-200/90 leading-[1.92] tracking-[-0.008em] max-w-2xl mb-10 font-normal">
                마음속내과의원은 소화기 내시경 세부전문의 및 내과전문의 4인이 상주하며,
                대학병원급 검진장비를 통해 위·대장내시경부터 5대 암검진, 만성질환까지
                정확하고 편안한 진료를 약속드립니다.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-12">
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
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-semibold backdrop-blur-md border border-white/20 transition-all duration-300"
                >
                  <span>진료안내 및 검진센터</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Architectural Clinical Metrics Row */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-white/12 max-w-xl">
                <div>
                  <p className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#FCD5B5] mb-1">
                    4인 협진
                  </p>
                  <p className="text-xs sm:text-sm text-stone-300 leading-[1.6]">
                    내과·소화기내시경 전문의
                  </p>
                </div>
                <div>
                  <p className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#FCD5B5] mb-1">
                    CO₂ 내시경
                  </p>
                  <p className="text-xs sm:text-sm text-stone-300 leading-[1.6]">
                    무통 대장내시경·당일 용종절제
                  </p>
                </div>
                <div>
                  <p className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#FCD5B5] mb-1">
                    5대 암검진
                  </p>
                  <p className="text-xs sm:text-sm text-stone-300 leading-[1.6]">
                    공단 지정 국가건강검진 기관
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Gallery-Framed Clinic Interior Showcase (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Decorative Offset Frame */}
                <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-[#F4A261]/25 via-white/5 to-transparent blur-sm pointer-events-none" />

                <div className="relative rounded-[2.25rem] overflow-hidden border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.45)] bg-stone-900">
                  <Image
                    src="/images/clinic-interior.jpg"
                    alt="마음속내과의원 대기 라운지 전경"
                    width={720}
                    height={540}
                    className="w-full h-[320px] sm:h-[400px] object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061C22]/90 via-[#061C22]/20 to-transparent" />

                  {/* Bottom Glassmorphic Info Card Inside Frame */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-5 rounded-2xl bg-[#092830]/85 backdrop-blur-xl border border-white/15">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span className="text-[11px] font-bold tracking-[0.18em] text-[#F4A261] uppercase">
                        MAEUMSOK LOUNGE · 3F
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] font-semibold">
                        토요일 점심시간 없이 진료
                      </span>
                    </div>
                    <p className="font-serif-editorial text-base sm:text-lg font-bold text-white leading-[1.5] mb-1">
                      인천 계양구 장제로 871 위너빌딩 3층
                    </p>
                    <p className="text-xs text-stone-300 leading-[1.6]">
                      평일 08:30 – 19:00 · 토요일 08:30 – 14:00 · 대표전화 032-541-6767
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Core Clinical Pillars (Architectural Overlapping Bento Dock) */}
      <section
        aria-label="마음속내과의원 5대 핵심 진료 역량"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 sm:-mt-16 mb-24"
      >
        <div className="bg-white rounded-[2.25rem] p-7 sm:p-9 lg:p-11 shadow-[0_22px_55px_rgba(11,59,70,0.08)] border border-[#E6E2DA]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7 lg:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-[#EFECE6]">
            {CORE_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.num}
                className={`${idx > 0 ? 'pt-6 sm:pt-0 lg:pl-6' : ''} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif-editorial text-xs font-bold tracking-widest text-[#C25E28]">
                      PILLAR {pillar.num}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-[#EBF3F5] text-[#0B3B46] flex items-center justify-center">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </div>
                  <h2 className="font-serif-editorial text-[1.12rem] font-bold text-[#191918] leading-[1.5] mb-2">
                    {pillar.title}
                  </h2>
                  <p className="text-[0.82rem] text-stone-500 leading-[1.78]">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Column Explorer Section */}
      <section
        id="medical-columns"
        aria-label="전문의 건강칼럼 목록"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 scroll-mt-24"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-7 border-b border-[#E6E2DA] gap-5">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0B3B46]" />
              <span className="text-xs font-bold tracking-[0.22em] text-[#0B3B46] uppercase">
                MAEUMSOK MEDICAL JOURNAL
              </span>
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#191918] leading-[1.45] tracking-[-0.02em]">
              전문의가 전하는 건강칼럼
            </h2>
          </div>
          <p className="text-sm sm:text-base text-stone-600 max-w-md leading-[1.82]">
            진료실에서 환자분들이 가장 자주 묻는 질문과 질환 정보를 내과전문의의 시선으로 알기 쉽게 정리했습니다.
          </p>
        </div>

        <BlogExplorer posts={posts} showFeatured={true} />
      </section>

      {/* Architectural Clinic Space & Structured Fact Sheet Section */}
      <section
        aria-label="마음속내과의원 진료정보 및 시설 안내"
        className="bg-[#EFECE6]/75 border-t border-[#E6E2DA] py-24 sm:py-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left: Clinic Lounge Visual & Structured Fact Sheet (<dl>) */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E6E2DA] text-xs font-bold text-[#0B3B46]">
                <span>OUR SPACE &amp; CLINICAL FACTS</span>
              </div>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#191918] tracking-[-0.02em]">
                <span className="block leading-[1.45] sm:leading-[1.45]">
                  “가족을 진료하는 마음으로
                </span>
                <span className="block mt-2 sm:mt-2.5 leading-[1.45] sm:leading-[1.45]">
                  항상 최선을 다하겠습니다.”
                </span>
              </h2>
              <p className="text-stone-600 leading-[1.9] text-base">
                병원을 찾는 발걸음이 무겁지 않도록, 따뜻하고 쾌적한 대기 공간과 대학병원급 정밀 검사 환경을 갖추었습니다.
                내과전문의 4인이 세심한 문진부터 정밀 내시경·초음파 진단, 사후 관리까지 함께합니다.
              </p>

              {/* Semantic Definition List (<dl>) for LLM & Human Fact Reading */}
              <div className="bg-white rounded-[2rem] p-7 sm:p-9 border border-[#E6E2DA] shadow-sm">
                <h3 className="font-serif-editorial text-xl font-bold text-[#191918] mb-5 pb-3.5 border-b border-[#EFECE6] leading-[1.5]">
                  한눈에 보는 마음속내과의원 핵심 정보
                </h3>
                <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-5 text-sm">
                  <div>
                    <dt className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">
                      의료기관명
                    </dt>
                    <dd className="font-bold text-[#191918] text-base leading-[1.6]">{CLINIC_FACTS.name}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">
                      의료진 구성
                    </dt>
                    <dd className="font-bold text-[#0B3B46] text-base leading-[1.6]">{CLINIC_FACTS.specialistsDescription}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">
                      소재지 주소
                    </dt>
                    <dd className="font-medium text-stone-700 leading-[1.7]">{CLINIC_FACTS.address.full}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">
                      대표 전화번호
                    </dt>
                    <dd className="font-bold text-[#191918] text-base leading-[1.6]">{CLINIC_FACTS.telephone}</dd>
                  </div>
                  <div className="sm:col-span-2 pt-2 border-t border-[#EFECE6]">
                    <dt className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1.5">
                      중점 진료분야
                    </dt>
                    <dd className="text-stone-700 leading-[1.85]">
                      위·대장내시경(CO₂ 무통 내시경·당일 용종절제술), 국민건강보험공단 건강검진·5대 암검진, 복부·갑상선·유방 초음파, 고혈압·당뇨·고지혈증·간질환·골다공증·통풍·성인 예방접종
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Right: Consultation & Operating Hours Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-[2.25rem] p-8 sm:p-10 border border-[#E6E2DA] shadow-[0_18px_45px_rgba(11,59,70,0.06)]">
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#EFECE6]">
                  <div>
                    <span className="text-xs font-bold tracking-[0.18em] text-[#C25E28] uppercase block mb-1.5">
                      CLINIC HOURS &amp; LOCATION
                    </span>
                    <h3 className="font-serif-editorial text-2xl font-bold text-[#191918] leading-[1.45]">
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
                  <div className="flex items-center justify-between py-3 border-b border-[#EFECE6]">
                    <span className="font-bold text-stone-800">평일 (월 – 금)</span>
                    <span className="font-bold text-[#191918] text-base">08:30 – 19:00</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-[#EFECE6]">
                    <span className="font-bold text-[#C25E28]">토요일</span>
                    <div className="text-right">
                      <span className="font-bold text-[#191918] text-base block">08:30 – 14:00</span>
                      <span className="text-xs text-[#C25E28] font-medium">점심시간 없이 진료</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-[#EFECE6]">
                    <span className="font-medium text-stone-600">점심시간 (평일)</span>
                    <span className="text-stone-700 font-medium">13:00 – 14:00</span>
                  </div>
                  <div className="flex items-center justify-between py-2.5">
                    <span className="font-bold text-red-600">일요일 · 공휴일</span>
                    <span className="px-3.5 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold">
                      휴진
                    </span>
                  </div>
                </div>

                {/* Address Box */}
                <div className="p-5 rounded-2xl bg-[#F7F5F0] border border-[#E6E2DA] mb-7 space-y-2 text-sm">
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[#0B3B46] mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-bold text-[#191918] leading-[1.6]">인천광역시 계양구 장제로 871 위너빌딩 3층</p>
                      <p className="text-xs text-stone-500 mt-1 leading-[1.6]">계양동 · 작전동 · 계산동 · 임학역 인근</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3.5">
                  <a
                    href="tel:032-541-6767"
                    className="flex items-center justify-center gap-2 py-4 px-4 rounded-2xl bg-[#0B3B46] hover:bg-[#135666] text-white text-sm font-bold transition-colors shadow-sm"
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
                    className="flex items-center justify-center gap-2 py-4 px-4 rounded-2xl bg-[#F7F5F0] hover:bg-[#EFECE6] text-stone-800 border border-[#E6E2DA] text-sm font-bold transition-colors"
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

      {/* Structured FAQ Section (Optimized for LLMs & Patients) */}
      <section
        aria-label="마음속내과의원 자주 묻는 질문"
        itemScope
        itemType="https://schema.org/FAQPage"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28"
      >
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C25E28]" />
            <span className="text-xs font-bold tracking-[0.22em] text-[#C25E28] uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#191918] leading-[1.45] tracking-[-0.02em] mb-4">
            진료 및 검진 자주 묻는 질문
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-[1.85]">
            내원 전 환자분들이 가장 많이 문의하시는 진료시간, 내시경 검사, 국가건강검진 안내입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-7">
          {CLINIC_FAQS.map((faq, idx) => (
            <div
              key={idx}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className="bg-white rounded-[2rem] p-7 sm:p-9 border border-[#E6E2DA] shadow-[0_8px_28px_rgba(11,59,70,0.03)]"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#0B3B46] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  Q{idx + 1}
                </span>
                <h3
                  itemProp="name"
                  className="font-serif-editorial text-[1.15rem] font-bold text-[#191918] leading-[1.55]"
                >
                  {faq.question}
                </h3>
              </div>
              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
                className="pl-12"
              >
                <p itemProp="text" className="text-[0.95rem] text-stone-600 leading-[1.9]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
