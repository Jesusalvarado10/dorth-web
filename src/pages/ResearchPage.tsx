/**
 * ResearchPage.tsx
 * Research portfolio page — mirrors the visual design of ResumePage.
 * Shows biomechanics and bioinformatics research with integrated PDF viewers.
 */

import { useState } from 'react';
import Footer from '../components/Footer';

// ── PDF Modal ──────────────────────────────────────────
interface PdfModalProps {
  title: string;
  url: string;
  onClose: () => void;
}

function PdfModal({ title, url, onClose }: PdfModalProps) {
  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-label={title}>
      <div
        style={{
          width: '92vw',
          maxWidth: 1100,
          height: '88vh',
          background: 'var(--color-bg-card)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid var(--color-border)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 20px',
            borderBottom: '1px solid var(--color-border)',
            background: 'var(--color-bg-surface)',
            flexShrink: 0,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="pdf-badge" style={{ background: 'linear-gradient(135deg, #0284c7, #38bdf8)', color: '#fff' }}>PDF</span>
            <span className="pdf-filename">{title}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Open in New Tab ↗
            </a>
            <button
              className="lightbox-close"
              onClick={onClose}
              aria-label="Close"
              style={{ position: 'static', width: 36, height: 36 }}
            >
              ✕
            </button>
          </div>
        </div>
        {/* PDF iframe */}
        <iframe
          src={url}
          title={title}
          style={{ flex: 1, width: '100%', border: 'none' }}
        />
      </div>
    </div>
  );
}

// ── Research Section Wrapper ───────────────────────────
function ResearchSection({
  label, title, subtitle, children,
}: {
  label: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="section"
      aria-labelledby={`section-${label.toLowerCase().replace(/\s/g, '-')}`}
    >
      <div className="section-header">
        <div className="section-label">{label}</div>
        <h2
          className="section-title"
          id={`section-${label.toLowerCase().replace(/\s/g, '-')}`}
        >
          {title}
        </h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

// ── PDF Viewer Card ────────────────────────────────────
// Renders a framed pdf-panel block with an embedded iframe + action buttons.
function PdfViewerCard({
  label,
  filename,
  pdfUrl,
  height = 420,
  onExpand,
}: {
  label: string;
  filename: string;
  pdfUrl: string;
  height?: number;
  onExpand: () => void;
}) {
  return (
    <div className="pdf-panel" style={{ marginTop: 24 }}>
      <div className="pdf-panel-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="pdf-badge">{label}</span>
          <span className="pdf-filename">{filename}</span>
        </div>
        <div className="pdf-actions">
          <button className="btn-outline" onClick={onExpand}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
            </svg>
            Fullscreen
          </button>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-download"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Open in New Tab
          </a>
        </div>
      </div>
      <div style={{ width: '100%', height }}>
        <iframe
          src={pdfUrl}
          title={filename}
          style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        />
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────
export default function ResearchPage() {
  const [modal, setModal] = useState<{ title: string; url: string } | null>(null);

  return (
    <main style={{ paddingTop: 80 }}>

      {/* ─── Page Header with Integrated Introduction ─── */}
      <div className="cv-page-header">
        <div className="cv-page-header-bg" aria-hidden="true">RESEARCH</div>
        <div className="cv-page-header-inner">
          <div className="section-label" style={{ display: 'inline-flex', marginBottom: 16 }}>
            Research Portfolio
          </div>
          <h1 className="cv-page-title">Research Page</h1>
          <p className="cv-page-subtitle" style={{ maxWidth: 820, lineHeight: 1.8, fontSize: 16 }}>
            My research experiences have allowed me to explore the relationship between biomedical science,
            human movement, and athletic performance. Through projects in biomechanics and bioinformatics,
            I have developed skills in data collection, scientific analysis, experimental procedures, and
            the communication of research findings.
          </p>
          {/* Research highlight badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 20 }}>
            <span className="hero-badge">🔬 Biomechanics — UCF, Spring 2026</span>
            <span className="hero-badge">🧬 Bioinformatics — Valencia, 2023–2024</span>
            <span className="hero-badge">🏛 2 Symposium Presentations</span>
            <span className="hero-badge">🎓 Honors Research Scholar</span>
          </div>
        </div>
      </div>

      <div className="section-divider" />



      {/* ─── Project 1: Gait ─── */}
      <ResearchSection
        label="Biomechanics Research"
        title="Gait Event Detection & Torque Adjustment for Multi-Terrain Locomotion"
        subtitle="University of Central Florida — Spring 2026"
      >
        {/* Mentors badge row */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
          <span className="skill-tag" style={{ fontSize: 13 }}>
            🎓 University of Central Florida · Spring 2026
          </span>
          <span className="skill-tag" style={{ fontSize: 13 }}>
            👨‍🔬 Mentors: Dr. Sy Nguyen &amp; Dr. Hwan Choi
          </span>
        </div>

        {/* Description card */}
        <div className="glass-card" style={{ marginBottom: 0 }}>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--color-text-muted)', marginBottom: 0 }}>
            In this project, I contributed to biomechanics research focused on gait analysis and adaptive
            locomotion across different terrains. I assisted with the development and calibration of
            sensor-based systems, experimental setup, data collection, and the evaluation of gait events
            and movement efficiency. This experience helped me better understand how biomechanics research
            can contribute to mobility, rehabilitation, and sports medicine.
          </p>
        </div>

        {/* Certificate PDF viewer */}
        <PdfViewerCard
          label="CERTIFICATE"
          filename="Certificate of Completion — UCF Biomechanics Research"
          pdfUrl="/certificate.pdf"
          height={500}
          onExpand={() => setModal({ title: 'Certificate of Completion', url: '/certificate.pdf' })}
        />
      </ResearchSection>

      <div className="section-divider" />

      {/* ─── Project 2: PPARA ─── */}
      <div style={{ background: 'linear-gradient(to bottom, var(--color-bg), var(--color-bg-card) 50%, var(--color-bg))' }}>
        <ResearchSection
          label="Bioinformatics Research"
          title="PPARA Gene and Athletic Performance"
          subtitle="Genetic Relationships Through Sequence Analysis"
        >
          {/* Description card */}
          <div className="glass-card" style={{ marginBottom: 0 }}>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--color-text-muted)', marginBottom: 0 }}>
              This project examined the possible relationship between variations in the PPARA gene and
              athletic performance. I developed the research proposal, completed the Honors Research
              Process and Honors Research Project courses, reviewed scientific literature, and used
              bioinformatics tools such as VISTA Gateway and PROMO ALGGEN. Through this experience, I
              learned how to develop a research question, analyze genetic information, and communicate
              scientific findings to different audiences.
            </p>
          </div>

          {/* Poster — image first, then PDF viewer */}
          <div
            className="pdf-panel"
            style={{ marginTop: 24, cursor: 'pointer' }}
            onClick={() => setModal({ title: 'PPARA Research Poster', url: '/poster.pdf' })}
            title="Click to open fullscreen viewer"
          >
            <div className="pdf-panel-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span className="pdf-badge" style={{ background: 'linear-gradient(135deg, #0284c7, #38bdf8)' }}>POSTER</span>
                <span className="pdf-filename">Research Poster — PPARA Gene &amp; Athletic Performance</span>
              </div>
              <div className="pdf-actions" onClick={(e) => e.stopPropagation()}>
                <button
                  className="btn-outline"
                  onClick={() => setModal({ title: 'PPARA Research Poster', url: '/poster.pdf' })}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                  </svg>
                  Fullscreen
                </button>
                <a
                  href="/poster.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-download"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  View Full Research Poster
                </a>
              </div>
            </div>

            {/* Poster image — full width, natural aspect ratio */}
            <div
              style={{
                background: '#0f172a',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 16,
              }}
            >
              <img
                src="/poster.png"
                alt="PPARA Gene Research Poster"
                style={{
                  width: '100%',
                  maxWidth: 900,
                  height: 'auto',
                  borderRadius: 'var(--radius-md)',
                  display: 'block',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                }}
              />
            </div>
          </div>
        </ResearchSection>
      </div>

      <div className="section-divider" />

      {/* ─── Presentations ─── */}
      <ResearchSection
        label="Symposiums"
        title="Presentations"
        subtitle="Academic conferences and undergraduate research showcases."
      >
        <div className="timeline" style={{ maxWidth: 700, margin: '0 auto' }}>
          <div className="timeline-item">
            <div className="timeline-dot-col">
              <div className="timeline-dot" />
              <div className="timeline-line" />
            </div>
            <div className="timeline-content">
              <div className="timeline-date">Spring 2026</div>
              <div className="timeline-title" style={{ fontSize: 17 }}>Undergraduate Research Symposium</div>
              <div className="timeline-org">UCF Student Research Week</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot-col">
              <div className="timeline-dot" />
              <div className="timeline-line" />
            </div>
            <div className="timeline-content">
              <div className="timeline-date">April 2024</div>
              <div className="timeline-title" style={{ fontSize: 17 }}>Valencia Undergraduate Research Showcase</div>
              <div className="timeline-org">Valencia College</div>
            </div>
          </div>
        </div>
      </ResearchSection>

      <div className="section-divider" />

      {/* ─── Reflection ─── */}
      <div style={{ background: 'linear-gradient(to bottom, var(--color-bg), var(--color-bg-card) 50%, var(--color-bg))' }}>
        <ResearchSection
          label="Summary"
          title="Reflection"
        >
          <div
            className="glass-card"
            style={{
              maxWidth: 820,
              margin: '0 auto',
              padding: '32px 36px',
              borderLeft: '4px solid var(--color-accent-primary)',
            }}
          >
            <p style={{ fontSize: 16, lineHeight: 1.9, color: 'var(--color-text-muted)', margin: 0, fontStyle: 'italic' }}>
              Working on these projects showed me that research requires patience, attention to detail,
              collaboration, and effective communication. My PPARA project introduced me to bioinformatics
              and the connection between genetics and athletic performance, while the gait movement project
              allowed me to gain hands-on experience with biomechanics and human movement. Together, these
              experiences strengthened my interest in orthopedic surgery, sports medicine, and research
              focused on improving movement and recovery.
            </p>
          </div>
        </ResearchSection>
      </div>

      <Footer />

      {/* ─── PDF Modal ─── */}
      {modal && (
        <PdfModal
          title={modal.title}
          url={modal.url}
          onClose={() => setModal(null)}
        />
      )}
    </main>
  );
}
