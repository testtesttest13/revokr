"use client";

import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -70% 0px",
        threshold: 0,
      }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24">
      <p className="font-syne font-semibold text-[#1a1a1a] text-sm uppercase tracking-wider mb-4">
        Sommaire
      </p>
      <ul className="space-y-2 border-l border-black/10">
        {headings.map(({ id, text, level }) => (
          <li key={id}>
            <button
              onClick={() => handleClick(id)}
              className={`block w-full text-left text-sm leading-relaxed transition-colors duration-200 border-l-2 -ml-px ${
                level === 3 ? "pl-6" : "pl-4"
              } ${
                activeId === id
                  ? "text-whatsapp border-whatsapp"
                  : "text-[#1a1a1a]/40 border-transparent hover:text-[#1a1a1a]/60 hover:border-black/20"
              }`}
            >
              {text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
