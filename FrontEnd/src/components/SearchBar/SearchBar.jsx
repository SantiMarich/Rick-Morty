import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import style from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={style.search}>
      <input
        className={style.input}
        type="search"
        placeholder="Search..."
        onChange={handleChange}
      />{" "}
      <button className={style.boton} onClick={() => onSearch(id)}>
        <FontAwesomeIcon className={style.icon} icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}

export default SearchBar;
