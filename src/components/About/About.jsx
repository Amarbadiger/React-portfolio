import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="me sitting with laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Front-end Developer</h3>
              <p>
                I'm a front-end developer learned the basics of front-end
                Html,css,java script and React js
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt=" server icon" />
            <div className={styles.aboutItemText}>
              <h3>Back-end Developer</h3>
              <p>
                I'm a back-end developer learned the basics of node js and
                mangodb
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="ui icon" />
            <div className={styles.aboutItemText}>
              <h3>UI design</h3>
              <p>Learning Ui Design</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
