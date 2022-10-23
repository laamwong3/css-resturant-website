import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import styles from "./Navbar.module.css";
import { images } from "../../constants";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const isBigScreen = useMediaQuery({ minWidth: 2000 });
  return (
    <>
      <nav className={styles.app__navbar}>
        <div className={styles.app__navbar_logo}>
          <Image
            src={images.gericht}
            alt="Image Logo"
            width={isBigScreen ? 210 : 150}
            height={isBigScreen ? 60 : 42}
          />
        </div>
        <ul className={styles.app__navbar_links}>
          <li className="p__opensans">
            <a href="#home">home</a>
          </li>
          <li className="p__opensans">
            <a href="#about">about</a>
          </li>
          <li className="p__opensans">
            <a href="#menu">menu</a>
          </li>
          <li className="p__opensans">
            <a href="#awards">awards</a>
          </li>
          <li className="p__opensans">
            <a href="#contract">contract</a>
          </li>
        </ul>
        <div className={styles.app__navbar_login}>
          <a href="#login" className="p__opensans">
            Log In / Register
          </a>
          <div />
          <a href="/" className="p__opensans">
            Book a Table
          </a>
        </div>
        <div className={styles.app__navbar_smallscreen}>
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
          {toggleMenu && (
            <div
              className={`${styles.app__navbar_smallscreen_overlay} flex__center slide-bottom`}
            >
              <MdOutlineRestaurantMenu
                fontSize={27}
                className={styles.overlay__close}
                onClick={() => {
                  setToggleMenu(false);
                }}
              />

              <ul className={styles.app__navbar_smallscreen_links}>
                <li className="p__opensans">
                  <a href="#home">home</a>
                </li>
                <li className="p__opensans">
                  <a href="#about">about</a>
                </li>
                <li className="p__opensans">
                  <a href="#menu">menu</a>
                </li>
                <li className="p__opensans">
                  <a href="#awards">awards</a>
                </li>
                <li className="p__opensans">
                  <a href="#contract">contract</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
