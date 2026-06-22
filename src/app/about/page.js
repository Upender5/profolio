import Footer from '../../components/Footer';
import SkillsShowcase from '../../components/SkillsShowcase';
import { profile, experience, education } from '../../data/portfolio';
import styles from './about.module.css';

export const metadata = {
  title: 'About · Upender',
  description: profile.summary,
};

export default function AboutPage() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <span className="eyebrow">About</span>
          <h1 className="section-title">{profile.name}</h1>
          <p className="section-sub">
            {profile.title} · {profile.location}
          </p>
          <p className={styles.bio}>{profile.summary}</p>

          {/* Experience timeline */}
          <h2 className={styles.h2}>Experience</h2>
          <div className={styles.timeline}>
            {experience.map((job, i) => (
              <div key={i} className={styles.tItem}>
                <div className={styles.tDot} />
                <div className={styles.tBody}>
                  <div className={styles.tHead}>
                    <h3 className={styles.tRole}>{job.role}</h3>
                    <span className={styles.tPeriod}>{job.period}</span>
                  </div>
                  <p className={styles.tCompany}>
                    {job.company} · {job.location}
                  </p>
                  <ul className={styles.tList}>
                    {job.highlights.map((h, j) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <h2 className={styles.h2}>Technical Skills</h2>
          <SkillsShowcase />

          {/* Education */}
          <h2 className={styles.h2}>Education</h2>
          <div className={styles.eduGrid}>
            {education.map((e, i) => (
              <div key={i} className="card">
                <h3 style={{ fontSize: '1.05rem', margin: 0 }}>{e.degree}</h3>
                <p style={{ color: 'var(--muted)', margin: '0.4rem 0 0.2rem' }}>{e.institute}</p>
                <span className="chip">{e.period}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
