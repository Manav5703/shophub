const express = require("express");
const userRoute = express.Router();
const AsyncHandler = require("express-async-handler");
const User = require("../models/User");
const generateToekn = require("../tokenGenerate");
const protect = require("../middleware/Auth");

userRoute.post(
  "/login",
  AsyncHandler(async (req, res) => {
    const { identifier, password } = req.body;
    // Find user by either email or username
    const user = await User.findOne({
      $or: [{ email: identifier }, { username: identifier }]
    });
    
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        isAdmin: user.isAdmin,
        token: generateToekn(user._id),
        createdAt: user.createdAt,
      });
    } else {
      res.status(401);
      throw new Error("Invalid credentials");
    }
  })
);

//register route
userRoute.post(
  "/",
  AsyncHandler(async (req, res) => {
    const { name, email, username, password } = req.body;
    
    // Check if email or username already exists
    const userExists = await User.findOne({
      $or: [{ email }, { username }]
    });
    
    if (userExists) {
      res.status(400);
      throw new Error(
        userExists.email === email 
          ? "Email already exists" 
          : "Username already exists"
      );
    }

    const user = await User.create({
      name,
      email,
      username,
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        username: user.username,
        isAdmin: user.isAdmin,
        token: generateToekn(user._id),
        createdAt: user.createdAt,
      });
    } else {
      res.status(400);
      throw new Error("Invalid User Data");
    }
  })
);

//get auth profile data
userRoute.get(
  "/profile",
  protect,
  AsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        username: user.username,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt,
      });
    } else {
      res.status(404);
      throw new Error("USER NOT FOUND");
    }
  })
);

//user profile update
userRoute.put(
  "/profile",
  protect,
  AsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.username = req.body.username || user.username;
      
      if(req.body.password) {
        user.password = req.body.password;
      }
      
      const updatedUser = await user.save();
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        username: updatedUser.username,
        isAdmin: updatedUser.isAdmin,
        createdAt: updatedUser.createdAt,
        token: generateToekn(updatedUser._id)
      });
    } else {
      res.status(404);
      throw new Error("USER NOT FOUND");
    }
  })
);

module.exports = userRoute;
