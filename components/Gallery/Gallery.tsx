import React, { useRef } from "react";
import SubHeading from "../SubHeading/SubHeading";
import { images } from "../../constants";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import styles from "./Gallery.module.css";
import Image from "next/image";

const gallery = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: string) => {
    const { current } = scrollRef;

    if (current) {
      if (direction === "left") {
        current.scrollLeft -= 300;
      } else if (direction === "right") {
        current.scrollLeft += 300;
      }
    }
  };

  return (
    <div className={`${styles.gallery} flex__center`}>
      <div className={styles.gallery_content}>
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          doloremque aliquid blanditiis vitae ad quo porro incidunt sit quae
          hic? Necessitatibus nemo iure sequi ipsam. Ut in delectus odio nisi.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className={styles.gallery_images}>
        <div className={styles.gallery_images_container} ref={scrollRef}>
          {gallery.map((image, index) => (
            <div
              className={`${styles.gallery_images_card} flex__center`}
              key={index}
            >
              <Image src={image} alt="gallery" />
              <BsInstagram className={styles.gallery_images_card_icon} />
            </div>
          ))}
        </div>
        <div className={styles.gallery_images_arrow}>
          <BsArrowLeftShort
            className={styles.gallery_images_arrow_icon}
            onClick={() => {
              scroll("left");
            }}
          />
          <BsArrowRightShort
            className={styles.gallery_images_arrow_icon}
            onClick={() => {
              scroll("right");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
