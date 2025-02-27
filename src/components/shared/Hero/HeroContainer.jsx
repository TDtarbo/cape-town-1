import styles from "./hero.module.css";

import HeroChild from "./HeroChild";
import image1 from "/src/assets/images/hero1.png";
import image2 from "/src/assets/images/hero3.png";
import image3 from "/src/assets/images/hero2.png";

const heroData = [
  {
    image: image1,
    title: "One&Only Cape Town, Luxury Waterfront Resort",
    desc: "Discover a captivating stage for escapism, where island-style relaxation meets a spirit for adventure at One&Only Cape Town.",
    button: false,
  },
  {
    image: image2,
    title: "Spacious rooms and suites",
    desc: "Unlock the captivating secrets of South Africa from One&Only Cape Town, our cosmopolitan hideaway with the city's most generous rooms and suites.",
    button: true,
    buttonTitle: "Reserve",
  },
  {
    image: image3,
    title: "Signature dining",
    desc: "Relish irresistible cuisine at Nobu, relax with your drink of choice in our lounge overlooking Table Mountain, or choose your favourite vintages in our unrivalled WineStudio.",
    button: true,
    buttonTitle: "Explore",
  },
];

const HeroContainer = () => {
  return (
    <div
      className={styles.parent}
      style={{ width: `${heroData.length * 100}%` }}
    >
      {heroData.map((data, index) => {
        return <HeroChild key={index} data={data} />;
      })}
    </div>
  );
};

export default HeroContainer;
