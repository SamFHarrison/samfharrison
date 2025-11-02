export interface Article {
  title: string;
  slug: string;
}

type ArticleList = Article[];

export const articleList: ArticleList = [
  {
    title: "How I Git Good",
    slug: "how-i-git-good",
  },
];
