import styles from '../styles/Header.module.css'
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      {/* <nav>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav> */}
    </header>
  );
}
