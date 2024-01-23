import React from "react";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import styles from "./Skills.module.css";
const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImage}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p className={styles.skillTitle}>{skill.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
