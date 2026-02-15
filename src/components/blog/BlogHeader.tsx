import Breadcrumbs from "./Breadcrumbs";
import TagPill from "./TagPill";
import BlogIcon from "./BlogIcon";

interface BlogHeaderProps {
  title: string;
  slug: string;
  tags: string[];
  publishedAt: string;
  readingTime: string;
  image: string;
  imageAlt: string;
}

export default function BlogHeader({
  title,
  slug,
  tags,
  publishedAt,
  readingTime,
}: BlogHeaderProps) {
  const formattedDate = new Date(publishedAt).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="max-w-4xl mx-auto px-6 pt-32 pb-10">
      {/* Breadcrumbs */}
      <div className="mb-8">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: title },
          ]}
        />
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>
      )}

      {/* Title */}
      <h1 className="font-syne font-bold text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
        {title}
      </h1>

      {/* Author meta */}
      <p className="text-[#1a1a1a]/50 text-sm mb-2">
        Par <span className="text-[#1a1a1a]/70 font-medium">Jules</span> &middot; Fondateur Rekovr &middot; Expert WhatsApp Marketing
      </p>

      {/* Date & reading time */}
      <p className="text-[#1a1a1a]/30 text-sm mb-10">
        {formattedDate} &middot; {readingTime}
      </p>

      {/* Hero icon */}
      <div className="rounded-xl border-2 border-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] overflow-hidden">
        <BlogIcon tags={tags} slug={slug} />
      </div>
    </header>
  );
}
