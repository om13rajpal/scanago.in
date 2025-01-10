const jwt = require("jsonwebtoken");

function generateToken(tokenData, secretKey, expiryTime) {
  return jwt.sign(tokenData, secretKey, { expiresIn: expiryTime });
}

module.exports = {
    generateToken
}
