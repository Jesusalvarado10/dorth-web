/**
 * ClinicalPage.tsx
 * Clinical Experience & Patient Care — follows the ResumePage design system.
 */

import Footer from '../components/Footer';
import doctorImg from '../assets/doctor.jpeg';

export default function ClinicalPage() {
  return (
    <main style={{ paddingTop: 80 }}>

      {/* ─── Page Header with Integrated Introduction ─── */}
      <div className="cv-page-header">
        <div className="cv-page-header-bg" aria-hidden="true">CLINICAL</div>
        <div className="cv-page-header-inner">
          <div className="section-label" style={{ display: 'inline-flex', marginBottom: 16 }}>
            Healthcare Experience
          </div>
          <h1 className="cv-page-title">Clinical Experience & Patient Care</h1>
          <p className="cv-page-subtitle" style={{ maxWidth: 820, lineHeight: 1.8, fontSize: 16 }}>
            My clinical experiences have allowed me to see healthcare from different perspectives,
            including hospital volunteering, orthopedic care, podiatric medicine, and addiction recovery.
            These experiences have taught me that providing quality patient care requires not only medical
            knowledge, but also communication, patience, compassion, and respect.
          </p>
        </div>
      </div>

      <div className="section-divider" />

      {/* ─── Clinical Experiences Timeline ─── */}
      <div style={{ background: 'linear-gradient(to bottom, var(--color-bg), var(--color-bg-card) 50%, var(--color-bg))' }}>
        <section className="section" aria-label="Clinical Experiences">
          <div className="section-header">
            <div className="section-label">Experiences</div>
            <h2 className="section-title">Clinical Settings</h2>
            <p className="section-subtitle">Hands-on exposure across surgical, orthopedic, podiatric, and recovery environments.</p>
          </div>

          <div className="timeline">

            {/* Orlando Health */}
            <div className="timeline-item">
              <div className="timeline-dot-col">
                <div className="timeline-dot" />
                <div className="timeline-line" />
              </div>
              <div className="timeline-content">
                <div className="timeline-date">June 2025 – Present · ~150 hours</div>
                <div className="timeline-title">Orlando Health Surgery Guest Services</div>
                <div className="timeline-org">Orlando Health · Orlando, Florida</div>
                <ul className="timeline-bullets">
                  <li>Assisted patients and family members within a surgical environment, helping them navigate the hospital during stressful moments.</li>
                  <li>Directed visitor questions to appropriate staff and contributed to a calm, professional environment.</li>
                  <li>Strengthened communication skills, empathy, and ability to interact professionally with people from different backgrounds.</li>
                </ul>
              </div>
            </div>

            {/* Medical Assistant */}
            <div className="timeline-item">
              <div className="timeline-dot-col">
                <div className="timeline-dot" />
                <div className="timeline-line" />
              </div>
              <div className="timeline-content">
                <div className="timeline-date">2018 – 2020 · Caracas, Venezuela</div>
                <div className="timeline-title">Medical Assistant</div>
                <div className="timeline-org">Orthopedic & Podiatric Center Caracas</div>
                <div style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 8 }}>
                  Supervisor: Dr. Dorth Arenas, Orthopedic Surgeon
                </div>
                <ul className="timeline-bullets">
                  <li>Supported patient care and daily operations under the supervision of an orthopedic surgeon.</li>
                  <li>Assisted with scheduling, documentation, patient organization, and preparation for clinical evaluations.</li>
                  <li>Observed how musculoskeletal conditions were evaluated and how treatment plans were communicated to patients.</li>
                  <li>Gained early exposure to orthopedic medicine and the clinical workflow of a specialty practice.</li>
                </ul>
              </div>
            </div>

            {/* Podiatric Shadowing */}
            <div className="timeline-item">
              <div className="timeline-dot-col">
                <div className="timeline-dot" />
                <div className="timeline-line" />
              </div>
              <div className="timeline-content">
                <div className="timeline-date">Clinical Shadowing · Miami, Florida</div>
                <div className="timeline-title">Podiatric Medicine — Clinical Shadowing</div>
                <div className="timeline-org">Barry University Foot and Ankle Institute – Mercy Hospital Outpatient Center</div>
                <div style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 8 }}>
                  Physician: James Losito, DPM
                </div>
                <ul className="timeline-bullets">
                  <li>Observed the evaluation and treatment of patients with foot and ankle conditions including traumatic injuries, ingrown toenails, and structural conditions.</li>
                  <li>Witnessed how a podiatrist examines patients, evaluates concerns, and determines appropriate treatment.</li>
                  <li>Gained appreciation for the importance of clear patient communication and creating comfort during examinations.</li>
                </ul>
                <div className="timeline-media-card">
                  <img src={doctorImg} alt="Dr. James Losito, DPM - Podiatric Clinical Shadowing" />
                </div>
              </div>
            </div>

            {/* Addiction Treatment */}
            <div className="timeline-item">
              <div className="timeline-dot-col">
                <div className="timeline-dot" />
                <div className="timeline-line" />
              </div>
              <div className="timeline-content">
                <div className="timeline-date">Clinical Exposure · Orlando, Florida</div>
                <div className="timeline-title">Addiction Treatment and Recovery</div>
                <div className="timeline-org">New Season Treatment Center – Orlando</div>
                <ul className="timeline-bullets">
                  <li>Learned about the recovery process for individuals experiencing opioid addiction in an outpatient setting.</li>
                  <li>Observed how structured care integrates medical treatment, counseling, monitoring, and continued support.</li>
                  <li>Developed understanding of addiction as a medical condition and the importance of treating every patient with compassion, dignity, and without judgment.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>
      </div>

      <div className="section-divider" />

      {/* ─── Relevant Clinical Certifications ─── */}
      <section className="section" aria-label="Certifications">
        <div className="section-header">
          <div className="section-label">Training</div>
          <h2 className="section-title">Relevant Clinical Certifications</h2>
        </div>
        <div className="two-col" style={{ maxWidth: 900, margin: '0 auto' }}>
          {[
            { icon: '🩺', name: 'CPR, First Aid & AED', org: 'American Red Cross · January 2025' },
            { icon: '🩸', name: 'Stop the Bleed®', org: 'American College of Surgeons · February 2026' },
            { icon: '🧠', name: 'Adult Mental Health First Aid', org: 'National Council for Mental Wellbeing · February 2026' },
          ].map((c) => (
            <div key={c.name} className="cert-item">
              <span className="cert-icon">{c.icon}</span>
              <div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-org">{c.org}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── Reflection ─── */}
      <div style={{ background: 'linear-gradient(to bottom, var(--color-bg), var(--color-bg-card) 50%, var(--color-bg))' }}>
        <section className="section" aria-label="Reflection">
          <div className="section-header">
            <div className="section-label">Summary</div>
            <h2 className="section-title">Reflection</h2>
          </div>
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
              Together, these experiences showed me that healthcare can take many different forms. Whether
              supporting a family waiting during surgery, observing a podiatrist, or learning about addiction
              recovery, effective communication and respect remain essential. These experiences strengthened
              my interest in becoming a physician and confirmed my desire to pursue a career involving patient
              care, orthopedic medicine, and sports medicine.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
