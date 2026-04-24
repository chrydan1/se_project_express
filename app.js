const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { errors } = require("celebrate");
const { requestLogger, errorLogger } = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

require('dotenv').config();

const { PORT = 3001 } = process.env;
const app = express();

const { HTTP_STATUS, ERROR_MESSAGES } = require("./utils/errors");
const routes = require("./routes");

mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db");

app.use(express.json());
app.use(cors());

app.use(requestLogger);

// CRASH TEST

app.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("Server will crash now");
  }, 0);
});

// CRASH TEST


app.use(routes);

app.use((req, res) => {
  res.status(HTTP_STATUS.NOT_FOUND).send({ message: ERROR_MESSAGES.NOT_FOUND });
});

app.use(errorLogger);

app.use(errors());

app.use(errorHandler);

app.listen(PORT);