import { useState } from 'react';

export default function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  const prototypes = [
    {
      id: 1,
      title: "DVF Plumbing & Gas",
      tags: ["Vite", "React", "Local SEO", "High Conversion"],
      description: "Ellenbrook's premier licensed plumbing & gas website. Engineered for maximum quote conversions and local search dominance.",
      accent: "#2563EB",
      liveUrl: "https://dvfplumbing.pages.dev/"
    },
    {
      id: 2,
      title: "Lowtide Plumbing & Gasfitting",
      tags: ["React", "Vanilla CSS", "Mobile First", "0.4s TTI"],
      description: "Sleek service portal for Geelong & Armstrong Creek. Features instant booking components and zero layout shift.",
      accent: "#1E3A8A",
      liveUrl: "https://lowtide-plumbing.pages.dev/"
    },
    {
      id: 3,
      title: "Sheet Hot Roofing",
      tags: ["HTML5", "CSS3", "Micro-Interactions", "Lead Capture"],
      description: "High-impact trade website for Melbourne Colorbond roofing specialists with prominent CTAs and instant quote dispatch.",
      accent: "#DC2626",
      liveUrl: "https://sheet-hot-roofing-18n.pages.dev/"
    }
  ];

  const team = [
    {
      name: "Ridho M.",
      role: "Lead Frontend Architect",
      initials: "RM",
      bio: "Specializes in modern JavaScript frameworks, CSS design systems, and hyper-optimized web performance."
    },
    {
      name: "Alex V.",
      role: "Principal UI/UX Designer",
      initials: "AV",
      bio: "Crafts clean, high-contrast user interfaces with purposeful typography and seamless micro-interactions."
    },
    {
      name: "Sam T.",
      role: "Backend & Cloud Engineer",
      initials: "ST",
      bio: "Configures edge hosting, secure API gateways, automated CI/CD pipelines, and serverless databases."
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
            <a href="#about" className="nav-link">Who We Are</a>
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
                A collective of developers and designers crafting premium websites, interactive prototypes, and custom digital solutions.
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
              Explore our live interactive prototypes and production builds. Click any card to launch the live site.
            </p>
          </div>

          <div className="vault-grid">
            {prototypes.map((item) => (
              <div key={item.id} className="card">
                <div>
                  <div className="card-preview">
                    <div className="card-preview-ui">
                      <div className="preview-bar">
                        <div className="preview-dot"></div>
                        <div className="preview-dot"></div>
                        <div className="preview-dot"></div>
                      </div>
                      <div className="preview-content-skeleton">
                        <div className="skeleton-line" style={{ width: '65%', background: item.accent }}></div>
                        <div className="skeleton-line" style={{ width: '90%' }}></div>
                        <div className="skeleton-line" style={{ width: '45%' }}></div>
                      </div>
                    </div>
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

      {/* The Team / About Us */}
      <section id="about" className="section" style={{ background: 'rgba(255, 255, 255, 0.015)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ maxWidth: '680px' }}>
            <div className="badge">Studio Culture</div>
            <h2>Who We Are</h2>
            <p style={{ marginTop: '1.25rem', fontSize: '1.15rem' }}>
              We are a tight-knit team of developers and designers who focus on clean code, seamless user experiences, and striking design. We strip away the overhead of traditional agencies to deliver precision-engineered digital products.
            </p>
          </div>

          <div className="team-grid">
            {team.map((member, idx) => (
              <div key={idx} className="team-card">
                <div className="avatar-wrapper">{member.initials}</div>
                <div className="role-title">{member.role}</div>
                <h3 style={{ marginBottom: '0.75rem' }}>{member.name}</h3>
                <p style={{ fontSize: '0.925rem' }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Let's Talk */}
      <section id="contact" className="section">
        <div className="container">
          <div className="contact-wrapper">
            <div>
              <div className="badge">Get in Touch</div>
              <h2>Ready to build something?</h2>
              <p style={{ marginTop: '1.25rem', marginBottom: '2rem' }}>
                Drop us a line and let's discuss your next project. We respond to all inquiries within 24 hours.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                <div>📍 Location: Global Remote & Regional Hubs</div>
                <div>⚡ Availability: Accepting Q3/Q4 Projects</div>
                <div>✉ Direct Email: <a href="mailto:hello@aldho.dev" style={{ color: 'var(--accent)', fontWeight: 600 }}>hello@aldho.dev</a></div>
              </div>
            </div>

            <div>
              {formSubmitted ? (
                <div style={{ background: '#09090C', border: '1px solid var(--accent)', padding: '2.5rem', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', color: 'var(--accent)', marginBottom: '1rem' }}>✓</div>
                  <h3>Message Received</h3>
                  <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>
                    Thank you! We've received your details and will get back to you shortly.
                  </p>
                  <button 
                    className="btn btn-outline" 
                    style={{ marginTop: '1.5rem', fontSize: '0.875rem' }}
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" required placeholder="Jane Doe" className="form-input" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required placeholder="jane@example.com" className="form-input" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="project">Tell us about your project</label>
                    <textarea id="project" rows="4" required placeholder="Describe your goals, requirements, or target launch date..." className="form-textarea" style={{ resize: 'vertical' }}></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }} disabled={submitting}>
                    {submitting ? 'Sending Message...' : 'Send Message'}
                  </button>
                </form>
              )}
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
            <a href="#" className="social-link">Twitter / X</a>
            <a href="#" className="social-link">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
