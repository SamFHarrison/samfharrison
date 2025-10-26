import Image from 'next/image';
import Avatar from './assets/avatar.png';
import './page.css';

export default function Home() {
  return (
    <main role="main">
      <div className="hero-container">
        <Image
          src={Avatar}
          alt="Digital avatar of Sam, he has blonde hair, glasses and a friendly expression, styled in a cartoonish emoji-like appearance"
          className="hero-widget-avatar"
          width={75}
          height={75}
          priority
        />

        <div className="title-wrapper">
          <h1>Sam F-Harrison</h1>
        </div>

        <p className="tag-line">
          Designing and building applications for the web and mobile.
        </p>
      </div>
    </main>
  );
}
