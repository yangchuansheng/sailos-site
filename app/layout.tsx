import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';

const inter = Inter({
  subsets: ['latin'],
});

interface LayoutProps {
  params: { lang: string };
  children: ReactNode;
}

export default function Layout({ children, params }: LayoutProps) {
  return (
    <html
      lang={params.lang}
      className={inter.className}
      suppressHydrationWarning
    >
      <body>
        <RootProvider
          theme={{
            forcedTheme: 'light',
            defaultTheme: 'light',
            enabled: false,
            enableSystem: false,
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
