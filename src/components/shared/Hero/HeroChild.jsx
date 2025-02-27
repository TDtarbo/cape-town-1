import styles from "./hero.module.css";

const HeroChild = (props) => {
  const { image, title, desc, button, buttonTitle = null } = props.data;

  return (
    <div
      className={styles.child}
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{desc}</p>
        {button && (
          <>
            <button className={styles.btn}>{buttonTitle}</button>
          </>
        )}
      </div>
    </div>
  );
};

export default HeroChild;
