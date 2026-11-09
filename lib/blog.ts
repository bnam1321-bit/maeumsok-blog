import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export type Post = {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
    topicTags: string[];
    primaryTopic: string;
    readingTime: number;
    content: string;
    coverImage?: string;
};

const LOCATION_NOISE_TAGS = new Set([
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

export function extractTopicTags(tags: string[] = [], title = ''): string[] {
    const filtered = tags
        .map((t) => t.trim())
        .filter((t) => t.length > 0 && !LOCATION_NOISE_TAGS.has(t));

    if (filtered.length > 0) {
        return filtered;
    }

    // Fallback: infer from title if all tags were generic location tags
    if (title.includes('내시경')) return ['위·대장내시경'];
    if (title.includes('갑상선')) return ['갑상선클리닉'];
    if (title.includes('간') || title.includes('지방간')) return ['간질환클리닉'];
    if (title.includes('혈압') || title.includes('당뇨') || title.includes('고지혈') || title.includes('콜레스테롤')) return ['만성질환관리'];
    if (title.includes('기침') || title.includes('천식') || title.includes('호흡')) return ['호흡기·내과'];
    return ['전문의 칼럼'];
}

function estimateReadingMinutes(content: string): number {
    const charCount = content.replace(/\s+/g, '').length;
    return Math.max(2, Math.round(charCount / 750));
}

export function getAllPosts(): Post[] {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md'));
    const allPostsData = fileNames
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);

            // 본문 생성 실패 템플릿은 노출 제외
            if (content.includes('본문 생성 실패로 인한 기본 템플릿입니다')) {
                return null;
            }

            const title = data.title || '제목 없음';
            const tags: string[] = Array.isArray(data.tags) ? data.tags : [];
            const topicTags = extractTopicTags(tags, title);

            return {
                slug,
                content,
                title,
                date: data.date || new Date().toISOString().split('T')[0],
                description: data.description || '',
                tags,
                topicTags,
                primaryTopic: topicTags[0] || '전문의 칼럼',
                readingTime: estimateReadingMinutes(content),
                ...data,
            } as Post;
        })
        .filter((post): post is Post => post !== null);

    // 날짜순 정렬 (최신순)
    return allPostsData.sort((a, b) => {
        return a.date < b.date ? 1 : -1;
    });
}

export function getPostBySlug(slug: string): Post | null {
    try {
        const decodedSlug = decodeURIComponent(slug);
        const fullPath = path.join(postsDirectory, `${decodedSlug}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        const title = data.title || '제목 없음';
        const tags: string[] = Array.isArray(data.tags) ? data.tags : [];
        const topicTags = extractTopicTags(tags, title);

        return {
            slug,
            content,
            title,
            date: data.date,
            description: data.description,
            tags,
            topicTags,
            primaryTopic: topicTags[0] || '전문의 칼럼',
            readingTime: estimateReadingMinutes(content),
            ...data,
        } as Post;
    } catch (_err) {
        return null;
    }
}
