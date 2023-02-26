import { configureStore } from "@reduxjs/toolkit";
import workoutSlice from "./workoutSlice";

export interface RootState {
  workout: {
    items: object[];
  };
}

const store = configureStore({
  reducer: {
    workout: workoutSlice,
  },
});

export default store;
