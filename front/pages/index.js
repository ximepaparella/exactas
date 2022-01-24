import Head from "next/head";
import Footer from "./../components/Footer";
import Header from "./../components/Header";
import Menu from "./../components/Menu";

export default function Home() {
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

      <div className="wrapper">
        <Header />

        <Menu />

        <main>cuerpo paginas</main>

        <Footer />
      </div>
    </div>
  );
}
