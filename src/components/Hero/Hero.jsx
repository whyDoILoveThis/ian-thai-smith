import styles from "./Hero.module.css";
import HeroImg from "../../assets/hero--img.png";

const Hero = () => {
  const Heading = "Ian Thai Smith";
  const Intro = "I love to build apps!";
  return (
    <section className={styles.hero}>
      <img className={styles.image} src={HeroImg} alt="me" />
      <div className={styles.header}>
        <h1 className={styles.heading}>{Heading}</h1>
        <p className={styles.intro}>{Intro}</p>
      </div>
    </section>
  );
};

export default Hero;
