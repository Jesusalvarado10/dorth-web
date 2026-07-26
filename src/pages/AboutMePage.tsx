import Footer from '../components/Footer';
import FeaturedVideo from '../components/FeaturedVideo';

export default function AboutMePage() {
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

      <Footer />
    </main>
  );
}
