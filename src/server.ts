// const express = require("express");
//require('dotenv').config()

import express from "express";
import { config } from "dotenv";
import workoutRouter from "../routes/workout";
import mongoose from "mongoose";

config();
//express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
// app.get("/", (req, res) => {
//   res.send({ title: "welcome to app" });
// });
app.use("/api/workouts", workoutRouter);

//connect to db
mongoose
  .connect("mongodb://localhost:27017/workout_app")
  .then(() => {
    //listen of requests
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db & listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
