import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Plate Flanges',
  description: 'Get in touch with Plate Flanges for quotes, technical support, and more information.',
  alternates: { canonical: 'https://plateflanges.com/contact' },
};

export default function ContactPage() {
  return (
    <div className="w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://plateflanges.com" },
          { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://plateflanges.com/contact" }
        ]
      })}} />

      <section className="py-12" style={{background:'linear-gradient(135deg, #0f172a, #1e293b)'}}>
        <div className="container-wide">
          <h1 className="text-4xl font-bold" style={{color:'#ffffff'}}>Contact Us</h1>
          <p className="text-lg mt-2" style={{color:'#ffffff'}}>We're here to help with your flange needs</p>
        </div>
      </section>

      <section className="py-16" style={{background:'#0f172a'}}>
        <div className="container-wide max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8" style={{color:'#38bdf8'}}>Get in Touch</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{color:'#38bdf8'}}>Phone</h3>
                  <p className="text-lg"><a href="tel:+1-281-484-8325" style={{color:'#38bdf8'}}>281-484-8325</a></p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{color:'#38bdf8'}}>Email</h3>
                  <p className="text-lg"><a href="mailto:sales@texasflange.com" style={{color:'#38bdf8'}}>sales@texasflange.com</a></p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{color:'#38bdf8'}}>Website</h3>
                  <p className="text-lg"><a href="https://texasflange.com?ref=plateflanges" target="_blank" rel="noopener noreferrer" style={{color:'#38bdf8'}}>texasflange.com</a></p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-lg" style={{background:'#1e293b', borderWidth:'1px', borderColor:'#334155'}}>
              <h2 className="text-3xl font-bold mb-6" style={{color:'#38bdf8'}}>Quote Request</h2>
              <p className="mb-6" style={{color:'#ffffff'}}>
                For detailed quotes and rush orders, please visit our main website or call our sales team directly.
                We provide rapid response times for all inquiries.
              </p>
              <a href="https://www.texasflange.com/contact-us/?ref=plateflanges" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block" style={{background:'#38bdf8', color:'#0f172a', padding:'10px 20px', borderRadius:'6px', fontWeight:'600', textDecoration:'none'}}>
                Request a Quote
              </a>
              <p className="mt-6 text-sm" style={{color:'#94a3b8'}}>
                Professional-grade plate fabrication and expert technical support for your industrial needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}