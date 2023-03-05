import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todosList: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.todosList.unshift(action.payload);
    },
    deleteTodos: (state, action) => {
      state.todosList = state.todosList.filter(
        (item) => item.id !== action.payload
      );
    },
    removeTodos: (state) => {
      state.todosList = [];
    },
  },
});

export const { addTodos, deleteTodos, removeTodos } = todoSlice.actions;
export default todoSlice.reducer;
