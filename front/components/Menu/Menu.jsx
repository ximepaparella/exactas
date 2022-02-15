import * as React from "react";
import MOCK from "./data";

import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <nav className={styles["navigation"]}>
      {MOCK.map(({ title, link, key }) => (
        <a className={styles["item"]} key={key} href={link}>
          {title}
        </a>
      ))}
    </nav>
  );
};

export default Menu;
