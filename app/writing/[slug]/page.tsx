import Link from "next/link";
import { ROUTES } from "../../routes";
import { articleList } from "./articles";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Article } = await import(`../articles/${slug}.mdx`);

  return (
    <main>
      <Link href={ROUTES.Home}>Back</Link>
      <Article />
    </main>
  );
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
