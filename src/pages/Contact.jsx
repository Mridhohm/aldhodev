import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  return (
    <div className="fade-in-up container section">
      <div className="grid grid-2" style={{ alignItems: 'start' }}>
        <div>
          <h1 style={{ marginBottom: '1.5rem' }}>Let's build it right.</h1>
          <p style={{ marginBottom: '2rem' }}>
            Ready to ditch the sluggish templates? Fill out the form to give me a rough idea of what you need. 
            I typically respond within 24 hours with some initial technical thoughts or a request to jump on a quick call.
          </p>
          <div style={{ padding: '2rem', background: 'white', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Hate forms?</h3>
            <p style={{ fontSize: '0.875rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              Send a direct email. Just include your rough requirements and timelines.
            </p>
            <a href="mailto:hello@example.com" className="text-accent" style={{ fontWeight: 600, fontSize: '1.125rem' }}>
              hello@example.com &rarr;
            </a>
          </div>
        </div>

        <div style={{ background: 'white', padding: '3rem 2rem', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
              <h3>Message Sent</h3>
              <p>I'll be in touch within 24 hours.</p>
              <button 
                className="btn" 
                style={{ marginTop: '2rem' }}
                onClick={() => setStatus('idle')}
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Name
                </label>
                <input type="text" required placeholder="Jane Doe" />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Email
                </label>
                <input type="email" required placeholder="jane@example.com" />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Project Type
                </label>
                <select required defaultValue="">
                  <option value="" disabled>Select a project type...</option>
                  <option value="landing">Starter Landing Page</option>
                  <option value="business">Business Site (Multi-page)</option>
                  <option value="custom">Custom Web App / E-Commerce</option>
                  <option value="other">Other / Maintenance</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Budget Range (USD)
                </label>
                <select required defaultValue="">
                  <option value="" disabled>Select a budget range...</option>
                  <option value="<1k">Under $1,000</option>
                  <option value="1k-3k">$1,000 - $3,000</option>
                  <option value="3k-5k">$3,000 - $5,000</option>
                  <option value="5k+">$5,000+</option>
                </select>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Project Details
                </label>
                <textarea 
                  required 
                  rows="4" 
                  placeholder="Tell me a bit about what you need built, your current stack (if any), and your timeline."
                  style={{ resize: 'vertical' }}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
