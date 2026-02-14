import Image from "next/image";
import Link from "next/link";
import TagPill from "./TagPill";

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  publishedAt: string;
  readingTime: string;
}

export default function BlogCard({
  slug,
  title,
  description,
  image,
  imageAlt,
  tags,
  publishedAt,
  readingTime,
}: BlogCardProps) {
  const formattedDate = new Date(publishedAt).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:border-whatsapp/30 hover:translate-y-[-4px]">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden rounded-t-2xl">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag) => (
                <TagPill key={tag} tag={tag} />
              ))}
            </div>
          )}

          {/* Title */}
          <h3 className="font-syne font-bold text-xl text-white line-clamp-2 mb-2 group-hover:text-whatsapp transition-colors">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-white/40 text-sm leading-relaxed line-clamp-3 mb-4">
            {description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-whatsapp/20 flex items-center justify-center">
                <span className="text-whatsapp text-[10px] font-bold">J</span>
              </div>
              <span className="text-white/40 text-xs">Jules</span>
            </div>
            <div className="flex items-center gap-2 text-white/30 text-xs">
              <span>{formattedDate}</span>
              <span>&middot;</span>
              <span>{readingTime}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
