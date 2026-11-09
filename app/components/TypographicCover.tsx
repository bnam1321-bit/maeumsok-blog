import React from 'react';

interface TypographicCoverProps {
    title: string;
    tags?: string[];
    slug: string;
    className?: string;
    showTags?: boolean;
}

const LOCATION_NOISE = new Set([
    '계양구내과',
    '인천계양내과',
    '인천 계양구 내과',
    '계양동내과',
    '인천내과',
    '마음속내과',
    '마음속내과의원',
    '내과',
    '건강정보',
    '진료안내',
]);

function pickClinicalBadge(tags?: string[], title = ''): string {
    if (tags && tags.length > 0) {
        const clean = tags.find((t) => t && !LOCATION_NOISE.has(t.trim()));
        if (clean) return clean;
    }
    if (title.includes('내시경') || title.includes('식도') || title.includes('위') || title.includes('장')) return '소화기·내시경';
    if (title.includes('갑상선')) return '갑상선클리닉';
    if (title.includes('간')) return '간질환클리닉';
    if (title.includes('혈압') || title.includes('당뇨') || title.includes('콜레스테롤') || title.includes('대사')) return '만성질환·대사';
    if (title.includes('기침') || title.includes('천식') || title.includes('호흡')) return '호흡기·내과';
    return '전문의 의학칼럼';
}

export default function TypographicCover({
    title,
    tags,
    slug,
    className = '',
    showTags = true,
}: TypographicCoverProps) {
    const themes = [
        {
            bg: 'linear-gradient(135deg, #0B3B46 0%, #124E5B 55%, #1D353B 100%)',
            accent: '#E07A3F',
            badgeBg: 'rgba(224, 122, 63, 0.22)',
            badgeBorder: 'rgba(244, 162, 97, 0.45)',
            badgeText: '#FCD5B5',
            label: 'GASTROENTEROLOGY & INTERNAL MEDICINE',
        },
        {
            bg: 'linear-gradient(135deg, #27221F 0%, #3D312A 55%, #1E292B 100%)',
            accent: '#D97706',
            badgeBg: 'rgba(217, 119, 6, 0.22)',
            badgeBorder: 'rgba(251, 191, 36, 0.4)',
            badgeText: '#FDE68A',
            label: 'CLINICAL SPECIALIST INSIGHT',
        },
        {
            bg: 'linear-gradient(135deg, #133A36 0%, #0F4C5C 60%, #09262E 100%)',
            accent: '#52B788',
            badgeBg: 'rgba(82, 183, 136, 0.2)',
            badgeBorder: 'rgba(116, 198, 157, 0.4)',
            badgeText: '#D8F3DC',
            label: 'PREVENTIVE CARE & CHECKUP',
        },
        {
            bg: 'linear-gradient(135deg, #1E293B 0%, #0F3E4D 55%, #111827 100%)',
            accent: '#F4A261',
            badgeBg: 'rgba(244, 162, 97, 0.2)',
            badgeBorder: 'rgba(244, 162, 97, 0.4)',
            badgeText: '#FFEDD5',
            label: 'MAEUMSOK MEDICAL JOURNAL',
        },
        {
            bg: 'linear-gradient(135deg, #432818 0%, #6F3826 52%, #1D2D35 100%)',
            accent: '#F4A261',
            badgeBg: 'rgba(255, 255, 255, 0.14)',
            badgeBorder: 'rgba(255, 255, 255, 0.3)',
            badgeText: '#FFF7ED',
            label: 'HEART & DIGESTIVE CLINIC',
        },
        {
            bg: 'linear-gradient(135deg, #0D2F38 0%, #1B4332 55%, #0B252C 100%)',
            accent: '#E9C46A',
            badgeBg: 'rgba(233, 196, 106, 0.18)',
            badgeBorder: 'rgba(233, 196, 106, 0.4)',
            badgeText: '#FEF3C7',
            label: '4 SPECIALISTS COLLABORATIVE CARE',
        },
    ];

    let hash = 0;
    const safeId = slug || title || 'default';
    for (let i = 0; i < safeId.length; i++) {
        hash = safeId.charCodeAt(i) + ((hash << 5) - hash);
    }
    const theme = themes[Math.abs(hash) % themes.length];
    const clinicalBadge = pickClinicalBadge(tags, title);

    return (
        <div
            className={`relative w-full h-full overflow-hidden select-none ${className}`}
            style={{ background: theme.bg }}
        >
            {/* Architectural Fine Grid */}
            <div className="absolute inset-0 bg-architectural-grid-light opacity-60" />

            {/* Soft Radial Glow */}
            <div
                className="absolute -top-16 -right-16 w-52 h-52 rounded-full blur-3xl opacity-25 pointer-events-none"
                style={{ backgroundColor: theme.accent }}
            />
            <div
                className="absolute -bottom-20 -left-16 w-48 h-48 rounded-full blur-3xl opacity-15 pointer-events-none"
                style={{ backgroundColor: '#FFFFFF' }}
            />

            {/* Delicate SVG Medical Seal Watermark */}
            <svg
                className="absolute -right-6 -bottom-6 w-36 h-36 text-white/[0.045] pointer-events-none transform -rotate-12"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
            >
                <circle cx="50" cy="50" r="42" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="32" />
                <path d="M50 28v44M28 50h44" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M38 42c4-6 12-6 12 2 0-8 8-8 12-2 4 6-4 14-12 20-8-6-16-14-12-20z" />
            </svg>

            {/* Content Container */}
            <div className="relative h-full flex flex-col justify-between p-6 sm:p-7">
                {/* Top Row: Topic Pill & Editorial Emblem */}
                <div className="flex items-center justify-between gap-2">
                    {showTags ? (
                        <span
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-tight backdrop-blur-md"
                            style={{
                                backgroundColor: theme.badgeBg,
                                border: `1px solid ${theme.badgeBorder}`,
                                color: theme.badgeText,
                            }}
                        >
                            <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: theme.accent }}
                            />
                            {clinicalBadge}
                        </span>
                    ) : (
                        <span />
                    )}

                    <span className="text-[10px] font-semibold tracking-[0.16em] text-white/45 uppercase">
                        MAEUMSOK M.D.
                    </span>
                </div>

                {/* Middle: Editorial Title */}
                <div className="my-auto py-2">
                    <p className="text-[10px] font-semibold tracking-[0.18em] text-white/50 uppercase mb-2 truncate">
                        {theme.label}
                    </p>
                    <h2 className="font-serif-editorial text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight line-clamp-2 drop-shadow-sm">
                        {title}
                    </h2>
                </div>

                {/* Bottom: Architectural Accent Rule */}
                <div className="flex items-center gap-3 pt-1">
                    <div
                        className="w-8 h-0.5 rounded-full"
                        style={{ backgroundColor: theme.accent }}
                    />
                    <span className="text-[11px] font-medium text-white/60 tracking-wide">
                        내과전문의 4인 감수 칼럼
                    </span>
                </div>
            </div>
        </div>
    );
}
