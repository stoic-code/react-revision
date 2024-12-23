import { useState } from "react";
import { useSelector } from "react-redux";
import { addItem } from "./reducer/todo/todoSlice";
import { removeItem } from "./reducer/todo/todoSlice";
import { editItem } from "./reducer/todo/todoSlice";
import { useDispatch } from "react-redux";
import "./App.css";

function App() {
  const todos = useSelector((state) => state.mytodos.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(0);

  function addTodo(e) {
    dispatch(addItem(input));
    setInput("");

    e.preventDefault();
    //dispatch uses reducers to change the value stored in the store
  }
  function editBtn(id) {
    const editId = todos.find((data) => data.id === id);
    setInput(editId.title);
    setEditId(id);
  }
  function editTodo(e) {
    dispatch(editItem([editId, input]));
    setInput("");
    setEditId(0);
    e.preventDefault();
  }

  function deletetodo(id) {
    dispatch(removeItem(id));
  }
  return (
    <>
      <div>
        <form onSubmit={(e) => (editId === 0 ? addTodo(e) : editTodo(e))}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <button type="submit">{editId === 0 ? "Add" : "Edit"}</button>
        </form>
        <div>
          {todos.map((todo) => (
            <div key={todo.id}>
              <li key={todo.id}>
                {todo.title}
                <button onClick={() => deletetodo(todo.id)}>X</button>
                <button onClick={() => editBtn(todo.id)}>Edit</button>
              </li>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
