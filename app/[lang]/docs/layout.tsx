import { locales } from '@/app/i18n';
import { getOptionsForLanguage } from '@/app/layout.config';
import { source } from '@/app/source';
import { I18nProvider } from 'fumadocs-ui/i18n';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';

interface LayoutProps {
  params: { lang: string };
  children: ReactNode;
}

export default function Layout({ children, params }: LayoutProps) {
  return (
    <I18nProvider
      locale={params.lang}
      locales={locales}
      translations={
        {
          zh: {
            search: '搜索',
          },
        }[params.lang]
      }
    >
      <DocsLayout
        tree={source.pageTree[params.lang]}
        {...getOptionsForLanguage(params.lang)}
      >
        {children}
      </DocsLayout>
    </I18nProvider>
  );
}
