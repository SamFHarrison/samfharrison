export interface Article {
  title: string;
  slug: string;
}

type ArticleList = Article[];

export const articleList: ArticleList = [
  {
    title: "Lego F1 Artwork",
    slug: "lego-f1-artwork",
  },
];
