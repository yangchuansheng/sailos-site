import { locales } from '@/app/i18n';
import { I18nProvider } from 'fumadocs-ui/i18n';
import { RootProvider } from 'fumadocs-ui/provider';
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
      <RootProvider>{children}</RootProvider>
    </I18nProvider>
  );
}
