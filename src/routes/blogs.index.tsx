import { createFileRoute } from "@tanstack/react-router";
import { BlogCard } from "@/components/BlogCard";
import { PageHero, Section } from "@/components/Section";
import { blogs } from "@/data/site";

const HERO =
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=80";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title: "Journal — Building Notes from GEOmetric LLP" },
      {
        name: "description",
        content:
          "Practical notes on construction specifications, joint ventures and interior design from the GEOmetric LLP team in Bengaluru.",
      },
      { property: "og:title", content: "Journal — GEOmetric LLP" },
      {
        property: "og:description",
        content: "Notes on specifications, joint ventures and interiors.",
      },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: Blogs,
});

function Blogs() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Notes from the site and the studio."
        intro="Specifications, approvals and design thinking — written for owners, not for search engines."
        image={HERO}
      />
      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>
    </>
  );
}
