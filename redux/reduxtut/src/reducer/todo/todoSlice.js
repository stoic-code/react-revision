import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, title: "hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, action) => {
      //state contain the current state of given state and
      //action contain the values we pass from the parameter when we call this method using dispatch
      const todo = {
        id: nanoid(),
        title: action.payload,
      };
      state.todos.push(todo);
    },

    removeItem: (state, action) => {
      state.todos = state.todos.filter((data) => data.id !== action.payload);
    },

    editItem: (state, action) => {
      const editId = action.payload[0];

      state.todos = state.todos.map((Data) =>
        Data.id === editId ? { ...Data, title: action.payload[1] } : { ...Data }
      );
    },
  },
});

export const { addItem, removeItem, editItem } = todoSlice.actions;
export default todoSlice.reducer; //store lai sabai reducers ko list chahinxa so
