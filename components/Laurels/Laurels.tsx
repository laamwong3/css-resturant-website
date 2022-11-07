import React, { FC } from "react";
import SubHeading from "../SubHeading/SubHeading";
import { images, data } from "../../constants";
import styles from "./Laurels.module.css";
import Image, { StaticImageData } from "next/image";

interface AwardCardProps {
  award: {
    imgUrl: StaticImageData;
    title: string;
    subtitle: string;
  };
}

const AwardCard: FC<AwardCardProps> = ({
  award: { imgUrl, subtitle, title },
}) => (
  <div className={styles.award_card}>
    <div className={styles.award_card_img}>
      <Image src={imgUrl} alt="awards" />
    </div>
    <div className={styles.award_card_content}>
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Awards $ recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>
        <div className={styles.info_awards}>
          {data.awards.map((award, index) => (
            <AwardCard key={index} award={award} />
          ))}
        </div>
      </div>
      <div className={styles.img}>
        <Image src={images.laurels} alt="laurels" />
      </div>
    </div>
  );
};

export default Laurels;
