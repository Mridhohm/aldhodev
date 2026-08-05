export default function Portfolio() {
  const projects = [
    {
      title: "Local Coffee Roaster (Demo Build)",
      stack: "Next.js, Tailwind CSS, Vercel",
      need: "A local roaster needed a way to sell subscriptions online, but their existing WordPress site was too slow and confusing to manage.",
      built: "A statically generated Next.js site hooked into a headless CMS. Removed all third-party plugins in favor of hard-coded, optimized components.",
      result: "Time to Interactive (TTI) dropped from 4.2s to 0.8s. Mobile performance score hit 98/100.",
      isDemo: true
    },
    {
      title: "Boutique Architecture Firm",
      stack: "Vite, React, Framer Motion, Netlify",
      need: "An architecture firm wanted a visual-heavy portfolio that didn't stutter when scrolling large high-res image galleries.",
      built: "A custom React single-page app utilizing intersection observers to lazy-load optimized webp images just before they enter the viewport.",
      result: "Zero layout shifts (CLS of 0.00). Smooth 60fps scrolling even on mid-tier mobile devices.",
      isDemo: false
    },
    {
      title: "SaaS Documentation Portal (Demo Build)",
      stack: "Astro, Markdown, Cloudflare Pages",
      need: "A technical product needed a docs site that loaded instantly and was easily updatable via GitHub without touching a database.",
      built: "An Astro-based static site using Markdown for content authoring. Implemented full-text search locally to avoid external API dependencies.",
      result: "Perfect 100/100 across all four Lighthouse metrics. Pages load in under 50ms globally via Edge network.",
      isDemo: true
    }
  ];

  return (
    <div className="fade-in-up container section">
      <h1>Portfolio</h1>
      <p style={{ marginBottom: '4rem' }}>
        A look at what I've built, the tech decisions made, and the measurable results. 
        Some projects below are self-built demos to showcase technical capability without relying on client NDAs.
      </p>

      <div className="grid">
        {projects.map((project, idx) => (
          <div key={idx} style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <h2>{project.title}</h2>
              {project.isDemo && (
                <span style={{ fontSize: '0.75rem', background: '#eee', padding: '0.25rem 0.5rem', borderRadius: '4px', fontWeight: 600 }}>
                  DEMO BUILD
                </span>
              )}
            </div>
            <p className="mono text-accent" style={{ marginBottom: '2rem' }}>Stack: {project.stack}</p>
            
            <div className="grid grid-3" style={{ gap: '2rem' }}>
              <div>
                <h4 style={{ color: 'var(--text-color)', marginBottom: '0.5rem' }}>The Need</h4>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>{project.need}</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--text-color)', marginBottom: '0.5rem' }}>The Build</h4>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>{project.built}</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--text-color)', marginBottom: '0.5rem' }}>The Result</h4>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{project.result}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
