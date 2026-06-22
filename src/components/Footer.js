import { profile } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={profile.socials.email}>Email</a>
      </div>
      <p style={{ marginTop: '0.75rem', marginBottom: 0 }}>
        © {new Date().getFullYear()} {profile.name}. Built with Next.js.
      </p>
    </footer>
  );
}
