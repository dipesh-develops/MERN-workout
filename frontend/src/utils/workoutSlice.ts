import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Workout {
  title: string;
  _id: string;
  reps: number;
  load: number;
  createdAt: string;
}
interface WorkoutState {
  items: Workout[];
}
const initialState: WorkoutState = {
  items: [],
};

const workoutSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    addWorkouts: (state, action: PayloadAction<Workout[]>) => {
      state.items = action.payload;
    },
    addWorkout: (state, action: PayloadAction<Workout>) => {
      state.items.push(action.payload);
    },
    deleteWorkout: (state, action: PayloadAction<Workout>) => {
      console.log("delete fire");
      state.items = state.items.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const { addWorkout, addWorkouts, deleteWorkout } = workoutSlice.actions;
export default workoutSlice.reducer;
