import styles from "./NavBar.module.css";
import NavLogo from "../../assets/site-logo.png";

const NavBar = () => {
  const navLinks = [
    {
      name: "Home",
      link: "https://www.google.com",
    },
    {
      name: "All Projects",
      link: "https://www.facebook.com",
    },
    {
      name: "About Me",
      link: "https://convert.io",
    },
  ];
  return (
    <section className={styles.nav}>
      <img className={styles.navLogo} src={NavLogo} />
      <ul className={styles.navLinkList}>
        {navLinks.map((link, index) => (
          <li key={index} className={styles.navLinkListItem}>
            <a
              className={styles.navLink}
              target="_blank"
              rel="noreferrer"
              href={link.link}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NavBar;
