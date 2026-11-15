import type { Metadata } from "next"

const siteUrl = "https://www.kpritchard.co.uk"

type PageMetadataOptions = {
  title: string
  description: string
  path: string
  section: string
  type?: "website" | "article"
  publishedTime?: string
  tags?: string[]
}

export function createPageMetadata({
  title,
  description,
  path,
  section,
  type = "website",
  publishedTime,
  tags,
}: PageMetadataOptions): Metadata {
  const pageUrl = new URL(path, siteUrl).toString()
  const imageUrl = new URL("/og", siteUrl)
  imageUrl.searchParams.set("title", title)
  imageUrl.searchParams.set("description", description)
  imageUrl.searchParams.set("section", section)

  const image = {
    url: imageUrl.toString(),
    width: 1200,
    height: 630,
    alt: `${title} — Kieran Pritchard`,
  }

  const openGraph: NonNullable<Metadata["openGraph"]> = {
    title,
    description,
    url: pageUrl,
    siteName: "Kieran Pritchard",
    images: [image],
    locale: "en_GB",
    type,
    ...(type === "article"
      ? {
          publishedTime,
          authors: ["Kieran Pritchard"],
          tags,
        }
      : {}),
  }

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@overf10w_0x",
    },
  }
}
