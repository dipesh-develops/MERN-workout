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
    addWorkout: (state, action: PayloadAction<Workout[]>) => {
      state.items = action.payload;
    },
    showWorkout: (state) => {},
  },
});

export const { addWorkout } = workoutSlice.actions;
export default workoutSlice.reducer;
