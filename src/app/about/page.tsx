import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Plate Flanges',
  description: 'Learn about Plate Flanges and our commitment to quality plate fabrication.',
  alternates: { canonical: 'https://plateflanges.com/about' },
};

export default function AboutPage() {
  return (
    <div className="w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://plateflanges.com" },
          { "@type": "ListItem", "position": 2, "name": "About", "item": "https://plateflanges.com/about" }
        ]
      })}} />
      <section className="py-12" style={{background:'linear-gradient(135deg, #0f172a, #1e293b)'}}>
        <div className="container-wide">
          <h1 className="text-4xl font-bold" style={{color:'#ffffff'}}>About Plate Flanges</h1>
        </div>
      </section>

      <section className="py-16" style={{background:'#0f172a'}}>
        <div className="container-wide max-w-4xl">
          <h2 className="text-3xl font-bold mb-6" style={{color:'#38bdf8'}}>Who We Are</h2>
          <p className="text-lg mb-4" style={{color:'#ffffff'}}>
            Plate Flanges is a leading supplier of premium plate fabrication serving industrial clients nationwide.
            With a commitment to quality, reliability, and customer service, we have established ourselves as a trusted partner
            for engineers and procurement professionals across multiple industries.
          </p>
          <p className="text-lg mb-4" style={{color:'#ffffff'}}>
            We combine decades of manufacturing expertise with cutting-edge production capabilities
            to deliver products that exceed industry standards. Whether you need standard specifications or custom-engineered solutions,
            our team is equipped to meet your requirements.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12" style={{color:'#38bdf8'}}>Our Commitment</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex gap-4">
              <span style={{color:'#38bdf8', fontWeight:'bold'}}>✓</span>
              <span style={{color:'#ffffff'}}><strong>Quality First:</strong> Every product undergoes rigorous testing and inspection.</span>
            </li>
            <li className="flex gap-4">
              <span style={{color:'#38bdf8', fontWeight:'bold'}}>✓</span>
              <span style={{color:'#ffffff'}}><strong>Expert Support:</strong> Our engineers are available to help with technical questions and specifications.</span>
            </li>
            <li className="flex gap-4">
              <span style={{color:'#38bdf8', fontWeight:'bold'}}>✓</span>
              <span style={{color:'#ffffff'}}><strong>Competitive Pricing:</strong> Direct manufacturing means better value for our customers.</span>
            </li>
            <li className="flex gap-4">
              <span style={{color:'#38bdf8', fontWeight:'bold'}}>✓</span>
              <span style={{color:'#ffffff'}}><strong>Fast Delivery:</strong> Extensive inventory and rapid fulfillment capabilities.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold mb-6 mt-12" style={{color:'#38bdf8'}}>Serving Industries Nationwide</h2>
          <p className="text-lg" style={{color:'#ffffff'}}>
            We proudly serve customers nationwide, delivering products and expertise to leading industrial companies,
            engineering firms, and equipment manufacturers. Our understanding of industry needs allows us to provide
            tailored solutions that meet your requirements and preferences.
          </p>
        </div>
      </section>
    </div>
  );
}