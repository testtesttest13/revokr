import Link from "next/link";

interface TagPillProps {
  tag: string;
}

export default function TagPill({ tag }: TagPillProps) {
  const slug = tag
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");

  return (
    <Link
      href={`/blog/tag/${slug}`}
      className="inline-block bg-whatsapp/10 text-whatsapp text-xs font-medium px-3 py-1 rounded-lg border border-whatsapp/30 hover:bg-whatsapp/20 transition-colors"
    >
      {tag}
    </Link>
  );
}
