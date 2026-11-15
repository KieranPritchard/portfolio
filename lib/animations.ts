import { Variants } from "framer-motion"

/**
 * Staggered entrance variants for the content column.
 */
export const containerVariants: Variants = {
hidden: { opacity: 0 },
visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
},
}

/**
 * Fade-in and slide-up variants for individual items.
 */
export const itemVariants: Variants = {
hidden: { opacity: 0, y: 10 },
visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
},
}

/**
 * Parent container variants for orchestrating staggered child animations.
 */
export const staggeredContainerVariants: Variants = {
hidden: { opacity: 0 },
visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
},
}

/**
 * Animation variants for individual timeline items.
 */
export const timelineItemVariants: Variants = {
hidden: { opacity: 0, y: 10 },
visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
},
}

/**
 * Staggered entrance variants for the list container.
 */
export const blogContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

/**
 * Animation variants for individual blog post items.
 */
export const blogItemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}