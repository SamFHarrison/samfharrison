import Link from "next/link";
import { articleList } from "./writing/[slug]/articles";
import { LINKS, ROUTES } from "./lib/contants";

export default function Home() {
  const articleTitles = articleList.map((article) => article.title);

  return (
    <>
      <main>
        <h1>Sam F-Harrison</h1>
        <p className="secondary-text">Frontend Software Engineer</p>

        <hr />

        <p>
          Building web applications, design systems, developer tools, and novel
          interfaces.
        </p>

        <section>
          <h2>Work</h2>

          <ul>
            <li>
              <div>
                <Link href={LINKS.NatWestChatGPTApp}>
                  NatWest Mortgages ChatGPT App
                </Link>
                <br />
                <p className="secondary-text">
                  The UK's first ChatGPT app from a bank that helps customers
                  explore mortgages conversationally.
                </p>
              </div>
            </li>

            <li>
              <div>
                <Link href={LINKS.ThemeManagerLibrary}>
                  @bigsams/theme-manager
                </Link>
                <br />
                <p className="secondary-text">
                  Open-source React theming library designed to support scalable
                  design-system architecture.
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h2>Notes</h2>

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
