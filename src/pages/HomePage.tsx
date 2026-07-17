/**
 * HomePage.tsx
 * Landing page: hero, contact strip, stats, about cards, and photo gallery.
 * All content is sourced from src/data/resume.ts — no uploads needed.
 */

import { useRef } from 'react';
import { PERSONAL, STATS, EDUCATION } from '../data/resume';
import PhotoGallery, { type GalleryImage } from '../components/PhotoGallery';
import Footer from '../components/Footer';

interface HomePageProps {
  profilePhoto:         string | null;
  onProfilePhotoChange: (url: string) => void;
  galleryImages:        GalleryImage[];
  onGalleryChange:      (imgs: GalleryImage[]) => void;
  onGoToCurriculum:     () => void;
}

export default function HomePage({
  profilePhoto,
  onProfilePhotoChange,
  galleryImages,
  onGalleryChange,
  onGoToCurriculum,
}: HomePageProps) {
  const profileInputRef = useRef<HTMLInputElement>(null);

  const handleProfileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    onProfilePhotoChange(URL.createObjectURL(file));
    e.target.value = '';
  };

  return (
    <main>

      {/* ══════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="hero-section" id="hero" aria-label="Introduction">
        <div className="hero-bg" />
        <div className="hero-bg-overlay" />

        <div className="hero-content">
          {/* — Text column — */}
          <div className="hero-text">
            <div className="hero-eyebrow">
              <div className="hero-eyebrow-line" />
              <span className="hero-eyebrow-text">ポートフォリオ · Portfolio</span>
            </div>

            <h1 className="hero-name">
              <span className="hero-name-sub">{PERSONAL.nameJp}</span>
              {PERSONAL.name}
            </h1>

            <p className="hero-tagline">{PERSONAL.tagline}</p>

            {/* Quick-info badges */}
            <div className="hero-badges">
              <span className="hero-badge">🎓 UCF — Biomedical Sciences</span>
              <span className="hero-badge">⚗️ Researcher</span>
              <span className="hero-badge">🏊 Lifeguard</span>
              <span className="hero-badge">🌎 Orlando, FL</span>
            </div>

            <div className="hero-cta-group">
              <button
                className="btn-primary"
                onClick={onGoToCurriculum}
                id="hero-cv-btn"
              >
                🌸 View My CV
              </button>
              <a className="btn-secondary" href="#contact" id="hero-contact-btn">
                ✉ Contact
              </a>
            </div>
          </div>

          {/* — Profile photo column — */}
          <div className="hero-photo-wrapper">
            <div className="hero-photo-ring">
              <div className="hero-photo-inner">
                {profilePhoto ? (
                  <img
                    src={profilePhoto}
                    alt="Profile photo of Dorth Arenas"
                    title="Click to change photo"
                    style={{ cursor: 'pointer' }}
                    onClick={() => profileInputRef.current?.click()}
                  />
                ) : (
                  <div
                    className="hero-photo-placeholder"
                    role="button"
                    tabIndex={0}
                    onClick={() => profileInputRef.current?.click()}
                    onKeyDown={(e) => e.key === 'Enter' && profileInputRef.current?.click()}
                    aria-label="Upload profile photo"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <span>Upload profile photo</span>
                  </div>
                )}
                <input
                  ref={profileInputRef}
                  id="profile-photo-input"
                  type="file"
                  accept="image/*"
                  onChange={handleProfileUpload}
                  style={{ display: 'none' }}
                  aria-label="Choose profile photo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CONTACT STRIP
      ══════════════════════════════════════════════════════ */}
      <section className="contact-strip" id="contact" aria-label="Contact information">
        <div className="contact-strip-inner">

          <a href={`mailto:${PERSONAL.email}`} className="contact-item" id="contact-email">
            <div className="contact-icon">✉️</div>
            <div>
              <div className="contact-label">EMAIL</div>
              <div>{PERSONAL.email}</div>
            </div>
          </a>

          <a href={`tel:${PERSONAL.phone}`} className="contact-item" id="contact-phone">
            <div className="contact-icon">📞</div>
            <div>
              <div className="contact-label">PHONE</div>
              <div>{PERSONAL.phone}</div>
            </div>
          </a>

          <a
            href={`https://${PERSONAL.linkedin}`}
            target="_blank" rel="noopener noreferrer"
            className="contact-item"
            id="contact-linkedin"
          >
            <div className="contact-icon">💼</div>
            <div>
              <div className="contact-label">LINKEDIN</div>
              <div>{PERSONAL.linkedin}</div>
            </div>
          </a>

          <div className="contact-item" id="contact-location">
            <div className="contact-icon">📍</div>
            <div>
              <div className="contact-label">LOCATION</div>
              <div>{PERSONAL.location}</div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          STATS ROW
      ══════════════════════════════════════════════════════ */}
      <div style={{ background: 'linear-gradient(to bottom, var(--color-bg), var(--color-bg-card) 50%, var(--color-bg))' }}>
        <section className="section" aria-label="Key highlights">
          <div className="section-header">
            <div className="section-label">実績 · Highlights</div>
            <h2 className="section-title">By the Numbers</h2>
          </div>

          <div className="three-col">
            {STATS.map((s) => (
              <div key={s.label} className="stat-card">
                <div className="stat-number">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="section-divider" />

      {/* ══════════════════════════════════════════════════════
          ABOUT / EDUCATION SNAPSHOT
      ══════════════════════════════════════════════════════ */}
      <section className="section" aria-labelledby="about-heading">
        <div className="section-header">
          <div className="section-label">自己紹介 · About</div>
          <h2 className="section-title" id="about-heading">About Me</h2>
          <p className="section-subtitle">
            Passionate about biomedical sciences, research, and making a difference in healthcare.
          </p>
        </div>

        <div className="two-col" style={{ alignItems: 'start' }}>
          {/* Bio card */}
          <div className="glass-card">
            <div style={{ fontSize: 36, marginBottom: 16 }}>🧬</div>
            <h3 style={{ fontFamily: 'var(--font-jp)', fontSize: 20, fontWeight: 700, marginBottom: 12, color: 'var(--color-accent-pink)' }}>
              Who I Am
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 15, lineHeight: 1.8 }}>
              I'm a Biomedical Sciences student at UCF with a strong academic record and a passion for research
              and patient care. From biomechanics labs to aquatic emergencies, I thrive in high-stakes environments
              that demand precision, empathy, and teamwork.
            </p>
          </div>

          {/* Education snapshot */}
          <div className="glass-card">
            <div style={{ fontSize: 36, marginBottom: 16 }}>🎓</div>
            <h3 style={{ fontFamily: 'var(--font-jp)', fontSize: 20, fontWeight: 700, marginBottom: 16, color: 'var(--color-accent-pink)' }}>
              Education
            </h3>
            {EDUCATION.map((ed) => (
              <div key={ed.degree} style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 2 }}>
                  {ed.degree}
                  {ed.gpa && (
                    <span style={{
                      marginLeft: 8, padding: '2px 8px', borderRadius: 99, fontSize: 11,
                      background: 'rgba(255,107,157,0.15)', color: 'var(--color-accent-pink)',
                    }}>
                      GPA {ed.gpa}
                    </span>
                  )}
                </div>
                <div style={{ fontSize: 13, color: 'var(--color-accent-cyan)' }}>{ed.school}</div>
                <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 2 }}>{ed.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════════════════════════════════════════════════════
          PHOTO GALLERY
      ══════════════════════════════════════════════════════ */}
      <section className="section" aria-labelledby="gallery-heading">
        <div className="section-header">
          <div className="section-label">写真 · Gallery</div>
          <h2 className="section-title" id="gallery-heading">Photos</h2>
          <p className="section-subtitle">Moments, achievements, and memories.</p>
        </div>

        <PhotoGallery images={galleryImages} onImagesChange={onGalleryChange} />
      </section>

      <Footer />
    </main>
  );
}
