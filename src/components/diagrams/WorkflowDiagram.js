'use client';

// Horizontal animated workflow: sequential steps with a "token" travelling
// through them, wrapping rows on narrow viewports via flex.

import styles from './WorkflowDiagram.module.css';

const ACCENTS = {
  blue: 'var(--blue)',
  cyan: 'var(--cyan)',
  purple: 'var(--purple)',
  green: 'var(--green)',
  red: 'var(--red)',
};

export default function WorkflowDiagram({ steps = [], title }) {
  return (
    <div className={styles.wrap}>
      {title && <div className={styles.title}>{title}</div>}
      <ol className={styles.flow}>
        {steps.map((s, i) => {
          const color = ACCENTS[s.accent] || 'var(--cyan)';
          return (
            <li
              key={i}
              className={styles.step}
              style={{ '--c': color, animationDelay: `${i * 0.12}s` }}
            >
              <span className={styles.index} style={{ borderColor: color, color }}>
                {i + 1}
              </span>
              <div className={styles.body}>
                <strong className={styles.label}>{s.label}</strong>
                {s.sub && <span className={styles.sub}>{s.sub}</span>}
              </div>
              {i < steps.length - 1 && <span className={styles.arrow} aria-hidden>→</span>}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
