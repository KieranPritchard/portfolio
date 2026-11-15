import ContentContainer from "@/components/pages/ContentContainer"
import Contact from "@/components/pages/contact/Contact"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Kieran Pritchard about placements, CTFs, collaborations, or other opportunities in software development and cybersecurity.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact",
    description:
      "Contact Kieran Pritchard about placements, CTFs, collaborations, or other opportunities in software development and cybersecurity.",
    url: "/contact",
    siteName: "Kieran Pritchard",
    images: [
      {
        url: "/kieran-pritchard.jpg",
        width: 1200,
        height: 630,
        alt: "Kieran Pritchard",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
}

export default function Page() {
  return (
    <ContentContainer>
      <Contact />
    </ContentContainer>
  )
}
