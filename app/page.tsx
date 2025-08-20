"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

// All images found in /public. These resolve at runtime as "/<name>" paths.
const ALL_IMAGES = [
  "/collage1.png",
  "/DSC01049.jpg",
  "/DSC00625.jpg",
  "/DSC00642.jpg",
  "/DSC00698.jpg",
  "/IMG_2086.JPG",
  "/IMG_1146.jpg",

  "/IMG_4638.jpg",
  "/IMG_4664.jpg",
  "/IMG_4667.jpg",
  "/IMG_1267.jpg",
  "/IMG_1577.jpg",
  "/IMG_1596.jpg",
  "/IMG_1154.jpg",
  "/IMG_1651.jpg",
  "/IMG_1698.jpg",
];

export default function HomePage() {
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const openFullScreen = useCallback((src: string) => {
    setFullScreenImage(src);
  }, []);

  const closeFullScreen = useCallback(() => {
    setFullScreenImage(null);
  }, []);

  const scrollLeft = useCallback(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  }, []);

  const scrollRight = useCallback(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  }, []);

  return (
    <main style={{ padding: "20px" }}>
      <div className="gallery-container">
        <button
          className="scroll-btn left"
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          ‹
        </button>
        <div className="horizontal-gallery" ref={scrollContainerRef}>
          {ALL_IMAGES.map((src, idx) => (
            <div className="gallery-item" key={idx}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt="Gallery image"
                loading="lazy"
                onClick={() => openFullScreen(src)}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
        </div>
        <button
          className="scroll-btn right"
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>
      {fullScreenImage && (
        <div
          className="fullscreen-overlay"
          onClick={closeFullScreen}
          role="dialog"
          aria-modal="true"
        >
          <Image
            src={fullScreenImage}
            alt="Full screen view"
            className="fullscreen-image"
            fill
            sizes="100vw"
          />
        </div>
      )}
      <section className="text-section" aria-label="Content">
        <p>
          We specialize in creating images that are both visually striking and
          deeply meaningful — for individuals, brands, and events. From candid
          portraits to carefully composed editorial shots, our goal is to
          deliver photography that captures not just how things look, but how
          they feel.
        </p>
        <p>
          This portfolio is a collection of our favorite frames. Click on any
          image to see it in full, and explore the way we see the world.
        </p>
        <p>
          If our style resonates with you, we’d love to talk about how we can
          create something together.
        </p>
      </section>
    </main>
  );
}
