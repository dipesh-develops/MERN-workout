import express from "express";

const router = express.Router();

//get all workouts
router.get("/", (req, res) => {
  res.json({ msg: "get all workout" });
});

//post a workout
router.post("/", (req, res) => {
  res.json({ msg: "post a workout" });
});

//get a single workout
router.get("/:id", (req, res) => {
  res.json({ msg: "get a single workout" });
});

//delete a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "delete a workout" });
});

// update a workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "update a workout" });
});

export default router;
