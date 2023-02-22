import express from "express";
import {
  createWorkout,
  getWorkout,
  getWorkouts,
} from "../controllers/workoutController";

const router = express.Router();

//get all workouts
router.get("/", getWorkouts);

//post a workout
router.post("/", createWorkout);

//get a single workout
router.get("/:id", getWorkout);

//delete a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "delete a workout" });
});

// update a workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "update a workout" });
});

export default router;
