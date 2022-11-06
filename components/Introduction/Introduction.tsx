import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import styles from "./Introduction.module.css";

const Introduction = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideo = () => {
    setPlayVideo((prev) => !prev);

    if (playVideo) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
  };

  return (
    <div className={styles.video}>
      <video src="/meal.mp4" loop controls={false} muted ref={videoRef} />
      <div className={`${styles.video_overlay} flex__center`}>
        <div
          className={`${styles.video_overlay_circle} flex__center`}
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
