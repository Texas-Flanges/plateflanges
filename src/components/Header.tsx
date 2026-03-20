'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50" style={{background:'#0f172a', borderBottomColor:'#334155', borderBottomWidth:'1px'}}>
      <div className="container-wide py-4 flex justify-between items-center">
        <Link href="/" className="text-lg sm:text-2xl font-bold" style={{color:'#38bdf8'}}>
          Texas Flanges
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/" style={{color:'#ffffff'}}>
            Home
          </Link>
          <Link href="/about" style={{color:'#ffffff'}}>
            About
          </Link>
          <Link href="/services" style={{color:'#ffffff'}}>
            Services
          </Link>
          <Link href="/blog" style={{color:'#ffffff'}}>
            Blog
          </Link>
          <Link href="/contact" style={{color:'#ffffff'}}>
            Contact
          </Link>
        </nav>
        <Link href="https://texasflange.com/contact?ref=plateflanges" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{background:'#38bdf8', color:'#0f172a', padding:'10px 20px', borderRadius:'6px', fontWeight:'600', textDecoration:'none'}}>
          Get a Quote
        </Link>
      </div>
    </header>
  );
}