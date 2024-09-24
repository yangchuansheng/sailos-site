import { locales } from '@/app/i18n';
import { source } from '@/app/source';
import { I18nProvider } from 'fumadocs-ui/i18n';
import { DocsLayout } from 'fumadocs-ui/layout';
import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import { baseOptions } from '../../layout.config';

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
        <DocsLayout tree={source.pageTree[params.lang]} {...baseOptions}>
          {children}
        </DocsLayout>
      </RootProvider>
    </I18nProvider>
  );
}
