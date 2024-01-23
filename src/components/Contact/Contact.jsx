import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="email" />
          <a href="mailto:amarbadiger45@gmail.com" target="_blanck">
            Mail
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin" />
          <a href="https://www.linkedin.com/in/amarbadiger/" target="_blanck">
            Linkedin
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="github" />
          <a href="https://github.com/Amarbadiger" target="_blanck">
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
