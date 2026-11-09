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

function extractCoverConcept(title: string, tags?: string[]) {
    const cleanTags = (tags || [])
        .map((t) => t.trim())
        .filter((t) => t.length > 0 && !LOCATION_NOISE.has(t));

    const badge = cleanTags[0] || '전문의 칼럼';

    // Smart extraction of a concise 2~4 word Core Medical Subject for the art cover
    let coreSubject = '';
    if (title.includes(':')) {
        const afterColon = title.split(':')[1]?.trim() || '';
        coreSubject = afterColon.split(',')[0]?.trim() || '';
    } else if (title.includes('?')) {
        const afterQuestion = title.split('?')[1]?.trim() || '';
        coreSubject = afterQuestion
            .replace(/^(내과 전문의가 알려주는|전문의가 설명하는|원인부터|정확한)\s*/g, '')
            .trim();
    } else if (title.includes(',')) {
        coreSubject = title.split(',')[0]?.trim() || '';
    }

    if (!coreSubject || coreSubject.length > 18 || coreSubject.length < 3) {
        if (cleanTags.length >= 2) {
            coreSubject = `${cleanTags[0]} · ${cleanTags[1]}`;
        } else if (cleanTags.length === 1) {
            coreSubject = `${cleanTags[0]} 집중 분석`;
        } else {
            coreSubject = title.slice(0, 14);
        }
    }

    // English department classification
    const text = `${title} ${cleanTags.join(' ')}`;
    let department = 'INTERNAL MEDICINE INSIGHT';
    let code = 'IM';
    if (/내시경|식도|위염|위궤양|대장|장염|과민성|소화|헬리코박터|역류|용종|변비|설사/.test(text)) {
        department = 'GASTROENTEROLOGY & ENDOSCOPY';
        code = 'GI';
    } else if (/갑상선|호르몬|유방/.test(text)) {
        department = 'THYROID & ENDOCRINE CLINIC';
        code = 'EN';
    } else if (/지방간|간염|간기능|간질환|담낭|담석/.test(text)) {
        department = 'HEPATOLOGY & ULTRASOUND';
        code = 'HP';
    } else if (/혈압|당뇨|콜레스테롤|고지혈|대사증후군|통풍|신장|콩팥|골다공증|빈혈|혈당|혈관/.test(text)) {
        department = 'CARDIOMETABOLIC & CHRONIC CARE';
        code = 'CM';
    } else if (/기침|감기|천식|대상포진|어지럼증|이석증|수면|무호흡|비타민/.test(text)) {
        department = 'RESPIRATORY & PREVENTIVE CARE';
        code = 'RP';
    }

    return { badge, coreSubject, department, code };
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
            bg: 'linear-gradient(145deg, #092C35 0%, #0F4654 55%, #071F26 100%)',
            accent: '#E58A4E',
            pillBg: 'rgba(229, 138, 78, 0.16)',
            pillBorder: 'rgba(229, 138, 78, 0.38)',
            pillText: '#FCD9B8',
            ringColor: 'rgba(229, 138, 78, 0.18)',
        },
        {
            bg: 'linear-gradient(145deg, #211D1A 0%, #362C26 55%, #171513 100%)',
            accent: '#E09F5A',
            pillBg: 'rgba(224, 159, 90, 0.16)',
            pillBorder: 'rgba(224, 159, 90, 0.36)',
            pillText: '#FDE6C4',
            ringColor: 'rgba(224, 159, 90, 0.16)',
        },
        {
            bg: 'linear-gradient(145deg, #10332E 0%, #194A43 55%, #0A221F 100%)',
            accent: '#74C69D',
            pillBg: 'rgba(116, 198, 157, 0.15)',
            pillBorder: 'rgba(116, 198, 157, 0.35)',
            pillText: '#D8F3DC',
            ringColor: 'rgba(116, 198, 157, 0.16)',
        },
        {
            bg: 'linear-gradient(145deg, #172334 0%, #1F364D 55%, #0F1824 100%)',
            accent: '#F4A261',
            pillBg: 'rgba(244, 162, 97, 0.16)',
            pillBorder: 'rgba(244, 162, 97, 0.36)',
            pillText: '#FFE8D1',
            ringColor: 'rgba(244, 162, 97, 0.16)',
        },
        {
            bg: 'linear-gradient(145deg, #3A2218 0%, #573122 55%, #23150F 100%)',
            accent: '#F4A261',
            pillBg: 'rgba(255, 255, 255, 0.12)',
            pillBorder: 'rgba(255, 255, 255, 0.26)',
            pillText: '#FFF3E6',
            ringColor: 'rgba(244, 162, 97, 0.18)',
        },
        {
            bg: 'linear-gradient(145deg, #1E282A 0%, #2C3D40 55%, #141B1D 100%)',
            accent: '#E9C46A',
            pillBg: 'rgba(233, 196, 106, 0.15)',
            pillBorder: 'rgba(233, 196, 106, 0.35)',
            pillText: '#FEF3C7',
            ringColor: 'rgba(233, 196, 106, 0.15)',
        },
    ];

    let hash = 0;
    const safeId = slug || title || 'default';
    for (let i = 0; i < safeId.length; i++) {
        hash = safeId.charCodeAt(i) + ((hash << 5) - hash);
    }
    const theme = themes[Math.abs(hash) % themes.length];
    const { badge, coreSubject, department, code } = extractCoverConcept(title, tags);

    return (
        <div
            className={`relative w-full h-full overflow-hidden select-none ${className}`}
            style={{ background: theme.bg }}
        >
            {/* Fine Architectural Grid */}
            <div className="absolute inset-0 bg-architectural-grid-light opacity-45" />

            {/* Ambient Radial Lighting */}
            <div
                className="absolute -top-20 -right-16 w-56 h-56 rounded-full blur-3xl opacity-25 pointer-events-none"
                style={{ backgroundColor: theme.accent }}
            />

            {/* Minimalist Architectural Concentric Rings */}
            <svg
                className="absolute -right-10 -bottom-10 w-48 h-48 pointer-events-none"
                viewBox="0 0 200 200"
                fill="none"
            >
                <circle cx="100" cy="100" r="85" stroke={theme.ringColor} strokeWidth="1" />
                <circle cx="100" cy="100" r="62" stroke={theme.ringColor} strokeWidth="1" strokeDasharray="3 4" />
                <circle cx="100" cy="100" r="38" stroke={theme.ringColor} strokeWidth="1" />
                <line x1="15" y1="100" x2="185" y2="100" stroke={theme.ringColor} strokeWidth="0.75" />
                <line x1="100" y1="15" x2="100" y2="185" stroke={theme.ringColor} strokeWidth="0.75" />
            </svg>

            {/* Cover Content Layout */}
            <div className="relative h-full flex flex-col justify-between p-6 sm:p-7">
                {/* Top Row: Clinical Topic Pill & Series Code */}
                <div className="flex items-center justify-between gap-3">
                    {showTags ? (
                        <span
                            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-normal backdrop-blur-md"
                            style={{
                                backgroundColor: theme.pillBg,
                                border: `1px solid ${theme.pillBorder}`,
                                color: theme.pillText,
                            }}
                        >
                            <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: theme.accent }}
                            />
                            {badge}
                        </span>
                    ) : (
                        <span />
                    )}

                    <span className="font-mono text-[10px] font-semibold tracking-[0.2em] text-white/40 uppercase">
                        SERIES · {code}
                    </span>
                </div>

                {/* Center: Core Medical Subject (Spacious, Non-repetitive Editorial Art Title) */}
                <div className="my-auto py-3">
                    <p
                        className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2.5"
                        style={{ color: theme.accent }}
                    >
                        {department}
                    </p>
                    <div className="font-serif-editorial text-2xl sm:text-[1.65rem] font-bold text-white leading-[1.45] tracking-[-0.015em] line-clamp-2 drop-shadow-sm">
                        {coreSubject}
                    </div>
                </div>

                {/* Bottom: Editorial Seal */}
                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <div className="flex items-center gap-2.5">
                        <span
                            className="w-5 h-0.5 rounded-full"
                            style={{ backgroundColor: theme.accent }}
                        />
                        <span className="text-[11px] font-medium text-white/65 tracking-normal">
                            마음속내과 전문의 칼럼
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
