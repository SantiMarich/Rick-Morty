import React from "react";
import { useState } from "react";
import validation from "./validation";
import style from "./Form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import imagen from "../../assets/img/A.png";
import imagen2 from "../../assets/img/B.png";

function Form({ login }) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    validation({ ...userData, [property]: value }, errors, setErrors);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={style.contenedor}>
      <div className={style.imagenes}>
        <img src={imagen} alt="none" className={style.rick}></img>
        <p className={style.textos}>
          "El universo es básicamente un animal. Se alimenta de lo ordinario.
          Crea infinitos idiotas solo para comérselos"
        </p>
        <p className={style.textos}>Rick Sanchez</p>
        <img src={imagen2} alt="none" className={style.morty}></img>
        <p className={style.textos}>
          "El universo es muy grande para preocuparse por algo tan pequeño"
        </p>
        <p className={style.textos}>Morty Smith</p>
      </div>
      <div className={style.content}>
        <form className={style.form} onSubmit={submitHandler}>
          <h1>Rick & Morty</h1>
          <div>
            <label htmlFor="username"></label>
            <span className={style.icon}>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input
              type="text"
              name="username"
              placeholder="Email"
              value={userData.username}
              onChange={handleInputChange}
              className={style.input}
            />
            <p className={style.error}>{errors.username}</p>
          </div>
          <div>
            <label htmlFor="password"></label>
            <span className={style.icon}>
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              type="text"
              name="password"
              placeholder="Password"
              value={userData.password}
              onChange={handleInputChange}
              className={style.input}
            />
            <p className={style.error}>{errors.password}</p>
          </div>
          <button className={style.login}>Login</button>
        </form>
      </div>
      <div className={style.footer}>© 2023 - Santiago Marich</div>
    </div>
  );
}

export default Form;
