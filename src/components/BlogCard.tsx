'use client';

import Link from 'next/link';

interface Post {
  title: string;
  slug: string;
  description: string;
  date: string;
}

export function BlogCard({ post }: { post: Post }) {
  return (
    <article className="rounded-lg overflow-hidden hover:shadow-lg transition" style={{background:'#1e293b', borderWidth:'1px', borderColor:'#334155'}}>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">
          <Link href={'/blog/' + post.slug} style={{color:'#38bdf8'}}>
            {post.title}
          </Link>
        </h3>
        <p className="mb-4" style={{color:'#94a3b8'}}>{post.description}</p>
        <div className="flex justify-between items-center">
          <time className="text-sm" style={{color:'#94a3b8'}}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </time>
          <Link href={'/blog/' + post.slug} className="font-semibold" style={{color:'#38bdf8'}}>
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}