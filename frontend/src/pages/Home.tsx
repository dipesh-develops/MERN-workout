import { useState, useEffect } from "react";

//components
import WorkoutDetails from "../component/WorkoutDetails";
import WorkoutForm from "../component/Workoutform";

const Home = () => {
  interface Data {
    title: string;
    _id: string;
    reps: number;
    load: number;
    createdAt: string;
  }

  const [workouts, setWorkouts] = useState<Data[] | null>(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();
      if (response.ok) {
        setWorkouts(json);
        console.log(workouts);
      }
    };
    fetchWorkouts();
  }, []);
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout: Data) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};
export default Home;
