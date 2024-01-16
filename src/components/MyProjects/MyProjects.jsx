import styles from "./MyProjects.module.css";
import gitbashshot from "../../assets/gitbash.png";
import iconHtml from "../../assets/icon--html.png";
import iconCss from "../../assets/icon--css.png";
import iconJS from "../../assets/icon--js.png";
import iconReact from "../../assets/icon--react.png";
import { useState } from "react";
import FavoriteProjects from "./MyFavoriteProjects";
import FrontendProjects from "./FrontendProjects";

const MyProjects = () => {
  const [selectedIndex, setselectedIndex] = useState(-1);
  const [showProjectType, setShowProjectType] = useState("favorites");
  const [selectedProjectTypeIndex, setSelectedProjectTypeIndex] = useState(0);

  const ProjectTypes = [
    {
      name: "⭐My Favorites",
      type: "favorites",
    },
    {
      name: "🎨Frontend",
      type: "frontend",
    },
    {
      name: "👨‍💻Backend",
      type: "backend",
    },
    {
      name: "🧐Early Learning",
      type: "learning",
    },
    {
      name: "🚧Under Construction",
      type: "construction",
    },
  ];

  const MyFavoriteProjects = [
    {
      name: "Git Bash",
      description:
        "I worked on this project so hard for so long that everyone i ever knew died. I loved working on the project tho and to hell with them mother fuckers they never liked me anyway. Fuck 'em",
      screenshot: gitbashshot,
      stack: [iconHtml, iconCss, iconJS],
      moreInfo:
        "i also loved the project so much that i left my wife just so she wouldnt distract me",
    },
    {
      name: "Git Bash",
      description:
        "I worked on this roject so hard for so long that everyone i ever knew died. I loved working on the project tho and to hell with them mother fuckers they never liked me anyway. Fuck 'em",
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
      moreInfo:
        "I worked on this sadf sdf sda fasdf asf asdf asdf asf asdfasdf asdf asf asdf asdf afas ad af serg wh e gwrt ga gseg ewt seg sg sd seg s sr gisehglishdfli halih lawh lawhfi lahigahlhsad fkljhafha lkh alk fhalkwfh lkjasshlkaewhf ah ljkha jkh akh lkajsdhf gkljashglkjahwti luaehli hak hai uhiuah fiuWH IUAHW G IUH IAHU FH QWIUHASK JHVKQJWHT UASH KJAHSGKJAHF KJ HAK H A project so hard for so long that everyone i ever knew died. I loved working on the project tho and to hell with them mother fuckers they never liked me anyway. Fuck 'em",
    },
  ];

  const MyFrontendProjects = [
    {
      name: "Apple Bash",
      description:
        "I worked on this project so hard for so long that everyone i ever knew died. I loved working on the project tho and to hell with them mother fuckers they never liked me anyway. Fuck 'em",
      screenshot: gitbashshot,
      stack: [iconHtml, iconCss, iconJS],
      moreInfo:
        "i also loved the project so much that i left my wife just so she wouldnt distract me",
    },
    {
      name: "Git Bash",
      description:
        "I worked on this sadf sdf sda fasdf asf asdf asdf asf asdfasdf asdf asf asdf asdf afas ad af serg wh e gwrt ga gseg ewt seg sg sd seg s sr gisehglishdfli halih lawh lawhfi lahigahlhsad fkljhafha lkh alk fhalkwfh lkjasshlkaewhf ah ljkha jkh akh lkajsdhf gkljashglkjahwti luaehli hak hai uhiuah fiuWH IUAHW G IUH IAHU FH QWIUHASK JHVKQJWHT UASH KJAHSGKJAHF KJ HAK H A project so hard for so long that everyone i ever knew died. I loved working on the project tho and to hell with them mother fuckers they never liked me anyway. Fuck 'em",
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
      moreInfo: "my house is a home",
    },
  ];

  const handleClickMoreInfo = (index) => {
    if (selectedIndex !== index) {
      setselectedIndex(index);
    } else {
      setselectedIndex(-1);
    }
  };

  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectTypeSelectorWrap}>
        {ProjectTypes.map((type, index) => (
          <button
            className={`${styles.btn} ${
              selectedProjectTypeIndex === index && styles.btnSelected
            }`}
            key={index}
            onClick={() => {
              setShowProjectType(type.type);
              setSelectedProjectTypeIndex(index);
            }}
          >
            {type.name}
          </button>
        ))}
      </div>
      <ul className={styles.projectList}>
        {showProjectType === "favorites" ? (
          <FavoriteProjects
            selectedIndex={selectedIndex}
            MyFavoriteProjects={MyFavoriteProjects}
            handleClickMoreInfo={handleClickMoreInfo}
          />
        ) : showProjectType === "frontend" ? (
          <FrontendProjects
            selectedIndex={selectedIndex}
            MyFrontendProjects={MyFrontendProjects}
            handleClickMoreInfo={handleClickMoreInfo}
          />
        ) : null}
      </ul>
    </section>
  );
};

export default MyProjects;
