import React from "react";
import styles from "./AboutUs.module.css";
import { images } from "../../constants";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const AboutUs = () => {
  const isMobileScreen = useMediaQuery({ maxWidth: 650 });
  // const isBigScreen = useMediaQuery({ maxWidth: 2000 });

  console.log(isMobileScreen);
  return (
    <div
      className={`${styles.app__aboutus} app__bg flex__center section__padding`}
      id="about"
    >
      <div className={`${styles.app__aboutus_overlay} flex__center`}>
        <Image
          src={images.G}
          alt="G background"
          width={isMobileScreen ? "320px" : "415px"}
          height={isMobileScreen ? "320px" : "415px"}
          style={{ zIndex: 0 }}
        />
      </div>
      <div className={`${styles.app__aboutus_content} flex__center`}>
        <div className={styles.app__aboutus_content_about}>
          <h1 className="headtext__cormorant">About Us</h1>
          <Image src={images.spoon} alt="spoon" width={45} height={11} />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
        <div className={`${styles.app__aboutus_content_knife} flex__center`}>
          <Image
            src={images.knife}
            alt="knife"
            width={isMobileScreen ? "80px" : "110px"}
            height={isMobileScreen ? "640px" : "880px"}
          />
        </div>
        <div className={styles.app__aboutus_content_history}>
          <h1 className="headtext__cormorant">Our History</h1>
          <Image src={images.spoon} alt="spoon" width={45} height={11} />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
