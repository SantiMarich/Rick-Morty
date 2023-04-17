import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";
import { useState } from "react";
import { useEffect } from "react";
import style from "./Card.module.css";
import { faXmark, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart as fasFaHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farFaHeart } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Card(props) {
  const { id, name, image, onClose } = props;
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);
  const { myFavorites } = useSelector((s) => s);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFavorite(id));
    } else {
      setIsFav(true);
      dispatch(addFavorite(props));
    }
  }

  useEffect(() => {
    const isFavorite = myFavorites.some((fav) => fav.id === id);
    setIsFav(isFavorite);
  }, [myFavorites, id]);

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
library.add(farFaHeart, fasFaHeart);
