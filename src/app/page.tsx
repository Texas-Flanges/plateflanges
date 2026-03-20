import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plate Flanges & Flat Face Flanges | Plate Flanges",
  description: "Plate flanges flame-cut or CNC-machined from certified plate material. Economical solution for low-pressure and non-code applications.",
  keywords: "plate flanges, flat flanges, fabricated flanges, flame cut flanges, non-standard flanges",
  openGraph: {
    title: "Plate Flanges & Flat Face Flanges | Plate Flanges",
    description: "Plate flanges flame-cut or CNC-machined from certified plate material. Economical solution for low-pressure and non-code applications.",
    url: "https://plateflanges.com",
    type: "website",
    siteName: "Plate Flanges",
    images: []
  },
  twitter: {
    card: "summary_large_image",
    title: "Plate Flanges & Flat Face Flanges | Plate Flanges",
    description: "Plate flanges flame-cut or CNC-machined from certified plate material. Economical solution for low-pressure and non-code applications."
  },
  alternates: { canonical: "https://plateflanges.com" }
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify([{
        "@context":"https://schema.org",
        "@type":"Organization",
        "name":"Plate Flanges",
        "url":"https://plateflanges.com",
        "contactPoint":{"@type":"ContactPoint","telephone":"+1-281-484-8325","contactType":"sales","email":"sales@texasflange.com"},
        "parentOrganization":{
          "@type":"Organization",
          "name":"Texas Flange & Fitting Supply",
          "url":"https://texasflange.com"
        }
      },{
      "@context":"https://schema.org",
      "@type":"FAQPage",
      "mainEntity":[{"@type":"Question","name":"When should plate flanges be used instead of forged flanges?","acceptedAnswer":{"@type":"Answer","text":"Plate flanges are appropriate for low-pressure, non-code applications or for very large diameters where forgings are impractical. They should not be substituted for forged flanges in ASME pressure piping without engineering approval."}}]
    }])}} />

      <style dangerouslySetInnerHTML={{__html: `
        /* Hide old layout header */
        body > header.border-gray-200, header.border-gray-200 { display: none !important; }
        .rv { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .rv.vis { opacity: 1; transform: translateY(0); }
      `}} />

      <script dangerouslySetInnerHTML={{__html: `
        setTimeout(function(){
          var els = document.querySelectorAll('.rv');
          if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('vis')});return;}
          var obs = new IntersectionObserver(function(entries){
            entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('vis');obs.unobserve(en.target);}});
          },{threshold:0.1});
          els.forEach(function(e){obs.observe(e);});
        }, 50);
      `}} />

      {/* INFO BAR */}
      <div className="sticky top-0 z-50 px-6 py-2" style={{background:'#0f172a', borderBottom:'1px solid #38bdf8'}}>
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div style={{color:'#38bdf8'}}>📞 <a href="tel:281-484-8325" style={{color:'#38bdf8'}}>281-484-8325</a> | ✉️ <a href="mailto:sales@texasflange.com" style={{color:'#38bdf8'}}>sales@texasflange.com</a></div>
          <span style={{color:'#ffffff'}}>Mon–Fri, 8 AM – 5 PM CST</span>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-8 z-49 backdrop-blur-md border-b" style={{background:'#0f172a', borderBottomColor:'#38bdf8'}}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <a href="/" className="text-xl font-bold" style={{color:'#38bdf8'}}>◆ Plate Flanges</a>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm" style={{color:'#ffffff', opacity:'0.8'}}>About</a>
            <a href="#specifications" className="text-sm" style={{color:'#ffffff', opacity:'0.8'}}>Specs</a>
            <a href="#industries" className="text-sm" style={{color:'#ffffff', opacity:'0.8'}}>Industries</a>
            <a href="#faq" className="text-sm" style={{color:'#ffffff', opacity:'0.8'}}>FAQ</a>
            <a href="/blog" className="text-sm" style={{color:'#ffffff', opacity:'0.8'}}>Blog</a>
            <a href="https://www.texasflange.com/contact-us/?ref=plateflanges" className="px-4 py-2 rounded-lg text-sm font-semibold" style={{background:'#38bdf8', color:'#0f172a'}}>Get a Quote</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center dot-pattern" style={{background:'linear-gradient(135deg, #0f172a, #1e293b)', backgroundImage:'radial-gradient(circle, #38bdf8 0.5px, transparent 0.5px)', backgroundSize:'50px 50px'}}>
        <div className="text-center px-6 max-w-4xl relative z-10">
          <p className="text-sm font-bold tracking-[0.3em] mb-4" style={{color:'#38bdf8'}}>YOUR SOURCE FOR PLATE FLANGES</p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight" style={{color:'#ffffff'}}>Plate Flanges & Flat Face Flanges</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{color:'#ffffff', opacity:'0.9'}}>Plate flanges flame-cut or CNC-machined from certified plate material. Economical solution for low-pressure and non-code applications.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://www.texasflange.com/contact-us/?ref=plateflanges" className="px-8 py-3 rounded-lg font-semibold text-lg" style={{background:'#38bdf8', color:'#0f172a'}}>Request a Quote</a>
            <a href="tel:281-484-8325" className="px-8 py-3 rounded-lg font-semibold text-lg border-2" style={{borderColor:'#38bdf8', color:'#38bdf8', background:'transparent'}}>Call 281-484-8325</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-10 sm:py-16 lg:py-20 px-6 rv" style={{background:'#0f172a'}}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{color:'#38bdf8'}}>About Plate Flanges</h2>
            <p className="text-lg leading-relaxed" style={{color:'#ffffff', opacity:'0.85'}}>We maintain one of the largest inventories of plate flanges. Every flange is manufactured to ASME, ANSI, and API standards with full material traceability and certification.</p>
            <p className="text-lg leading-relaxed mt-4" style={{color:'#ffffff', opacity:'0.85'}}>Plate flanges flame-cut or CNC-machined from certified plate material. Economical solution for low-pressure and non-code applications.</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl" style={{borderColor:'#38bdf8', borderWidth:'2px'}}>
            <img src="https://images.unsplash.com/photo-1656312186359-a5d902b9fdfd?w=600&h=400&fit=crop&auto=format&q=80" alt="Plate Flanges - Industrial pipe flanges" width="600" height="400" style={{width:"100%",height:"300px",borderRadius:"10px",objectFit:"cover"}} />
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section id="specifications" className="py-10 sm:py-16 lg:py-20 px-6 rv" style={{background:'#1a2332'}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{color:'#38bdf8'}}>Product Specifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-xl p-8 shadow-lg text-center" style={{background:'#0f172a', borderColor:'#38bdf8', borderWidth:'1px'}}>
              <div className="mb-4 flex justify-center" dangerouslySetInnerHTML={{__html: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`}} />
              <h3 className="font-bold text-lg mb-3" style={{color:'#38bdf8'}}>Material Grades</h3>
              <p style={{color:'#ffffff', opacity:'0.8'}}>SA-516 Gr.70, A36, SA-240 304/316</p>
            </div>
            <div className="rounded-xl p-8 shadow-lg text-center" style={{background:'#0f172a', borderColor:'#38bdf8', borderWidth:'1px'}}>
              <div className="mb-4 flex justify-center" dangerouslySetInnerHTML={{__html: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h5"/><path d="M2 12l3-3"/><path d="M2 12l3 3"/><path d="M22 12h-5"/><path d="M22 12l-3-3"/><path d="M22 12l-3 3"/><path d="M12 2v5"/><path d="M12 2l3 3"/><path d="M12 2l-3 3"/><path d="M12 22v-5"/><path d="M12 22l3-3"/><path d="M12 22l-3-3"/></svg>`}} />
              <h3 className="font-bold text-lg mb-3" style={{color:'#38bdf8'}}>Size Range</h3>
              <p style={{color:'#ffffff', opacity:'0.8'}}>1/2" through 60" and larger custom sizes available</p>
            </div>
            <div className="rounded-xl p-8 shadow-lg text-center" style={{background:'#0f172a', borderColor:'#38bdf8', borderWidth:'1px'}}>
              <div className="mb-4 flex justify-center" dangerouslySetInnerHTML={{__html: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M9 14l2 2 4-4"/></svg>`}} />
              <h3 className="font-bold text-lg mb-3" style={{color:'#38bdf8'}}>Standards</h3>
              <p style={{color:'#ffffff', opacity:'0.8'}}>ASME B16.5, B16.47, API 605, MSS SP-44</p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="py-10 sm:py-16 lg:py-20 px-6 rv" style={{background:'#0f172a'}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{color:'#38bdf8'}}>Industries Served</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="rounded-lg p-5 text-center shadow" style={{background:'#1a2332', borderColor:'#38bdf8', borderWidth:'1px'}}><p className="font-medium" style={{color:'#ffffff'}}>Low-Pressure Systems</p></div>
            <div className="rounded-lg p-5 text-center shadow" style={{background:'#1a2332', borderColor:'#38bdf8', borderWidth:'1px'}}><p className="font-medium" style={{color:'#ffffff'}}>Ductwork</p></div>
            <div className="rounded-lg p-5 text-center shadow" style={{background:'#1a2332', borderColor:'#38bdf8', borderWidth:'1px'}}><p className="font-medium" style={{color:'#ffffff'}}>Structural Connections</p></div>
            <div className="rounded-lg p-5 text-center shadow" style={{background:'#1a2332', borderColor:'#38bdf8', borderWidth:'1px'}}><p className="font-medium" style={{color:'#ffffff'}}>Tank Nozzles</p></div>
            <div className="rounded-lg p-5 text-center shadow" style={{background:'#1a2332', borderColor:'#38bdf8', borderWidth:'1px'}}><p className="font-medium" style={{color:'#ffffff'}}>Non-Code Applications</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10 sm:py-16 lg:py-20 px-6 rv" style={{background:'#1a2332'}}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{color:'#38bdf8'}}>Frequently Asked Questions</h2>
          <details className="mb-4 rounded-lg shadow p-4 cursor-pointer group" style={{background:'#0f172a', borderColor:'#38bdf8', borderWidth:'1px'}}>
            <summary className="font-semibold text-lg list-none flex justify-between items-center" style={{color:'#38bdf8'}}>When should plate flanges be used instead of forged flanges?<span className="group-open:rotate-45 transition-transform text-2xl" style={{color:'#38bdf8'}}>+</span></summary>
            <p className="mt-3 leading-relaxed" style={{color:'#ffffff', opacity:'0.85'}}>Plate flanges are appropriate for low-pressure, non-code applications or for very large diameters where forgings are impractical. They should not be substituted for forged flanges in ASME pressure piping without engineering approval.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-16 lg:py-20 px-6 text-center rv" style={{background:'linear-gradient(135deg, #0f172a, #1a2332)'}}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6" style={{color:'#ffffff'}}>Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{color:'#ffffff', opacity:'0.9'}}>Contact us for competitive pricing, technical specifications, and fast delivery on plate flanges.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://www.texasflange.com/contact-us/?ref=plateflanges" className="px-8 py-3 rounded-lg font-semibold text-lg" style={{background:'#38bdf8', color:'#0f172a'}}>Request a Quote</a>
            <a href="mailto:sales@texasflange.com" className="px-8 py-3 rounded-lg font-semibold text-lg border-2" style={{borderColor:'#38bdf8', color:'#38bdf8', background:'transparent'}}>Email Us</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6" style={{background:'#0f172a', borderTopColor:'#38bdf8', borderTopWidth:'1px'}}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4" style={{color:'#38bdf8'}}>Plate Flanges</h3>
            <p className="text-sm" style={{color:'#ffffff', opacity:'0.7'}}>Your source for quality industrial pipe flanges.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3" style={{color:'#38bdf8'}}>Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm" style={{opacity:'0.8'}}>
              <a href="#about" style={{color:'#ffffff'}}>About</a>
              <a href="#specifications" style={{color:'#ffffff'}}>Specifications</a>
              <a href="#industries" style={{color:'#ffffff'}}>Industries</a>
              <a href="#faq" style={{color:'#ffffff'}}>FAQ</a>
                  <a href="/blog" style={{color:'#ffffff'}}>Blog</a>
                  <a href="/contact" style={{color:'#ffffff'}}>Contact</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3" style={{color:'#38bdf8'}}>Contact</h4>
            <div className="flex flex-col gap-2 text-sm" style={{opacity:'0.8'}}>
              <a href="tel:281-484-8325" style={{color:'#ffffff'}}>281-484-8325</a>
              <a href="mailto:sales@texasflange.com" style={{color:'#ffffff'}}>sales@texasflange.com</a>
              <a href="https://www.texasflange.com/contact-us/?ref=plateflanges" style={{color:'#ffffff'}}>Request a Quote</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3" style={{color:'#38bdf8'}}>Related</h4>
            <div className="flex flex-col gap-2 text-sm" style={{opacity:'0.8'}}>
              <a href="https://www.texasflange.com?ref=plateflanges" style={{color:'#ffffff'}}>texasflange.com</a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6" style={{borderTopColor:'#38bdf8', borderTopWidth:'1px'}}>
          <p className="text-center text-sm" style={{color:'#ffffff', opacity:'0.6'}}>&copy; 2026 Plate Flanges &middot; All rights reserved.</p>
          <p className="text-center text-sm mt-2" style={{color:'#38bdf8', opacity:'0.6'}}>Mon–Fri, 8 AM – 5 PM CST</p>
        </div>
      </footer>
    </>
  );
}
