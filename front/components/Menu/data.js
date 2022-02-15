const MOCK = [
  {
    key:1,
    title: "Inicio",
    link: "/",
  },
  {
    key:2,
    title: "Acerca De",
    link: "/acerca-de",
  },

  {
    key:3,
    title: "Catalogo",
    link: "/catalogo",
  },
  {
    key:4,
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
    key:5,
    title: "Industria",
    link: "/industria",
  },
  {
    key:6,
    title: "Normativa",
    link: "/normativa",
  },
  {
    key:7,
    title: "Preguntas Frecuentes",
    link: "/preguntas-frecuentes",
  },
  {
    key:8,
    title: "Formulario de ingreso",
    link: "/formulario-de-ingreso",
  },
  {
    key:9,
    title: "Contacto",
    link: "/contacto",
  },
  {
    key:10,
    title: "Usuario",
    subItems: [
      { text: "Iniciar sesión", link: "/usuario/iniciar-sesion" },
      { text: "Registro de usuario", link: "/usuario/registrarse" },
    ],
  },
];

export default MOCK;
