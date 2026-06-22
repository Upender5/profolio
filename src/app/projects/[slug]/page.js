import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '../../../components/Footer';
import ArchitectureDiagram from '../../../components/diagrams/ArchitectureDiagram';
import ERDiagram from '../../../components/diagrams/ERDiagram';
import WorkflowDiagram from '../../../components/diagrams/WorkflowDiagram';
import UserJourney from '../../../components/diagrams/UserJourney';
import { projects, getProject } from '../../../data/portfolio';
import styles from './project.module.css';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} · Upender`,
    description: project.tagline,
  };
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const meta = [
    project.role && { label: 'Role', value: project.role },
    project.duration && { label: 'Duration', value: project.duration },
    project.team && { label: 'Team', value: project.team },
  ].filter(Boolean);

  return (
    <div>
      <article className="section">
        <div className="container">
          <Link href="/projects" className={styles.back}>
            ← All projects
          </Link>

          <div className={styles.headRow}>
            <span className={`chip ${project.kind === 'professional' ? 'tag-pro' : 'tag-personal'}`}>
              {project.kind === 'professional' ? 'Professional' : 'Personal'}
            </span>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.live}>
                Live ↗ {project.live.replace('https://', '')}
              </a>
            )}
          </div>

          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.tagline}>{project.tagline}</p>
          <p className={styles.summary}>{project.summary}</p>

          {meta.length > 0 && (
            <div className={styles.metaRow}>
              {meta.map((m) => (
                <div key={m.label} className={styles.metaItem}>
                  <span className={styles.metaLabel}>{m.label}</span>
                  <span className={styles.metaValue}>{m.value}</span>
                </div>
              ))}
            </div>
          )}

          <div className={styles.stack}>
            {project.stack.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          {project.metrics && (
            <div className={styles.metrics}>
              {project.metrics.map((m) => (
                <div key={m.label} className={styles.metric}>
                  <strong className="gradient-text">{m.value}</strong>
                  <span>{m.label}</span>
                </div>
              ))}
            </div>
          )}

          {project.kind === 'personal' && (
            <p className={styles.note}>
              Personal project — built to explore and demonstrate backend systems concepts.
            </p>
          )}

          {/* User journey — the animated setup → usage sequence */}
          {project.journey && (
            <section className={styles.block}>
              <h2 className={styles.h2}>How it works — user journey</h2>
              <p className={styles.blockSub}>
                Watch the flow play through, or click any step. {project.journey.title}.
              </p>
              <UserJourney stages={project.journey.stages} title={project.journey.title} />
            </section>
          )}

          <section className={styles.block}>
            <h2 className={styles.h2}>Highlights</h2>
            <ul className={styles.list}>
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </section>

          {project.architecture && (
            <section className={styles.block}>
              <h2 className={styles.h2}>System Architecture</h2>
              <p className={styles.blockSub}>
                {project.architecture.name
                  ? project.architecture.name
                  : 'Request lifecycle through the layered backend — animated dots trace the data flow.'}
              </p>
              <ArchitectureDiagram
                nodes={project.architecture.nodes}
                edges={project.architecture.edges}
              />
            </section>
          )}

          {project.er && (
            <section className={styles.block}>
              <h2 className={styles.h2}>Data Model (ER)</h2>
              <p className={styles.blockSub}>Core entities and their relationships.</p>
              <ERDiagram tables={project.er.tables} relations={project.er.relations} />
            </section>
          )}

          {project.workflow && (
            <section className={styles.block}>
              <h2 className={styles.h2}>Key Workflow</h2>
              <p className={styles.blockSub}>{project.workflow.title}</p>
              <WorkflowDiagram steps={project.workflow.steps} />
            </section>
          )}

          {project.docs && project.docs.length > 0 && (
            <section className={styles.block}>
              <h2 className={styles.h2}>Documentation</h2>
              <div className={styles.docs}>
                {project.docs.map((doc, i) => (
                  <div key={i} className={styles.docSection}>
                    <h3 className={styles.docTitle}>{doc.title}</h3>
                    {doc.body.map((p, j) => (
                      <p key={j} className={styles.docPara}>
                        {p}
                      </p>
                    ))}
                    {doc.bullets && (
                      <ul className={styles.list}>
                        {doc.bullets.map((b, k) => (
                          <li key={k}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
      <Footer />
    </div>
  );
}
