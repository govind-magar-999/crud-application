require("dotenv").config;
const express = require("express");
const app = express();
const connectToDB = require("./config/db");
const userRouter = require("./routes/userRoutes");
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

connectToDB();
app.use("/", userRouter);

module.exports = app;