import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Plate Flanges',
  description: 'Privacy policy for Plate Flanges website.',
  alternates: { canonical: 'https://plateflanges.com/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://plateflanges.com" },
          { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://plateflanges.com/privacy-policy" }
        ]
      })}} />

      <section className="py-12" style={{background:'linear-gradient(135deg, #0f172a, #1e293b)'}}>
        <div className="container-wide">
          <h1 className="text-4xl font-bold" style={{color:'#ffffff'}}>Privacy Policy</h1>
        </div>
      </section>

      <section className="py-16" style={{background:'#0f172a'}}>
        <div className="container-wide max-w-4xl">
          <div className="prose prose-lg max-w-4xl" style={{color:'#ffffff'}}>
            <p className="text-lg mb-4" style={{color:'#ffffff'}}>
              Last Updated: March 2026
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-8" style={{color:'#38bdf8'}}>1. Introduction</h2>
            <p className="text-lg mb-4" style={{color:'#ffffff'}}>
              Plate Flanges ("Company," "we," "us," "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-8" style={{color:'#38bdf8'}}>2. Information We Collect</h2>
            <p className="text-lg mb-4" style={{color:'#ffffff'}}>
              We may collect information about you in a variety of ways. The information we may collect on the site includes:
            </p>
            <ul className="text-lg mb-4 list-disc list-inside space-y-2" style={{color:'#ffffff'}}>
              <li>Personal identification information (name, email address, phone number, etc.)</li>
              <li>Automatic information through cookies and similar tracking technologies</li>
              <li>Information about your browsing behavior and interactions with our website</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 mt-8" style={{color:'#38bdf8'}}>3. Use of Your Information</h2>
            <p className="text-lg mb-4" style={{color:'#ffffff'}}>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:
            </p>
            <ul className="text-lg mb-4 list-disc list-inside space-y-2" style={{color:'#ffffff'}}>
              <li>Respond to your inquiries and fulfill your requests</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Monitor and analyze trends and usage</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 mt-8" style={{color:'#38bdf8'}}>4. Disclosure of Your Information</h2>
            <p className="text-lg mb-4" style={{color:'#ffffff'}}>
              We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners for the purposes outlined above.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-8" style={{color:'#38bdf8'}}>5. Contact Us</h2>
            <p className="text-lg mb-4" style={{color:'#ffffff'}}>
              If you have questions or concerns regarding this Privacy Policy, please contact us at:
            </p>
            <div className="text-lg mb-4 space-y-2" style={{color:'#ffffff'}}>
              <p><strong>Phone:</strong> <a href="tel:281-484-8325" style={{color:'#38bdf8'}}>281-484-8325</a></p>
              <p><strong>Email:</strong> <a href="mailto:sales@texasflange.com" style={{color:'#38bdf8'}}>sales@texasflange.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
