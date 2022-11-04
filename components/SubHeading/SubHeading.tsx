import Image from "next/image";
import React, { FC } from "react";
import { images } from "../../constants";

interface SubHeadingProps {
  title: string;
}

const SubHeading: FC<SubHeadingProps> = ({ title }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p className="p__cormorant">{title}</p>
      <Image src={images.spoon} alt="spoon" width={45} height={11} />
    </div>
  );
};

export default SubHeading;
