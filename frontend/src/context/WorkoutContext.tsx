import React, { createContext, useReducer, ReactNode } from "react";

type WorkoutsState = {
  workouts: any[] | null;
};

type Action =
  | { type: "SET_WORKOUTS"; payload: any[] }
  | { type: "CREATE_WORKOUT"; payload: any };

type Dispatch = (action: Action) => void;

export const WorkoutsContext = createContext<{
  state: WorkoutsState;
  dispatch: Dispatch;
}>({
  state: { workouts: null },
  dispatch: () => {},
});

export const workoutsReducer = (
  state: WorkoutsState,
  action: Action
): WorkoutsState => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...(state.workouts || [])],
      };
    default:
      return state;
  }
};

type WorkoutsProviderProps = {
  children: ReactNode;
};

export const WorkoutsContextProvider = ({
  children,
}: WorkoutsProviderProps) => {
  const [state, dispatch] = useReducer(workoutsReducer, { workouts: null });
  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
