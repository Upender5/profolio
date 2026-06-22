import Footer from '../../components/Footer';
import { FaLinkedin, FaGithub, FaNpm, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { profile } from '../../data/portfolio';
import styles from './contact.module.css';

export const metadata = {
  title: 'Contact · Upender',
  description: 'Get in touch with Kudurupaka Upender.',
};

export default function ContactPage() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1 className="section-title">Let&apos;s build something</h1>
          <p className="section-sub">
            Open to backend and senior engineering roles. The fastest way to reach me is email or
            LinkedIn.
          </p>

          <div className={styles.grid}>
            <a href={profile.socials.email} className={`card ${styles.item}`}>
              <FaEnvelope className={styles.icon} />
              <div>
                <strong>Email</strong>
                <span>{profile.email}</span>
              </div>
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className={`card ${styles.item}`}>
              <FaPhone className={styles.icon} />
              <div>
                <strong>Phone</strong>
                <span>{profile.phone}</span>
              </div>
            </a>
            <div className={`card ${styles.item}`}>
              <FaMapMarkerAlt className={styles.icon} />
              <div>
                <strong>Location</strong>
                <span>{profile.location}</span>
              </div>
            </div>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`card ${styles.item}`}
            >
              <FaLinkedin className={styles.icon} />
              <div>
                <strong>LinkedIn</strong>
                <span>Connect with me</span>
              </div>
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`card ${styles.item}`}
            >
              <FaGithub className={styles.icon} />
              <div>
                <strong>GitHub</strong>
                <span>See my code</span>
              </div>
            </a>
            <a
              href={profile.socials.npm}
              target="_blank"
              rel="noopener noreferrer"
              className={`card ${styles.item}`}
            >
              <FaNpm className={styles.icon} />
              <div>
                <strong>npm</strong>
                <span>Published packages</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
