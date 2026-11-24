"use client"

import { useSmoothProgress } from "@/hooks/use-smooth-progress";
import { MotionConfig, motion } from "framer-motion";

// Thin reading progress bar across the top of the viewport.
export function ReadingProgressBar({ className = "" }: { className?: string }) {
    const { smooth } = useSmoothProgress();
    return (
        <MotionConfig reducedMotion="user">
        <motion.div
            aria-hidden
            style={{ scaleX: smooth, originX: 0 }}
            className={`fixed inset-x-0 top-0 z-50 h-0.75 bg-primary ${className}`}
        />
        </MotionConfig>
    );
}