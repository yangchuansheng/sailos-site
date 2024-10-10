import { createI18nMiddleware } from 'fumadocs-core/i18n';
import { i18n } from '@/app/i18n';

export default createI18nMiddleware(i18n);

export const config = {
  // Matcher ignoring `/_next/`, `/api/`, `/image/`, and `/icons/`
  matcher: [
    '/((?!api|_next/static|_next/image|image/|icons/|favicon.ico|.*\\..*).)',
  ],
};
