const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");

const { PORT = 3001 } = process.env;
const app = express();

const { HTTP_STATUS, ERROR_MESSAGES } = require("./utils/errors");

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {})
  .catch(() => {});

const routes = require("./routes");

app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
  req.user = {
    _id: "5d8b8592978f8bd833ca8133",
  };
  next();
});

app.use(routes);

app.use((req, res) => {
  res.status(HTTP_STATUS.NOT_FOUND).send({ message: ERROR_MESSAGES.NOT_FOUND });
});


app.use(errorHandler);

app.listen(PORT, () => {});