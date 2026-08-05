import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="fade-in-up">
      <section className="section container">
        <h1>
          Websites that actually get deployed, indexed, and load fast.
        </h1>
        <p style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '2.5rem' }}>
          Built by a developer, not a template. I write clean code so your site doesn't rely on bloated page builders, resulting in perfect Lighthouse scores and zero friction.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/portfolio" className="btn btn-primary">See the Work</Link>
          <Link to="/contact" className="btn">Get in Touch</Link>
        </div>
      </section>

      <section className="section container" style={{ backgroundColor: 'white', padding: '4rem 2rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
        <h2>The Technical Difference</h2>
        <div className="grid grid-3" style={{ marginTop: '3rem' }}>
          <div>
            <h3>Real Infrastructure</h3>
            <p className="mono">Hosting & Deployment</p>
            <p>
              I don't just hand over a zipped file. I configure proper hosting, edge caching, and automated deployments so your site stays online and fast under load.
            </p>
          </div>
          <div>
            <h3>Baked-in SEO</h3>
            <p className="mono">Meta tags & Semantics</p>
            <p>
              Proper HTML semantics, sensible headers, and structured data are included by default. It's not "SEO magic"—it's just doing the fundamentals correctly.
            </p>
          </div>
          <div>
            <h3>Security Basics</h3>
            <p className="mono">SSL & Protection</p>
            <p>
              Every site ships with strict HTTPS, secure headers, and automated backup routines. These are standard practices, not premium upsells.
            </p>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2>Recent Builds</h2>
        <div className="grid grid-2" style={{ marginTop: '2rem' }}>
          <div style={{ border: '1px solid var(--border-color)', padding: '2rem', borderRadius: '4px' }}>
            <h3 style={{ marginBottom: '0.25rem' }}>E-Commerce Storefront</h3>
            <p className="mono text-accent" style={{ marginBottom: '1rem' }}>Next.js • Stripe • Sanity CMS</p>
            <p>A headless e-commerce build designed to load product pages in under 800ms. Replaced a sluggish WooCommerce setup.</p>
          </div>
          <div style={{ border: '1px solid var(--border-color)', padding: '2rem', borderRadius: '4px' }}>
            <h3 style={{ marginBottom: '0.25rem' }}>B2B SaaS Landing</h3>
            <p className="mono text-accent" style={{ marginBottom: '1rem' }}>Vite • React • Cloudflare Pages</p>
            <p>A high-conversion landing page focused on strict Core Web Vitals compliance. 100/100 Lighthouse performance score.</p>
          </div>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <Link to="/portfolio" className="text-accent" style={{ fontWeight: 500 }}>View full portfolio &rarr;</Link>
        </div>
      </section>

      <section className="section container" style={{ textAlign: 'center' }}>
        <h2>Transparent Pricing</h2>
        <p style={{ margin: '0 auto 2rem auto' }}>
          No hidden fees. Starting at $900 USD for a custom landing page.
        </p>
        <Link to="/pricing" className="btn btn-primary">See Regional Pricing</Link>
      </section>
    </div>
  );
}
