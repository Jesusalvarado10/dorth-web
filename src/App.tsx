/**
 * App.tsx
 * ─────────────────────────────────────────────────────
 * Root component. Configures React Router routes for all pages.
 */

import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './index.css';

import Navbar                from './components/Navbar';
import HomePage              from './pages/HomePage';
import ResumePage            from './pages/ResumePage';
import AboutMePage           from './pages/AboutMePage';
import ResearchPage          from './pages/ResearchPage';
import ClinicalPage          from './pages/ClinicalPage';
import PathToMedicinePage    from './pages/PathToMedicinePage';
import defaultProfilePhoto   from './assets/profile-photo.jpeg';

export default function App() {
  const [profilePhoto, setProfilePhoto] = useState<string | null>(defaultProfilePhoto);
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              profilePhoto={profilePhoto}
              onProfilePhotoChange={setProfilePhoto}
              onGoToResume={() => {
                navigate('/resume');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          }
        />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/clinical" element={<ClinicalPage />} />
        <Route path="/path" element={<PathToMedicinePage />} />
      </Routes>
    </div>
  );
}
