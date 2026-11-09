'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname?.startsWith(href);
    };

    return (
        <>
            {/* Top Architectural Micro Utility Bar (Desktop) */}
            <div className="hidden lg:block bg-[#0B3B46] text-stone-200 text-xs border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 h-9 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <span className="inline-flex items-center gap-1.5 font-medium text-white">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E07A3F] animate-pulse" />
                            내과전문의 4인 협진 · 소화기 내시경 세부전문의 진료
                        </span>
                        <span className="text-white/25">|</span>
                        <span className="text-stone-300">
                            인천광역시 계양구 장제로 871 위너빌딩 3층
                        </span>
                    </div>
                    <div className="flex items-center gap-5 text-stone-300">
                        <span>평일 08:30 – 19:00</span>
                        <span className="text-white/25">·</span>
                        <span className="text-[#F4A261] font-medium">토요일 08:30 – 14:00 (점심시간 없이 진료)</span>
                        <span className="text-white/25">|</span>
                        <a
                            href="tel:032-541-6767"
                            className="text-white font-semibold hover:text-[#F4A261] transition-colors"
                        >
                            T. 032-541-6767
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Sticky Glass Header */}
            <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-xl border-b border-stone-200/80 shadow-[0_2px_20px_rgba(11,59,70,0.04)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
                    {/* Brand Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-3.5 group shrink-0 focus:outline-none"
                    >
                        <Image
                            src="/images/logo.png"
                            alt="마음속내과의원 로고"
                            width={176}
                            height={48}
                            className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                            priority
                        />
                        <div className="hidden xl:flex flex-col pl-3.5 border-l border-stone-300/80">
                            <span className="text-[10px] tracking-[0.18em] uppercase font-bold text-[#0B3B46]">
                                Heart &amp; Digestive Clinic
                            </span>
                            <span className="text-xs text-stone-500 font-medium">
                                인천 계양구 내과전문의 4인
                            </span>
                        </div>
                    </Link>

                    {/* Center Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/80 px-3 py-1.5 rounded-full border border-stone-200/80 shadow-sm">
                        <Link
                            href="/"
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                                isActive('/') && pathname === '/'
                                    ? 'bg-[#0B3B46] text-white shadow-sm'
                                    : 'text-stone-700 hover:text-[#0B3B46] hover:bg-stone-100/80'
                            }`}
                        >
                            홈 · 라운지
                        </Link>
                        <Link
                            href="/blog"
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                                isActive('/blog')
                                    ? 'bg-[#0B3B46] text-white shadow-sm'
                                    : 'text-stone-700 hover:text-[#0B3B46] hover:bg-stone-100/80'
                            }`}
                        >
                            전문의 건강칼럼
                        </Link>
                        <Link
                            href="/services"
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                                isActive('/services')
                                    ? 'bg-[#0B3B46] text-white shadow-sm'
                                    : 'text-stone-700 hover:text-[#0B3B46] hover:bg-stone-100/80'
                            }`}
                        >
                            진료안내 · 검진센터
                        </Link>
                        <a
                            href="https://map.naver.com/p/search/마음속내과의원 계양구"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-full text-sm font-semibold text-stone-700 hover:text-[#0B3B46] hover:bg-stone-100/80 transition-all duration-200 inline-flex items-center gap-1"
                        >
                            오시는 길
                            <svg className="w-3.5 h-3.5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </nav>

                    {/* Right CTA & Mobile Menu Trigger */}
                    <div className="flex items-center gap-2.5">
                        <a
                            href="tel:032-541-6767"
                            className="hidden sm:inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0B3B46] hover:bg-[#135666] text-white text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md group"
                        >
                            <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-3.5 h-3.5 text-[#F4A261]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </span>
                            <span className="tracking-tight">032-541-6767</span>
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen((prev) => !prev)}
                            aria-label="메뉴 열기"
                            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-stone-200 text-stone-700 hover:text-[#0B3B46] transition-colors"
                        >
                            {mobileMenuOpen ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Slide-down Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-[#FAF8F5] border-t border-stone-200/80 px-4 pt-3 pb-6 shadow-xl">
                        <div className="flex flex-col space-y-1.5">
                            <Link
                                href="/"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`px-4 py-3 rounded-2xl text-base font-semibold transition-colors ${
                                    pathname === '/'
                                        ? 'bg-[#0B3B46] text-white'
                                        : 'text-stone-800 hover:bg-stone-200/60'
                                }`}
                            >
                                홈 · 라운지
                            </Link>
                            <Link
                                href="/blog"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`px-4 py-3 rounded-2xl text-base font-semibold transition-colors ${
                                    isActive('/blog')
                                        ? 'bg-[#0B3B46] text-white'
                                        : 'text-stone-800 hover:bg-stone-200/60'
                                }`}
                            >
                                전문의 건강칼럼
                            </Link>
                            <Link
                                href="/services"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`px-4 py-3 rounded-2xl text-base font-semibold transition-colors ${
                                    isActive('/services')
                                        ? 'bg-[#0B3B46] text-white'
                                        : 'text-stone-800 hover:bg-stone-200/60'
                                }`}
                            >
                                진료안내 · 검진센터
                            </Link>
                            <a
                                href="https://map.naver.com/p/search/마음속내과의원 계양구"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileMenuOpen(false)}
                                className="px-4 py-3 rounded-2xl text-base font-semibold text-stone-800 hover:bg-stone-200/60 inline-flex items-center justify-between"
                            >
                                <span>네이버 지도 · 오시는 길</span>
                                <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>

                        <div className="mt-4 pt-4 border-t border-stone-200/80 flex flex-col gap-2 text-xs text-stone-600 px-2">
                            <p className="font-semibold text-[#0B3B46]">
                                내과전문의 4인 · 소화기 내시경 세부전문의 진료
                            </p>
                            <p>인천광역시 계양구 장제로 871 위너빌딩 3층</p>
                            <p>평일 08:30–19:00 / 토요일 08:30–14:00 (점심시간 없음)</p>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}
