import ProfileSection from '../components/ProfileSection';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import SkillsShowcase from '../components/SkillsShowcase';
import { projects, featuredSlugs } from '../data/portfolio';

export default function HomePage() {
  const featured = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean) as typeof projects;

  return (
    <div>
      <ProfileSection />

      <section className="section">
        <div className="container">
          <span className="eyebrow">Selected Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub">
            Backend systems with real architecture — multi-tenant SaaS, event-driven workflows, and
            real-time pipelines.
          </p>
          <div className="grid-cards">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <a href="/projects" className="btn btn-ghost">
              See all projects →
            </a>
          </div>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--border-soft)' }}>
        <div className="container">
          <span className="eyebrow">Toolbox</span>
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-sub">The tools I reach for to build and scale backend services.</p>
          <SkillsShowcase />
        </div>
      </section>

      <Footer />
    </div>
  );
}
