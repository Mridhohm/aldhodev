import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="footer-content">
        <div>
          <h3 style={{ marginBottom: '0.5rem' }}>Dev/Build</h3>
          <p style={{ margin: 0, fontSize: '0.875rem' }}>
            Built properly. Deployed securely. No bloated templates.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem' }}>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/pricing">Pricing</Link>
          <a href="mailto:hello@example.com">Email Me</a>
        </div>
      </div>
      <div style={{ marginTop: '2rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
        &copy; {new Date().getFullYear()} Dev/Build. All rights reserved. Stack: Vite, React, Vanilla CSS.
      </div>
    </footer>
  );
}
