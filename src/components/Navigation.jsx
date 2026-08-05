import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <header className="header container">
      <div className="header-logo">
        <Link to="/">Dev/Build</Link>
      </div>
      <nav className="header-nav">
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact" className="text-accent">Contact</Link>
      </nav>
    </header>
  );
}
