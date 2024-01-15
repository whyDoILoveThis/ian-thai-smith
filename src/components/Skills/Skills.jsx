import styles from "./Skills.module.css";
import iconHtml from "../../assets/icon--html.png";
import iconCss from "../../assets/icon--css.png";
import iconJS from "../../assets/icon--js.png";
import iconReact from "../../assets/icon--react.png";
import { useState } from "react";

const Skills = () => {
  const [selectedIndex, setselectedIndex] = useState(-1);

  const SkillList = [
    {
      name: "HTML",
      icon: iconHtml,
    },
    {
      name: "CSS",
      icon: iconCss,
    },
    {
      name: "JS",
      icon: iconJS,
    },
    {
      name: "React",
      icon: iconReact,
    },
  ];

  const handleViewName = (index) => {
    setselectedIndex(index);
  };

  return (
    <section className={styles.skills}>
      <h2>Skills</h2>
      <ul className={styles.list}>
        {selectedIndex !== -1 ? (
          <p onClick={() => setselectedIndex(-1)} className={styles.hideNames}>
            -
          </p>
        ) : null}
        {SkillList.map((skill, index) => (
          <li
            onClick={() => handleViewName(index)}
            key={index}
            className={styles.listItem}
          >
            <img src={skill.icon} className={styles.icon} />
            {selectedIndex === index ? (
              <p className={styles.name}>{skill.name}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
