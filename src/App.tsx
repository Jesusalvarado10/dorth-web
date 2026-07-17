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

import SakuraBackground      from './components/SakuraBackground';
import Navbar                from './components/Navbar';
import HomePage              from './pages/HomePage';
import CurriculumPage        from './pages/CurriculumPage';
import type { GalleryImage } from './components/PhotoGallery';

// ── Types ──────────────────────────────────────────────
type Page = 'home' | 'curriculum';

// ── App ────────────────────────────────────────────────
export default function App() {
  const [currentPage,   setCurrentPage]   = useState<Page>('home');
  const [profilePhoto,  setProfilePhoto]  = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Animated sakura petals (fixed background) */}
      <SakuraBackground />

      {/* Main content */}
      <div className="page-wrapper">
        <Navbar activePage={currentPage} onNavigate={navigate} />

        {currentPage === 'home' ? (
          <HomePage
            profilePhoto={profilePhoto}
            onProfilePhotoChange={setProfilePhoto}
            galleryImages={galleryImages}
            onGalleryChange={setGalleryImages}
            onGoToCurriculum={() => navigate('curriculum')}
          />
        ) : (
          <CurriculumPage />
        )}
      </div>
    </>
  );
}
