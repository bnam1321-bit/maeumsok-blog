'use client';

import Link from 'next/link';

export default function FloatingBar() {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-xl border-t border-stone-200/90 shadow-[0_-6px_24px_rgba(11,59,70,0.08)] px-3 py-2 pb-[calc(env(safe-area-inset-bottom,0px)+0.5rem)]">
            <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
                <a
                    href="tel:032-541-6767"
                    className="flex flex-col items-center justify-center gap-1 py-2 rounded-2xl bg-[#0B3B46] text-white shadow-sm active:scale-95 transition-transform"
                >
                    <svg className="w-4 h-4 text-[#F4A261]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-[11px] font-bold">전화문의</span>
                </a>

                <Link
                    href="/services"
                    className="flex flex-col items-center justify-center gap-1 py-2 rounded-2xl text-stone-700 hover:bg-stone-200/60 active:scale-95 transition-all"
                >
                    <svg className="w-4 h-4 text-[#0B3B46]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-[11px] font-semibold">진료안내</span>
                </Link>

                <button
                    type="button"
                    onClick={() => {
                        const hours = document.getElementById('clinic-hours');
                        if (hours) hours.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex flex-col items-center justify-center gap-1 py-2 rounded-2xl text-stone-700 hover:bg-stone-200/60 active:scale-95 transition-all"
                >
                    <svg className="w-4 h-4 text-[#0B3B46]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[11px] font-semibold">진료시간</span>
                </button>

                <a
                    href="https://map.naver.com/p/search/마음속내과의원 계양구"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-1 py-2 rounded-2xl text-stone-700 hover:bg-stone-200/60 active:scale-95 transition-all"
                >
                    <svg className="w-4 h-4 text-[#0B3B46]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-[11px] font-semibold">오시는길</span>
                </a>
            </div>
        </div>
    );
}
