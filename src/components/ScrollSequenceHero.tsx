"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const FRAME_COUNT = 54;
const framePath = (index: number) =>
  `/assets/hero-sequence-new/optimized/frame-${String(index + 1).padStart(4, "0")}.webp`;

const chapters = [
  {
    eyebrow: "01 · PRODUCT RANGE",
    label: "Product range",
    title: <>Your source for <em>industrial metal products.</em></>,
    copy: "Pipes, tubes, sheets, plates, coils, bars, rods, wires, flanges, fittings, fasteners and valves from one Mumbai-based supply team.",
  },
  {
    eyebrow: "02 · MATERIAL RANGE",
    label: "Material grades",
    title: <>From stainless steel to <em>speciality alloys.</em></>,
    copy: "Stainless steel, duplex, super duplex, Monel, Inconel, Hastelloy, carbon steel, titanium, aluminium and SMO 254 options for diverse industrial requirements.",
  },
  {
    eyebrow: "03 · QUALITY & INSPECTION",
    label: "Quality & inspection",
    title: <>Supporting your quality and <em>inspection requirements.</em></>,
    copy: "Orders can be supported with material test certificates (MTCs), dimensional checks, third-party inspection and export-ready packing, as specified.",
  },
  {
    eyebrow: "04 · SUPPLY REACH",
    label: "Supply reach",
    title: <>Your supply partner across India and <em>international markets.</em></>,
    copy: "Responsive quotations and coordinated dispatch support for industrial buyers across India, the Middle East, Asia and other international markets.",
  },
];

function chapterForProgress(progress: number) {
  if (progress < 0.24) return 0;
  if (progress < 0.5) return 1;
  if (progress < 0.75) return 2;
  return 3;
}

export default function ScrollSequenceHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameWrapRef = useRef<HTMLDivElement>(null);
  const frameLabelRef = useRef<HTMLSpanElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);
  const frameStepRef = useRef(1);
  const [activeChapter, setActiveChapter] = useState(0);
  const [loaded, setLoaded] = useState(0);
  const [expectedFrames, setExpectedFrames] = useState(FRAME_COUNT);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const wrap = frameWrapRef.current;
    const image = imagesRef.current[frameIndex];
    if (!canvas || !wrap || !image?.complete || !image.naturalWidth) return;

    const rect = wrap.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.round(rect.width * dpr));
    const height = Math.max(1, Math.round(rect.height * dpr));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    const context = canvas.getContext("2d");
    if (!context) return;
    context.clearRect(0, 0, width, height);
    context.drawImage(image, 0, 0, width, height);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const step = window.innerWidth <= 560 ? 2 : 1;
    const indices = Array.from({ length: Math.ceil(FRAME_COUNT / step) }, (_, index) => index * step).filter((index) => index < FRAME_COUNT);
    if (indices.at(-1) !== FRAME_COUNT - 1) indices.push(FRAME_COUNT - 1);
    const images: HTMLImageElement[] = [];
    frameStepRef.current = step;
    const expectedUpdate = window.requestAnimationFrame(() => setExpectedFrames(indices.length));
    indices.forEach((index) => {
      const image = new window.Image();
      image.decoding = "async";
      image.src = framePath(index);
      image.onload = () => {
        if (cancelled) return;
        setLoaded((value) => value + 1);
        if (index === 0 || index === frameRef.current) drawFrame(frameRef.current);
      };
      images[index] = image;
    });
    imagesRef.current = images;

    const observer = new ResizeObserver(() => drawFrame(frameRef.current));
    if (frameWrapRef.current) observer.observe(frameWrapRef.current);
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(expectedUpdate);
      observer.disconnect();
      imagesRef.current = [];
    };
  }, [drawFrame]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const rawFrame = Math.min(FRAME_COUNT - 1, Math.round(progress * (FRAME_COUNT - 1)));
    const step = frameStepRef.current;
    const nextFrame = rawFrame >= FRAME_COUNT - Math.ceil(step / 2) ? FRAME_COUNT - 1 : Math.round(rawFrame / step) * step;
    if (nextFrame !== frameRef.current) {
      frameRef.current = nextFrame;
      if (frameLabelRef.current) {
        frameLabelRef.current.textContent = `FRAME ${String(rawFrame + 1).padStart(3, "0")} / ${FRAME_COUNT}`;
      }
      drawFrame(nextFrame);
    }
    const nextChapter = chapterForProgress(progress);
    setActiveChapter((current) => current === nextChapter ? current : nextChapter);
  });

  const loadPercent = Math.min(100, Math.round((loaded / expectedFrames) * 100));

  return (
    <section className="sequence-hero" id="top" ref={sectionRef}>
      <div className="sequence-stage">
        <div className="sequence-atmosphere" aria-hidden="true"><i /><i /><span>NESCO</span></div>
        <div className="sequence-copy">
          <div className="sequence-chapters" aria-live="polite">
            {chapters.map((chapter, index) => (
              <motion.article
                key={chapter.eyebrow}
                className={index === activeChapter ? "active" : ""}
                initial={false}
                animate={{
                  opacity: index === activeChapter ? 1 : 0,
                  y: index === activeChapter ? 0 : index < activeChapter ? -34 : 34,
                  filter: index === activeChapter ? "blur(0px)" : "blur(8px)",
                }}
                transition={{ duration: .55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="sequence-chapter-meta"><small>{chapter.eyebrow}</small><span>{chapter.label}</span></div>
                <h1>{chapter.title}</h1>
                <p>{chapter.copy}</p>
                {index === 0 ? (
                  <Link href="#products">Explore products <ArrowUpRight /></Link>
                ) : null}
              </motion.article>
            ))}
          </div>
          <div className="sequence-scroll-hint"><ArrowDown /><span>Scroll to explore</span><i /></div>
        </div>

        <div className="sequence-visual">
          <div className="sequence-visual-shell">
            <div className="sequence-visual-head">
              <span><i /> Material visualizer</span>
              <b>{chapters[activeChapter].label}</b>
              <small>0{activeChapter + 1} / 04</small>
            </div>
            <div className="sequence-frame" ref={frameWrapRef}>
              <canvas ref={canvasRef} aria-label="Scroll-controlled stainless steel pipe manufacturing animation" />
              <div className="sequence-frame-grid" aria-hidden="true" />
              <div className="sequence-frame-shade" />
              <div className="sequence-corners"><i /><i /><i /><i /></div>
              <div className="sequence-frame-tags" aria-hidden="true"><span>FORM / STOCK</span><span>GRADE / PROJECT</span></div>
              {loaded < expectedFrames ? (
                <div className="sequence-loading">Preparing sequence <b>{loadPercent}%</b></div>
              ) : null}
            </div>
            <div className="sequence-visual-meta">
              <span ref={frameLabelRef}>FRAME 001 / {FRAME_COUNT}</span>
              <span><i /> Scroll-driven material sequence</span>
            </div>
          </div>
        </div>

        <div className="sequence-progress" aria-hidden="true">
          {chapters.map((chapter, index) => (
            <span key={chapter.eyebrow} className={index <= activeChapter ? "active" : ""}><i /><b>0{index + 1}</b><small>{chapter.label}</small></span>
          ))}
        </div>
      </div>
    </section>
  );
}
