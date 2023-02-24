import React from "react";

interface Data {
  title: string;
  _id: string;
  reps: number;
  load: number;
  createdAt: string;
}

const WorkoutDetails = ({ workout }: { workout: Data }) => {
  return (
    <div>
      <div className="workout-details">
        <h4>{workout.title}</h4>
        <p>
          <strong>Load (kg): </strong>
          {workout.load}
        </p>
        <p>
          <strong>Reps: </strong>
          {workout.reps}
        </p>
        <p>{workout.createdAt}</p>
      </div>
    </div>
  );
};
export default WorkoutDetails;
