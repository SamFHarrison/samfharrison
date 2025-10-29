import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <header>
        <p className="secondary-text">samfharrison.com</p>
        <h1>Sam F-Harrison</h1>
        <p className="secondary-text">Software Engineer, UI</p>
        <hr />
      </header>

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
          <p className="secondary-text">
            I'm still writing my first article...
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
