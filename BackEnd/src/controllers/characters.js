const axios = require("axios");

require("dotenv").config();

const URL = process.env.API_URL;
const EMAIL = process.env.DB_EMAIL;
const PASSWORD = process.env.DB_PASSWORD;

const STATUS_OK = 200;
const STATUS_ERROR = 404;

async function getCharById(req, res) {
  const { id } = req.params;
  try {
    const response = await axios.get(`${URL}${id}`);
    const data = response.data;
    if (data) {
      const character = {
        id: data.id,
        status: data.status,
        name: data.name,
        species: data.species,
        origin: data.origin?.name,
        image: data.image,
        gender: data.gender,
        location: data.location?.name,
      };
      res.status(STATUS_OK).json(character);
    } else {
      res.status(STATUS_ERROR).json({ message: "Character Not Found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching character" });
  }
}

function getAllChar(req, res) {
  try {
    axios.get(`${URL}`).then(({ data }) => {
      if (data) {
        const characters = data.results.map((ch) => {
          const character = {
            id: ch.id,
            status: ch.status,
            name: ch.name,
            species: ch.species,
            origin: ch.origin?.name,
            image: ch.image,
            gender: ch.gender,
          };
          return character;
        });
        res.status(STATUS_OK).json(characters);
      } else {
        res.status(STATUS_ERROR).json({ message: "Character Not Found" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = {
  getCharById,
  getAllChar,
};
