import { useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useEffect } from "react";
import { getFavorites } from "../../redux/actions";

function Cards({ characters, onClose }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  return (
    <div className={style.containerCards}>
      {characters.map((char) => (
        <Card
          className={style.cards}
          id={char.id}
          name={char.name}
          image={char.image}
          species={char.species}
          status={char.status}
          origin={char.origin?.name}
          gender={char.gender}
          onClose={() => onClose(char.id)}
        />
      ))}
    </div>
  );
}

export default Cards;
