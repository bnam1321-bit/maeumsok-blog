import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { getClinicEntityJsonLd, CLINIC_FACTS } from '@/lib/schema';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CLINIC_NAME, SITE_URL } from '@/lib/constants';
import TypographicCover from '@/app/components/TypographicCover';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: '페이지를 찾을 수 없습니다.',
        };
    }

    return {
        title: `${post.title} | ${CLINIC_NAME}`,
        description: post.description,
        keywords: [
            ...(post.tags || []),
            CLINIC_NAME,
            '마음속내과의원',
            '계양구내과',
            '인천계양내과',
            '계양동내과',
            '인천 계양구 내과',
            '계양구건강검진',
            '계양구위내시경',
            '계양구대장내시경',
        ],
        alternates: {
            canonical: `${SITE_URL}/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
            url: `${SITE_URL}/blog/${post.slug}`,
            siteName: '마음속내과의원',
            authors: ['마음속내과의원 내과전문의 4인'],
            images: [
                {
                    url: post.coverImage || '/images/clinic-interior.jpg',
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const allPosts = getAllPosts();
    const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
    const articleUrl = `${SITE_URL}/blog/${post.slug}`;

    // Multi-entity @graph JSON-LD (MedicalWebPage + BlogPosting + BreadcrumbList + Automatic FAQPage)
    const graphEntities: Record<string, unknown>[] = [
        getClinicEntityJsonLd(),
        {
            '@type': ['MedicalWebPage', 'BlogPosting'],
            '@id': `${articleUrl}#article`,
            mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': articleUrl,
            },
            headline: post.title,
            name: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.date,
            inLanguage: 'ko-KR',
            articleSection: post.primaryTopic,
            keywords: (post.tags || []).join(', '),
            author: {
                '@id': `${SITE_URL}/#clinic`,
            },
            reviewedBy: {
                '@id': `${SITE_URL}/#clinic`,
            },
            publisher: {
                '@id': `${SITE_URL}/#clinic`,
            },
            about: post.topicTags.map((tag) => ({
                '@type': 'MedicalCondition',
                name: tag,
            })),
        },
        {
            '@type': 'BreadcrumbList',
            '@id': `${articleUrl}#breadcrumb`,
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: '마음속내과의원 홈',
                    item: SITE_URL,
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: '전문의 건강칼럼',
                    item: `${SITE_URL}/blog`,
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    name: post.title,
                    item: articleUrl,
                },
            ],
        },
    ];

    if (post.faqs && post.faqs.length > 0) {
        graphEntities.push({
            '@type': 'FAQPage',
            '@id': `${articleUrl}#faq`,
            mainEntity: post.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                },
            })),
        });
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': graphEntities,
    };

    return (
        <div className="min-h-screen bg-[#FAF8F5]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Top Breadcrumb Bar */}
            <nav
                aria-label="현재 위치 경로"
                className="bg-white/80 backdrop-blur-md border-b border-stone-200/80"
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-xs sm:text-sm">
                    <ol className="flex items-center gap-2 text-stone-500 truncate">
                        <li>
                            <Link href="/" className="hover:text-[#0B3B46] transition-colors font-medium">
                                홈
                            </Link>
                        </li>
                        <li className="text-stone-300">/</li>
                        <li>
                            <Link href="/blog" className="hover:text-[#0B3B46] transition-colors font-semibold text-stone-700">
                                전문의 건강칼럼
                            </Link>
                        </li>
                        <li className="text-stone-300 hidden sm:inline">/</li>
                        <li className="text-[#0B3B46] font-semibold hidden sm:inline truncate">
                            {post.primaryTopic}
                        </li>
                    </ol>

                    <div className="hidden sm:flex items-center gap-2 text-stone-400 text-xs shrink-0">
                        <span>마음속내과의원</span>
                        <span>·</span>
                        <span className="text-[#0B3B46] font-semibold">내과전문의 4인 감수</span>
                    </div>
                </div>
            </nav>

            <article
                itemScope
                itemType="https://schema.org/MedicalWebPage"
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
            >
                {/* Editorial Article Header */}
                <header className="mb-10 sm:mb-12">
                    <div className="flex flex-wrap items-center gap-2.5 mb-6">
                        <span className="px-3.5 py-1.5 bg-[#0B3B46] text-white rounded-full text-xs font-bold tracking-wide">
                            {post.primaryTopic}
                        </span>
                        <span className="px-3.5 py-1.5 bg-[#EBF3F5] text-[#0B3B46] rounded-full text-xs font-semibold">
                            전문의 의학칼럼
                        </span>
                        <time
                            itemProp="datePublished"
                            dateTime={post.date}
                            className="text-stone-500 text-xs sm:text-sm font-medium flex items-center gap-1.5 ml-1"
                        >
                            <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {post.date}
                        </time>
                        <span className="text-stone-300">·</span>
                        <span className="text-stone-500 text-xs sm:text-sm font-medium">
                            약 {post.readingTime}분 소요
                        </span>
                    </div>

                    <h1
                        itemProp="headline"
                        className="font-serif-editorial text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-stone-900 leading-[1.28] tracking-tight mb-7"
                    >
                        {post.title}
                    </h1>

                    {/* Clinical Summary & Structured Metadata Box */}
                    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 border-l-4 border-l-[#C25E28] shadow-sm space-y-5">
                        {post.description && (
                            <div>
                                <p className="text-xs font-bold tracking-widest uppercase text-[#C25E28] mb-1.5">
                                    CLINICAL SUMMARY · 핵심 의학 요약
                                </p>
                                <p
                                    itemProp="description"
                                    className="text-base sm:text-lg text-stone-800 leading-relaxed font-medium"
                                >
                                    {post.description}
                                </p>
                            </div>
                        )}

                        {/* Structured Metadata Definition List for LLM & Patient Trust */}
                        <dl className="grid sm:grid-cols-3 gap-3 pt-4 border-t border-stone-100 text-xs">
                            <div>
                                <dt className="text-stone-400 font-semibold mb-0.5">감수 의료기관</dt>
                                <dd className="font-bold text-stone-800">{CLINIC_FACTS.name} (인천 계양구)</dd>
                            </div>
                            <div>
                                <dt className="text-stone-400 font-semibold mb-0.5">담당 전문의</dt>
                                <dd className="font-bold text-[#0B3B46]">{CLINIC_FACTS.specialistsDescription}</dd>
                            </div>
                            <div>
                                <dt className="text-stone-400 font-semibold mb-0.5">관련 진료센터</dt>
                                <dd className="font-bold text-stone-800">{post.primaryTopic} · 내과 검진센터</dd>
                            </div>
                        </dl>

                        {/* Automatic Table of Contents (칼럼 목차) */}
                        {post.headings && post.headings.length > 0 && (
                            <nav aria-label="칼럼 주요 목차" className="pt-4 border-t border-stone-100">
                                <p className="text-xs font-bold tracking-wider uppercase text-stone-400 mb-2.5">
                                    ARTICLE OUTLINE · 칼럼 주요 내용
                                </p>
                                <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs sm:text-sm text-stone-600 list-decimal list-inside">
                                    {post.headings.map((h, i) => (
                                        <li key={i} className="truncate font-medium">
                                            {h.text}
                                        </li>
                                    ))}
                                </ol>
                            </nav>
                        )}
                    </div>
                </header>

                {/* Main Article Content Sheet */}
                <div
                    itemProp="mainContentOfPage"
                    className="bg-white rounded-[2rem] shadow-[0_12px_45px_rgba(11,59,70,0.05)] border border-stone-200/90 p-6 sm:p-12 lg:p-14 mb-10"
                >
                    <div className="editorial-prose max-w-none">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>

                    {/* Tags Inside Bottom of Paper */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-stone-200/80">
                            <p className="text-xs font-bold tracking-widest uppercase text-stone-400 mb-3">
                                RELATED MEDICAL KEYWORDS
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3.5 py-1.5 bg-[#FAF8F5] border border-stone-200/80 text-stone-600 rounded-full text-xs font-semibold"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Specialist Signature & Clinic Consultation Card */}
                <aside
                    aria-label="마음속내과의원 진료 및 상담 안내"
                    className="bg-[#0B3B46] text-white rounded-[2rem] p-7 sm:p-10 mb-14 shadow-xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-architectural-grid-light opacity-40 pointer-events-none" />
                    <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/15">
                            <div className="flex items-center gap-4">
                                <div className="bg-white rounded-2xl px-3.5 py-2 shrink-0 shadow-sm">
                                    <Image
                                        src="/images/logo.png"
                                        alt="마음속내과의원"
                                        width={130}
                                        height={36}
                                        className="h-9 w-auto object-contain"
                                    />
                                </div>
                                <div>
                                    <p className="text-xs font-bold tracking-wider uppercase text-[#F4A261]">
                                        HEART &amp; DIGESTIVE DISEASE CLINIC
                                    </p>
                                    <h3 className="font-serif-editorial text-xl font-bold text-white">
                                        마음속내과의원 진료실 안내
                                    </h3>
                                </div>
                            </div>
                            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-stone-100 self-start sm:self-auto">
                                내과전문의 4인 · 소화기 내시경 세부전문의
                            </span>
                        </div>

                        <p className="text-stone-200 text-sm sm:text-base leading-relaxed mb-6">
                            “가족을 진료하는 마음으로 항상 최선을 다하겠습니다.”
                            <br />
                            본 칼럼은 의료광고법을 준수하며 내과전문의의 의학적 견해를 바탕으로 작성되었습니다.
                            증상이 지속되거나 정밀 검진이 필요한 경우 내원하시어 전문의와 상의하시기 바랍니다.
                        </p>

                        <dl className="grid sm:grid-cols-2 gap-3.5 p-4 rounded-2xl bg-white/10 border border-white/15 text-xs sm:text-sm text-stone-100 mb-6">
                            <div className="flex items-center gap-2.5">
                                <svg className="w-4 h-4 text-[#F4A261] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div>
                                    <dt className="sr-only">주소</dt>
                                    <dd>인천광역시 계양구 장제로 871 위너빌딩 3층</dd>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <svg className="w-4 h-4 text-[#F4A261] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <dt className="sr-only">진료시간</dt>
                                    <dd>평일 08:30–19:00 · 토요일 08:30–14:00 (노런치)</dd>
                                </div>
                            </div>
                        </dl>

                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex flex-wrap items-center gap-3">
                                <a
                                    href="tel:032-541-6767"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#C25E28] hover:bg-[#D46B32] text-white text-sm font-bold transition-colors shadow-sm"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>032-541-6767 전화문의</span>
                                </a>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white text-sm font-semibold transition-colors"
                                >
                                    <span>진료안내 보기</span>
                                </Link>
                            </div>

                            <a
                                href={`https://github.com/bnam1321-bit/maeumsok-blog/edit/master/content/posts/${encodeURIComponent(post.slug)}.md`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/40 hover:text-white/80 text-xs underline underline-offset-4 transition-colors"
                            >
                                관리자 수정
                            </a>
                        </div>
                    </div>
                </aside>

                {/* Related Columns */}
                {relatedPosts.length > 0 && (
                    <section aria-label="관련 건강칼럼 추천" className="pt-6 border-t border-stone-200/90">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <p className="text-xs font-bold tracking-widest uppercase text-[#C25E28] mb-1">
                                    MORE MEDICAL COLUMNS
                                </p>
                                <h2 className="font-serif-editorial text-2xl font-bold text-stone-900">
                                    함께 읽으면 좋은 건강칼럼
                                </h2>
                            </div>
                            <Link
                                href="/blog"
                                className="text-sm font-bold text-[#0B3B46] hover:text-[#C25E28] transition-colors"
                            >
                                전체보기 →
                            </Link>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-5">
                            {relatedPosts.map((rel) => (
                                <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group block">
                                    <div className="h-full bg-white rounded-2xl overflow-hidden border border-stone-200/80 editorial-card flex flex-col">
                                        <div className="h-36 w-full overflow-hidden">
                                            <TypographicCover
                                                title={rel.title}
                                                tags={rel.topicTags}
                                                slug={rel.slug}
                                                className="transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-4 flex-1 flex flex-col justify-between">
                                            <h3 className="font-serif-editorial text-sm font-bold text-stone-900 group-hover:text-[#0B3B46] line-clamp-2 leading-snug mb-2">
                                                {rel.title}
                                            </h3>
                                            <span className="text-[11px] text-stone-400 font-medium">
                                                {rel.date} · {rel.readingTime}분 읽기
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </article>
        </div>
    );
}
