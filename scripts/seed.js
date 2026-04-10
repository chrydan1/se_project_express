const mongoose = require("mongoose");
const ClothingItem = require("../models/clothingitem");
const defaultClothingItems = require("../utils/defaultClothingItems");

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => ClothingItem.insertMany(defaultClothingItems))
  .then(() => mongoose.connection.close())
  .catch(() => mongoose.connection.close());