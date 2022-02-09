import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IntroText from "../components/IntroText";
import ButtonBox from "../components/ButtonBox";

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <IntroText
          text="El Centro de Recursos Genéticos de la FCEN - UBA (CRG) es creado
        mediante Resolución (CD) Nº 1560/18, con el objeto de asegurar la
        preservación de los recursos genéticos bajo resguardo de la FCEN-UBA,
        con un fuerte compromiso con la promoción del uso sustentable de estos
        recursos y la distribución justa y equitativa de los beneficios
        derivados de su uso. El CRG busca ofrecer espacios integradores y
        dinámicos de articulación, respondiendo a las demandas de la Institución
        y de la sociedad en su conjunto, participando con un rol activo en el
        desarrollo de innovaciones biotecnológicas."
        ></IntroText>
      </Grid>
      <Grid item xs={6}>
        Columna Texto intro
      </Grid>
      <Grid item xs={3}>
        <Typography
          className="primary font-l text-center font-light"
          variant="h1"
          gutterBottom
        >
          CATÁLOGO
        </Typography>

        <ButtonBox text="Microorganismos" type="blue" />
        <ButtonBox text="Líneas celulares" type="yellow" />
        <ButtonBox text="Plásmidos" type="pink" />
      </Grid>
    </Grid>
  );
};

export default Home;
