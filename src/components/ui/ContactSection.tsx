"use client";

import styles from "@/style/ContactSection.module.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className={styles.socialSection}>
      <ul className={styles.iconList}>
        <li>
          <a
            href="https://www.linkedin.com/in/hninthiri-san"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconBox}
          >
            <FaLinkedin className={styles.icon} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Hninthirisan"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconBox}
          >
            <FaGithub className={styles.icon} />
          </a>
        </li>
        <li>
          <a
            href="mailto:hninthirisan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconBox}
          >
            <FaEnvelope className={styles.icon} />
          </a>
        </li>
      </ul>
    </section>
  );
}
