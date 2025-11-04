export interface Article {
  title: string;
  slug: string;
}

type ArticleList = Article[];

export const articleList: ArticleList = [
  {
    title: "How I Git",
    slug: "how-i-git",
  },
];
