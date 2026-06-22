'use client';

// Auto-playing user-journey animation. A highlight token travels through the
// stages in order (setup → usage), looping. Click any stage to jump to it.

import { useEffect, useState } from 'react';
import styles from './UserJourney.module.css';

const ACCENTS = {
  blue: 'var(--blue)',
  cyan: 'var(--cyan)',
  purple: 'var(--purple)',
  green: 'var(--green)',
  red: 'var(--red)',
};

export default function UserJourney({ stages = [], title }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing || stages.length === 0) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % stages.length);
    }, 2200);
    return () => clearInterval(id);
  }, [playing, stages.length]);

  if (stages.length === 0) return null;
  const pct = (active / Math.max(stages.length - 1, 1)) * 100;

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        {title && <div className={styles.title}>{title}</div>}
        <button
          className={styles.toggle}
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? 'Pause animation' : 'Play animation'}
        >
          {playing ? '❚❚ Pause' : '▶ Play'}
        </button>
      </div>

      <div className={styles.track}>
        <div className={styles.rail}>
          <div className={styles.fill} style={{ width: `${pct}%` }} />
        </div>

        <ol className={styles.stages}>
          {stages.map((s, i) => {
            const color = ACCENTS[s.accent] || 'var(--cyan)';
            const state = i === active ? 'active' : i < active ? 'done' : 'idle';
            return (
              <li
                key={i}
                className={`${styles.stage} ${styles[state]}`}
                style={{ '--c': color }}
                onClick={() => {
                  setActive(i);
                  setPlaying(false);
                }}
              >
                <span className={styles.dot}>
                  <span className={styles.dotInner} />
                </span>
                <span className={styles.phase}>{s.phase}</span>
                <strong className={styles.stageTitle}>{s.title}</strong>
              </li>
            );
          })}
        </ol>
      </div>

      <div className={styles.detail} key={active}>
        <span className={styles.detailPhase} style={{ color: ACCENTS[stages[active].accent] }}>
          {String(active + 1).padStart(2, '0')} · {stages[active].phase}
        </span>
        <h4 className={styles.detailTitle}>{stages[active].title}</h4>
        <p className={styles.detailDesc}>{stages[active].desc}</p>
      </div>
    </div>
  );
}
