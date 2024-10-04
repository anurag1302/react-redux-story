// store.js
import { createStore } from "redux";

// Initial state
const initialState = {
  tasks: [
    { id: 1, title: "Learn Redux", completed: false },
    { id: 2, title: "Build a Task Manager", completed: false },
  ],
};

// Reducer
function taskReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
}

// Create store
const store = createStore(taskReducer);

export default store;
