import Image from 'next/image';
import { getClinicEntityJsonLd, CLINIC_FAQS } from '@/lib/schema';
import { SITE_URL } from '@/lib/constants';

export const metadata = {
    title: '진료안내 · 검진센터 | 마음속내과의원',
    description:
        '인천 계양구 마음속내과의원 진료안내. 소화기 내시경 세부전문의 위·대장내시경, 공단 건강검진·5대암검진, 만성질환, 간·갑상선·유방 초음파 클리닉.',
    alternates: {
        canonical: `${SITE_URL}/services`,
    },
};

const CLINIC_CENTERS = [
    {
        code: 'CENTER 01',
        title: '위 · 대장내시경 클리닉',
        subtitle: 'Gastrointestinal Endoscopy Center',
        description:
            '소화기 내시경 세부전문의가 대학병원급 고해상도 내시경 장비를 통해 미세 병변까지 정밀하게 관찰하며, 용종 발견 시 당일 절제술(EMR)까지 원스톱으로 시행합니다.',
        highlights: [
            '소화기 내시경 세부전문의 4인 직접 검사',
            '복부 팽만감과 통증을 줄이는 CO2 가스 대장내시경',
            '대장 용종 발견 시 당일 용종절제술 동시 시행',
            '철저한 1회용 기구 사용 및 표준화된 내시경 소독 시스템',
        ],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
        ),
    },
    {
        code: 'CENTER 02',
        title: '국가건강검진 · 5대 암검진 센터',
        subtitle: 'National & Cancer Screening Center',
        description:
            '국민건강보험공단 지정 검진기관으로서 공단 일반검진부터 5대 암검진, 채용검진까지 쾌적한 환경에서 신속하고 정확하게 진행합니다.',
        highlights: [
            '국민건강보험공단 일반건강검진 및 생애전환기 검진',
            '5대 암검진 (위암 · 대장암 · 간암 · 유방암 · 자궁경부암)',
            '검진 결과 이상 소견 시 내과전문의 즉시 연계 치료',
            '연령별 · 가족력 기반 개인 맞춤형 정밀 종합검진',
        ],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        code: 'CENTER 03',
        title: '만성질환 · 심혈관 대사 클리닉',
        subtitle: 'Chronic & Metabolic Disease Clinic',
        description:
            '고혈압, 당뇨병, 고지혈증(이상지질혈증) 등 침묵의 만성질환은 초기 진단과 꾸준한 수치 관리가 핵심입니다. 환자 개개인의 생활습관까지 고려한 맞춤 진료를 제공합니다.',
        highlights: [
            '고혈압 · 당뇨병 · 고지혈증 1:1 맞춤 약물 및 생활요법',
            '대사증후군 · 통풍 · 골다공증 · 빈혈 정밀 혈액검사',
            '심혈관 · 뇌혈관 및 신장 합병증 조기 선별 검사',
            '체계적인 정기 추적 검사 및 복약 상담',
        ],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
    },
    {
        code: 'CENTER 04',
        title: '간 질환 · 복부초음파 클리닉',
        subtitle: 'Liver & Abdominal Ultrasound Clinic',
        description:
            '침묵의 장기인 간과 담낭, 췌장, 신장 등 복부 주요 장기를 대학병원급 고해상도 초음파 장비로 정밀하게 진단하고 관리합니다.',
        highlights: [
            '비알코올성/알코올성 지방간 및 간기능 이상 정밀 진단',
            '만성 B형 · C형 간염 항바이러스 치료 및 간암 정기 감시',
            '담낭(쓸개) 결석 · 담낭 용종 · 신장 낭종 복부초음파',
            '간섬유화 및 간경변 조기 진단과 체계적 관리',
        ],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    },
    {
        code: 'CENTER 05',
        title: '갑상선 · 유방 클리닉',
        subtitle: 'Thyroid & Breast Ultrasound Clinic',
        description:
            '원인 모를 만성 피로, 체중 변화, 부종을 유발하는 갑상선 기능 이상부터 갑상선 결절, 유방 양성 혹 및 암 검진까지 정밀하게 살핍니다.',
        highlights: [
            '갑상선 기능 저하증 · 항진증 호르몬 정밀 혈액검사',
            '고해상도 갑상선 초음파를 통한 미세 결절 진단',
            '유방암 국가검진 및 유방 정밀 초음파 검사',
            '내분비 질환의 지속적인 수치 모니터링 및 맞춤 처방',
        ],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
        ),
    },
    {
        code: 'CENTER 06',
        title: '호흡기 · 성인 예방접종 클리닉',
        subtitle: 'Respiratory & Adult Vaccination Clinic',
        description:
            '만성 기침, 천식, 기관지염 등 호흡기 질환의 정확한 원인 감별과 함께 연령 및 기저질환에 맞춘 성인 필수 예방접종을 시행합니다.',
        highlights: [
            '2주 이상 지속되는 만성 기침 · 역류성 식도염 · 천식 감별',
            '대상포진 · 폐렴구균 · 독감(인플루엔자) 예방접종',
            'A형 · B형 간염, 파상풍(백일해) 등 성인 필수 백신',
            '만성 피로 회복 및 면역력 강화를 위한 맞춤 영양수액',
        ],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    },
];

export default function ServicesPage() {
    const servicesJsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            getClinicEntityJsonLd(),
            {
                '@type': 'MedicalWebPage',
                '@id': `${SITE_URL}/services#webpage`,
                url: `${SITE_URL}/services`,
                name: '마음속내과의원 진료안내 및 6대 전문 클리닉 센터',
                description:
                    '위·대장내시경 클리닉, 국가건강검진·5대암검진 센터, 만성질환 클리닉, 간·복부초음파 클리닉, 갑상선·유방 클리닉, 호흡기·성인예방접종 클리닉 안내.',
                inLanguage: 'ko-KR',
                about: {
                    '@id': `${SITE_URL}/#clinic`,
                },
                mainEntity: {
                    '@type': 'ItemList',
                    itemListElement: CLINIC_CENTERS.map((c, idx) => ({
                        '@type': 'ListItem',
                        position: idx + 1,
                        item: {
                            '@type': 'MedicalSpecialty',
                            name: c.title,
                            description: `${c.description} (${c.highlights.join(', ')})`,
                        },
                    })),
                },
            },
            {
                '@type': 'FAQPage',
                '@id': `${SITE_URL}/services#faq`,
                mainEntity: CLINIC_FAQS.map((faq) => ({
                    '@type': 'Question',
                    name: faq.question,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: faq.answer,
                    },
                })),
            },
        ],
    };

    return (
        <div className="min-h-screen bg-[#FAF8F5]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-[#0B3B46] text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{ backgroundImage: "url('/images/clinic-interior.jpg')" }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'linear-gradient(120deg, rgba(11,59,70,0.95) 0%, rgba(11,59,70,0.82) 60%, rgba(24,24,27,0.92) 100%)',
                    }}
                />
                <div className="absolute inset-0 bg-architectural-grid-light opacity-40 pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#F4A261]" />
                            <span className="text-xs font-bold tracking-widest uppercase text-stone-100">
                                MEDICAL DEPARTMENTS &amp; CENTERS
                            </span>
                        </div>
                        <h1 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
                            진료안내 및 전문 클리닉
                        </h1>
                        <p className="text-base sm:text-lg text-stone-200/95 leading-relaxed">
                            “가족을 진료하는 마음으로 항상 최선을 다하겠습니다.”
                            <br />
                            마음속내과의원은 내과전문의 4인의 깊이 있는 협진과 대학병원급 검진장비로
                            소화기 내시경부터 5대 암검진, 만성질환까지 체계적인 의료 서비스를 제공합니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* 6 Specialized Centers Grid */}
            <section aria-label="6대 전문 진료 클리닉" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="grid md:grid-cols-2 gap-8">
                    {CLINIC_CENTERS.map((center) => (
                        <article
                            key={center.code}
                            className="bg-white rounded-[2rem] p-8 sm:p-10 border border-stone-200/90 shadow-[0_8px_30px_rgba(11,59,70,0.04)] editorial-card flex flex-col justify-between"
                        >
                            <div>
                                {/* Header */}
                                <div className="flex items-start justify-between gap-4 mb-6">
                                    <div>
                                        <span className="text-xs font-bold tracking-[0.2em] text-[#C25E28] uppercase block mb-1.5">
                                            {center.code} · {center.subtitle}
                                        </span>
                                        <h2 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-stone-900">
                                            {center.title}
                                        </h2>
                                    </div>
                                    <div className="w-14 h-14 rounded-2xl bg-[#EBF3F5] text-[#0B3B46] flex items-center justify-center shrink-0">
                                        {center.icon}
                                    </div>
                                </div>

                                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-7">
                                    {center.description}
                                </p>
                            </div>

                            {/* Highlights List */}
                            <div className="pt-6 border-t border-stone-100">
                                <ul className="space-y-2.5">
                                    {center.highlights.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm text-stone-700 font-medium">
                                            <span className="w-5 h-5 rounded-full bg-[#FDF4EE] text-[#C25E28] flex items-center justify-center shrink-0 mt-0.5">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Clinic Interior & Hours Section */}
            <section aria-label="진료시간 및 위치 안내" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="bg-white rounded-[2.25rem] overflow-hidden border border-stone-200/90 shadow-[0_16px_50px_rgba(11,59,70,0.06)] grid lg:grid-cols-12">
                    {/* Left Photo */}
                    <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[380px]">
                        <Image
                            src="/images/clinic-interior.jpg"
                            alt="마음속내과의원 내부 전경"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                        <div className="absolute bottom-7 left-7 right-7 text-white">
                            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#F4A261] mb-1">
                                MAEUMSOK INTERNAL MEDICINE
                            </p>
                            <h3 className="font-serif-editorial text-2xl font-bold mb-1">
                                쾌적하고 편안한 진료 환경
                            </h3>
                            <p className="text-sm text-stone-200">
                                인천광역시 계양구 장제로 871 위너빌딩 3층
                            </p>
                        </div>
                    </div>

                    {/* Right Hours & CTA */}
                    <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
                        <div>
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C25E28] block mb-2">
                                CONSULTATION HOURS
                            </span>
                            <h2 className="font-serif-editorial text-3xl font-bold text-stone-900 mb-6">
                                진료시간 안내
                            </h2>

                            <div className="space-y-4 text-sm sm:text-base mb-8">
                                <div className="flex justify-between items-center py-3 border-b border-stone-100">
                                    <span className="font-bold text-stone-800">평일 (월 ~ 금)</span>
                                    <span className="font-bold text-stone-900">08:30 ~ 19:00</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-stone-100">
                                    <span className="font-bold text-stone-700">점심시간 (월 ~ 금)</span>
                                    <span className="text-stone-600 font-medium">13:00 ~ 14:00</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-stone-100">
                                    <span className="font-bold text-[#C25E28]">토요일</span>
                                    <span className="font-bold text-stone-900">
                                        08:30 ~ 14:00{' '}
                                        <span className="text-xs font-semibold text-[#C25E28] ml-1">
                                            (점심시간 없이 진료)
                                        </span>
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="font-bold text-red-600">일요일 / 공휴일</span>
                                    <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold">
                                        휴진
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-stone-100">
                            <a
                                href="tel:032-541-6767"
                                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#0B3B46] hover:bg-[#135666] text-white text-sm font-bold transition-all shadow-md"
                            >
                                <svg className="w-4 h-4 text-[#F4A261]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>032-541-6767 전화 상담</span>
                            </a>
                            <a
                                href="https://map.naver.com/p/search/마음속내과의원 계양구"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#FAF8F5] hover:bg-stone-200/70 text-stone-800 border border-stone-200/90 text-sm font-bold transition-colors"
                            >
                                <span>네이버 지도 길찾기</span>
                                <svg className="w-4 h-4 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
