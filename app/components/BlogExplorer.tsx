'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import type { Post } from '@/lib/blog';
import TypographicCover from './TypographicCover';

interface BlogExplorerProps {
    posts: Post[];
    showFeatured?: boolean;
}

type CategoryKey = 'all' | 'digestive' | 'chronic' | 'endocrine' | 'respiratory';

const CATEGORIES: { key: CategoryKey; label: string; sub: string }[] = [
    { key: 'all', label: '전체 칼럼', sub: 'All Columns' },
    { key: 'digestive', label: '위·대장·소화기', sub: 'Gastroenterology' },
    { key: 'chronic', label: '만성질환·혈관·대사', sub: 'Chronic & Metabolic' },
    { key: 'endocrine', label: '간·갑상선·내분비', sub: 'Liver & Thyroid' },
    { key: 'respiratory', label: '호흡기·면역·기타', sub: 'Respiratory & Care' },
];

function classifyPost(post: Post): CategoryKey {
    const text = `${post.title} ${post.description} ${(post.tags || []).join(' ')}`;
    if (/내시경|식도|위염|위궤양|대장|장염|과민성|소화|헬리코박터|역류|용종|변비|설사/.test(text)) {
        return 'digestive';
    }
    if (/갑상선|지방간|간염|간기능|간질환|담낭|유방/.test(text)) {
        return 'endocrine';
    }
    if (/혈압|당뇨|콜레스테롤|고지혈|대사증후군|통풍|신장|콩팥|골다공증|빈혈|혈당|혈관/.test(text)) {
        return 'chronic';
    }
    return 'respiratory';
}

export default function BlogExplorer({ posts, showFeatured = true }: BlogExplorerProps) {
    const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const categoryCounts = useMemo(() => {
        const counts: Record<CategoryKey, number> = {
            all: posts.length,
            digestive: 0,
            chronic: 0,
            endocrine: 0,
            respiratory: 0,
        };
        posts.forEach((p) => {
            const cat = classifyPost(p);
            counts[cat] += 1;
        });
        return counts;
    }, [posts]);

    const filteredPosts = useMemo(() => {
        return posts.filter((post) => {
            const matchesCategory =
                selectedCategory === 'all' || classifyPost(post) === selectedCategory;

            const q = searchQuery.trim().toLowerCase();
            if (!q) return matchesCategory;

            const haystack = `${post.title} ${post.description} ${(post.tags || []).join(' ')}`.toLowerCase();
            return matchesCategory && haystack.includes(q);
        });
    }, [posts, selectedCategory, searchQuery]);

    const isDefaultView = selectedCategory === 'all' && searchQuery.trim() === '' && showFeatured;
    const featuredPost = isDefaultView && filteredPosts.length > 0 ? filteredPosts[0] : null;
    const gridPosts = featuredPost ? filteredPosts.slice(1) : filteredPosts;

    if (posts.length === 0) {
        return (
            <div className="text-center py-28 bg-white rounded-[2rem] border border-stone-200/80 shadow-sm">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#EBF3F5] text-[#0B3B46] mb-6">
                    <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </div>
                <h3 className="font-serif-editorial text-2xl font-bold text-stone-900 mb-2">
                    새로운 건강칼럼을 준비하고 있습니다
                </h3>
                <p className="text-stone-500">
                    내과전문의 4인이 직접 감수한 유익한 의학 정보를 곧 만나보실 수 있습니다.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-12">
            {/* Featured Lead Column (최신 대표 칼럼) */}
            {featuredPost && (
                <div className="relative">
                    <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-2.5">
                            <span className="w-2 h-2 rounded-full bg-[#C25E28]" />
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0B3B46]">
                                Featured Medical Column · 최신 대표 칼럼
                            </span>
                        </div>
                        <span className="hidden sm:inline-block text-xs text-stone-500">
                            마음속내과의원 전문의 감수
                        </span>
                    </div>

                    <Link href={`/blog/${featuredPost.slug}`} className="group block">
                        <article className="grid lg:grid-cols-12 bg-white rounded-[2rem] overflow-hidden border border-stone-200/90 shadow-[0_12px_40px_rgba(11,59,70,0.06)] editorial-card">
                            {/* Left Cover Visual */}
                            <div className="lg:col-span-6 relative min-h-[280px] sm:min-h-[340px] lg:min-h-[380px] overflow-hidden">
                                <TypographicCover
                                    title={featuredPost.title}
                                    tags={featuredPost.topicTags}
                                    slug={featuredPost.slug}
                                    className="transition-transform duration-700 group-hover:scale-[1.03]"
                                />
                                <div className="absolute top-5 right-5 z-10">
                                    <span className="px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-black/45 text-white backdrop-blur-md border border-white/20">
                                        NEW · {featuredPost.date}
                                    </span>
                                </div>
                            </div>

                            {/* Right Editorial Content */}
                            <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between bg-white">
                                <div>
                                    {/* Meta Badges */}
                                    <div className="flex flex-wrap items-center gap-2 mb-5">
                                        <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#EBF3F5] text-[#0B3B46]">
                                            {featuredPost.primaryTopic}
                                        </span>
                                        {featuredPost.topicTags.slice(1, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-600"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                        <span className="ml-auto text-xs text-stone-400 font-medium flex items-center gap-1">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            약 {featuredPost.readingTime}분 읽기
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-stone-900 group-hover:text-[#0B3B46] transition-colors leading-snug mb-4">
                                        {featuredPost.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-stone-600 text-base leading-relaxed line-clamp-3 mb-8">
                                        {featuredPost.description}
                                    </p>
                                </div>

                                {/* Bottom Author & CTA */}
                                <div className="pt-6 border-t border-stone-100 flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[#0B3B46] text-white flex items-center justify-center font-serif-editorial font-bold text-sm shadow-sm">
                                            心
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-stone-900">
                                                마음속내과의원 진료실 칼럼
                                            </p>
                                            <p className="text-[11px] text-stone-500">
                                                내과전문의 4인 · 소화기 내시경 세부전문의
                                            </p>
                                        </div>
                                    </div>

                                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF8F5] group-hover:bg-[#0B3B46] text-[#0B3B46] group-hover:text-white text-sm font-bold transition-all duration-300 border border-stone-200/80 group-hover:border-[#0B3B46]">
                                        칼럼 읽기
                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </article>
                    </Link>
                </div>
            )}

            {/* Filter & Search Bar */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-stone-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Category Pills */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 no-scrollbar">
                        {CATEGORIES.map((cat) => {
                            const active = selectedCategory === cat.key;
                            return (
                                <button
                                    key={cat.key}
                                    type="button"
                                    onClick={() => setSelectedCategory(cat.key)}
                                    className={`shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-bold transition-all duration-200 ${
                                        active
                                            ? 'bg-[#0B3B46] text-white shadow-sm'
                                            : 'bg-[#FAF8F5] text-stone-600 hover:bg-stone-200/60 hover:text-stone-900'
                                    }`}
                                >
                                    <span>{cat.label}</span>
                                    <span
                                        className={`px-2 py-0.5 rounded-full text-[11px] ${
                                            active
                                                ? 'bg-white/20 text-white'
                                                : 'bg-stone-200/80 text-stone-600'
                                        }`}
                                    >
                                        {categoryCounts[cat.key]}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Search Input */}
                    <div className="relative w-full lg:w-80 shrink-0">
                        <svg
                            className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="증상·질환 검색 (예: 기침, 역류성식도염, 지방간)"
                            className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-[#FAF8F5] border border-stone-200/90 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-[#0B3B46] focus:bg-white transition-colors"
                        />
                        {searchQuery && (
                            <button
                                type="button"
                                onClick={() => setSearchQuery('')}
                                aria-label="검색어 지우기"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs p-1"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Posts Grid */}
            {filteredPosts.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border border-stone-200/80">
                    <p className="text-lg font-bold text-stone-800 mb-2">
                        검색 조건에 맞는 건강칼럼이 없습니다.
                    </p>
                    <p className="text-sm text-stone-500 mb-6">
                        다른 증상 키워드를 입력하시거나 전체 칼럼 보기를 선택해 주세요.
                    </p>
                    <button
                        type="button"
                        onClick={() => {
                            setSelectedCategory('all');
                            setSearchQuery('');
                        }}
                        className="px-5 py-2.5 rounded-full bg-[#0B3B46] text-white text-sm font-semibold hover:bg-[#135666] transition-colors"
                    >
                        전체 칼럼 보기
                    </button>
                </div>
            ) : (
                <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {gridPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                            <article className="h-full flex flex-col bg-white rounded-[1.75rem] overflow-hidden border border-stone-200/85 shadow-[0_6px_25px_rgba(11,59,70,0.04)] editorial-card">
                                {/* Top Cover */}
                                <div className="relative h-52 w-full overflow-hidden">
                                    <TypographicCover
                                        title={post.title}
                                        tags={post.topicTags}
                                        slug={post.slug}
                                        className="transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-3.5 right-4 z-10">
                                        <span className="px-2.5 py-1 bg-black/45 backdrop-blur-md text-white/95 rounded-full text-[11px] font-medium border border-white/15">
                                            {post.date}
                                        </span>
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                                    <div>
                                        {/* Topic Chips & Reading Time */}
                                        <div className="flex items-center justify-between gap-2 mb-3">
                                            <div className="flex flex-wrap gap-1.5">
                                                {post.topicTags.slice(0, 2).map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2.5 py-0.5 rounded-md bg-[#FAF8F5] border border-stone-200/80 text-stone-600 text-[11px] font-semibold"
                                                    >
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <span className="text-[11px] text-stone-400 font-medium shrink-0">
                                                {post.readingTime}분 읽기
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="font-serif-editorial text-xl font-bold text-stone-900 mb-3 line-clamp-2 group-hover:text-[#0B3B46] transition-colors leading-snug">
                                            {post.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-stone-600 text-sm line-clamp-3 leading-relaxed mb-6">
                                            {post.description}
                                        </p>
                                    </div>

                                    {/* Card Footer */}
                                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                                        <span className="text-xs font-semibold text-stone-400">
                                            마음속내과 전문의 칼럼
                                        </span>
                                        <span className="text-[#C25E28] group-hover:text-[#0B3B46] text-xs font-bold inline-flex items-center gap-1.5 transition-colors">
                                            자세히 보기
                                            <svg
                                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
