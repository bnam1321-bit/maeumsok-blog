'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-24 md:pb-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand & Info */}
                    <div className="col-span-1 lg:col-span-2">
                        <Link href="/" className="inline-flex items-center gap-2 mb-6 no-underline">
                            <Image
                                src="/images/logo.png"
                                alt="마음속내과"
                                width={150}
                                height={42}
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-stone-600 mb-2 leading-relaxed font-medium" style={{ color: '#0f4c5c' }}>
                            가족을 진료하는 마음으로 항상 최선을 다하겠습니다.
                        </p>
                        <p className="text-stone-500 mb-6 text-sm leading-relaxed">
                            내과전문의 4인 진료 · 대학병원급 검진장비 · 소화기 내시경 전문의 진료
                        </p>
                        <div className="space-y-3 text-sm text-stone-600">
                            <div className="flex items-start">
                                <span className="font-bold w-16 shrink-0 text-stone-700">주소</span>
                                <span>인천광역시 계양구 장제로 871 위너빌딩 3층</span>
                            </div>
                            <div className="flex items-start">
                                <span className="font-bold w-16 shrink-0 text-stone-700">전화</span>
                                <a href="tel:032-541-6767" className="hover:text-orange-700 transition-colors">032-541-6767</a>
                            </div>
                        </div>
                    </div>

                    {/* Clinic Hours - ID for Scrolling */}
                    <div id="clinic-hours" className="col-span-1 lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                        <h3 className="text-lg font-bold text-stone-900 mb-4 flex items-center">
                            <span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center mr-2 text-stone-600 shadow-inner">🕒</span>
                            진료시간 안내
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between items-start border-b border-stone-100 pb-2">
                                <span className="font-bold text-stone-800 w-20">평일</span>
                                <div className="text-right text-stone-600">
                                    <span className="block font-medium text-stone-900">08:30 - 19:00</span>
                                    <span className="text-xs text-stone-500">점심시간 13:00 - 14:00</span>
                                </div>
                            </li>
                            <li className="flex justify-between items-start border-b border-stone-100 pb-2">
                                <span className="font-bold text-orange-700 w-20">토요일</span>
                                <div className="text-right text-stone-600">
                                    <span className="block font-medium text-stone-900">08:30 - 14:00</span>
                                    <span className="text-xs text-stone-500">점심시간 없이 진료</span>
                                </div>
                            </li>
                            <li className="flex justify-between items-center pt-1">
                                <span className="font-bold text-red-500 w-20">일/공휴일</span>
                                <div className="text-right">
                                    <span className="inline-block px-2 py-1 bg-red-50 text-red-600 rounded text-xs font-bold">휴진</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-stone-200 pt-8 text-center text-xs text-stone-400">
                    <p>&copy; {new Date().getFullYear()} 마음속내과. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
