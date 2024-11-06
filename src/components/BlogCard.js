export default function BlogCard({ title, description, slug }) {
    return (
      <div className="blog-card">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={`/blog/${slug}`}>Read more</a>
      </div>
    );
  }
  