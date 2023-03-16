import { configureStore } from "@reduxjs/toolkit";
import workoutSlice from "./workoutSlice";
import userSlice from "./userSlice";

export interface RootState {
  workout: {
    items: object[];
  };
}

const store = configureStore({
  reducer: {
    workout: workoutSlice,
    user: userSlice,
  },
});

export default store;
