import Link from "next/link";
import { articleList } from "./writing/[slug]/articles";
import { LINKS, ROUTES } from "./lib/contants";

export default function Home() {
  const articleTitles = articleList.map((article) => article.title);

  return (
    <>
      <h1>Sam F-Harrison</h1>

      <p className="secondary-text">Software Engineer, UI</p>

      <hr />

      <main>
        <p>Welcome to my corner of the web. 👋🏼</p>

        <section>
          <h2>Projects</h2>

          <ul>
            <li>
              <Link href={LINKS.NatWestChatGPTApp}>
                NatWest Mortgages ChatGPT App
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>Writing</h2>

          <ul>
            {articleList.map((article) => {
              return (
                <li key={article.slug}>
                  <Link href={`${ROUTES.Writing}/${article.slug}`}>
                    {article.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}
