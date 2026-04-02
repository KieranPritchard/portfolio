import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Image from "next/image"
import Link from "next/link"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function estimateReadingMinutes(markdown: string) {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 220))
}

export function ProjectMarkdown({ content }: Readonly<{ content: string }>) {
  const minutes = estimateReadingMinutes(content)

  return (
    <article>
      <p className="mb-10 text-sm text-muted-foreground">{minutes} min read</p>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children, ...props }) => (
            <h2 className="mt-12 scroll-m-20 font-heading text-2xl font-semibold tracking-tight first:mt-0" {...props}>
              {children}
            </h2>
          ),
          h2: ({ children, ...props }) => (
            <h3 className="mt-10 scroll-m-20 font-heading text-xl font-semibold tracking-tight" {...props}>
              {children}
            </h3>
          ),
          h3: ({ children, ...props }) => (
            <h4 className="mt-8 scroll-m-20 font-heading text-lg font-semibold tracking-tight" {...props}>
              {children}
            </h4>
          ),
          p: ({ children, ...props }) => (
            <p className="leading-relaxed text-foreground/90 [&:not(:first-child)]:mt-5" {...props}>
              {children}
            </p>
          ),
          ul: ({ children, ...props }) => (
            <ul className="my-5 list-disc space-y-2 pl-6 text-foreground/90" {...props}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol className="my-5 list-decimal space-y-2 pl-6 text-foreground/90" {...props}>
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => (
            <li className="leading-relaxed" {...props}>
              {children}
            </li>
          ),
          blockquote: ({ children, ...props }) => (
            <blockquote
              className="mt-6 border-l-4 border-primary/40 bg-muted/30 py-2 pl-4 pr-2 text-muted-foreground italic"
              {...props}
            >
              {children}
            </blockquote>
          ),
          table: ({ children, ...props }) => (
            <div className="my-6 w-full overflow-y-auto">
              <Table {...props}>{children}</Table>
            </div>
          ),
          thead: ({ children, ...props }) => (
            <TableHeader {...props}>{children}</TableHeader>
          ),
          tbody: ({ children, ...props }) => (
            <TableBody {...props}>{children}</TableBody>
          ),
          tr: ({ children, ...props }) => (
            <TableRow {...props}>{children}</TableRow>
          ),
          th: ({ children, ...props }) => (
            <TableHead {...props}>{children}</TableHead>
          ),
          td: ({ children, ...props }) => (
            <TableCell {...props}>{children}</TableCell>
          ),
          a: ({ href, children, ...props }) => {
            const external = href?.startsWith("http")
            if (href && external) {
              return (
                <a
                  href={href}
                  className="font-medium text-primary underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noreferrer noopener"
                  {...props}
                >
                  {children}
                </a>
              )
            }

            if (href) {
              return (
                <Link href={href} className="font-medium text-primary underline-offset-4 hover:underline" {...props}>
                  {children}
                </Link>
              )
            }

            return (
              <span className="font-medium text-primary" {...props}>
                {children}
              </span>
            )
          },
          code: ({ children, className, ...props }) => {
            const isBlock = Boolean(className?.includes("language-"))

            if (isBlock) {
              return (
                <code className={`font-mono text-sm leading-relaxed ${className ?? ""}`} {...props}>
                  {children}
                </code>
              )
            }

            return (
              <code className="rounded-md bg-muted px-1.5 py-0.5 text-[0.875em] font-mono" {...props}>
                {children}
              </code>
            )
          },
          pre: ({ children, ...props }) => (
            <pre className="my-6 overflow-x-auto rounded-lg border bg-muted/40 p-4 text-sm" {...props}>
              {children}
            </pre>
          ),
          hr: () => <hr className="my-10 border-border" />,
          img: ({ src, alt }) => {
            if (!src || typeof src !== "string") {
              return null
            }

            if (src.startsWith("/")) {
              return (
                <span className="my-8 block overflow-hidden rounded-xl border bg-muted/20">
                  <Image
                    src={src}
                    alt={alt ?? ""}
                    width={1200}
                    height={675}
                    className="h-auto w-full"
                    sizes="(max-width: 1024px) 100vw, 896px"
                  />
                </span>
              )
            }

            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={src}
                alt={alt ?? ""}
                className="my-8 w-full rounded-xl border bg-muted/20 object-cover"
                loading="lazy"
              />
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  )
}
