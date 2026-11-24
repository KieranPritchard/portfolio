"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import {
    motion,
    MotionConfig,
    useMotionValueEvent,
    useReducedMotion,
} from "framer-motion";
import { Heading } from "@/types/postHeading";
import { slugify } from "@/lib/slugify";
import { useSmoothProgress } from "@/hooks/use-smooth-progress";

/**
 * Scroll-spy table of contents with reading progress.
 *
 * Uses shadcn theme tokens (primary, foreground, muted-foreground, border).
 * See app/blog/[slug]/page.tsx for usage.
 *
 * It reads headings from the page after mount, so it works with MDX or
 * any content. Headings without an id get one generated from their text.
 */

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

// Table of contents component that reads headings from the page and shows a scroll-spy list with reading progress.
export function TableOfContents({
    containerSelector = "article",
    headingSelector = "h2, h3",
    offset = 140,
    title = "On this page",
    className = "",
}: TableOfContentsProps) {
    // State for headings, active index, and reading progress percentage.
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [active, setActive] = useState(-1);
    const [pct, setPct] = useState(0);
    const els = useRef<HTMLElement[]>([]);
    const reduce = useReducedMotion();
    const { raw, smooth } = useSmoothProgress();

    // Measures which heading is currently active based on scroll position.
    function measure() {
        // Get the current scroll progress value.
        const scrollValue = raw.get();

        // Determine which heading is currently active based on the offset.
        let idx = -1;

        // Loop through the heading elements and find the last one that is above the offset.
        els.current.forEach((el, i) => {
            if (el.getBoundingClientRect().top <= offset) idx = i;
        });
        // If we're at the very bottom of the page, make sure the last heading is active.
        if (scrollValue >= 0.995) idx = els.current.length - 1;

        // Update the active index and reading progress percentage.
        setActive(idx);
        setPct(Math.round(scrollValue * 100));
    }

    // On mount, find all headings in the container and set up scroll measurement.
    useEffect(() => {
        // Find the container element and all headings within it.
        const container = document.querySelector(containerSelector);

        // If no container is found, do nothing.
        if (!container) return;

        // Find all headings within the container and ensure they have unique ids.
        const found = Array.from(
            container.querySelectorAll<HTMLElement>(headingSelector)
        );

        // Ensure each heading has a unique id, generating one from its text if necessary.
        const used = new Set<string>();

        // Loop through each found heading and assign an id if it doesn't have one.
        found.forEach((el) => {
            // If the heading doesn't have an id, generate one from its text content.
            if (!el.id) {
                let id = slugify(el.textContent ?? "");
                let n = 2;
                while (used.has(id) || document.getElementById(id)) id = `${id}-${n++}`;
                el.id = id;
            }
            used.add(el.id);
            el.style.scrollMarginTop = `${Math.max(offset - 20, 0)}px`;
        });

        // Store the heading elements in a ref for later measurement.
        els.current = found;
        setHeadings(
            found.map((el) => ({
                id: el.id,
                text: el.textContent ?? "",
                level: Number(el.tagName.slice(1)) || 2,
            }))
        );
        measure();

        // Set up a resize event listener to re-measure headings when the window is resized.
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
                        className={`relative z-10 block rounded-sm py-1.5 leading-snug transition-colors hover:text-primary focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary ${state}`}
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