import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";
import { useState } from "react";
import { useEffect } from "react";
import style from "./Card.module.css";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  onClose,
  image,
  addFavorite,
  removeFavorite,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({
        id,
        name,
        status,
        species,
        gender,
        origin,
        onClose,
        image,
        addFavorite,
        removeFavorite,
      });
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
        {isFav ? (
          <button className={style.botonFavoritos} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={style.botonFavoritos} onClick={handleFavorite}>
            🤍
          </button>
        )}
        <button className={style.botonClose} onClick={() => onClose(id)}>
          X
        </button>
      </div>
      <img src={image} alt={name} className={style.imagenFondo} />
      <div className={style.contenido}>
        <Link to={`/detail/${id}`}>
          <h2 className={style.nombre}>{name}</h2>
        </Link>
        <h2>Status: {status}</h2>
        <h2>Species: {species}</h2>
        <h2>Gender: {gender}</h2>
        <h2>Origin: {origin}</h2>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
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
