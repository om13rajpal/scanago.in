const express = require("express");

const { connectMongo } = require("./config/db");
const { PORT } = require("./config/config");
const { printRequest } = require("./middlewares/printRequest");
const { pageNotFound } = require("./utils/notFound");
const { error } = require("./utils/error");
const { authRoute } = require("./routes/auth");

const app = express();

connectMongo();

app.use(express.json());
app.use(printRequest);
app.use("/admin", authRoute)

app.get("/", (req, res) => {
  res.send("<h1>Backend for Scanago is running</h1>");
});

app.use(pageNotFound);
app.use(error);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
