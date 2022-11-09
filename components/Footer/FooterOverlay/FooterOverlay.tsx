import React from "react";
import styles from "./FooterOverlay.module.css";

const FooterOverlay = () => {
  return (
    <div className={styles.footer_overlay}>
      <div className={styles.footer_overlay_black} />
      <div className={`${styles.footer_overlay_img} app__bg`} />
    </div>
  );
};

export default FooterOverlay;
