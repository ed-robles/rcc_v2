import type { Metadata } from "next";

const services = [
  {
    title: "Brand Strategy",
    description:
      "Positioning, identity systems, and storytelling that align your brand with the people you serve.",
  },
  {
    title: "Photography & Video",
    description:
      "On-location and studio production that captures the tone, emotion, and energy behind your work.",
  },
  {
    title: "Web Experiences",
    description:
      "Design, development, and hosting for modern marketing sites, portfolios, and commerce experiences.",
  },
  {
    title: "Content Support",
    description:
      "Campaign planning, launch assets, and ongoing creative support for teams that need a partner who can keep up.",
  },
];

export const metadata: Metadata = {
  title: "Services | Robles Creative Company",
  description:
    "Creative, production, and web services offered by Robles Creative Company.",
};

export default function ServicesPage() {
  return (
    <main className="content-page content-page--services">
      <div className="content-page__inner">
        <header className="content-page__header">
          <p className="eyebrow">Services</p>
          <h1>Strategic creative support built for growing brands.</h1>
          <p>
            We collaborate with founders, marketers, and studio teams to turn
            ideas into experiences that resonate. Every engagement is built
            around a clear process, hands-on partnership, and measurable
            outcomes.
          </p>
        </header>
        <section className="service-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </article>
          ))}
        </section>
        <footer className="content-page__footer">
          <p>
            Not sure where to start? We offer discovery sessions to audit your
            current creative assets and map out the next best move.
          </p>
        </footer>
      </div>
    </main>
  );
}
