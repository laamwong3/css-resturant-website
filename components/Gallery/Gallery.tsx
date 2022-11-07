import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import { images } from "../../constants";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import styles from "./Gallery.module.css";

const Gallery = () => {
  return (
    <div className={`${styles.gallery} flex__center`}>
      <div className={styles.gallery_content}>
        <SubHeading title="Instagram" />
      </div>
    </div>
  );
};

export default Gallery;
