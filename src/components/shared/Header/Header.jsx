import styles from "./header.module.css";
import logoLight from "../../../assets/images/logo-white.png";
import logoDark from "../../../assets/images/logo-black.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerTop}>
        <ul className={styles.unOrdList}>
          <li className={styles.listItem}>EN</li>
          <li className={styles.listItem}>
            <i class="fa-solid fa-phone"></i>
          </li>
          <li className={styles.listItem}>
            <i class="fa-solid fa-envelope"></i>
          </li>
          <li className={styles.listItem}>News Letter</li>
          <li className={styles.listItem}>Resorts</li>
        </ul>
        <img className={styles.logo} src={logoDark} alt="" />
        <button className={styles.bookNowBtn}>Book Now</button>
      </div>
    </div>
  );
};

export default Header;
