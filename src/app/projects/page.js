import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data/portfolio';

export const metadata = {
  title: 'Projects · Upender',
  description: 'Backend systems and case studies — architecture, ER models, and workflows.',
};

export default function ProjectsPage() {
  const professional = projects.filter((p) => p.kind === 'professional');
  const personal = projects.filter((p) => p.kind === 'personal');

  return (
    <div>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Case Studies</span>
          <h1 className="section-title">Projects</h1>
          <p className="section-sub">
            Each project includes the system architecture, data model, and key workflows — click
            through for the technical breakdown.
          </p>

          <h2 style={{ fontSize: '1.3rem', marginBottom: '1.25rem' }}>Professional Work</h2>
          <div className="grid-cards">
            {professional.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>

          <h2 style={{ fontSize: '1.3rem', margin: '3rem 0 1.25rem' }}>Personal Projects</h2>
          <div className="grid-cards">
            {personal.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
