import * as React from "react";
import styles from "./IntroText.module.scss";

const IntroText = ({ text, ...r }) => {
  return <div className={styles["intro-text"]}>{text}</div>;
};

export default IntroText;
