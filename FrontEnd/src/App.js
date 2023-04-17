import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import "./App.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";
import style from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addCharacters,
  addLocation,
  searchCharacter,
} from "../src/redux/actions";

function App() {
  const { characters } = useSelector((state) => state);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addLocation(location.pathname));
  }, [dispatch, location]);

  useEffect(() => {
    !access && navigate("/");
  }, [navigate, access]);

  function onSearch(id) {
    axios
      .get(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        dispatch(searchCharacter(data));
      })
      .catch((error) => {
        console.error(error);
        return alert("El Personaje No Existe");
      });
  }

  function onClose(id) {
    const filterCharacters = characters.filter((ch) => ch.id !== id);
    dispatch(addCharacters(filterCharacters));
  }

  function login(inputs) {
    axios
      .get(
        `http://localhost:3001/rickandmorty/login?password=${inputs.password}&email=${inputs.username}`
      )
      .then(({ data }) => {
        if (data.access) {
          setAccess(data.access);
          navigate("/home");
        } else {
          return alert("Credenciales Invalidas");
        }
      });
  }
  function logout() {
    axios
      .get(`http://localhost:3001/rickandmorty/login?password=1234&email=1234`)
      .then(({ data }) => {
        if (!data.access) {
          setAccess(data.access);
          navigate("/");
        }
      });
  }

  return (
    <div className="App" style={{ padding: "20px" }}>
      <div className={style.background}>
        <div className={style.container}></div>
        <div>
          {pathname !== "/" && (
            <Nav className="Nav" onSearch={onSearch} onLogout={logout} />
          )}
        </div>
        <Routes>
          <Route path="/" element={<Form login={login} />} />
          <Route
            path="/home"
            element={
              <Cards
                className="Cards"
                characters={characters}
                onClose={onClose}
              />
            }
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
