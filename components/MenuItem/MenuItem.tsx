import React, { FC } from "react";
import styles from "./MenuItem.module.css";

interface MenuItemProps {
  data: {
    title: string;
    price: string;
    tags: string;
  };
}

const MenuItem: FC<MenuItemProps> = ({ data }) => {
  return (
    <div className={styles.app__menu_item}>
      <div className={styles.app__menu_item_header}>
        <div className={styles.app__menu_item_name}>
          <p className="p__cormorant" style={{ color: "#DCCA87" }}>
            {data.title}
          </p>
        </div>
        <div className={styles.app__menu_item_dash} />
        <div className={styles.app__menu_item_price}>
          <p className="p__cormorant">{data.price}</p>
        </div>
      </div>
      <div className={styles.app__menu_item_sub}>
        <p className="p__opensans" style={{ color: "#AAA" }}>
          {data.tags}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
