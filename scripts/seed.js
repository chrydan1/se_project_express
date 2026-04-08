const mongoose = require("mongoose");
const ClothingItem = require("../models/clothingitem");
const defaultClothingItems = require("../utils/defaultClothingItems");

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to DB");
    return ClothingItem.insertMany(defaultClothingItems);
  })
  .then(() => {
    console.log("Default clothing items inserted");
    return mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
    mongoose.connection.close();
  });