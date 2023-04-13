import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-regular-svg-icons";
import style from "./Nav.module.css";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function Nav(props) {
  return (
    <div className={style.header}>
      <div className={style.navbar}>
        <Link to="/home" className={style.link}>
          <h3>Home</h3>
        </Link>
        <Link to="/about" className={style.link}>
          <h3>About</h3>
        </Link>
        <Link to="/favorites" className={style.link}>
          <h3>Favorites</h3>
        </Link>
        <button className={style.logout} onClick={props.onLogout}>
          <FontAwesomeIcon
            className={style.icon}
            icon={faArrowRightFromBracket}
          />
        </button>
      </div>
      <div>
        <SearchBar onSearch={props.onSearch} />
      </div>
    </div>
  );
}

export default Nav;
