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
    eyebrow: "01 / RAW POTENTIAL",
    title: <>Every system starts<br />with the right <em>metal.</em></>,
    copy: "Selected stainless steel grades create the foundation for pressure, temperature and corrosion resistance.",
  },
  {
    eyebrow: "02 / FORMING FORCE",
    title: <>Heat. Pressure.<br /><em>Precision.</em></>,
    copy: "Controlled forming turns engineered material into dependable pipe geometry without compromising integrity.",
  },
  {
    eyebrow: "03 / EXACT GEOMETRY",
    title: <>Form follows<br /><em>flow.</em></>,
    copy: "Tight dimensions, consistent wall thickness and carefully finished surfaces—built around the application.",
  },
  {
    eyebrow: "04 / READY FOR INDUSTRY",
    title: <>Made in Mumbai.<br /><em>Built to move.</em></>,
    copy: "Finished stainless systems supplied for critical industries across India and international markets.",
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
        <div className="sequence-copy">
          <div className="sequence-kicker"><i /> ISO 9001:2015 CERTIFIED <span>NESCO / PIPE & TUBES</span></div>
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
                <small>{chapter.eyebrow}</small>
                <h1>{chapter.title}</h1>
                <p>{chapter.copy}</p>
                {index === 0 ? (
                  <Link href="#about">Discover our standard <ArrowUpRight /></Link>
                ) : null}
              </motion.article>
            ))}
          </div>
          <div className="sequence-scroll-hint"><ArrowDown /><span>Scroll to manufacture</span></div>
        </div>

        <div className="sequence-visual">
          <div className="sequence-frame" ref={frameWrapRef}>
            <canvas ref={canvasRef} aria-label="Scroll-controlled stainless steel pipe manufacturing animation" />
            <div className="sequence-frame-shade" />
            <div className="sequence-corners"><i /><i /><i /><i /></div>
            {loaded < expectedFrames ? (
              <div className="sequence-loading">Preparing sequence <b>{loadPercent}%</b></div>
            ) : null}
          </div>
          <div className="sequence-visual-meta">
            <span ref={frameLabelRef}>FRAME 001 / {FRAME_COUNT}</span>
            <span>SCROLL-DRIVEN PROCESS</span>
          </div>
        </div>

        <div className="sequence-progress" aria-hidden="true">
          {chapters.map((chapter, index) => (
            <span key={chapter.eyebrow} className={index <= activeChapter ? "active" : ""}><i />0{index + 1}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
