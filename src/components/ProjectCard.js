import Link from 'next/link';
import styles from '../styles/ProjectCard.module.css';

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.slug}`} className={`card ${styles.card}`}>
      <div className={styles.head}>
        <h3 className={styles.title}>{project.title}</h3>
        <span className={`chip ${project.kind === 'professional' ? 'tag-pro' : 'tag-personal'}`}>
          {project.kind === 'professional' ? 'Professional' : 'Personal'}
        </span>
      </div>
      <p className={styles.tagline}>{project.tagline}</p>
      <p className={styles.summary}>{project.summary}</p>
      <div className={styles.stack}>
        {project.stack.slice(0, 5).map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>
      <span className={styles.link}>View case study →</span>
    </Link>
  );
}
