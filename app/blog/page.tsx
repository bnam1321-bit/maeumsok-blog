import { getAllPosts } from '@/lib/blog';
import { getClinicEntityJsonLd } from '@/lib/schema';
import { SITE_URL } from '@/lib/constants';
import BlogExplorer from '@/app/components/BlogExplorer';

export const metadata = {
    title: '전문의 건강칼럼 | 마음속내과의원',
    description: '인천 계양구 마음속내과의원 내과전문의 4인이 직접 전하는 위·대장내시경, 만성질환, 갑상선·간질환, 건강검진 의학칼럼.',
    alternates: {
        canonical: `${SITE_URL}/blog`,
    },
};

export default function BlogPage() {
    const posts = getAllPosts();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            getClinicEntityJsonLd(),
            {
                '@type': 'CollectionPage',
                '@id': `${SITE_URL}/blog#collection`,
                url: `${SITE_URL}/blog`,
                name: '마음속내과의원 전문의 건강칼럼 아카이브',
                description:
                    '내과전문의 4인 및 소화기 내시경 세부전문의가 직접 감수한 소화기 질환, 만성질환, 간·갑상선 질환, 건강검진 가이드.',
                inLanguage: 'ko-KR',
                isPartOf: {
                    '@id': `${SITE_URL}/#website`,
                },
                about: {
                    '@id': `${SITE_URL}/#clinic`,
                },
                mainEntity: {
                    '@type': 'ItemList',
                    numberOfItems: posts.length,
                    itemListElement: posts.slice(0, 30).map((post, idx) => ({
                        '@type': 'ListItem',
                        position: idx + 1,
                        url: `${SITE_URL}/blog/${post.slug}`,
                        name: post.title,
                    })),
                },
            },
        ],
    };

    return (
        <div className="min-h-screen bg-[#FAF8F5]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Editorial Archive Header */}
            <section className="relative overflow-hidden bg-[#0B3B46] text-white border-b border-white/10">
                <div className="absolute inset-0 bg-architectural-grid-light opacity-50 pointer-events-none" />
                <div
                    className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
                    style={{ backgroundColor: '#E07A3F' }}
                />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F4A261]" />
                            <span className="text-xs font-bold tracking-widest uppercase text-stone-100">
                                MAEUMSOK MEDICAL ARCHIVE
                            </span>
                        </div>
                        <h1 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
                            전문의 건강칼럼
                        </h1>
                        <p className="text-base sm:text-lg text-stone-200/90 leading-relaxed">
                            마음속내과의원 내과전문의 4인이 진료실에서의 임상 경험과 검증된 의학 근거를 바탕으로
                            환자분들의 건강한 일상을 위한 의학 가이드를 전해드립니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* Interactive Column Explorer */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
                <BlogExplorer posts={posts} showFeatured={true} />
            </section>
        </div>
    );
}
