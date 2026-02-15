import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[#1a1a1a]/40 text-sm">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="text-[#1a1a1a]/20">&gt;</span>}
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-whatsapp transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#1a1a1a]/60 line-clamp-1">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
