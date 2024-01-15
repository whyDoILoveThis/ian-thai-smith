import styles from "./Skills.module.css";
import iconHtml from "../../assets/icon--html.png";
import iconCss from "../../assets/icon--css.png";
import iconJS from "../../assets/icon--js.png";
import iconReact from "../../assets/icon--react.png";

const Skills = () => {
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

  return (
    <section className={styles.skills}>
      <h2>Skills</h2>
      <ul className={styles.list}>
        {SkillList.map((skill, index) => (
          <li key={index} className={styles.listItem}>
            <img src={skill.icon} className={styles.icon} />
            <p className={styles.name}>{skill.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
