import type { Metadata } from "next";
import Image from "next/image";
import maScImage from "./ma-sc.png";

const midwestArchive = {
  title: "Midwest Archive",
  href: "https://midwestarchive.com/",
  image: maScImage,
};

export const metadata: Metadata = {
  title: "Gallery | Robles Creative Company",
  description:
    "Highlights from photography and video projects by Robles Creative Company.",
};

export default function GalleryPage() {
  return (
    <main className="content-page content-page--gallery">
      <div className="content-page__inner">
        <header className="content-page__header">
          <p className="eyebrow">Gallery</p>
          <h1>Selected moments from recent collaborations.</h1>
          <p>
            A collection of highlights from projects by us.
          </p>
        </header>
        <section className="gallery-feature">
          <h2 className="gallery-feature__title">{midwestArchive.title}</h2>
          <p style={{ margin: 0, padding: 0, color: "#555555" }}>
            Midwest Archive is an online thrift store built with Next.js, Tailwind CSS, NextAuth.js, and Stripe. 
            <br />
          </p>
          <a
            className="gallery-feature__image-link"
            href={midwestArchive.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={midwestArchive.image}
              alt={`${midwestArchive.title} gallery showcase`}
              className="gallery-feature__image"
              sizes="(min-width: 960px) 832px, (min-width: 640px) 90vw, 100vw"
              priority
            />
          </a>
          <p style={{color: 'black', margin: 0, fontSize: 12 }}>Click the image to visit the site.</p>
        </section>
        
        <footer className="content-page__footer">
          <p></p>
        </footer>
      </div>
    </main>
  );
}
