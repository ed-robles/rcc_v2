"use client";

import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";

// All images found in /public. These resolve at runtime as "/<name>" paths.
const ALL_IMAGES = [
  "/DSC00625.jpg",
  "/DSC00642.jpg",
  "/DSC00698.jpg",
  "/DSC01029.jpg",
  "/DSC01049.jpg",
  "/DSC01195.jpg",
  "/IMG_1146.jpg",
  "/IMG_1154.jpg",
  "/IMG_1267.jpg",
  "/IMG_1577.jpg",
  "/IMG_1596.jpg",
  "/IMG_1651.jpg",
  "/IMG_1698.jpg",
  "/IMG_2086.JPG",
  "/IMG_4638.jpg",
  "/IMG_4664.jpg",
  "/IMG_4667.jpg",
];

export default function HomePage() {
  // Optionally let callers customize speed via CSS var
  const scrollerStyle = {
    "--scroll-duration": "45s",
  } as CSSProperties;

  // Lightbox state
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const masonryARef = useRef<HTMLDivElement | null>(null);
  const masonryBRef = useRef<HTMLDivElement | null>(null);

  // Helper to set grid-row-end based on intrinsic aspect ratio for stability
  const rafId = useRef<number | null>(null);
  const relayout = useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      const doFor = (container: HTMLDivElement | null) => {
        if (!container) return;
        const grid = container;
        const styles = getComputedStyle(grid);
        const rowSize = parseFloat(styles.getPropertyValue("grid-auto-rows"));
        const gap = parseFloat(styles.getPropertyValue("gap"));
        const items = Array.from(
          grid.querySelectorAll<HTMLElement>(".masonry-item")
        );
        for (const item of items) {
          const img = item.querySelector<HTMLImageElement>("img");
          if (!img || !img.naturalWidth || !img.naturalHeight) continue;
          const itemWidth = item.getBoundingClientRect().width;
          const targetHeight =
            (img.naturalHeight / img.naturalWidth) * itemWidth;
          const span = Math.ceil((targetHeight + gap) / (rowSize + gap));
          item.style.gridRowEnd = `span ${span}`;
        }
      };
      doFor(masonryARef.current);
      doFor(masonryBRef.current);
    });
  }, []);

  const openAt = useCallback((i: number) => {
    setIndex(i % ALL_IMAGES.length);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % ALL_IMAGES.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + ALL_IMAGES.length) % ALL_IMAGES.length);
  }, []);

  // Keyboard controls when lightbox open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close, next, prev]);

  // Recalculate spans on resize and initial mount
  useEffect(() => {
    const onResize = () => relayout();
    window.addEventListener("resize", onResize);
    // Observe container size changes for precise recalculation
    const RO: typeof ResizeObserver | undefined = (
      window as unknown as { ResizeObserver?: typeof ResizeObserver }
    ).ResizeObserver;
    const ro = RO ? new RO(() => relayout()) : null;
    if (ro) {
      if (masonryARef.current) ro.observe(masonryARef.current);
      if (masonryBRef.current) ro.observe(masonryBRef.current);
    }
    // initial passes
    const t1 = setTimeout(relayout, 50);
    const t2 = setTimeout(relayout, 300);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(t1);
      clearTimeout(t2);
      if (ro && typeof ro.disconnect === "function") ro.disconnect();
    };
  }, [relayout]);

  return (
    <main style={{ padding: "20px" }}>
      <div className="gallery-container">
        <div className="scroller-viewport" style={scrollerStyle}>
          <div className="scroller-inner">
            {/* One full masonry block */}
            <div className="masonry" aria-hidden={false} ref={masonryARef}>
              {ALL_IMAGES.map((src, idx) => (
                <figure className="masonry-item" key={`a-${src}-${idx}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt="Gallery image"
                    loading="lazy"
                    onClick={() => openAt(idx)}
                    style={{ cursor: "zoom-in" }}
                    onLoad={relayout}
                  />
                </figure>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="masonry" aria-hidden={true} ref={masonryBRef}>
              {ALL_IMAGES.map((src, idx) => (
                <figure className="masonry-item" key={`b-${src}-${idx}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    onLoad={relayout}
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>

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

      {/* Lightbox modal */}
      {isOpen && (
        <div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="lightbox-content">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="lightbox-img" src={ALL_IMAGES[index]} alt="" />
            <button
              className="lightbox-btn lightbox-close"
              onClick={close}
              aria-label="Close"
            >
              ✕
            </button>
            <button
              className="lightbox-btn lightbox-prev"
              onClick={prev}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className="lightbox-btn lightbox-next"
              onClick={next}
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
