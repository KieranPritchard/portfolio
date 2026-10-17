import { Metadata } from "next"
import ContentContainer from "../../components/pages/ContentContainer"
import { Variants, motion } from "framer-motion"

export const metadata: Metadata = {
  title: "Settings",
  description: "Settings page",
}

export default function Page() {
  /**
   * Staggered entrance variants for the content column.
   */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  /**
   * Fade-in and slide-up variants for individual items.
   */
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  return (
    <>
      <ContentContainer>
        <section
          id="settings"
          className={
            "mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-16 px-4 py-20 md:px-6 lg:grid-cols-[450px_1fr] lg:px-8"
          }
        ></section>
      </ContentContainer>
    </>
  )
}
