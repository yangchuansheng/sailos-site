import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/home-layout';
import { baseOptions } from '@/app/layout.config';
import { I18nProvider } from 'fumadocs-ui/i18n';
import { locales } from '@/app/i18n';
import { RootProvider } from 'fumadocs-ui/provider';

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
            search: '搜索'
          }
        }[params.lang]
      }
    >
      <RootProvider>
        <HomeLayout {...baseOptions}>{children}</HomeLayout>
      </RootProvider>
    </I18nProvider>
  );
}
