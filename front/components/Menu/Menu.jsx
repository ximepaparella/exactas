import * as React from "react";
import MOCK from "./data";

import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <nav className={styles["navigation"]}>
      {MOCK.map(({ title, link, i }) => (
        <a className={styles["item"]} key={i} href={link}>
          {title}
        </a>
      ))}
    </nav>
  );
};

export default Menu;
