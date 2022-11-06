import Image from "next/image";
import React from "react";
import { images } from "../../constants";
import SubHeading from "../SubHeading/SubHeading";
import styles from "./Chef.module.css";

const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <Image src={images.chef} alt="chef" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What we believe in</h1>
        <div className={styles.content}>
          <div className={styles.content_quote}>
            <div className={styles.content_quote_img}>
              <Image src={images.quote} alt="quote" />
            </div>
            <p className="p__opensans">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
          <p className="p__opensans">
            Tempore, ex id. Dolorem recusandae assumenda totam velit, neque
            magnam sequi asperiores earum unde a tenetur mollitia. Praesentium
            aliquid quos culpa assumenda.
          </p>
        </div>
        <div className={styles.sign}>
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef and Founder</p>
          <div className={styles.sign_signature}>
            <Image src={images.sign} alt="sign" objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
