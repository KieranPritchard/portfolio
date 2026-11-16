"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import {
  motion,
  MotionConfig,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";

/**
 * Scroll-spy table of contents with reading progress.
 *
 * Uses shadcn theme tokens (primary, foreground, muted-foreground, border).
 * See app/blog/[slug]/page.tsx for usage.
 *
 * It reads headings from the page after mount, so it works with MDX or
 * any content. Headings without an id get one generated from their text.
 */

type Heading = { id: string; text: string; level: number };

function slugify(text: string) {
  return (
    text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "section"
  );
}

function useSmoothProgress() {
  const { scrollYProgress } = useScroll();
  const spring = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.4,
  });
  const reduce = useReducedMotion();
  return { raw: scrollYProgress, smooth: reduce ? scrollYProgress : spring };
}

export function ReadingProgressBar({ className = "" }: { className?: string }) {
  const { smooth } = useSmoothProgress();
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        aria-hidden
        style={{ scaleX: smooth, originX: 0 }}
        className={`fixed inset-x-0 top-0 z-50 h-[3px] bg-primary ${className}`}
      />
    </MotionConfig>
  );
}

type TableOfContentsProps = {
  /** Where to look for headings. */
  containerSelector?: string;
  /** Which headings to list. */
  headingSelector?: string;
  /** Distance from the top of the viewport at which a heading counts as reached. */
  offset?: number;
  title?: string;
  className?: string;
};

export function TableOfContents({
  containerSelector = "article",
  headingSelector = "h2, h3",
  offset = 140,
  title = "On this page",
  className = "",
}: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [active, setActive] = useState(-1);
  const [pct, setPct] = useState(0);
  const els = useRef<HTMLElement[]>([]);
  const reduce = useReducedMotion();
  const { raw, smooth } = useSmoothProgress();

  function measure() {
    const v = raw.get();
    let idx = -1;
    els.current.forEach((el, i) => {
      if (el.getBoundingClientRect().top <= offset) idx = i;
    });
    if (v >= 0.995) idx = els.current.length - 1;
    setActive(idx);
    setPct(Math.round(v * 100));
  }

  useEffect(() => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const found = Array.from(
      container.querySelectorAll<HTMLElement>(headingSelector)
    );
    const used = new Set<string>();
    found.forEach((el) => {
      if (!el.id) {
        let id = slugify(el.textContent ?? "");
        let n = 2;
        while (used.has(id) || document.getElementById(id)) id = `${id}-${n++}`;
        el.id = id;
      }
      used.add(el.id);
      el.style.scrollMarginTop = `${Math.max(offset - 20, 0)}px`;
    });

    els.current = found;
    setHeadings(
      found.map((el) => ({
        id: el.id,
        text: el.textContent ?? "",
        level: Number(el.tagName.slice(1)) || 2,
      }))
    );
    measure();

    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerSelector, headingSelector, offset]);

  useMotionValueEvent(raw, "change", measure);

  function go(e: MouseEvent<HTMLAnchorElement>, id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  }

  if (headings.length === 0) return null;

  const baseLevel = Math.min(...headings.map((h) => h.level));

  return (
    <MotionConfig reducedMotion="user">
      <nav
        aria-label="Table of contents"
        className={`rounded-xl border bg-muted/20 p-4 text-sm ${className}`}
      >
        <div className="mb-3 flex items-baseline justify-between">
          <strong className="font-heading font-semibold text-foreground">
            {title}
          </strong>
          <span className="tabular-nums text-muted-foreground">
            {pct}%
          </span>
        </div>

        <div className="relative border-l-2 border-border pl-3.5">
          <motion.div
            aria-hidden
            style={{ scaleY: smooth, originY: 0 }}
            className="absolute -left-0.5 bottom-0 top-0 w-0.5 bg-primary"
          />
          <ol className="m-0 list-none p-0">
            {headings.map((h, i) => {
              const isActive = i === active;
              const isDone = i < active;
              const state = isActive
                ? "font-semibold text-primary"
                : isDone
                  ? "text-foreground"
                  : "text-muted-foreground";
              return (
                <motion.li
                  key={h.id}
                  className="relative"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.35, ease: "easeOut" }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="toc-pill"
                      className="absolute inset-y-0 -inset-x-2 rounded-md bg-primary/10"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  <a
                    href={`#${h.id}`}
                    onClick={(e) => go(e, h.id)}
                    aria-current={isActive ? "location" : undefined}
                    style={{ paddingLeft: (h.level - baseLevel) * 14 }}
                    className={`relative z-10 block rounded-sm py-1.5 leading-snug transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${state}`}
                  >
                    {h.text}
                  </a>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </nav>
    </MotionConfig>
  );
}

export default TableOfContents;