import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import style from "./Detail.module.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    async function inEffect() {
      try {
        const { data } = await axios(
          `http://localhost:3001/rickandmorty/character/detail/${id}`
        );
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      } catch (error) {
        console.log("character update in useeffect in component Detail", error);
      }
    }
    inEffect();
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.container}>
      <div>
        {character.name ? (
          <div className={style.carta}>
            <img src={character.image} alt="" className={style.imagenFondo} />
            <div className={style.contenido}>
              <div className={style.header}>
                <Link to="/home">
                  <button>
                    <FontAwesomeIcon className={style.icon} icon={faXmark} />
                  </button>
                </Link>
                <h2 className={style.nombre}>{character.name}</h2>
              </div>
              <div className={style.box}>
                <div className={style.titulos}>
                  <h4>STATUS</h4>
                  <h4>SPECIES</h4>
                  <h4>GENDER</h4>
                  <h4>ORIGIN</h4>
                  <h4>LOCATION</h4>
                </div>
                <div className={style.descripcion}>
                  <h5>{character.status}</h5>
                  <h5>{character.species}</h5>
                  <h5>{character.gender}</h5>
                  <h5>{character.origin}</h5>
                  <h5>{character.location}</h5>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </div>
  );
}

export default Detail;
