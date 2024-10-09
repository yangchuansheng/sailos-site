import { source } from '@/app/source';
import type { Metadata } from 'next';
import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
  DocsCategory,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';

export default async function Page({
  params,
}: {
  params: { lang: string; slug?: string[] };
}) {
  const page = source.getPage(params.slug, params.lang);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage
      toc={page.data.toc}
      tableOfContent={{
        style: 'clerk',
        single: false,
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <div
          className="relative z-[-1] flex place-items-center
      before:absolute before:h-[400px] before:w-[140px]
      before:translate-x-1
      before:translate-y-[-10px] before:rotate-[-32deg] before:rounded-full 
      before:bg-gradient-to-r before:from-[#0141ff]

      before:to-[#60c5ff] before:opacity-20
      before:blur-[100px] before:content-['']

      lg:before:h-[600px] lg:before:w-[240px] 
      lg:before:translate-x-[600px] 
      "
        ></div>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export function generateMetadata({
  params,
}: {
  params: { lang: string; slug?: string[] };
}) {
  const page = source.getPage(params.slug, params.lang);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
