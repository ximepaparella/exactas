const MOCK = [
  {
    title: "Inicio",
    link: "/",
  },
  {
    title: "Acerca De",
    link: "/acerca-de",
  },

  {
    title: "Catalogo",
    link: "/catalogo",
  },
  {
    title: "Servicios",
    link: "/servicios",
    subItems: [
      {
        text: "Provisión de Material",
        link: "/servicios/provision-de-material",
      },
      {
        text: "Preservación del material",
        link: "/servicios/preservacion-del-material",
      },
      { text: "Capacitaciones", link: "/servicios/capacitaciones" },
      { text: "Asesoría", link: "/servicios/asesoria" },
      { text: "Otros", link: "/servicios/otros" },
    ],
  },
  {
    title: "Industria",
    link: "/industria",
  },
  {
    title: "Normativa",
    link: "/normativa",
  },
  {
    title: "Preguntas Frecuentes",
    link: "/preguntas-frecuentes",
  },
  {
    title: "Formulario de ingreso",
    link: "/formulario-de-ingreso",
  },
  {
    title: "Contacto",
    link: "/contacto",
  },
  {
    title: "Usuario",
    subItems: [
      { text: "Iniciar sesión", link: "/usuario/iniciar-sesion" },
      { text: "Registro de usuario", link: "/usuario/registrarse" },
    ],
  },
];

export default MOCK;
