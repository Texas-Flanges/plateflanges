import { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPosts, getBlogPostBySlug } from '@/lib/blog';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title + ' | Blog',
    description: post.description,
    alternates: { canonical: `https://plateflanges.com/blog/${params.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="container-wide py-16" style={{background:'#0f172a'}}>
        <h1 className="text-4xl font-bold mb-4" style={{color:'#ffffff'}}>Post not found</h1>
        <Link href="/blog" style={{color:'#38bdf8'}}>
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full" style={{background:'#0f172a'}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://plateflanges.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://plateflanges.com/blog" },
          { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://plateflanges.com/blog/${params.slug}` }
        ]
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "datePublished": post.date,
        "author": {
          "@type": "Organization",
          "name": "Plate Flanges"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Plate Flanges",
          "url": "https://plateflanges.com"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://plateflanges.com/blog/${params.slug}`
        }
      })}} />

      <article className="container-wide py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4" style={{color:'#ffffff'}}>{post.title}</h1>
          <div className="flex gap-4" style={{color:'#94a3b8'}}>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </header>

        <div
          className="prose prose-lg max-w-4xl"
          style={{color:'#ffffff'}}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="mt-12 pt-8" style={{borderTopColor:'#334155', borderTopWidth:'1px'}}>
          <Link href="/blog" style={{color:'#38bdf8'}}>
            ← Back to Blog
          </Link>
        </footer>
      </article>
    </div>
  );
}