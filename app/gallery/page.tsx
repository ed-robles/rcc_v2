import type { Metadata } from "next";
import Image from "next/image";
import maScImage from "./ma-sc.png";

const midwestArchive = {
  title: "Midwest Archive",
  href: "https://midwestarchive.com/",
  image: maScImage,
};

const lasGardenias = {
  title: "Las Gardenias",
  images: [
    {
      src: "/ceviche-1.webp",
      alt: "Ceviche tostadas plated at Las Gardenias in Milwaukee",
    },
    {
      src: "/tacos-1.webp",
      alt: "Taco plate garnished with fresh radishes at Las Gardenias",
    },
    {
      src: "/tacos-2.webp",
      alt: "Tray of tacos ready to be served at Las Gardenias",
    },
    {
      src: "/drink-2.webp",
      alt: "Bartender pouring a cocktail at Las Gardenias in Milwaukee",
    },
  ],
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
            A collection of highlights from recent projects and collaborations.
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

        <section className="gallery-client">
          <h2 className="gallery-feature__title">{lasGardenias.title}</h2>
          <p className="gallery-client__description">
            Captured vibrant images of food and drink in collaboration with the new regional Mexican restaurant.
          </p>
          <div className="gallery-grid">
            {lasGardenias.images.map((image) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={1200}
                height={800}
                className="gallery-grid__image"
                sizes="(min-width: 960px) 280px, (min-width: 640px) 45vw, 90vw"
              />
            ))}
          </div>
        </section>

        <footer className="content-page__footer">
          <p></p>
        </footer>
      </div>
    </main>
  );
}
