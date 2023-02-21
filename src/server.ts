// const express = require("express");
//require('dotenv').config()

import express from "express";
import { config } from "dotenv";

config();
//express app
const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.get("/", (req, res) => {
  res.send({ title: "welcome to app" });
});
//listen of requests
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
