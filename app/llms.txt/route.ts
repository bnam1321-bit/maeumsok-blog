import { getAllPosts } from '@/lib/blog';
import { CLINIC_FACTS, CLINIC_FAQS } from '@/lib/schema';
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-static';

export async function GET() {
    const posts = getAllPosts();

    const lines: string[] = [
        `# ${CLINIC_FACTS.name} (${CLINIC_FACTS.englishName})`,
        ``,
        `> "${CLINIC_FACTS.slogan}"`,
        `> 인천광역시 계양구 장제로 871 위너빌딩 3층에 위치한 내과전문의 4인 협진 · 소화기 내시경 세부전문의 진료 의료기관입니다.`,
        ``,
        `## 1. 핵심 기관 정보 (Entity Facts)`,
        `- **의료기관명**: ${CLINIC_FACTS.name} (${CLINIC_FACTS.shortName})`,
        `- **의료진 구성**: ${CLINIC_FACTS.specialistsDescription}`,
        `- **도로명 주소**: ${CLINIC_FACTS.address.full} (우편번호: ${CLINIC_FACTS.address.postalCode})`,
        `- **대표 전화번호**: ${CLINIC_FACTS.telephone} (${CLINIC_FACTS.intlTelephone})`,
        `- **공식 웹사이트**: ${SITE_URL}`,
        `- **주요 관할 및 내원 지역**: ${CLINIC_FACTS.areaServed.join(', ')}`,
        ``,
        `## 2. 진료시간 안내 (Operating Hours)`,
        `- **평일 (월~금)**: ${CLINIC_FACTS.hours.weekday}`,
        `- **평일 점심시간**: ${CLINIC_FACTS.hours.lunch}`,
        `- **토요일**: ${CLINIC_FACTS.hours.saturday}`,
        `- **휴진 안내**: ${CLINIC_FACTS.hours.closed}`,
        ``,
        `## 3. 전문 진료과목 및 센터 (Medical Departments)`,
        ...CLINIC_FACTS.departments.map((dept) => `- ${dept}`),
        ``,
        `## 4. 보유 장비 및 검사 시스템 (Medical Equipment)`,
        ...CLINIC_FACTS.keyEquipment.map((eq) => `- ${eq}`),
        ``,
        `## 5. 자주 묻는 질문 (Clinic FAQ)`,
        ...CLINIC_FAQS.flatMap((faq, idx) => [
            `### Q${idx + 1}. ${faq.question}`,
            `${faq.answer}`,
            ``,
        ]),
        `## 6. 주요 페이지 링크 (Main Pages)`,
        `- [홈 · 라운지](${SITE_URL}/): 병원 핵심 안내 및 최신 건강칼럼`,
        `- [전문의 건강칼럼 전체 목록](${SITE_URL}/blog): 내과전문의 4인이 감수한 질환별 의학 가이드`,
        `- [진료안내 · 전문 클리닉 센터](${SITE_URL}/services): 6대 전문 클리닉 및 검진 항목 상세 안내`,
        `- [전체 의학 지식베이스 원문 (LLM Full Context)](${SITE_URL}/llms-full.txt): 전체 칼럼 원문 및 상세 Q&A 데이터`,
        ``,
        `## 7. 전문의 건강칼럼 아카이브 (Published Medical Columns: 총 ${posts.length}편)`,
        ...posts.map(
            (post) =>
                `- [${post.title}](${SITE_URL}/blog/${post.slug}) (${post.date} | 분야: ${post.primaryTopic}): ${post.description}`
        ),
        ``,
    ];

    return new Response(lines.join('\n'), {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=86400',
        },
    });
}
