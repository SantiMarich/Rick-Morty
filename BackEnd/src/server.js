require("dotenv").config();
const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const server = express();
server.use(express.json());

server.use("/", router);
server.use(morgan("dev"));
server.use(cors());

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
