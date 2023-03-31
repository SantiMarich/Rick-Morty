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
        serie. En esta página web podrás encontrar una sección dedicada a los
        personajes de la serie, así como información detallada sobre los mismos.
      </p>
      <p className={style.parrafo}>
        Nuestro equipo de desarrolladores ha trabajado arduamente para crear una
        plataforma interactiva y amigable para los usuarios, que permita una
        navegación fácil y fluida. Además, estamos comprometidos en mantener
        actualizada la información y brindar un servicio de calidad a nuestra
        comunidad. Estamos emocionados de compartir con ustedes nuestra pasión
        por esta serie tan increíble, y esperamos que disfruten explorando y
        descubriendo todo lo que nuestra página tiene para ofrecer.
      </p>
      <p className={style.parrafo}>
        ¡Gracias por ser parte de nuestra comunidad de "Rick & Morty"!
      </p>
    </div>
  );
}

export default About;
