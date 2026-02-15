import Link from "next/link";
import TagPill from "./TagPill";
import BlogIcon from "./BlogIcon";

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
      <article className="bg-white rounded-xl border-2 border-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_#1a1a1a]">
        {/* Icon area */}
        <BlogIcon tags={tags} slug={slug} />

        {/* Content */}
        <div className="p-6">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.slice(0, 2).map((tag) => (
                <TagPill key={tag} tag={tag} />
              ))}
            </div>
          )}

          {/* Title */}
          <h3 className="font-syne font-bold text-xl text-[#1a1a1a] line-clamp-2 mb-2 group-hover:text-whatsapp transition-colors">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-[#1a1a1a]/40 text-sm leading-relaxed line-clamp-3 mb-4">
            {description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t-2 border-black/10">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-whatsapp/20 flex items-center justify-center">
                <span className="text-whatsapp text-[10px] font-bold">J</span>
              </div>
              <span className="text-[#1a1a1a]/40 text-xs">Jules</span>
            </div>
            <div className="flex items-center gap-2 text-[#1a1a1a]/30 text-xs">
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
