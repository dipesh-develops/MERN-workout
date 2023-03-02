import express from "express";
import User from "../model/userModel";

export const login: express.RequestHandler = async (req, res) => {
  res.json("login");
};
export const signup: express.RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    res.status(200).json({ email, user });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
