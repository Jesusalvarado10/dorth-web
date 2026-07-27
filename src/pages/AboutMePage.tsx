import { useState } from 'react';
import Footer from '../components/Footer';
import FeaturedVideo from '../components/FeaturedVideo';

export default function AboutMePage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main style={{ paddingTop: 100 }}>
      <section className="section" aria-labelledby="about-heading">
        <div className="section-header">
          <div className="section-label">About Me</div>
          <h2 className="section-title" id="about-heading">About Me</h2>
          <p className="section-title-sub" style={{ color: 'var(--color-text-muted)' }}>
            Passionate about biomedical sciences, research, and making a difference in healthcare.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
          {/* Summary card */}
          <div className="glass-card">
            <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12, color: 'var(--color-text-primary)' }}>
              Summary
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 16, lineHeight: 1.8 }}>
              Dedicated and highly motivated Biomedical Sciences student with proven experience in clinical environments, 
              research settings, and emergency response. Possesses a strong academic foundation complemented by hands-on 
              skills in biomechanical data collection, sequence analysis, and direct patient care.
            </p>
          </div>

          {/* Who I Am card */}
          <div className="glass-card">
            <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12, color: 'var(--color-text-primary)' }}>
              Who I Am
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 16, lineHeight: 1.8 }}>
              I'm a Biomedical Sciences student at UCF with a strong academic record and a passion for research
              and patient care. From biomechanics labs to aquatic emergencies, I thrive in high-stakes environments
              that demand precision, empathy, and teamwork. I am continually seeking to expand my knowledge and 
              contribute to meaningful advancements in the medical field.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <FeaturedVideo videoId="1akRYV6naOM" />

      {/* Personal Statement Section */}
      <section className="section" aria-label="Personal Statement" style={{ paddingTop: 40 }}>
        <div className="section-header">
          <div className="section-label">Document</div>
          <h2 className="section-title">Personal Statement</h2>
          <p className="section-subtitle">
            A comprehensive reflection on my background, motivations, and commitment to pursuing a career in medicine.
          </p>
        </div>

        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div className="pdf-panel">
            <div className="pdf-panel-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span className="pdf-badge" style={{ background: 'linear-gradient(135deg, #0284c7, #38bdf8)' }}>PDF</span>
                <span className="pdf-filename">Dorth Arenas — Personal Statement</span>
              </div>
              <div className="pdf-actions">
                <button
                  className="btn-outline"
                  onClick={() => setShowModal(true)}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                  </svg>
                  Fullscreen
                </button>
                <a
                  href="/personal-statement.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-download"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Open PDF
                </a>
              </div>
            </div>
            <div style={{ height: '600px', width: '100%', background: '#111827' }}>
              <iframe
                src="/personal-statement.pdf#toolbar=0"
                title="Personal Statement PDF"
                style={{ width: '100%', height: '100%', border: 'none' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen PDF Modal */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            flexDirection: 'column',
            padding: 20,
          }}
        >
          <div
            style={{
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center',
              marginBottom: 12,
              color: '#fff',
            }}
          >
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Personal Statement — Fullscreen</h3>
            <button
              onClick={() => setShowModal(false)}
              className="btn-outline"
              style={{ padding: '6px 16px', cursor: 'pointer' }}
            >
              Close ✕
            </button>
          </div>
          <iframe
            src="/personal-statement.pdf"
            title="Personal Statement PDF Fullscreen"
            style={{ flex: 1, width: '100%', border: 'none', borderRadius: 8 }}
          />
        </div>
      )}

      <Footer />
    </main>
  );
}
