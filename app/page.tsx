import Link from "next/link";
import { Footer } from "./components";
import { articleList } from "./writing/[slug]/articles";

export default function Home() {
  const articleTitles = articleList.map((article) => article.title);

  return (
    <>
      {/* <p className="secondary-text">samfharrison.com</p> */}

      <h1>Sam F-Harrison</h1>

      <p className="secondary-text">Software Engineer, UI</p>

      <hr />

      <main>
        <p>
          This is the corner of the web where I keep some code, some thoughts
          and some memories I want to keep.
        </p>

        <section>
          <h2>Writing</h2>

          <p>
            I think I'll use this as a digital scrapbook - including TIL's,
            note-to-self's and maybe even the odd opinion or two.
          </p>

          <ul>
            {articleList.map((article) => {
              return (
                <li key={article.slug}>
                  <Link href={`/writing/${article.slug}`}>{article.title}</Link>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}
