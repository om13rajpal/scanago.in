const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config");

function connectMongo() {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log("Connected to Mongo DB");
    })
    .catch((err) => {
      console.error("Error connecting to Mongo DB", err);
    });
}

module.exports = {
    connectMongo
}