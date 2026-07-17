/**
 * Navbar.tsx
 * Top navigation bar with logo and page links.
 */

type Page = 'home' | 'curriculum';

interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      {/* Logo */}
      <button
        className="navbar-logo"
        onClick={() => onNavigate('home')}
        aria-label="Go to home"
      >
        <span className="navbar-logo-text">刀 Dorth</span>
        <div className="navbar-logo-dot" />
      </button>

      {/* Links */}
      <ul className="navbar-nav">
        <li>
          <button
            id="nav-home"
            className={activePage === 'home' ? 'active' : ''}
            onClick={() => onNavigate('home')}
          >
            Home
          </button>
        </li>
        <li>
          <button
            id="nav-curriculum"
            className={activePage === 'curriculum' ? 'active' : ''}
            onClick={() => onNavigate('curriculum')}
          >
            Curriculum
          </button>
        </li>
      </ul>
    </nav>
  );
}
