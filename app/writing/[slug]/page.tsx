import { articleList } from "./articles";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Article } = await import(`../articles/${slug}.mdx`);

  return <Article />;
}

export function generateStaticParams() {
  const articleSlugs = articleList.map((article) => {
    return {
      slug: article.slug,
    };
  });

  return articleSlugs;
}

export const dynamicParams = false;
