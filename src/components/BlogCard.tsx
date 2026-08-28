import { Link } from "@tanstack/react-router";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col overflow-hidden border border-border bg-card transition-all duration-500 hover:border-primary/50">
      <Link to="/blogs/$slug" params={{ slug: post.slug }} className="block overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
          {formatDate(post.date)} · {post.readTime}
        </p>
        <h3 className="mt-3 text-2xl leading-snug">
          <Link
            to="/blogs/$slug"
            params={{ slug: post.slug }}
            className="transition-colors hover:text-primary"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <Link
          to="/blogs/$slug"
          params={{ slug: post.slug }}
          className="mt-6 text-[0.7rem] uppercase tracking-[0.2em] text-primary transition-opacity hover:opacity-75"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
