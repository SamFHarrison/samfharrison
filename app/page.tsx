import Link from "next/link";
import { articleList } from "./writing/[slug]/articles";
import { LINKS, ROUTES } from "./lib/contants";
import "./page.css";
import NavLink from "./lib/components/HomeLink/NavLink";

export default function Home() {
  return (
    <main>
      <h1 className="home-heading">Sam F-Harrison</h1>
      <hr />
      <p>
        Frontend Software Engineer building web applications, design systems,
        developer tools, and novel interfaces.
      </p>

      <section>
        <h2>Work</h2>

        <ul>
          <li>
            <div className="list-wrapper">
              <Link href={LINKS.NatWestChatGPTApp}>
                NatWest Mortgages ChatGPT App
              </Link>
              <p className="secondary-text">
                The UK's first ChatGPT app from a bank that helps customers
                explore mortgages conversationally.
              </p>
            </div>
          </li>

          <li>
            <div className="list-wrapper">
              <Link href={LINKS.ThemeManagerLibrary}>
                @bigsams/theme-manager
              </Link>
              <p className="secondary-text">
                Open-source React theming library designed to support scalable
                design-system architecture.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section>
        <div className="section-header">
          <h2>Notes</h2>

          <NavLink href={ROUTES.Notes} label="See all" direction="forward" />
        </div>

        <ul>
          {articleList.slice(0, 5).map((article) => {
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
  );
}
