import Link from "next/link";

type RelatedBlogItem = {
  slug: string;
  title: string;
};

export function RelatedBlogs({ related }: { related: RelatedBlogItem[] }) {
  if (!related.length) return null;

  return (
    <aside className="rounded-xl border bg-muted/20 p-6">
      <h2 className="font-heading font-semibold text-foreground">
        Related articles
      </h2>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {related.map((item) => (
          <li key={item.slug}>
            <Link className="text-primary hover:underline" href={`/blog/${item.slug}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}