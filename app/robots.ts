import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: [
                    'GPTBot',
                    'OAI-SearchBot',
                    'ChatGPT-User',
                    'ClaudeBot',
                    'Claude-Web',
                    'anthropic-ai',
                    'Google-Extended',
                    'Googlebot',
                    'PerplexityBot',
                    'Applebot-Extended',
                    'Yeti',
                    'Bingbot',
                    'Meta-ExternalAgent',
                    'Amazonbot',
                ],
                allow: ['/', '/llms.txt', '/llms-full.txt', '/blog', '/services'],
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}
