import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, getFavorites, removeFavorite } from "../../redux/actions";
import { useState } from "react";
import { useEffect } from "react";
import style from "./Card.module.css";
import { faXmark, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart as fasFaHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farFaHeart } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { useDispatch } from "react-redux";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  onClose,
  image,
  // addFavorite,
  // removeFavorite,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();

  const addFavorite = (character) => {
    axios
      .post("http//localhost:3001/rickandmorty/fav", character)
      .then((res) => console.log("OK"));
  };

  const removeFavorite = async (id) => {
    await axios.delete(`http//localhost:3001/rickandmorty/fav/${id}`);
    dispatch(getFavorites());
    alert("Eliminado con exito");
  };

  const handleFavorite = () => {
    setIsFav(!isFav);
    const isFavorite = myFavorites.find((fav) => fav.id === id);

    if (isFavorite) {
      removeFavorite(id);
    } else {
      const character = {
        id,
        name,
        status,
        species,
        gender,
        origin,
        onClose,
        image,
      };
      addFavorite(character);
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.container}>
      <div className={style.botones}>
        <Link to={`/detail/${id}`}>
          <button className={style.botonFavoritos1}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </Link>
        {isFav ? (
          <button className={style.botonFavoritos1} onClick={handleFavorite}>
            <FontAwesomeIcon className={style.icon} icon={fasFaHeart} />
          </button>
        ) : (
          <button className={style.botonFavoritos2} onClick={handleFavorite}>
            <FontAwesomeIcon className={style.icon} icon={farFaHeart} />
          </button>
        )}
        <button className={style.botonClose} onClick={() => onClose(id)}>
          <FontAwesomeIcon className={style.icon} icon={faXmark} />
        </button>
      </div>
      <img src={image} alt={name} className={style.imagenFondo} />
      <div className={style.contenido}>
        <h2 className={style.nombre}>{name}</h2>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    // addFavorite: (character) => {
    //   dispatch(addFavorite(character));
    // },
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
library.add(farFaHeart, fasFaHeart);
