import { getAllPosts } from '@/lib/blog';
import { CLINIC_FACTS, CLINIC_FAQS } from '@/lib/schema';
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-static';

export async function GET() {
    const posts = getAllPosts();

    const sections: string[] = [
        `# ${CLINIC_FACTS.name} (${CLINIC_FACTS.englishName}) — Full LLM Knowledge Base`,
        ``,
        `> "${CLINIC_FACTS.slogan}"`,
        `> 본 문서는 AI 검색엔진(ChatGPT, Perplexity, Gemini, Claude, Naver Cue 등)이 마음속내과의원의 진료 정보와 전문의 의학칼럼을 정확하게 인용할 수 있도록 구조화된 전체 지식베이스 문서입니다.`,
        ``,
        `## 기관 기본 팩트 (Clinic Entity Facts)`,
        `- 의료기관명: ${CLINIC_FACTS.name}`,
        `- 의료진: ${CLINIC_FACTS.specialistsDescription}`,
        `- 주소: ${CLINIC_FACTS.address.full}`,
        `- 전화번호: ${CLINIC_FACTS.telephone}`,
        `- 평일 진료시간: ${CLINIC_FACTS.hours.weekday} (점심시간: ${CLINIC_FACTS.hours.lunch})`,
        `- 토요일 진료시간: ${CLINIC_FACTS.hours.saturday}`,
        `- 일요일/공휴일: ${CLINIC_FACTS.hours.closed}`,
        `- 진료분야: ${CLINIC_FACTS.departments.join(' / ')}`,
        `- 주요장비: ${CLINIC_FACTS.keyEquipment.join(' / ')}`,
        ``,
        `## 병원 자주 묻는 질문 (Clinic Official FAQ)`,
        ...CLINIC_FAQS.map((f, i) => `Q${i + 1}: ${f.question}\nA${i + 1}: ${f.answer}\n`),
        `---`,
        ``,
        `## 전문의 의학칼럼 전문 (Medical Columns Full Text - 최신 ${ Math.min(posts.length, 30) }편)`,
        ``,
        ...posts.slice(0, 30).flatMap((post, index) => [
            `### [${index + 1}] ${post.title}`,
            `- URL: ${SITE_URL}/blog/${post.slug}`,
            `- 발행일: ${post.date}`,
            `- 진료분야: ${post.primaryTopic}`,
            `- 핵심 키워드: ${post.tags.join(', ')}`,
            `- 핵심 요약: ${post.description}`,
            ``,
            post.content.trim(),
            ``,
            `---`,
            ``,
        ]),
    ];

    return new Response(sections.join('\n'), {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=86400',
        },
    });
}
