import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import { images } from "../../constants";
import styles from "./Laurels.module.css";

const Laurels = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className={styles.info}>
        <SubHeading title="Awards $ recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>
      </div>
      <div className={styles.img}></div>
    </div>
  );
};

export default Laurels;
