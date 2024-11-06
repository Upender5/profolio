import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navItems}>
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="/about" className={styles.navLink}>About</Link>
        <Link href="/projects" className={styles.navLink}>Projects</Link>
        <Link href="/contact" className={styles.navLink}>Contact</Link>
        <Link href="/blog" className={styles.navLink}>Blog</Link>
      </div>
    </nav>
  );
}
