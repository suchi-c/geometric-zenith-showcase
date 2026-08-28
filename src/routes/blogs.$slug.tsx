import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookVisitDialog } from "@/components/BookVisitDialog";
import { Section } from "@/components/Section";
import { BlogCard, formatDate } from "@/components/BlogCard";
import { blogs } from "@/data/site";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const post = blogs.find((b) => b.slug === params.slug);
    if (!post) throw notFound();
    return { post, related: blogs.filter((b) => b.slug !== params.slug).slice(0, 3) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article unavailable — GEOmetric LLP" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | GEOmetric LLP Journal` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:image", content: post.image },
        { name: "twitter:image", content: post.image },
      ],
    };
  },
  component: BlogDetail,
});

function BlogDetail() {
  const { post, related } = Route.useLoaderData();

  return (
    <>
      <section className="relative flex min-h-[55vh] items-end overflow-hidden pt-20">
        <img src={post.image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative mx-auto w-full max-w-4xl px-5 pb-16 lg:px-10 lg:pb-20">
          <Link to="/blogs" className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-primary">
            <ArrowLeft className="h-4 w-4" /> Journal
          </Link>
          <p className="mt-6 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
            {formatDate(post.date)} · {post.readTime}
          </p>
          <h1 className="mt-4 text-4xl leading-[1.1] lg:text-6xl">{post.title}</h1>
        </div>
      </section>

      <Section>
        <article className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p className="font-display text-2xl leading-relaxed text-foreground/90">{post.excerpt}</p>
          {post.body.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </article>
        <div className="mx-auto mt-16 max-w-3xl border-t border-border pt-10 text-center">
          <h2 className="text-3xl">Planning a home of your own?</h2>
          <div className="mt-8">
            <BookVisitDialog>
              <Button variant="gold" size="lg">
                Book a Site Visit
              </Button>
            </BookVisitDialog>
          </div>
        </div>
      </Section>

      <Section className="bg-charcoal">
        <h2 className="text-4xl">More from the journal</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {related.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </Section>
    </>
  );
}
