import express from "express";
import User from "../model/userModel";
import jwt from "jsonwebtoken";

const createToken = (_id: string) => {
  return jwt.sign({ _id }, "secretramdomkey", { expiresIn: "3d" });
};

export const login: express.RequestHandler = async (req, res) => {
  res.json("login");
};
export const signup: express.RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    //create a token
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
