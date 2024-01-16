import styles from "./MyProjects.module.css";
import gitbashshot from "../../assets/gitbash.png";
import iconHtml from "../../assets/icon--html.png";
import iconCss from "../../assets/icon--css.png";
import iconJS from "../../assets/icon--js.png";
import iconReact from "../../assets/icon--react.png";

const MyProjects = () => {
  const Projects = [
    {
      name: "Git Bash",
      description:
        "I worked on this project so hard for so long that everyone i ever knew died. I loved working on the project tho and to hell with them mother fuckers they never liked me anyway. Fuck 'em",
      screenshot: gitbashshot,
      stack: [iconHtml, iconCss],
    },
    {
      name: "Git Bash",
      description:
        "I worked on this project so hard for so long that everyone i ever knew died. I loved working on the project tho and to hell with them mother fuckers they never liked me anyway. Fuck 'em",
      screenshot: gitbashshot,
      stack: [
        iconHtml,
        iconJS,
        iconReact,
        iconHtml,
        iconReact,
        iconCss,
        iconJS,
      ],
    },
  ];

  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <ul className={styles.projectList}>
        {Projects.map((project, index) => (
          <li key={index} className={styles.projectWrap}>
            <div className={styles.screenshotWrap}>
              <img
                className={styles.screenshot}
                src={project.screenshot}
                alt={`${project.name} screenshot`}
              />
            </div>
            <div className={styles.infoWrap}>
              <h3 className={styles.name}>{project.name}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.btnWrap}>
                <button className={styles.btn}>More Info👇</button>
                <button className={styles.btn}>Demo👀</button>
              </div>
            </div>
            <ul className={styles.stackWrap}>
              {project.stack.map((icon, index) => (
                <li className={styles.stackItem} key={index}>
                  <img
                    className={styles.stackIcon}
                    key={index}
                    src={icon}
                    alt="stack icon"
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MyProjects;
