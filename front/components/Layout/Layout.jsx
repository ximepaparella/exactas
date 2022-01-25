import * as React from "react";
import Head from "next/head";
import Footer from "./../Footer";
import Header from "./../Header";
import Menu from "./../Menu";

import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Centro de Recursos Genéticos</title>
        <meta
          name="description"
          content="Centro de Recursos Genéticos - Universidad de Ciencias Exactas de Buenos Aires"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Archivo+Narrow:400,400i,600&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <div className={styles["wrapper"]}>
        <Header />
        <Menu />
        <main> {children} </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
