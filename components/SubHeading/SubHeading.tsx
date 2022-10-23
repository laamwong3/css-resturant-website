import Image from "next/image";
import React from "react";
import { images } from "../../constants";

interface SubHeadingProps {
  title: string;
}

const SubHeading = ({ title }: SubHeadingProps) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p className="p__cormorant">{title}</p>
      <Image src={images.spoon} alt="spoon" width={45} height={11} />
    </div>
  );
};

export default SubHeading;
