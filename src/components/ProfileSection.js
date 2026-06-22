import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import styles from '../styles/HeroSection.module.css';
import { profile } from '../data/portfolio';

export default function ProfileSection() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={`${styles.copy} fade-up`}>
          <div className={styles.avatarRow}>
            <img src="/upender.jpg" alt={profile.name} className={styles.avatar} />
            <span className={styles.available}>
              <span className={styles.availableDot} />
              Available for work
            </span>
          </div>
          <span className="eyebrow">{profile.tagline}</span>
          <h1 className={styles.name}>
            {profile.name.split(' ')[0]}{' '}
            <span className="gradient-text">{profile.name.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className={styles.role}>{profile.title}</p>
          <p className={styles.summary}>{profile.summary}</p>

          <div className={styles.actions}>
            <a href="/projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="/contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>

          <div className={styles.social}>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={profile.socials.email} aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Animated architecture visual */}
        <div className={`${styles.visual} fade-up`}>
          <div className={styles.window}>
            <div className={styles.windowBar}>
              <span /> <span /> <span />
              {/* <code>request-lifecycle.ts</code> */}
            </div>
            <svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg" className={styles.diagram}>
              {/* connectors */}
              {[
                'M 160 44 L 160 92',
                'M 160 128 L 160 176',
                'M 160 212 L 160 248',
              ].map((d, i) => (
                <g key={i}>
                  <path d={d} stroke="var(--border)" strokeWidth="2" fill="none" />
                  <circle r="4" fill="var(--cyan)">
                    <animateMotion dur="1.8s" repeatCount="indefinite" path={d} begin={`${i * 0.35}s`} />
                  </circle>
                </g>
              ))}
              {[
                { y: 8, label: 'Client', sub: 'HTTP request', c: 'var(--blue)' },
                { y: 92, label: 'Controller → Service', sub: 'validate · authorize', c: 'var(--cyan)' },
                { y: 176, label: 'Repository', sub: 'Sequelize / Prisma', c: 'var(--purple)' },
                { y: 248, label: 'PostgreSQL · Redis', sub: 'persist · cache', c: 'var(--green)' },
              ].map((n, i) => (
                <g key={i}>
                  <rect x="40" y={n.y} width="240" height="36" rx="9" fill="var(--surface)" stroke={n.c} strokeWidth="1.5" />
                  <rect x="40" y={n.y} width="4" height="36" rx="2" fill={n.c} />
                  <text x="56" y={n.y + 16} className="node-label">{n.label}</text>
                  <text x="56" y={n.y + 29} className="node-sub">{n.sub}</text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
