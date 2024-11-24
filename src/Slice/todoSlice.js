import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push({ id: nanoid(), task: action.payload });
    },

    deleteTask: (state, action) => {
      const id = action.payload;
      return state.filter((task) => task.id !== id);
    },
  },
});

export const { addTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
