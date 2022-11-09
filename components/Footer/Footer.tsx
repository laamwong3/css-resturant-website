import React from "react";
import FooterOverlay from "./FooterOverlay/FooterOverlay";
import NewsLetter from "./NewsLetter/NewsLetter";
import styles from "./Footer.module.css";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import Image from "next/image";
import { images } from "../../constants";

const Footer = () => {
  return (
    <div className={`${styles.footer} section__padding`}>
      <FooterOverlay />
      <NewsLetter />

      <div className={styles.footer_links}>
        <div className={styles.footer_links_contact}>
          <h1 className={styles.footer_links_header}>Contact Us</h1>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 212-555-1230</p>
        </div>
        <div className={styles.footer_links_logo}>
          <Image src={images.gericht} alt={"footer logo"} />

          <p className="p__opensans">
            &quot;The best way to find yourself is to lose yourself in the
            service of others.&quot;
          </p>
          <div style={{ marginTop: "15px" }}>
            <Image src={images.spoon} alt="spoon" />
          </div>
          <div className={styles.footer_links_logo_icons}>
            <FiFacebook />
            <FiInstagram />
            <FiTwitter />
          </div>
        </div>
        <div className={styles.footer_links_work}>
          <h1 className={styles.footer_links_header}>Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 am - 12:00 am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00 am - 11:00 pm</p>
        </div>
      </div>
      <div className={styles.footer_copyright}>
        <p className="p__opensans">2022 Gericht. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
