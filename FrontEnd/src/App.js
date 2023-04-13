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

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!access) {
      navigate("/");
    }
  }, [access]);

  const username = "santiagomarich@gmail.com";
  const password = "33814489";

  function onSearch(id) {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          let exist = characters.find((char) => char.id === data.id);
          if (exist) {
            window.alert("¡Personaje Repetido!");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      if (pathname === "/") {
        navigate("/home");
      }
    } else {
      window.alert("Credenciales Incorrectas");
    }
  };

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

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
