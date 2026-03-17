import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Plate Flanges',
  description: 'Explore our range of services and products for plate fabrication.',
  alternates: { canonical: 'https://plateflanges.com/services' },
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://plateflanges.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://plateflanges.com/services" }
        ]
      })}} />
      <section className="py-12" style={{background:'linear-gradient(135deg, #0f172a, #1e293b)'}}>
        <div className="container-wide">
          <h1 className="text-4xl font-bold" style={{color:'#ffffff'}}>Our Services</h1>
        </div>
      </section>

      <section className="py-16" style={{background:'#0f172a'}}>
        <div className="container-wide">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{color:'#38bdf8'}}>What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-lg p-8 hover:shadow-lg transition" style={{background:'#1e293b', borderWidth:'2px', borderColor:'#38bdf8'}}>
              <h3 className="text-2xl font-bold mb-4" style={{color:'#38bdf8'}}>Product Supply</h3>
              <p className="mb-4" style={{color:'#ffffff'}}>
                Complete inventory of plate fabrication in all standard sizes, materials, and pressure ratings.
                From standard ANSI specifications to custom configurations.
              </p>
              <ul className="space-y-2 text-sm" style={{color:'#ffffff'}}>
                <li>✓ Standard ANSI flanges</li>
                <li>✓ API certified products</li>
                <li>✓ Custom specifications</li>
                <li>✓ Material options</li>
              </ul>
            </div>

            <div className="rounded-lg p-8 hover:shadow-lg transition" style={{background:'#1e293b', borderWidth:'2px', borderColor:'#38bdf8'}}>
              <h3 className="text-2xl font-bold mb-4" style={{color:'#38bdf8'}}>Custom Manufacturing</h3>
              <p className="mb-4" style={{color:'#ffffff'}}>
                When standard products don't fit your application, our engineering team designs and manufactures
                custom solutions to your exact specifications.
              </p>
              <ul className="space-y-2 text-sm" style={{color:'#ffffff'}}>
                <li>✓ Engineering support</li>
                <li>✓ Rapid prototyping</li>
                <li>✓ Specialized designs</li>
                <li>✓ Quality assurance</li>
              </ul>
            </div>

            <div className="rounded-lg p-8 hover:shadow-lg transition" style={{background:'#1e293b', borderWidth:'2px', borderColor:'#38bdf8'}}>
              <h3 className="text-2xl font-bold mb-4" style={{color:'#38bdf8'}}>Technical Support</h3>
              <p className="mb-4" style={{color:'#ffffff'}}>
                Our experienced team provides detailed technical guidance, material consultation, and application support
                to ensure you get the right product for your needs.
              </p>
              <ul className="space-y-2 text-sm" style={{color:'#ffffff'}}>
                <li>✓ Application consulting</li>
                <li>✓ Material selection</li>
                <li>✓ Standards compliance</li>
                <li>✓ Performance guidance</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-lg p-8" style={{background:'#1e293b', borderWidth:'1px', borderColor:'#334155'}}>
            <h3 className="text-2xl font-bold mb-4" style={{color:'#38bdf8'}}>Rush Order Fulfillment</h3>
            <p className="text-lg" style={{color:'#ffffff'}}>
              Need it fast? We offer expedited manufacturing and shipping options to keep your projects on schedule.
              Call us at <a href="tel:+1-281-484-8325" style={{color:'#38bdf8'}}>281-484-8325</a> to discuss your timeline, or visit <a href="https://www.texasflange.com/contact-us/?ref=plateflanges" target="_blank" rel="noopener noreferrer" style={{color:'#38bdf8'}}>our main site</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}