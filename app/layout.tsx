import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="site-header">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/rcc_planet.png"
            alt="RCC logo"
            style={{ width: 180, height: 101 }}
          />
        </header>
        {children}
        <footer className="site-footer">
          <nav aria-label="Footer">
            <a href="mailto:edgar@roblescreativeco.com" className="footer-link">
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
        </footer>
      </body>
    </html>
  );
}
