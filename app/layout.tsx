import type { Metadata, Viewport } from "next";
import "./globals.css";
import LogoHeader from "@/components/LogoHeader";
import NavBar from "@/components/NavBar";
import MainFooter from "@/components/MainFooter";

export const metadata: Metadata = {
  title: "Robles Creative Company",
  description: "A creative agency based in Milwaukee, WI - specializing in photography, video production, and web services.",
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
      <body>
        <header className="site-topbar">
          <LogoHeader />
          <NavBar />
        </header>
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
