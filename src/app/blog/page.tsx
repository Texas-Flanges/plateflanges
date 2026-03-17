import { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import { BlogCard } from '@/components/BlogCard';

export const metadata: Metadata = {
  title: 'Blog | Plate Flanges',
  description: 'Latest articles and technical resources about industrial flanges and applications.',
  alternates: { canonical: 'https://plateflanges.com/blog' },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://plateflanges.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://plateflanges.com/blog" }
        ]
      })}} />
      <section className="py-12" style={{background:'linear-gradient(135deg, #0f172a, #1e293b)'}}>
        <div className="container-wide">
          <h1 className="text-4xl font-bold" style={{color:'#ffffff'}}>Blog</h1>
          <p className="text-lg mt-2" style={{color:'#ffffff'}}>Technical insights and industry news</p>
        </div>
      </section>

      <section className="py-16" style={{background:'#0f172a'}}>
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}