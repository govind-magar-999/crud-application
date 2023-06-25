require("dotenv").config;
const express = require("express");
const cors = require("cors");

const app = express();
const connectToDB = require("./config/db");
const userRouter = require("./routes/userRoutes");


// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

connectToDB();
app.use("/", userRouter);

module.exports = app;