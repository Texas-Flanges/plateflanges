'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="py-12" style={{background:'#020617'}}>
      <div className="container-wide">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{color:'#38bdf8'}}>Texas Flanges</h3>
            <p style={{color:'#94a3b8'}}>
              Leading supplier of quality flanges for industrial applications.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4" style={{color:'#38bdf8'}}>Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" style={{color:'#94a3b8'}}>Home</Link></li>
              <li><Link href="/about" style={{color:'#94a3b8'}}>About</Link></li>
              <li><Link href="/services" style={{color:'#94a3b8'}}>Services</Link></li>
              <li><Link href="/blog" style={{color:'#94a3b8'}}>Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4" style={{color:'#38bdf8'}}>Related Sites</h4>
            <ul className="space-y-2">
<li><a href="https://flangedimensions.com" target="_blank" rel="noopener noreferrer" style={{color:'#94a3b8'}}>Flange Dimensions Pro</a></li>

            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4" style={{color:'#38bdf8'}}>Contact</h4>
            <p className="mb-2" style={{color:'#94a3b8'}}>
              Phone: <a href="tel:+1-281-484-8325" style={{color:'#38bdf8'}}>281-484-8325</a>
            </p>
            <p className="mb-2" style={{color:'#94a3b8'}}>
              Email: <a href="mailto:sales@texasflange.com" style={{color:'#38bdf8'}}>sales@texasflange.com</a>
            </p>
            <p style={{color:'#94a3b8'}}>
              Website: <a href="https://texasflange.com?ref=plateflanges" target="_blank" rel="noopener noreferrer" style={{color:'#38bdf8'}}>texasflange.com</a>
            </p>
          </div>
        </div>

        <div className="pt-8 text-center" style={{borderTopColor:'#334155', borderTopWidth:'1px', color:'#94a3b8'}}>
          <p>&copy; 2026 Texas Flanges. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}