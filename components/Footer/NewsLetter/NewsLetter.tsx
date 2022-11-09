import React from "react";
import SubHeading from "../../SubHeading/SubHeading";
import styles from "./NewsLetter.module.css";

const NewsLetter = () => {
  return (
    <div className={styles.newsletter}>
      <div className={styles.newsletter_heading}>
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And Never Miss Latest Updates</p>
      </div>
      <div className={`${styles.newsletter_input} flex__center`}>
        <input type={"email"} placeholder="Enter your email address" />
        <button className="custom__button">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
