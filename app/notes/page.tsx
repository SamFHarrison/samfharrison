import Link from "next/link";
import { articleList } from "../writing/[slug]/articles";
import { ROUTES } from "../lib/contants";
import NavLink from "../lib/components/HomeLink/NavLink";

export default function Notes() {
  return (
    <main>
      <nav>
        <NavLink href={ROUTES.Home} label="Home" isAbsolute />
      </nav>

      <h1>Notes</h1>

      <hr />

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
    </main>
  );
}
