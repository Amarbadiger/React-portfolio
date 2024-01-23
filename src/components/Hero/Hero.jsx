import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Amar</h1>
        <p className={styles.description}>
          I'm a full stack developer completed the basis of front-end
          development HTML,CSS,javascript,React js and node js deepning my
          skills in React and node js
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
