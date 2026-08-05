import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const [region, setRegion] = useState('global'); // 'global' (USD) or 'idr' (IDR)

  return (
    <div className="fade-in-up container section">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1>Transparent Pricing</h1>
        <p style={{ margin: '0 auto' }}>
          No hidden fees, no retainer traps. You own the code and the infrastructure.
        </p>
      </div>

      <div style={{ background: '#f0f4f8', padding: '2rem', borderRadius: '8px', marginBottom: '4rem', border: '1px solid #d0dce8' }}>
        <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1.5rem' }}>🌍</span> Fair Regional Pricing
        </h3>
        <p style={{ marginBottom: '1.5rem', color: '#334155' }}>
          Software shouldn't cost the same in Jakarta as it does in San Francisco. 
          I use purchasing power parity (PPP) to adjust pricing fairly based on where your business operates, 
          not simply because I'm "cheaper labor." Select your primary operating region below:
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button 
            className={`btn ${region === 'global' ? 'btn-primary' : ''}`}
            onClick={() => setRegion('global')}
          >
            Global / US / EU (USD)
          </button>
          <button 
            className={`btn ${region === 'idr' ? 'btn-primary' : ''}`}
            onClick={() => setRegion('idr')}
          >
            Indonesia (IDR)
          </button>
        </div>
      </div>

      <div className="grid grid-3">
        {/* Tier 1 */}
        <div style={{ border: '1px solid var(--border-color)', padding: '2rem', borderRadius: '8px', background: 'white' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>Starter Landing</h3>
          <p className="mono text-accent" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
            {region === 'global' ? '$900 USD' : 'Rp 6.500.000'}
          </p>
          <p style={{ fontSize: '0.875rem', marginBottom: '2rem' }}>
            A high-performance single page designed to convert. Perfect for new product launches or simple service businesses.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li>✓ Custom single-page design</li>
            <li>✓ Mobile-first & responsive</li>
            <li>✓ Deployed to global edge network</li>
            <li>✓ Basic on-page SEO setup</li>
            <li>✓ 2 rounds of revisions</li>
            <li>✓ ~2 week turnaround</li>
          </ul>
          <Link to="/contact" className="btn" style={{ width: '100%' }}>Inquire</Link>
        </div>

        {/* Tier 2 */}
        <div style={{ border: '2px solid var(--text-color)', padding: '2rem', borderRadius: '8px', background: 'white', transform: 'scale(1.02)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <div style={{ background: 'var(--text-color)', color: 'white', fontSize: '0.75rem', padding: '0.25rem 0.5rem', borderRadius: '4px', display: 'inline-block', marginBottom: '1rem', fontWeight: 600 }}>RECOMMENDED</div>
          <h3 style={{ marginBottom: '0.5rem' }}>Business Site</h3>
          <p className="mono text-accent" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
            {region === 'global' ? '$2,500 USD' : 'Rp 18.500.000'}
          </p>
          <p style={{ fontSize: '0.875rem', marginBottom: '2rem' }}>
            A comprehensive 5-page website for established businesses needing a serious web presence without the bloat.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li>✓ Up to 5 custom pages</li>
            <li>✓ Lightning fast static generation</li>
            <li>✓ Advanced technical SEO</li>
            <li>✓ Configured contact forms</li>
            <li>✓ 3 rounds of revisions</li>
            <li>✓ ~4 week turnaround</li>
          </ul>
          <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>Inquire</Link>
        </div>

        {/* Tier 3 */}
        <div style={{ border: '1px solid var(--border-color)', padding: '2rem', borderRadius: '8px', background: 'white' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>Custom Build</h3>
          <p className="mono text-accent" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
            {region === 'global' ? 'From $5,000 USD' : 'From Rp 35.000.000'}
          </p>
          <p style={{ fontSize: '0.875rem', marginBottom: '2rem' }}>
            Complex web applications, headless e-commerce, or sites requiring deep CMS integrations.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li>✓ Custom architecture</li>
            <li>✓ CMS or E-commerce integration</li>
            <li>✓ API connections</li>
            <li>✓ Custom animations</li>
            <li>✓ Extended QA testing</li>
            <li>✓ Timeline based on scope</li>
          </ul>
          <Link to="/contact" className="btn" style={{ width: '100%' }}>Let's Talk</Link>
        </div>
      </div>

      <div style={{ marginTop: '5rem', borderTop: '1px solid var(--border-color)', paddingTop: '4rem' }}>
        <h2>A la Carte & Add-ons</h2>
        <div className="grid grid-2" style={{ marginTop: '2rem' }}>
          <div>
            <h4 style={{ marginBottom: '0.5rem' }}>Ongoing Maintenance & Hosting</h4>
            <p style={{ fontSize: '0.875rem' }}>{region === 'global' ? '$150/mo' : 'Rp 1.000.000/mo'}</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>I manage the servers, handle security updates, monitor uptime, and process minor content tweaks so you don't have to touch code.</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '0.5rem' }}>Extra Pages</h4>
            <p style={{ fontSize: '0.875rem' }}>{region === 'global' ? '$250/page' : 'Rp 1.500.000/page'}</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Need an additional service page, team page, or policy document added to your core build.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
