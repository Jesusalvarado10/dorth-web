/**
 * App.tsx
 * ─────────────────────────────────────────────────────
 * Root component. Manages global state and page routing.
 *
 * State held here (lifted up) so both pages share it:
 *   • currentPage   — which page is visible
 *   • profilePhoto  — hero profile image URL
 *   • galleryImages — personal photo gallery
 */

import { useState } from 'react';
import './index.css';

import Navbar                from './components/Navbar';
import HomePage              from './pages/HomePage';
import ResumePage            from './pages/ResumePage';
import AboutMePage           from './pages/AboutMePage';
import defaultProfilePhoto   from './assets/profile-photo.jpeg';

// ── Types ──────────────────────────────────────────────
type Page = 'home' | 'about' | 'resume' | 'investigation';

// ── App ────────────────────────────────────────────────
export default function App() {
  const [currentPage,   setCurrentPage]   = useState<Page>('home');
  const [profilePhoto,  setProfilePhoto]  = useState<string | null>(defaultProfilePhoto);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Main content */}
      <div className="page-wrapper">
        <Navbar activePage={currentPage} onNavigate={navigate} />

        {currentPage === 'home' ? (
          <HomePage
            profilePhoto={profilePhoto}
            onProfilePhotoChange={setProfilePhoto}
            onGoToResume={() => navigate('resume')}
          />
        ) : currentPage === 'about' ? (
          <AboutMePage />
        ) : currentPage === 'resume' ? (
          <ResumePage />
        ) : (
          <div className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h2>Investigation Section Coming Soon</h2>
          </div>
        )}
      </div>
    </>
  );
}
