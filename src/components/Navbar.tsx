/**
 * Navbar.tsx
 * Top navigation bar with logo and page links.
 */

type Page = 'home' | 'about' | 'resume' | 'investigation';

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
        <span className="navbar-logo-text">Dorth</span>
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
            id="nav-about"
            className={activePage === 'about' ? 'active' : ''}
            onClick={() => onNavigate('about')}
          >
            About Me
          </button>
        </li>
        <li>
          <button
            id="nav-resume"
            className={activePage === 'resume' ? 'active' : ''}
            onClick={() => onNavigate('resume')}
          >
            Resume
          </button>
        </li>
        <li>
          <button
            id="nav-investigation"
            className={activePage === 'investigation' ? 'active' : ''}
            onClick={() => onNavigate('investigation')}
          >
            Investigation
          </button>
        </li>
      </ul>
    </nav>
  );
}
