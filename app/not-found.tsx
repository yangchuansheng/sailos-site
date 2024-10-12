import { redirect } from 'next/navigation';
import { i18n } from './i18n';

export default function NotFound() {
  redirect(`/${i18n.defaultLanguage}`);
}
