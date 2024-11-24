import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Slice/todoSlice"; // Import the todoSlice reducer

const store = configureStore({
  reducer: {
    todo: todoReducer, // Add the todo slice reducer to the store
  },
});

export default store;
