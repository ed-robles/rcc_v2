import type { Metadata } from "next";

const galleryHighlights = [
  {
    title: "Product Stories",
    description:
      "Launch imagery and motion for founders bringing new products to market.",
  },
  {
    title: "Hospitality & Events",
    description:
      "Immersive coverage that captures the energy of gatherings, openings, and cultural experiences.",
  },
  {
    title: "People & Portraits",
    description:
      "Editorial portraits and team features shaped with intentional lighting and composition.",
  },
  {
    title: "On Location",
    description:
      "Documentary-style visuals that highlight spaces, process, and community.",
  },
];

export const metadata: Metadata = {
  title: "Gallery | Robles Creative Company",
  description:
    "Highlights from photography and video projects by Robles Creative Company.",
};

export default function GalleryPage() {
  return (
    <main className="content-page">
      <div className="content-page__inner">
        <header className="content-page__header">
          <p className="eyebrow">Gallery</p>
          <h1>Selected moments from recent collaborations.</h1>
          <p>
            A snapshot of the imagery and motion work we create for brands,
            hospitality teams, and creatives across the Midwest and beyond. The
            full archive is available on request.
          </p>
        </header>
        <section className="gallery-grid">
          {galleryHighlights.map((highlight) => (
            <article key={highlight.title} className="gallery-card">
              <h2>{highlight.title}</h2>
              <p>{highlight.description}</p>
            </article>
          ))}
        </section>
        <footer className="content-page__footer">
          <p>
            Want to see more? Share a bit about your project and we will curate
            a collection that aligns with your industry and goals.
          </p>
        </footer>
      </div>
    </main>
  );
}
