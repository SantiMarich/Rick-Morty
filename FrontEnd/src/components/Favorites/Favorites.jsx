import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { filterCards, removeFavorite } from "../../redux/actions";
import { orderCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import style from "./Favorites.module.css";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);

  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  const handleClose = (id) => {
    dispatch(removeFavorite(id));
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
            onClose={handleClose}
          />
        );
      })}
      <div className={style.selectorcontainer}>
        <select className={style.selector} onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select className={style.selector} onChange={handleFilter}>
          <option value="All">Todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
    </div>
  );
};

export default Favorites;
