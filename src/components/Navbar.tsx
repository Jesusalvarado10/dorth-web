/**
 * Navbar.tsx
 * Top navigation bar with logo and page links powered by React Router.
 */

import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      {/* Logo */}
      <button
        className="navbar-logo"
        onClick={() => {
          navigate('/');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        aria-label="Go to home"
      >
        <span className="navbar-logo-text">Dorth</span>
        <div className="navbar-logo-dot" />
      </button>

      {/* Links */}
      <ul className="navbar-nav">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/research"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Research
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clinical"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Clinical Care
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/path"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Path to Medicine
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
