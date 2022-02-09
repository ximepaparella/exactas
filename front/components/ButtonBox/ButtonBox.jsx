import * as React from "react";
import styles from "./ButtonBox.module.scss";

const ButtonBox = ({ type, text, ...r }) => {
  return <ButtonBox className={styles["btn-box"] + { type }}>{text}</ButtonBox>;
};

export default ButtonBox;
