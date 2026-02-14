import Image from "next/image";
import Breadcrumbs from "./Breadcrumbs";
import TagPill from "./TagPill";

interface BlogHeaderProps {
  title: string;
  tags: string[];
  publishedAt: string;
  readingTime: string;
  image: string;
  imageAlt: string;
}

export default function BlogHeader({
  title,
  tags,
  publishedAt,
  readingTime,
  image,
  imageAlt,
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
      <h1 className="font-syne font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
        {title}
      </h1>

      {/* Author meta */}
      <p className="text-white/50 text-sm mb-2">
        Par <span className="text-white/70 font-medium">Jules</span> &middot; Fondateur Rekovr &middot; Expert Certifi&eacute; Kanal
      </p>

      {/* Date & reading time */}
      <p className="text-white/30 text-sm mb-10">
        {formattedDate} &middot; {readingTime}
      </p>

      {/* Hero image */}
      <div className="relative aspect-video rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 896px"
        />
      </div>
    </header>
  );
}
