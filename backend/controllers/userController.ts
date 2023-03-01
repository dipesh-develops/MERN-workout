import express from "express";
import User from "../model/userModel";

export const login: express.RequestHandler = async (req, res) => {
  res.json("login");
};
export const signup: express.RequestHandler = async (req, res) => {
  res.json("register");
};
