import { useReducedMotion, useScroll, useSpring } from "framer-motion";

// Hook to get a smooth scroll progress value, with reduced motion support.
export function useSmoothProgress() {
    const { scrollYProgress } = useScroll();
    const spring = useSpring(scrollYProgress, {
        stiffness: 140,
        damping: 26,
        mass: 0.4,
    });
    const reduce = useReducedMotion();
    return { raw: scrollYProgress, smooth: reduce ? scrollYProgress : spring };
}