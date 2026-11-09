'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#141718] text-stone-300 border-t border-stone-800 pt-16 pb-28 md:pb-14 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
                    {/* Col 1: Brand & Philosophy (5 cols) */}
                    <div className="md:col-span-5 space-y-5">
                        <Link href="/" className="inline-block bg-white rounded-2xl px-4 py-2.5 shadow-sm">
                            <Image
                                src="/images/logo.png"
                                alt="마음속내과의원"
                                width={155}
                                height={42}
                                className="h-9 w-auto object-contain"
                            />
                        </Link>

                        <p className="font-serif-editorial text-lg font-bold text-white leading-snug">
                            “가족을 진료하는 마음으로 항상 최선을 다하겠습니다.”
                        </p>

                        <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                            내과전문의 4인 진료 · 소화기 내시경 세부전문의 진료 · 대학병원급 검진장비 · 국민건강보험공단 지정 건강검진 및 5대 암검진 기관
                        </p>

                        <div className="space-y-2 text-sm text-stone-300 pt-1">
                            <div className="flex items-start gap-3">
                                <span className="text-stone-500 font-semibold w-14 shrink-0">주소</span>
                                <span>인천광역시 계양구 장제로 871 위너빌딩 3층</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-stone-500 font-semibold w-14 shrink-0">대표전화</span>
                                <a
                                    href="tel:032-541-6767"
                                    className="text-[#F4A261] font-bold hover:underline"
                                >
                                    032-541-6767
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Col 2: Quick Navigation (3 cols) */}
                    <div className="md:col-span-3 space-y-4">
                        <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#F4A261]">
                            QUICK NAVIGATION
                        </h3>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link href="/" className="text-stone-300 hover:text-white transition-colors">
                                    홈 · 라운지
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-stone-300 hover:text-white transition-colors">
                                    전문의 건강칼럼
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-stone-300 hover:text-white transition-colors">
                                    진료안내 · 전문클리닉
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://map.naver.com/p/search/마음속내과의원 계양구"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-stone-300 hover:text-white transition-colors inline-flex items-center gap-1"
                                >
                                    <span>네이버 지도 (오시는 길)</span>
                                    <svg className="w-3.5 h-3.5 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Col 3: Clinic Hours (4 cols) */}
                    <div id="clinic-hours" className="md:col-span-4 bg-white/[0.04] rounded-3xl p-6 border border-white/10">
                        <div className="flex items-center gap-2.5 mb-4">
                            <span className="w-8 h-8 rounded-xl bg-[#0B3B46] text-[#F4A261] flex items-center justify-center">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <h3 className="font-serif-editorial text-lg font-bold text-white">
                                진료시간 안내
                            </h3>
                        </div>

                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between items-start border-b border-white/10 pb-2.5">
                                <span className="font-semibold text-stone-300">평일 (월–금)</span>
                                <div className="text-right">
                                    <span className="block font-bold text-white">08:30 – 19:00</span>
                                    <span className="text-xs text-stone-400">점심시간 13:00 – 14:00</span>
                                </div>
                            </li>
                            <li className="flex justify-between items-start border-b border-white/10 pb-2.5">
                                <span className="font-semibold text-[#F4A261]">토요일</span>
                                <div className="text-right">
                                    <span className="block font-bold text-white">08:30 – 14:00</span>
                                    <span className="text-xs text-[#F4A261]">점심시간 없이 진료</span>
                                </div>
                            </li>
                            <li className="flex justify-between items-center pt-1">
                                <span className="font-semibold text-red-400">일요일 · 공휴일</span>
                                <span className="px-2.5 py-0.5 bg-red-500/15 text-red-300 border border-red-500/30 rounded-full text-xs font-bold">
                                    휴진
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
                    <p>&copy; {new Date().getFullYear()} 마음속내과의원 (MAEUMSOK INTERNAL MEDICINE CLINIC). All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <p>인천광역시 계양구 장제로 871 위너빌딩 3층 · TEL. 032-541-6767</p>
                        <a href="/llms.txt" className="text-stone-600 hover:text-stone-400 transition-colors" title="AI & LLM Structured Knowledge Index">
                            LLMs.txt
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
