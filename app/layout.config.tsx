import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
import { LANGUAGES } from './i18n';
/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: Record<(typeof LANGUAGES)[number], HomeLayoutProps> =
  {
    en: {
      i18n: true,
      nav: {
        title: 'Sailos',
        url: '/en',
      },
      githubUrl: 'https://github.com/zjy365/sailos-site',
      links: [
        {
          text: 'Documentation',
          url: '/docs',
          active: 'nested-url',
        },
      ],
    },
    zh: {
      i18n: true,
      nav: {
        title: 'Sailos-zh',
        url: '/zh',
      },
      githubUrl: 'https://github.com/zjy365/sailos-site',
      links: [
        {
          text: '文档',
          url: '/docs',
          active: 'nested-url',
        },
      ],
    },
  };

export function getOptionsForLanguage(
  lang: (typeof LANGUAGES)[number],
): HomeLayoutProps {
  return baseOptions[lang];
}

export const HeaderLinks = [
  {
    text: 'App Store',
    url: 'https://template.usw.sailos.io',
  },
  {
    text: 'Docs',
    url: '/en/docs',
  },
  // {
  //   text: 'Pricing',
  //   url: '/pricing',
  // },
  // {
  //   text: 'Blog',
  //   url: '/blog',
  // },
  {
    text: 'Contact',
    url: '/contact',
  },
];
