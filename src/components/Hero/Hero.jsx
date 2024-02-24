import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Amar</h1>
        <p className={styles.description}>
          Enthusiastic fresher MERN stack developer skilled in HTML, CSS, and
          JavaScript, with decent proficiency in React.js. Actively enhancing
          expertise in Node.js, Express, and MongoDB.
        </p>
        <a href="mailto:amarbadiger45@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/profile2.png")}
        alt="dfprofile picture"
        className={styles.heroImg}
      />
      <div className={styles.topblur} />
      <div className={styles.bottomblur} />
    </section>
  );
};

export default Hero;
