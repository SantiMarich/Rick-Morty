import React from "react";
import style from "./About.module.css";

function About() {
  return (
    <div className={style.about}>
      <h1 className={style.titulo}>Rick & Morty</h1>
      <p className={style.parrafo}>
        ¡Bienvenidos a nuestra página web dedicada a la increíble serie animada
        "Rick & Morty"! Este sitio ha sido creado como parte del programa de la
        carrera de Desarrollador Full Stack en SoyHenry.
      </p>
      <p className={style.parrafo}>
        Aquí podrás encontrar una gran variedad de contenido relacionado con la
        serie, una sección dedicada a los personajes de la serie, así como
        información detallada sobre los mismos.
      </p>
      <p className={style.parrafo}>
        Nuestro equipo de desarrolladores ha trabajado para crear una plataforma
        interactiva y muy amigable para los usuarios, que permita una navegar
        fácil, fluida e intuitivamente. Estamos comprometidos en mantener
        actualizada la información y brindar un servicio de calidad a nuestra
        comunidad.
      </p>
      <p className={style.parrafo}>
        Para realizar este trabajo hemos utilizado diferentes herramientas,
        entre estas se encuentran las aprendidas en el BootCamp Javascript |
        React | Redux | CSS
      </p>
      <p className={style.parrafo}>
        ¡Ya eres parte de la comunidad de "Rick & Morty"!
      </p>
      <p className={style.fecha}>
        React + Redux <p className={style.fecha2}>Año 2023</p>
      </p>
      <p className={style.by}>
        Santiago Marich <p className={style.by2}>Full Stack Developer</p>
      </p>
    </div>
  );
}

export default About;
