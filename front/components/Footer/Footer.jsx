import * as React from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";

import styles from "./Footer.module.scss";

const Footer = ({ ...r }) => {
  return (
    <footer className={styles["footer"]}>
      <Grid
        container
        spacing={0}
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Grid item xs={1}>
          <Image
            src="https://exactas.uba.ar/recursosgeneticos/wp-content/themes/CRG/img/crg-chico.png"
            alt="Centro de recursos genéticos"
            width={62}
            height={29}
          ></Image>
        </Grid>
        <Grid item xs={9}></Grid>
        <Grid item xs={2}>
          <a href="https://exactas.uba.ar/recursosgeneticos/exactas.uba.ar">
            <Image
              src="https://exactas.uba.ar/recursosgeneticos/wp-content/themes/CRG/img/exactas-chico.png"
              alt="Universidad de Buenos Aires"
              width={180}
              height={29}
            ></Image>
          </a>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
