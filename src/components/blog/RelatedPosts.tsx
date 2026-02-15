import BlogCard from "./BlogCard";

interface RelatedPost {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  publishedAt: string;
  readingTime: string;
}

interface RelatedPostsProps {
  posts: RelatedPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="py-16">
      <h2 className="font-syne font-bold text-2xl text-[#1a1a1a] mb-10">
        Articles connexes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.slice(0, 3).map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
}
