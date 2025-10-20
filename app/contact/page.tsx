import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Robles Creative Company",
  description:
    "Connect with Robles Creative Company to start a project or learn more about our services.",
};

export default function ContactPage() {
  return (
    <main className="content-page">
      <div className="content-page__inner">
        <header className="content-page__header">
          <p className="eyebrow">Contact</p>
          <h1>Let's build something that moves your audience.</h1>
          <p>
            Share your timeline, goals, and the story you want to tell. We will
            follow up within two business days with next steps and availability.
          </p>
        </header>
        <section className="contact-options">
          <article className="contact-card">
            <h2>Email</h2>
            <p>
              For project inquiries, collaborations, and booking information,
              send a note and we will coordinate a discovery call.
            </p>
            <a
              className="contact-link"
              href="mailto:edgar@roblescreativeco.com"
            >
              edgar@roblescreativeco.com
            </a>
          </article>
          <article className="contact-card">
            <h2>Project Intake</h2>
            <p>
              Ready to move quickly? Share your timeline, budget considerations,
              and production goals so we can prep a tailored scope.
            </p>
            <a
              className="contact-link"
              href="mailto:edgar@roblescreativeco.com?subject=Project%20Intake"
            >
              Send intake details
            </a>
          </article>
          <article className="contact-card">
            <h2>Social</h2>
            <p>
              Follow @roblescreativecompany for behind-the-scenes looks, new
              work, and open studio dates.
            </p>
            <a
              className="contact-link"
              href="https://instagram.com/roblescreativecompany"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </article>
        </section>
        <footer className="content-page__footer">
          <p>
            Expect a reply within two business days. We look forward to hearing from you!
          </p>
        </footer>
      </div>
    </main>
  );
}
