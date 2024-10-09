import { env } from '@/env.mjs';
import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Sailos',
  author: 'zjy365',
  description: 'sailos',
  keywords: ['sailos', 'Next.js'],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: '',
  },
  links: {
    github: env.NEXT_PUBLIC_OPEN_SOURCE_URL,
    twitter: '',
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.png?${new Date().getTime()}`,
};
