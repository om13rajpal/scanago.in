const express = require("express");
const { connectMongo } = require("./config/db");
const { PORT } = require("./config/config");

const app = express();

connectMongo();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Backend for Scanago is running</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
