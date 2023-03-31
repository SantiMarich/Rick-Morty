import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { filterCards } from "../../redux/actions";
import { orderCards } from "../../redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./Favorites.module.css";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);

  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(true);
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div className={style.container}>
      {favorites.map(({ id, name, status, species, gender, origin, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin}
            image={image}
          />
        );
      })}
      <select className={style.selector} onChange={handleOrder}>
        <option value="Ordenar">Ordenar</option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>
      <select className={style.selector} onChange={handleFilter}>
        <option value="Filtar">Filtrar</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
    </div>
  );
};

export default Favorites;
