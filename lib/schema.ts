import { SITE_URL, CLINIC_NAME } from './constants';

export const CLINIC_FACTS = {
    name: '마음속내과의원',
    shortName: CLINIC_NAME,
    englishName: 'Maeumsok Internal Medicine Clinic',
    slogan: '가족을 진료하는 마음으로 항상 최선을 다하겠습니다.',
    telephone: '032-541-6767',
    intlTelephone: '+82-32-541-6767',
    address: {
        full: '인천광역시 계양구 장제로 871 위너빌딩 3층',
        streetAddress: '장제로 871 위너빌딩 3층',
        addressLocality: '계양구',
        addressRegion: '인천광역시',
        postalCode: '21060',
        addressCountry: 'KR',
    },
    geo: {
        latitude: 37.537,
        longitude: 126.737,
    },
    specialistsCount: 4,
    specialistsDescription: '내과전문의 4인 협진 · 소화기 내시경 세부전문의 진료',
    areaServed: [
        '인천광역시 계양구',
        '계양동',
        '작전동',
        '계산동',
        '임학동',
        '용종동',
        '병방동',
        '박촌동',
        '귤현동',
    ],
    hours: {
        weekday: '08:30 - 19:00',
        lunch: '13:00 - 14:00 (평일)',
        saturday: '08:30 - 14:00 (점심시간 없이 진료)',
        closed: '일요일 및 공휴일 휴진',
    },
    departments: [
        '소화기내과 (위·대장내시경 클리닉)',
        '국민건강보험공단 지정 건강검진 · 5대 암검진 센터',
        '만성질환 클리닉 (고혈압·당뇨병·고지혈증·대사증후군·통풍·골다공증)',
        '간 질환 · 복부초음파 클리닉 (지방간·B/C형간염·담석증·담낭용종)',
        '갑상선 · 유방 내분비 클리닉 (갑상선기능저하증/항진증·갑상선/유방초음파)',
        '호흡기 · 성인 예방접종 및 영양수액 클리닉 (만성기침·천식·대상포진·독감·폐렴)',
    ],
    keyEquipment: [
        '대학병원급 고해상도 위·대장 내시경 시스템',
        '통증과 복부 팽만감을 줄이는 CO2 가스 무통 대장내시경 장비',
        '당일 대장 용종절제술(EMR) 시술 시스템',
        '고해상도 정밀 초음파 장비 (복부·간·담낭·갑상선·유방)',
        '철저한 1회용 기구 사용 및 표준화된 내시경 자동 소독 시스템',
    ],
};

export const CLINIC_FAQS = [
    {
        question: '마음속내과의원의 진료시간과 토요일 진료 여부는 어떻게 되나요?',
        answer:
            '마음속내과의원은 평일(월~금) 오전 08:30부터 오후 19:00까지 진료하며(평일 점심시간 13:00~14:00), 토요일은 오전 08:30부터 오후 14:00까지 점심시간 없이 연속 진료합니다. 일요일과 공휴일은 휴진입니다.',
    },
    {
        question: '마음속내과의원의 위치와 주소는 어디인가요?',
        answer:
            '인천광역시 계양구 장제로 871 위너빌딩 3층에 위치하고 있으며, 대표 전화번호는 032-541-6767입니다.',
    },
    {
        question: '위내시경과 대장내시경은 어떤 의료진이 진행하나요?',
        answer:
            '마음속내과의원은 내과전문의 4인 및 소화기 내시경 세부전문의가 상주하며 모든 위·대장내시경 검사를 직접 시행합니다. 또한 검사 후 복부 통증과 팽만감을 줄이기 위해 체내 흡수가 빠른 CO2 가스를 사용하며, 대장 용종 발견 시 당일 용종절제술(EMR)이 가능합니다.',
    },
    {
        question: '국가건강검진과 5대 암검진도 받을 수 있나요?',
        answer:
            '네, 국민건강보험공단 지정 건강검진 기관으로 일반건강검진, 생애전환기 검진, 그리고 5대 암검진(위암, 대장암, 간암, 유방암, 자궁경부암)을 모두 시행하고 있습니다.',
    },
    {
        question: '고혈압, 당뇨, 고지혈증 같은 만성질환이나 초음파 검사도 가능한가요?',
        answer:
            '네, 고혈압·당뇨병·고지혈증·통풍·골다공증 등 만성질환 주치의 관리를 제공하며, 대학병원급 초음파 장비를 통해 간·담낭·신장 등 복부초음파와 갑상선·유방 정밀 초음파 검사를 진행합니다.',
    },
];

export function getClinicEntityJsonLd() {
    return {
        '@type': ['MedicalClinic', 'MedicalOrganization', 'LocalBusiness'],
        '@id': `${SITE_URL}/#clinic`,
        name: CLINIC_FACTS.name,
        alternateName: [CLINIC_FACTS.shortName, '인천 계양구 마음속내과', CLINIC_FACTS.englishName],
        slogan: CLINIC_FACTS.slogan,
        description:
            '인천 계양구 장제로 871 위너빌딩 3층에 위치한 마음속내과의원입니다. 내과전문의 4인 협진 및 소화기 내시경 세부전문의 진료를 통해 위·대장내시경, 당일 용종절제술, 국가건강검진 및 5대 암검진, 복부·갑상선·유방 초음파, 만성질환 주치의 진료를 제공합니다.',
        url: SITE_URL,
        logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/images/logo.png`,
        },
        image: [
            `${SITE_URL}/images/clinic-interior.jpg`,
            `${SITE_URL}/images/logo.png`,
        ],
        telephone: CLINIC_FACTS.telephone,
        priceRange: '국민건강보험 적용 / 비급여 안내',
        address: {
            '@type': 'PostalAddress',
            streetAddress: CLINIC_FACTS.address.streetAddress,
            addressLocality: CLINIC_FACTS.address.addressLocality,
            addressRegion: CLINIC_FACTS.address.addressRegion,
            postalCode: CLINIC_FACTS.address.postalCode,
            addressCountry: CLINIC_FACTS.address.addressCountry,
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: CLINIC_FACTS.geo.latitude,
            longitude: CLINIC_FACTS.geo.longitude,
        },
        areaServed: CLINIC_FACTS.areaServed.map((area) => ({
            '@type': 'AdministrativeArea',
            name: area,
        })),
        medicalSpecialty: [
            'InternalMedicine',
            'Gastroenterology',
            'Endocrine',
            'Pulmonary',
            'PreventiveMedicine',
        ],
        availableService: CLINIC_FACTS.departments.map((dept) => ({
            '@type': 'MedicalProcedure',
            name: dept,
        })),
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:30',
                closes: '19:00',
            },
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '08:30',
                closes: '14:00',
            },
        ],
        knowsAbout: [
            '위내시경',
            '대장내시경',
            '대장 용종절제술',
            '국가건강검진',
            '5대 암검진',
            '역류성식도염',
            '만성위염',
            '과민성대장증후군',
            '고혈압',
            '당뇨병',
            '고지혈증',
            '이상지질혈증',
            '지방간',
            '간염',
            '갑상선기능저하증',
            '갑상선기능항진증',
            '갑상선결절',
            '만성기침',
            '골다공증',
            '통풍',
            '대상포진 예방접종',
        ],
    };
}

export function getRootGraphJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@graph': [
            getClinicEntityJsonLd(),
            {
                '@type': 'WebSite',
                '@id': `${SITE_URL}/#website`,
                url: SITE_URL,
                name: '마음속내과의원 공식 건강칼럼 · 진료안내',
                description: CLINIC_FACTS.slogan,
                inLanguage: 'ko-KR',
                publisher: {
                    '@id': `${SITE_URL}/#clinic`,
                },
            },
            {
                '@type': 'FAQPage',
                '@id': `${SITE_URL}/#faq`,
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
}
