import Footer from '../../components/Footer';

export const metadata = {
  title: 'Blog · Upender',
  description: 'Writing on backend architecture, Node.js, and scalable systems — coming soon.',
};

export default function BlogPage() {
  return (
    <div>
      <section className="section">
        <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <span className="eyebrow">Blog</span>
          <h1 className="section-title gradient-text" style={{ fontSize: '2.4rem' }}>
            Coming Soon
          </h1>
          <p className="section-sub" style={{ maxWidth: '34rem', margin: '0.5rem auto 2rem' }}>
            I&apos;m putting together write-ups on backend architecture, Redis-driven event systems,
            and scaling multi-tenant SaaS. Check back shortly.
          </p>
          <a href="/projects" className="btn btn-primary">
            Explore my projects instead →
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
