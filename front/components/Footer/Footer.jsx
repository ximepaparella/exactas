import * as React from "react";
import Image from "next/image";

import styles from "./Footer.module.scss";

const Footer = ({ ...r }) => {
  return (
    <footer className={styles["footer"]}>

          <Image
            src="https://exactas.uba.ar/recursosgeneticos/wp-content/themes/CRG/img/crg-chico.png"
            alt="Centro de recursos genéticos"
            width={62}
            height={29}
          ></Image>
     
          <a href="https://exactas.uba.ar/recursosgeneticos/exactas.uba.ar">
            <Image
              src="https://exactas.uba.ar/recursosgeneticos/wp-content/themes/CRG/img/exactas-chico.png"
              alt="Universidad de Buenos Aires"
              width={180}
              height={29}
            ></Image>
          </a>
      
    </footer>
  );
};

export default Footer;
