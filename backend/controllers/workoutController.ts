import Workout from "../model/workoutModel";
import mongoose, { mongo } from "mongoose";
import express from "express";

//get all workouts
export const getWorkouts = async (req: any, res: any) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

//get single workout
export const getWorkout = async (req: any, res: any) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such workout" });
  }
  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "workout not found" });
  }
  res.status(200).json(workout);
};

//post a workout
export const createWorkout: express.RequestHandler = async (req, res) => {
  const { title, reps, load } = req.body;

  //add doc to db
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }

  res.json({ msg: "post a workout" });
};

//delete a workout
export const deleteWorkout: express.RequestHandler = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such workout" });
  }
  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(400).json({ error: "no such workout" });
  }

  res.status(200).json(workout);
};

//update a workout

export const updateWorkout: express.RequestHandler = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such workout" });
  }
  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!workout) {
    return res.status(400).json({ error: "no such workout" });
  }

  res.status(200).json(workout);
};
