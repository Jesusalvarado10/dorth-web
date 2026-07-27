/**
 * ResumePage.tsx
 * Displays the full interactive resume with:
 *  - PDF viewer (imported from assets — no upload needed)
 *  - Work experience timeline
 *  - Research timeline
 *  - Education
 *  - Certifications grid
 *  - Skills & Languages
 *  - Honors & Activities
 */

import { useState } from 'react';
import cvPdf from '../assets/Dorth Arenas_first draft.pdf';
import {
  PERSONAL, EXPERIENCE, RESEARCH,
  CERTIFICATIONS, SKILLS,
  HONORS, ACTIVITIES,
} from '../data/resume';
import Footer from '../components/Footer';

// ── Helper: section wrapper ────────────────────────────
function ResumeSection({
  label, title, subtitle, children,
}: {
  label: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section" aria-labelledby={`section-${label.toLowerCase().replace(/\s/g, '-')}`}>
      <div className="section-header">
        <div className="section-label">{label}</div>
        <h2 className="section-title" id={`section-${label.toLowerCase().replace(/\s/g, '-')}`}>
          {title}
        </h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

// ── Helper: timeline entry ─────────────────────────────
function TimelineEntry({
  date, title, org, bullets, extra,
}: {
  date: string;
  title: string;
  org: string;
  bullets: string[];
  extra?: React.ReactNode;
}) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot-col">
        <div className="timeline-dot" />
        <div className="timeline-line" />
      </div>
      <div className="timeline-content">
        <div className="timeline-date">{date}</div>
        <div className="timeline-title">{title}</div>
        <div className="timeline-org">{org}</div>
        {extra}
        <ul className="timeline-bullets">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default function ResumePage() {
  const [certModal, setCertModal] = useState(false);

  return (
    <main style={{ paddingTop: 80 }}>
      <div className="cv-page-header">
        <div className="cv-page-header-bg" aria-hidden="true">RESUME</div>
        <div className="cv-page-header-inner">
          <div className="section-label" style={{ display: 'inline-flex', marginBottom: 16 }}>
            Resume
          </div>
          <h1 className="cv-page-title">{PERSONAL.name}</h1>
          <p className="cv-page-subtitle">{PERSONAL.tagline}</p>
        </div>
      </div>

      <section
        style={{ padding: '64px var(--space-xl)', maxWidth: 1200, margin: '0 auto' }}
        aria-label="Resume PDF viewer"
      >
        <div className="pdf-panel">
          <div className="pdf-panel-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span className="pdf-badge">RESUME</span>
              <span className="pdf-filename">Dorth Arenas — Resume</span>
            </div>
            <div className="pdf-actions">
              <button className="btn-outline" onClick={() => setCertModal(true)}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                </svg>
                Fullscreen
              </button>
              <a
                href={cvPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-download"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                View Full Resume
              </a>
            </div>
          </div>
          <embed
            src={cvPdf}
            type="application/pdf"
            width="100%"
            height="600px"
            title="Dorth Arenas — Resume"
            style={{ display: 'block' }}
          />
        </div>
      </section>

      <div className="section-divider" />
      <ResumeSection
        label="Experience"
        title="Work Experience"
        subtitle="Roles across healthcare, guest services, and emergency response."
      >
        <div className="timeline">
          {EXPERIENCE.map((job) => (
            <TimelineEntry
              key={job.title + job.date}
              date={`${job.date} · ${job.location}`}
              title={job.title}
              org={job.org}
              bullets={job.bullets}
            />
          ))}
        </div>
      </ResumeSection>

      <div className="section-divider" />
      <div style={{ background: 'linear-gradient(to bottom, var(--color-bg), var(--color-bg-card) 50%, var(--color-bg))' }}>
        <ResumeSection
          label="Research"
          title="Research"
          subtitle="Biomechanics, bioinformatics, and genomics research projects."
        >
          <div className="timeline">
            {RESEARCH.map((r) => (
              <TimelineEntry
                key={r.title}
                date={r.date}
                title={r.title}
                org={r.org}
                bullets={r.bullets}
                extra={
                  r.mentors
                    ? <div style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 8 }}>
                      Mentors: {r.mentors}
                    </div>
                    : null
                }
              />
            ))}
          </div>
        </ResumeSection>
      </div>

      <div className="section-divider" />
      <ResumeSection
        label="Certifications"
        title="Certifications & Training"
        subtitle="Professional credentials in clinical, research, and emergency care."
      >
        <div className="two-col">
          {CERTIFICATIONS.map((c) => (
            <div key={c.name} className="cert-item">
              <span className="cert-icon">{c.icon}</span>
              <div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-org">{c.org}</div>
              </div>
            </div>
          ))}
        </div>
      </ResumeSection>

      <div className="section-divider" />

      <div style={{ background: 'linear-gradient(to bottom, var(--color-bg), var(--color-bg-card) 50%, var(--color-bg))' }}>
        <ResumeSection label="Skills" title="Skills & Languages">
          <div className="two-col">
            <div>
              {Object.entries(SKILLS).map(([category, tags]) => (
                <div key={category} className="skill-group">
                  <div className="skill-group-label">{category}</div>
                  <div className="skill-tags">
                    {tags.map((tag) => (
                      <span key={tag} className="skill-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Honors column */}
            <div>
              <div className="skill-group-label" style={{ marginBottom: 'var(--space-sm)' }}>
                Honors & Awards
              </div>
              <div className="timeline">
                {HONORS.map((h) => (
                  <div key={h.title} className="timeline-item">
                    <div className="timeline-dot-col">
                      <div className="timeline-dot" />
                      <div className="timeline-line" />
                    </div>
                    <div className="timeline-content" style={{ paddingBottom: 16 }}>
                      <div className="timeline-date">{h.date}</div>
                      <div className="timeline-title" style={{ fontSize: 16 }}>{h.title}</div>
                      <div className="timeline-org" style={{ fontSize: 13 }}>{h.org}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ResumeSection>
      </div>

      <div className="section-divider" />
      <ResumeSection
        label="Activities"
        title="Activities & Involvement"
        subtitle="Academic organizations, volunteering, sports, and community engagement."
      >
        <div className="two-col">
          {ACTIVITIES.map((a) => (
            <div key={a.name} className="cert-item">
              <span className="cert-icon">🏅</span>
              <div>
                <div className="cert-name">{a.name}</div>
                <div className="cert-org">{a.org} · {a.date}</div>
              </div>
            </div>
          ))}
        </div>
      </ResumeSection>

      <Footer />

      {/* Resume fullscreen modal */}
      {certModal && (
        <div className="lightbox" onClick={() => setCertModal(false)}>
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
            <div className="pdf-panel-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span className="pdf-badge">RESUME</span>
                <span className="pdf-filename">Dorth Arenas — Resume</span>
              </div>
              <div className="pdf-actions">
                <a href={cvPdf} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  Open in New Tab ↗
                </a>
                <button
                  className="lightbox-close"
                  onClick={() => setCertModal(false)}
                  aria-label="Close"
                  style={{ position: 'static', width: 36, height: 36 }}
                >
                  ✕
                </button>
              </div>
            </div>
            <iframe
              src={cvPdf}
              title="Dorth Arenas — Resume"
              style={{ flex: 1, width: '100%', border: 'none' }}
            />
          </div>
        </div>
      )}
    </main>
  );
}
