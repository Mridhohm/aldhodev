import { useState } from 'react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const email = "aldho.dev@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const prototypes = [
    {
      id: 1,
      title: "DVF Plumbing & Gas",
      tags: ["Vite", "React", "Local SEO", "High Conversion"],
      description: "Ellenbrook's premier licensed plumbing & gas website. Engineered for maximum quote conversions and local search dominance.",
      image: "/dvf.jpg",
      liveUrl: "https://dvfplumbing.pages.dev/"
    },
    {
      id: 2,
      title: "Lowtide Plumbing & Gasfitting",
      tags: ["React", "Vanilla CSS", "Mobile First", "0.4s TTI"],
      description: "Sleek service portal for Geelong & Armstrong Creek. Features instant booking components and zero layout shift.",
      image: "/lowtide.jpg",
      liveUrl: "https://lowtide-plumbing.pages.dev/"
    },
    {
      id: 3,
      title: "Sheet Hot Roofing",
      tags: ["HTML5", "CSS3", "Micro-Interactions", "Lead Capture"],
      description: "High-impact trade website for Melbourne Colorbond roofing specialists with prominent CTAs and instant quote dispatch.",
      image: "/sheethot.jpg",
      liveUrl: "https://sheet-hot-roofing-18n.pages.dev/"
    }
  ];

  return (
    <div className="app-container">
      {/* Navigation */}
      <header className="navbar">
        <div className="container navbar-inner">
          <a href="#" className="brand-logo">
            <span className="dot"></span>
            aldhodev
          </a>
          <nav className="nav-links">
            <a href="#work" className="nav-link">Prototype Vault</a>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.1rem', fontSize: '0.875rem' }}>
              Let's Talk
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="badge">
                <span>✦</span> Trust Hub & Active Prototypes
              </div>
              <h1>We Build Digital Experiences That Perform.</h1>
              <p style={{ marginTop: '1.5rem', fontSize: '1.25rem' }}>
                Crafting premium websites, interactive prototypes, and custom high-converting digital solutions.
              </p>
              <div className="hero-cta-group">
                <a href="#work" className="btn btn-primary">
                  View Our Work
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                </a>
                <a href="#contact" className="btn btn-outline">
                  Contact Studio
                </a>
              </div>

              <div className="stat-pill-group">
                <div className="stat-pill">
                  <h4>100%</h4>
                  <p>Lighthouse Target</p>
                </div>
                <div className="stat-pill">
                  <h4>&lt;500ms</h4>
                  <p>Average Load Time</p>
                </div>
                <div className="stat-pill">
                  <h4>Zero</h4>
                  <p>Template Bloat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Prototype Vault (Selected Works) */}
      <section id="work" className="section">
        <div className="container">
          <div className="vault-header">
            <div>
              <div className="badge" style={{ background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-muted)', borderColor: 'var(--border-color)' }}>
                Selected Works
              </div>
              <h2>The Prototype Vault</h2>
            </div>
            <p style={{ margin: 0, maxWidth: '40ch' }}>
              Explore our live production builds and mockups. Click any card to launch the live site.
            </p>
          </div>

          <div className="vault-grid">
            {prototypes.map((item) => (
              <div key={item.id} className="card">
                <div>
                  <div className="card-preview">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="card-preview-img" 
                    />
                  </div>

                  <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    {item.description}
                  </p>
                </div>

                <div>
                  <div className="tag-list">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>

                  <div className="card-footer">
                    <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" className="card-link">
                      <span>View Live Site</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Clean & Direct */}
      <section id="contact" className="section" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="contact-card-simple">
            <div className="badge">Direct Contact</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>Let's Talk.</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '50ch' }}>
              Have a project in mind or need a high-performance website built right? Drop an email directly and let's get it started.
            </p>

            <div className="email-box-wrapper">
              <span className="email-text">{email}</span>
              <div className="email-actions">
                <button onClick={handleCopy} className="btn btn-outline" style={{ padding: '0.65rem 1.25rem', fontSize: '0.9rem' }}>
                  {copied ? '✓ Copied' : 'Copy Email'}
                </button>
                <a href={`mailto:${email}`} className="btn btn-primary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.9rem' }}>
                  Send Email ➔
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-text">
            © {new Date().getFullYear()} aldhodev. Built for high performance & clean delivery.
          </div>
          <div className="social-links">
            <a href="https://github.com/Mridhohm/aldhodev" target="_blank" rel="noopener noreferrer" className="social-link">GitHub Repo</a>
            <a href="mailto:aldo.dev@gmail.com" className="social-link">aldo.dev@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
