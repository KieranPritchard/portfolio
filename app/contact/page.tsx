import ContentContainer from "@/components/layouts/ContentContainer"
import Contact from "@/components/features/contact/Contact"
import { createPageMetadata } from "@/lib/page-metadata"

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Kieran Pritchard about placements, CTFs, collaborations, or other opportunities in software development and cybersecurity.",
  path: "/contact",
  section: "CONTACT",
})

export default function Page() {
  return (
    <ContentContainer>
      <Contact />
    </ContentContainer>
  )
}
