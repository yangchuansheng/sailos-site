import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { LANGUAGES } from './i18n';
import Image from 'next/image';
/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: Record<(typeof LANGUAGES)[number], BaseLayoutProps> =
  {
    en: {
      i18n: true,
      disableThemeSwitch: true,
      nav: {
        title: (
          <div className="flex items-center gap-1">
            <Image alt="Sailos" src="/logo.svg" width={24} height={24} />
            <span className="hidden text-base font-bold md:block">Sailos</span>
          </div>
        ),
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
      disableThemeSwitch: true,
      nav: {
        title: (
          <div className="flex items-center gap-1">
            <Image alt="Sailos" src="/logo.svg" width={24} height={24} />
            <span className="hidden text-base font-bold md:block">Sailos</span>
          </div>
        ),
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
): BaseLayoutProps {
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
