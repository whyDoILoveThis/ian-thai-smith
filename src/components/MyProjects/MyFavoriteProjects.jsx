import styles from "./MyProjects.module.css";
import PropTypes from "prop-types";

const FavoriteProjects = ({
  selectedIndex,
  MyFavoriteProjects,
  handleClickMoreInfo,
}) => {
  FavoriteProjects.propTypes = {
    selectedIndex: PropTypes.number.isRequired,
    MyFavoriteProjects: PropTypes.array.isRequired,
    handleClickMoreInfo: PropTypes.func.isRequired,
  };

  return (
    <>
      {/** Map the projects */}
      {MyFavoriteProjects.map((project, index) => (
        <li key={index} className={styles.projectWrap}>
          <div className={styles.screenshotWrap}>
            {/** 📸 SCREENSHOT */}
            <img
              className={styles.screenshot}
              src={project.screenshot}
              alt={`${project.name} screenshot`}
            />
          </div>
          {/** Map the information */}
          <div className={styles.infoWrap}>
            <h3 className={styles.name}>{project.name}</h3>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.btnWrap}>
              <button
                className={styles.btn}
                onClick={() => handleClickMoreInfo(index)}
              >
                More Info👇
              </button>
              <a
                href="https://its-git-bash.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <button className={styles.btn}>Demo👀</button>
              </a>
            </div>
            {selectedIndex === index ? (
              <p className={styles.moreInfo}>{project.moreInfo}</p>
            ) : null}
          </div>
          <ul className={styles.stackWrap}>
            {/** Map the stack */}
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
    </>
  );
};

export default FavoriteProjects;
