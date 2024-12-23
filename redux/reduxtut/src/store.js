import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer/todo/todoSlice";

export const store = configureStore({
  reducer: {
    mytodos: todoReducer,
  },
});
