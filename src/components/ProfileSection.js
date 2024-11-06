import { FaLinkedin, FaGithub, FaNpm } from 'react-icons/fa';
import styles from '../styles/ProfileSection.module.css';

export default function ProfileSection() {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileContent}>
                <h1 className={styles.heading}>
                    Trust me, I'm a <span className={styles.highlight}>software engineer.</span>
                </h1>
                <p className={styles.description}>
                    Meet Upender, a passionate developer with expertise in building scalable web applications.
                    With 3+ years of experience in Node.js, and a strong background in full-stack development,
                    Upender has worked on various cutting-edge projects. From crafting sleek user interfaces
                    to developing robust backend APIs, he brings a wealth of knowledge in modern web technologies.
                </p>

            </div>
            <div className={styles.profileImage}>
                <img
                    src="https://s3.ap-south-1.amazonaws.com/static.upender.dev/upender.png"
                    alt="Upender's Profile"
                    className={styles.image}
                />
            </div>
            <div className={styles.socialLinks}>
                <a href="https://www.linkedin.com/in/kudurupaka-upender-0b59368b/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Upender5" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                    <FaGithub />
                </a>
                <a href="https://www.npmjs.com/~upender_k" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                    <FaNpm />
                </a>
            </div>
        </div>
    );
}
