import React from "react";
import { useState } from "react";
import validation from "./validation";
import style from "./Form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";

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
      <div className={style.content}>
        <form className={style.form} onSubmit={submitHandler}>
          <h1>Sign In</h1>
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
    </div>
  );
}

export default Form;
