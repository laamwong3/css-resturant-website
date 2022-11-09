import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import styles from "./Navbar.module.css";
import { images } from "../../constants";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

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
            <Link href="#home" scroll={false}>
              <a>home</a>
            </Link>
          </li>
          <li className="p__opensans">
            <Link href="#about" scroll={false}>
              <a>about</a>
            </Link>
          </li>
          <li className="p__opensans">
            <Link href="#menu" scroll={false}>
              <a>menu</a>
            </Link>
          </li>
          <li className="p__opensans">
            <Link href="#awards" scroll={false}>
              <a>awards</a>
            </Link>
          </li>
          <li className="p__opensans">
            <Link href="#contract" scroll={false}>
              <a>contract</a>
            </Link>
          </li>
        </ul>
        <div className={styles.app__navbar_login}>
          <Link href="#login">
            <a className="p__opensans">Log In / Register</a>
          </Link>
          <div />
          <Link href="/">
            <a className="p__opensans">Book a Table</a>
          </Link>
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
