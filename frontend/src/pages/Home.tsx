import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWorkouts } from "../utils/workoutSlice";
import { RootState } from "../utils/store";

//components
import WorkoutDetails from "../component/WorkoutDetails";
import WorkoutForm from "../component/Workoutform";

const Home = () => {
  interface WorkoutItem {
    _id: string;
    title: string;
    reps: number;
    load: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();
      if (response.ok) {
        dispatch(addWorkouts(json));
      }
    };
    fetchWorkouts();
  }, []);

  const workoutItems = useSelector(
    (store: RootState) => store.workout.items
  ) as WorkoutItem[];
  console.log("down workout items");
  console.log(workoutItems);

  return (
    <div className="home">
      <div className="workouts">
        {workoutItems &&
          workoutItems.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};
export default Home;
