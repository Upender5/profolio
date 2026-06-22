'use client';

import {
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiSequelize,
  SiPrisma,
  SiSocketdotio,
  SiDocker,
  SiGooglecloud,
  SiNestjs,
  SiJsonwebtokens,
  SiGit,
  SiGitlab,
  SiLinux,
  SiSpringboot,
} from 'react-icons/si';
import { FaAws, FaLayerGroup, FaServer, FaCode } from 'react-icons/fa';
import { coreSkills, skills } from '../data/portfolio';
import styles from '../styles/Skills.module.css';

// name -> { icon, color }
const ICONS = {
  'Node.js': { icon: SiNodedotjs, color: '#5fa04e' },
  'Express.js': { icon: SiExpress, color: '#cbd5e1' },
  TypeScript: { icon: SiTypescript, color: '#3178c6' },
  JavaScript: { icon: SiJavascript, color: '#f7df1e' },
  PostgreSQL: { icon: SiPostgresql, color: '#4169e1' },
  MySQL: { icon: SiMysql, color: '#00758f' },
  MongoDB: { icon: SiMongodb, color: '#47a248' },
  Redis: { icon: SiRedis, color: '#ff4438' },
  Sequelize: { icon: SiSequelize, color: '#52b0e7' },
  Prisma: { icon: SiPrisma, color: '#2d3748' },
  'Socket.IO': { icon: SiSocketdotio, color: '#cbd5e1' },
  BullMQ: { icon: FaLayerGroup, color: '#e11d48' },
  Docker: { icon: SiDocker, color: '#2496ed' },
  AWS: { icon: FaAws, color: '#ff9900' },
  GCP: { icon: SiGooglecloud, color: '#4285f4' },
  NestJS: { icon: SiNestjs, color: '#e0234e' },
  JWT: { icon: SiJsonwebtokens, color: '#d63aff' },
  Git: { icon: SiGit, color: '#f05032' },
  GitLab: { icon: SiGitlab, color: '#fc6d26' },
  Linux: { icon: SiLinux, color: '#f0c040' },
  'Spring Boot': { icon: SiSpringboot, color: '#6db33f' },
  PM2: { icon: FaServer, color: '#2b9348' },
};

function SkillIcon({ name }) {
  const entry = ICONS[name] || { icon: FaCode, color: 'var(--cyan)' };
  const Icon = entry.icon;
  return (
    <div className={styles.badge}>
      <Icon className={styles.badgeIcon} style={{ color: entry.color }} />
      <span>{name}</span>
    </div>
  );
}

export default function SkillsShowcase({ showCategories = true }) {
  return (
    <div>
      <div className={styles.coreGrid}>
        {coreSkills.map((name) => (
          <SkillIcon key={name} name={name} />
        ))}
      </div>

      {showCategories && (
        <div className="grid-cards" style={{ marginTop: '1.75rem' }}>
          {skills.map((group) => (
            <div key={group.category} className="card">
              <h3 style={{ fontSize: '1.02rem', color: 'var(--cyan)' }}>{group.category}</h3>
              <div>
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
