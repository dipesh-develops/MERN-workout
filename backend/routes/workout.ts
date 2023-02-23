import express from "express";
import {
  createWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
} from "../controllers/workoutController";

const router = express.Router();

//get all workouts
router.get("/", getWorkouts);

//post a workout
router.post("/", createWorkout);

//get a single workout
router.get("/:id", getWorkout);

//delete a workout
router.delete("/:id", deleteWorkout);

// update a workout
router.patch("/:id", updateWorkout);

export default router;
