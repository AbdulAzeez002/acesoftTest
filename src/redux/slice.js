import { createSlice } from "@reduxjs/toolkit";
import useTheme from "../hooks/useTheme";

const themeSlice = createSlice({
  name: "them",
  initialState: {
    theme: "white",
  },
  reducers: {
    toggleTheme: (state, action) => {
      state.theme = state.theme === "dark" ? "bright" : "dark";
    },
    
  },
});

// export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export const { toggleTheme } = themeSlice.actions;
export const themes = themeSlice.reducer;
