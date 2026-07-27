/**
 * PathToMedicinePage.tsx
 * Building My Path to Medicine — Milestones, lessons, and future goals.
 * Uses exact design tokens, glass cards, timeline, graphical quote, and photo placeholders.
 */

import Footer from '../components/Footer';

export default function PathToMedicinePage() {
  return (
    <main style={{ paddingTop: 80 }}>

      {/* ─── Page Header with Integrated Introduction ─── */}
      <div className="cv-page-header">
        <div className="cv-page-header-bg" aria-hidden="true">PATH</div>
        <div className="cv-page-header-inner">
          <div className="section-label" style={{ display: 'inline-flex', marginBottom: 16 }}>
            Professional Growth & Vision
          </div>
          <h1 className="cv-page-title">Building My Path to Medicine</h1>
          <p className="cv-page-subtitle" style={{ maxWidth: 840, lineHeight: 1.8, fontSize: 16 }}>
            My professional growth has not come from one class or one experience. It has developed through
            academic transitions, research, patient service, emergency response, and honest reflection about the
            areas in which I still need to improve. Each experience has helped me understand not only why I want to
            become a physician, but also what I must continue doing to become prepared for that responsibility.
          </p>
        </div>
      </div>

      <div className="section-divider" />

      {/* ─── Milestones Timeline ─── */}
      <section className="section" aria-label="Milestones That Have Shaped Me">
        <div className="section-header">
          <div className="section-label">Journey</div>
          <h2 className="section-title">Milestones That Have Shaped Me</h2>
          <p className="section-subtitle">Key turning points across academics, research, service, and leadership.</p>
        </div>

        <div className="timeline" style={{ maxWidth: 900, margin: '0 auto' }}>

          {/* Milestone 1 */}
          <div className="timeline-item">
            <div className="timeline-dot-col">
              <div className="timeline-dot" />
              <div className="timeline-line" />
            </div>
            <div className="timeline-content">
              <div className="timeline-date">Academic Transition</div>
              <div className="timeline-title">Honors Academic Excellence</div>
              <div className="timeline-org">Valencia College → University of Central Florida</div>
              <p style={{ fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.7, marginTop: 4 }}>
                Graduated from Valencia College as a Seneff Honors Scholar and continued my education at UCF as a Burnett Honors Scholar.
              </p>
              {/* Photo Placeholder */}
              <div className="photo-placeholder-slot">
                <span>📷 Photo Slot: Academic Graduation / Honors Ceremony</span>
              </div>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="timeline-item">
            <div className="timeline-dot-col">
              <div className="timeline-dot" />
              <div className="timeline-line" />
            </div>
            <div className="timeline-content">
              <div className="timeline-date">Research Development</div>
              <div className="timeline-title">Scientific & Bioinformatics Research</div>
              <div className="timeline-org">Biomechanics & Genomics Projects</div>
              <p style={{ fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.7, marginTop: 4 }}>
                Completed bioinformatics and biomechanics projects and presented research at Valencia College and UCF.
              </p>
              {/* Photo Placeholder */}
              <div className="photo-placeholder-slot">
                <span>📷 Photo Slot: Research Symposium / Poster Presentation</span>
              </div>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="timeline-item">
            <div className="timeline-dot-col">
              <div className="timeline-dot" />
              <div className="timeline-line" />
            </div>
            <div className="timeline-content">
              <div className="timeline-date">Clinical Service</div>
              <div className="timeline-title">Hospital Patient Service</div>
              <div className="timeline-org">Orlando Health Surgery Guest Services</div>
              <p style={{ fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.7, marginTop: 4 }}>
                Completed approximately 150 volunteer hours at Orlando Health Surgery Guest Services assisting patients and families.
              </p>
              {/* Photo Placeholder */}
              <div className="photo-placeholder-slot">
                <span>📷 Photo Slot: Clinical Service / Volunteering</span>
              </div>
            </div>
          </div>

          {/* Milestone 4 */}
          <div className="timeline-item">
            <div className="timeline-dot-col">
              <div className="timeline-dot" />
              <div className="timeline-line" />
            </div>
            <div className="timeline-content">
              <div className="timeline-date">Emergency Responsibility</div>
              <div className="timeline-title">High-Risk Aquatic Rescue & First Aid</div>
              <div className="timeline-org">Deep-Water Lifeguard</div>
              <p style={{ fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.7, marginTop: 4 }}>
                Responded to three major aquatic emergencies as a deep-water lifeguard with composure and quick decision-making.
              </p>
              {/* Photo Placeholder */}
              <div className="photo-placeholder-slot">
                <span>📷 Photo Slot: Lifeguarding / Emergency Care Training</span>
              </div>
            </div>
          </div>

          {/* Milestone 5 */}
          <div className="timeline-item">
            <div className="timeline-dot-col">
              <div className="timeline-dot" />
              <div className="timeline-line" />
            </div>
            <div className="timeline-content">
              <div className="timeline-date">Professional Communication</div>
              <div className="timeline-title">Portfolio & Professional Networking</div>
              <div className="timeline-org">Interviewing, Writing & Speaking Skills</div>
              <p style={{ fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.7, marginTop: 4 }}>
                Developed my résumé, personal statement, elevator speech, interviewing skills, and professional network.
              </p>
            </div>
          </div>

        </div>
      </section>

      <div className="section-divider" />

      {/* ─── Reflection Section ─── */}
      <div style={{ background: 'linear-gradient(to bottom, var(--color-bg), var(--color-bg-card) 50%, var(--color-bg))' }}>
        <section className="section" aria-label="Reflection">
          <div className="section-header">
            <div className="section-label">Insights</div>
            <h2 className="section-title">Reflection</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 900, margin: '0 auto' }}>

            {/* Reflection 1 */}
            <div className="glass-card" style={{ padding: 32 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-accent-primary)', marginBottom: 12 }}>
                What did I learn at UCF?
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--color-text-muted)', margin: 0 }}>
                At UCF, I learned that preparing for medicine requires more than completing difficult science courses.
                My research experience taught me to be patient, pay attention to small details, and work collaboratively
                when a procedure or result does not go as expected. Volunteering at Orlando Health showed me the importance
                of communicating calmly with patients and families during stressful moments. This course also pushed me
                to explain my experiences more clearly through my résumé, personal statement, elevator speech, and
                professional interviews. Through these experiences, I learned that professional growth comes from combining
                academic knowledge with communication, service, and reflection.
              </p>
            </div>

            {/* Reflection 2 */}
            <div className="glass-card" style={{ padding: 32 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-accent-primary)', marginBottom: 12 }}>
                How did I overcome obstacles or solve problems?
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--color-text-muted)', margin: 0 }}>
                One area I have continued to work on is overthinking, especially when answering interview questions or
                facing an unfamiliar situation. During my mock interview, I realized that having detailed experiences
                does not automatically mean that I will communicate them effectively. I learned to organize my answers,
                practice speaking aloud, and focus on responding naturally instead of searching for a perfect answer. In
                research and academically demanding situations, I have also learned to ask questions, use feedback, and
                divide complicated problems into smaller steps. I am still developing these skills, but I now understand
                that uncertainty does not mean that I am unprepared. It is often part of learning and becoming more confident.
              </p>
            </div>

            {/* Graphical Quote */}
            <div className="graphical-quote-box">
              <div className="quote-icon">“</div>
              <blockquote className="graphical-quote-text">
                Being prepared is important, but learning to trust my preparation is part of becoming more confident.
              </blockquote>
              <div className="quote-line" />
            </div>

            {/* Reflection 3 */}
            <div className="glass-card" style={{ padding: 32 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-accent-primary)', marginBottom: 12 }}>
                How can I apply these experiences elsewhere?
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--color-text-muted)', margin: 0 }}>
                I can apply these lessons in medical school, research environments, interviews, and future patient
                interactions. The ability to remain calm under pressure will help me make thoughtful decisions, while
                my research experience will allow me to approach problems carefully and objectively. My clinical and
                professional experiences have also taught me to communicate with people from different backgrounds and
                to accept constructive feedback. These skills will help me continue learning and adapting throughout my
                medical career.
              </p>
            </div>

          </div>
        </section>
      </div>

      <div className="section-divider" />

      {/* ─── The Road Ahead ─── */}
      <section className="section" aria-label="The Road Ahead">
        <div className="section-header">
          <div className="section-label">Future Roadmap</div>
          <h2 className="section-title">The Road Ahead</h2>
          <p className="section-subtitle">Clear steps and long-term vision guiding my journey to orthopedic medicine.</p>
        </div>

        <div className="three-col" style={{ maxWidth: 1100, margin: '0 auto', gap: 24 }}>

          {/* Stage 1 */}
          <div className="glass-card" style={{ padding: 28 }}>
            <div className="skill-group-label" style={{ fontSize: 12, marginBottom: 8, color: 'var(--color-accent-gold)' }}>
              STAGE 1
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 16 }}>
              Immediate Goals
            </h3>
            <ul className="timeline-bullets">
              <li>Complete my B.S. in Biomedical Sciences.</li>
              <li>Continue developing my clinical and research experience.</li>
              <li>Prepare the PPARA research project for possible publication.</li>
              <li>Improve my public-speaking and interview confidence.</li>
            </ul>
          </div>

          {/* Stage 2 */}
          <div className="glass-card" style={{ padding: 28 }}>
            <div className="skill-group-label" style={{ fontSize: 12, marginBottom: 8, color: 'var(--color-accent-primary)' }}>
              STAGE 2
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 16 }}>
              Next Professional Stage
            </h3>
            <ul className="timeline-bullets">
              <li>Prepare for the MCAT and medical-school application process.</li>
              <li>Continue physician shadowing and patient-centered service.</li>
              <li>Seek opportunities that combine medicine, research, and human movement.</li>
            </ul>
          </div>

          {/* Stage 3 */}
          <div className="glass-card" style={{ padding: 28 }}>
            <div className="skill-group-label" style={{ fontSize: 12, marginBottom: 8, color: 'var(--color-accent-secondary)' }}>
              STAGE 3
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 16 }}>
              Long-Term Vision
            </h3>
            <ul className="timeline-bullets">
              <li>Attend medical school and become a physician.</li>
              <li>Pursue orthopedic surgery and sports medicine.</li>
              <li>Contribute to research involving movement, injury recovery, and athletic performance.</li>
              <li>Help patients return to the activities that are meaningful to them.</li>
            </ul>
          </div>

        </div>
      </section>

      <div className="section-divider" />

      {/* ─── Closing Reflection ─── */}
      <div style={{ background: 'linear-gradient(to bottom, var(--color-bg), var(--color-bg-card) 50%, var(--color-bg))' }}>
        <section className="section" aria-label="Closing Reflection">
          <div className="section-header">
            <div className="section-label">Final Thoughts</div>
            <h2 className="section-title">Closing Reflection</h2>
          </div>
          <div
            className="glass-card"
            style={{
              maxWidth: 860,
              margin: '0 auto',
              padding: '36px 40px',
              borderLeft: '4px solid var(--color-accent-gold)',
            }}
          >
            <p style={{ fontSize: 16, lineHeight: 1.9, color: 'var(--color-text-muted)', margin: 0, fontStyle: 'italic' }}>
              I understand that becoming an orthopedic surgeon will require years of continued work and improvement.
              However, the experiences represented in this portfolio have given me a clearer direction and stronger
              reasons to continue. My goal is to become a physician who understands both the science of human movement
              and the personal importance of recovery, combining research and patient care to help people regain their
              independence and quality of life.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
