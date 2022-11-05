import React from "react";
import styles from "./Menu.module.css";
import { images, data } from "../../constants";
import SubHeading from "../SubHeading/SubHeading";
import MenuItem from "../MenuItem/MenuItem";
import Image from "next/image";

const Menu = () => {
  return (
    <div
      className={`${styles.app__menu} flex__center section__padding`}
      id="menu"
    >
      <div className={styles.app__menu_title}>
        <SubHeading title="Menu That Fits You Palatte" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>
      <div className={styles.app__menu_menu}>
        <div className={`${styles.app__menu_wines} flex__center`}>
          <p className={styles.app__menu_heading}>Wine & Beer</p>
          <div className={styles.app__menu_menu_items}>
            {data.wines.map((wine, index) => (
              <MenuItem key={index} data={wine} />
            ))}
          </div>
        </div>
        <div className={styles.app__menu_menu_img}>
          <Image src={images.menu} alt="menu image" />
        </div>
        <div className={`${styles.app__menu_cocktails} flex__center`}>
          <p className={styles.app__menu_heading}>Cocktails</p>
          <div className={styles.app__menu_menu_items}>
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={index} data={cocktail} />
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <button className="custom__button" type="button">
          View More
        </button>
      </div>
    </div>
  );
};

export default Menu;
