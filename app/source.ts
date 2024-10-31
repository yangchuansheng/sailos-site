import { docs, meta } from '@/.source';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import { icons } from 'lucide-react';
import { createElement } from 'react';
import { i18n } from '@/app/i18n';

export const source = loader({
  i18n,
  baseUrl: '/docs',
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      return;
    }
 
    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
  source: createMDXSource(docs, meta),
});
