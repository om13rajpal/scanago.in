const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET;
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

module.exports = {
  PORT,
  MONGODB_URI,
  JWT_SECRET,
  EMAIL,
  PASSWORD,
};