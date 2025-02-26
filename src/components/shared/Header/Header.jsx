import styles from "./header.module.css";
import logoLight from "../../../assets/images/logo-white.png";
import logoDark from "../../../assets/images/logo-black.png";
import { useState } from "react";

const Header = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <button onClick={handleClick} className={styles.menuBtn}>
            Menu
          </button>
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
        <div className={styles.headerBottom}>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>Offers</li>
            <li className={styles.navListItem}>Accommodations</li>
            <li className={styles.navListItem}>Dining</li>
            <li className={styles.navListItem}>Experiences</li>
            <li className={styles.navListItem}>Events</li>
            <li className={styles.navListItem}>About</li>
          </ul>
        </div>
      </div>
      {open && (
        <div className={styles.hamburgerMenu}>
          <ul className={styles.hamburgerMenuList}>
            <li className={styles.hamburgerMenuItem}>
              <div className={styles.icons}>
                <i class="fa-solid fa-phone"></i>
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div>EN</div>
            </li>
            <li className={styles.hamburgerMenuItem}>News Letter</li>
            <li className={styles.hamburgerMenuItem}>Resorts</li>
            <li className={styles.hamburgerMenuItem}>Offers</li>
            <li className={styles.hamburgerMenuItem}>Accommodations</li>
            <li className={styles.hamburgerMenuItem}>Dining</li>
            <li className={styles.hamburgerMenuItem}>Experiences</li>
            <li className={styles.hamburgerMenuItem}>Events</li>
            <li className={styles.hamburgerMenuItem}>About</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
