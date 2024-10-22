import { TailwindIndicator } from '@/components/tailwind-indicator';
import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';

interface LayoutProps {
  params: { lang: string };
  children: ReactNode;
}

export default function Layout({ children, params }: LayoutProps) {
  return (
    <RootProvider>
      {children}
      <TailwindIndicator />
    </RootProvider>
  );
}
