export interface Article {
  title: string;
  slug: string;
}

type ArticleList = Article[];

export const articleList: ArticleList = [
  {
    title: "A Deep Reflection of 2025",
    slug: "a-deep-reflection-of-2025",
  },
  {
    title: "How I Git",
    slug: "how-i-git",
  },
  {
    title: "'Feel like shit' Checklist",
    slug: "feel-like-shit-checklist",
  },
];
