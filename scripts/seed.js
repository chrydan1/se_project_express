/* eslint-disable no-console */
const mongoose = require("mongoose");
const ClothingItem = require("../models/clothingitem");
const defaultClothingItems = require("../utils/defaultClothingItems");

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to DB");
    return ClothingItem.insertMany(defaultClothingItems);
  })
  .then((items) => {
    console.log(`Inserted ${items.length} items`);
    return mongoose.connection.close();
  })
  .then(() => {
    console.log("DB connection closed");
  })
  .catch((err) => {
    console.error("Seed error:", err);
    return mongoose.connection.close();
  });