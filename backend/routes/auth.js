const { JWT_SECRET } = require("../config/config");
const { userModel } = require("../models/user");
const { generateToken } = require("../utils/generateToken.js");
const { validateUser } = require("../utils/zod");
const bcrypt = require("bcrypt");

const router = require("express").Router();

router.post("/register", async (req, res) => {
  const payload = req.body;

  const isValidUser = validateUser(payload);

  if (!isValidUser) {
    return res.status(400).json({
      success: false,
      message: "invalid user data",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const newPassword = await bcrypt.hash(payload.password, salt);

  const user = await userModel.create({
    email: payload.email,
    password: newPassword,
  });

  const savedUser = await user.save();

  if (!savedUser) {
    return res.status(500).json({
      success: false,
      message: "failed to save user",
    });
  }

  const tokenData = {
    email: savedUser.email,
    id: savedUser._id,
  };

  const token = generateToken(tokenData, JWT_SECRET, "1h");

  return res.json({
    success: true,
    token: token,
    message: "user registered successfully",
  });
});

router.post("/login", async (req, res) => {
  const payload = req.body;

  const isValidUser = validateUser(payload);

  if (!isValidUser) {
    return res.status(400).json({
      success: false,
      message: "invalid user data",
    });
  }

  const user = await userModel.findOne({
    email: payload.email,
  });

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "user not found",
    });
  }

  const isValidPassword = await bcrypt.compare(payload.password, user.password);

  if (!isValidPassword) {
    return res.status(400).json({
      success: false,
      message: "invalid password",
    });
  }

  const tokenData = {
    email: user.email,
    id: user._id,
  };

  const token = generateToken(tokenData, JWT_SECRET, "1h");

  return res.json({
    success: true,
    token: token,
    message: "user logged in successfully",
  });
});

module.exports = {
    authRoute: router
}