import { docs, meta } from '@/.source';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import { i18n } from '@/app/i18n';

export const source = loader({
  i18n,
  baseUrl: '/docs',
  source: createMDXSource(docs, meta)
});
