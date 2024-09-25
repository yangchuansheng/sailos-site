import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './global.css';

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
      <body>{children}</body>
    </html>
  );
}
