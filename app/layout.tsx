import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robles Creative Company",
  description: "Portfolio",
  icons: {
    icon: [
      {
        url: "/rcc_favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/rcc_favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      { url: "/rcc_favicon/favicon.ico", type: "image/x-icon" },
    ],
    apple: [{ url: "/rcc_favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/rcc_favicon/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body>
        <header className="site-header">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/rcc_planet_black.png"
            alt="RCC logo"
            style={{ width: 180, height: 101 }}
          />
        </header>
        <nav className="site-nav" aria-label="Primary navigation">
          <a className="site-nav__link" href="/">
            HOME
          </a>
          <a className="site-nav__link" href="/our-work">
            OUR WORK
          </a>
          <a className="site-nav__link" href="/contact">
            CONTACT
          </a>
        </nav>
        {children}
        <footer className="site-footer">
          <div className="footer-content">
            <div className="footer-column footer-brand">
              <p className="footer-heading">Robles Creative Company</p>
              <p className="footer-text">
                Independent studio partnering with founders and small businesses
                to build resonant brands and digital experiences.
              </p>
            </div>
            <div className="footer-column">
              <p className="footer-heading">Services</p>
              <ul className="footer-list">
                <li>Brand strategy</li>
                <li>Photography &amp; video production</li>
                <li>Web development &amp; hosting</li>
              </ul>
            </div>
            <div className="footer-column">
              <p className="footer-heading">Connect</p>
              <a
                href="mailto:edgar@roblescreativeco.com"
                className="footer-link"
              >
                <span className="footer-link-icon" aria-hidden>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="4"
                      y="6"
                      width="16"
                      height="12"
                      rx="1.5"
                      fill="none"
                    />
                    <path d="M5 7l7 5.25L19 7" />
                  </svg>
                </span>
                <span>Email</span>
              </a>
              <a
                href="https://instagram.com/roblescreativecompany"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <span className="footer-link-icon" aria-hidden>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="4"
                      fill="none"
                    />
                    <circle cx="12" cy="12" r="4" fill="none" />
                    <circle cx="17" cy="7" r="0.9" fill="currentColor" />
                  </svg>
                </span>
                <span>Instagram</span>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {currentYear} Robles Creative Company. All rights reserved.
            </span>
            <nav aria-label="Footer secondary navigation">
              <a
                href="mailto:edgar@roblescreativeco.com?subject=Project%20Inquiry"
                className="footer-link"
              >
                Email
              </a>
              <span className="footer-sep" aria-hidden>
                •
              </span>
              <a
                href="https://instagram.com/roblescreativecompany"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Instagram
              </a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
